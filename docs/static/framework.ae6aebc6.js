!function(){"use strict";"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var t=function(t,e){return t(e={exports:{}},e.exports),e.exports}(function(t,e){var n;n=function(){var t,e,n={version:"0.2.0"},r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function i(t,e,n){return t<e?e:t>n?n:t}function o(t){return 100*(-1+t)}n.configure=function(t){var e,n;for(e in t)void 0!==(n=t[e])&&t.hasOwnProperty(e)&&(r[e]=n);return this},n.status=null,n.set=function(t){var e=n.isStarted();t=i(t,r.minimum,1),n.status=1===t?null:t;var u=n.render(!e),c=u.querySelector(r.barSelector),l=r.speed,f=r.easing;return u.offsetWidth,s(function(e){""===r.positionUsing&&(r.positionUsing=n.getPositioningCSS()),a(c,function(t,e,n){var i;i="translate3d"===r.positionUsing?{transform:"translate3d("+o(t)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+o(t)+"%,0)"}:{"margin-left":o(t)+"%"};return i.transition="all "+e+"ms "+n,i}(t,l,f)),1===t?(a(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){a(u,{transition:"all "+l+"ms linear",opacity:0}),setTimeout(function(){n.remove(),e()},l)},l)):setTimeout(e,l)}),this},n.isStarted=function(){return"number"==typeof n.status},n.start=function(){n.status||n.set(0);var t=function(){setTimeout(function(){n.status&&(n.trickle(),t())},r.trickleSpeed)};return r.trickle&&t(),this},n.done=function(t){return t||n.status?n.inc(.3+.5*Math.random()).set(1):this},n.inc=function(t){var e=n.status;return e?("number"!=typeof t&&(t=(1-e)*i(Math.random()*e,.1,.95)),e=i(e+t,0,.994),n.set(e)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},t=0,e=0,n.promise=function(r){return r&&"resolved"!==r.state()?(0===e&&n.start(),t++,e++,r.always(function(){0==--e?(t=0,n.done()):n.set((t-e)/t)}),this):this},n.render=function(t){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var e=document.createElement("div");e.id="nprogress",e.innerHTML=r.template;var i,s=e.querySelector(r.barSelector),u=t?"-100":o(n.status||0),l=document.querySelector(r.parent);return a(s,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),r.showSpinner||(i=e.querySelector(r.spinnerSelector))&&d(i),l!=document.body&&c(l,"nprogress-custom-parent"),l.appendChild(e),e},n.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(r.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&d(t)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var s=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),a=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()}),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var r,i=t.length,o=e.charAt(0).toUpperCase()+e.slice(1);i--;)if((r=t[i]+o)in n)return r;return e}(n))}function r(t,e,r){e=n(e),t.style[e]=r}return function(t,e){var n,i,o=arguments;if(2==o.length)for(n in e)void 0!==(i=e[n])&&e.hasOwnProperty(n)&&r(t,n,i);else r(t,o[1],o[2])}}();function u(t,e){return("string"==typeof t?t:f(t)).indexOf(" "+e+" ")>=0}function c(t,e){var n=f(t),r=n+e;u(n,e)||(t.className=r.substring(1))}function l(t,e){var n,r=f(t);u(t,e)&&(n=r.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function f(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function d(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return n},t.exports=n()});function e(t){return t("a",{attrs:{href:"https://github.com/clair-design/pholio",target:"_blank"}},[t("img",{attrs:{src:"https://img.shields.io/badge/github-view--pholio--repo-green.svg?longCache=true&style=flat"}})])}var n,r,i={install:function(t){t.component("github-badge",{render:e})}},o=["/","/usage","/about"],s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"navbar"},[n("router-link",{staticClass:"site-title",attrs:{tag:"h1",to:"/"}},[t._v("Pholio")]),t._l(t.pages,function(e,r){return n("router-link",{key:r,staticClass:"navbar__item",attrs:{to:e.path}},[t._v(t._s(e.title))])})],2),n("div",{staticClass:"main"},[n("router-view")],1)])},staticRenderFns:[],computed:{currentPage:function(){var t=this.$route.path;return this.pages.filter(function(e){return e.path===t})[0]}},created:function(){var t=this.$pages.reduce(function(t,e){return t[e.path]=e,t},{});this.pages=o.map(function(e){return t[e]})}},a=Object.assign({name:"error"},s),u=(n={"./index.js":i},(r=function(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}).keys=function(){return Object.keys(n)},r),c=function(){var t={"./default.vue":s,"./error.vue":a},e=function(e){return t[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()};return e.keys=function(){return Object.keys(t)},e}(),l=function(t){return t.__esModule&&t.default||t},f={install:function(e){e.prototype.$nprogress=t,u.keys().forEach(function(t){e.use(l(u(t)))}),c.keys().forEach(function(t){var n=l(c(t)),r=n.name;if(!r){var i=t.split(/\/|\\/);r=i[i.length-1].replace(/\.vue$/,"")}e.component("layout-".concat(r),n)}),e.component("layout-default")||e.component("layout-default",{render:function(t){return t("router-view")}})}};"undefined"!=typeof window&&window.createApp&&window.createApp.use(f),"undefined"!=typeof module&&(module.exports=f)}();
