!function(){"use strict";var t,e,n={install:function(t){}},r=["/","/usage"],u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"navbar"},[n("router-link",{staticClass:"site-title",attrs:{tag:"h1",to:"/"}},[t._v("Pholio")]),t._l(t.pages,function(e,r){return n("router-link",{key:r,staticClass:"navbar__item",attrs:{to:e.path}},[t._v(t._s(e.title))])})],2),n("div",{staticClass:"main"},[n("router-view")],1)])},staticRenderFns:[],computed:{currentPage:function(){var t=this.$route.path;return this.pages.filter(function(e){return e.path===t})[0]}},created:function(){var t=this.$pages.reduce(function(t,e){return t[e.path]=e,t},{});this.pages=r.map(function(e){return t[e]})}},o=Object.assign({name:"error"},u),a=(t={"./index.js":n},(e=function(e){return t[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}).keys=function(){return Object.keys(t)},e),i=function(){var t={"./default.vue":u,"./error.vue":o},e=function(e){return t[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()};return e.keys=function(){return Object.keys(t)},e}(),s=function(t){return t.__esModule&&t.default||t},c={install:function(t){a.keys().forEach(function(e){t.use(s(a(e)))}),i.keys().forEach(function(e){var n=s(i(e)),r=n.name;if(!r){var u=e.split(/\/|\\/);r=u[u.length-1].replace(/\.vue$/,"")}t.component("layout-".concat(r),n)}),t.component("layout-default")||t.component("layout-default",{render:function(t){return t("router-view")}})}};"undefined"!=typeof window&&window.createApp&&window.createApp.use(c),"undefined"!=typeof module&&(module.exports=c)}();
