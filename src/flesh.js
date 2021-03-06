const { resolve } = require("path");
const { promisify } = require("util");
const map = require("lodash/map");
const flow = require("lodash/flow");
const uniq = require("lodash/uniq");
const flatten = require("lodash/flatten");
const uniqFlatten = flow(
  flatten,
  uniq
);

const { Subject } = require("rxjs");
const md2vue = require("./compiler/md2vue");
const rxwatch = require("./util/rxwatch");

const glob = promisify(require("glob"));
const globby = pattern => glob(pattern);

module.exports = function(patterns) {
  const subject = new Subject();
  const prefix = process.env.NPM_PREFIX || process.cwd();
  const mapResolve = pattern => resolve(prefix, pattern);
  patterns = map([].concat(patterns), mapResolve);

  initialize(patterns).then(results => {
    const map = new Map(results);
    subject.next({
      type: "init",
      payload: map
    });

    const watcher$ = watch(patterns, map);
    watcher$.subscribe(subject);
  });

  return subject;
};

async function initialize(patterns) {
  // initialize
  // transform all hitting files for simplicity
  const files = uniqFlatten(
    await Promise.all(
      // each returns an array
      map(patterns, globby)
    )
  );

  const compiled = await Promise.all(
    map(files, file => {
      return md2vue(file).then(result => [file, result]);
    })
  );
  return compiled;
}

function watch(patterns, map) {
  const subject = new Subject();

  rxwatch(patterns).subscribe(e => {
    const { file, event } = e;

    if (event === "change" || event === "add") {
      md2vue(file).then(result => {
        if (result) {
          const previous = map.get(file);

          if (!previous || previous.hash !== result.hash) {
            const type = !previous ? "add" : "update";
            const delta = { previous, current: result };
            map.set(file, result);
            subject.next({ type, delta, payload: map });
          }
        }
      });
    }

    if (event === "unlink") {
      const result = map.get(file);

      if (result) {
        subject.next({
          type: "delete",
          delta: {
            previous: result,
            current: null
          },
          payload: map
        });
      }

      map.delete(file);
    }
  });

  return subject;
}
