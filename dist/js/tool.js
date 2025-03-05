/*! For license information please see tool.js.LICENSE.txt */
(()=>{"use strict";var t,e={262:(t,e)=>{e.A=(t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r}},351:()=>{},937:(t,e,r)=>{const n=Vue;var o={class:"nova-tw"},a={class:"mb-4 flex space-x-2"},i=["onClick"],c={class:"float-right text-xs font-light"},l={class:"mb-3 text-base font-bold tracking-wide uppercase"},u={class:"mb-3 list-disc list-inside"};function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(){f=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new Y(n||[]);return o(i,"_invoke",{value:B(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",d="suspendedYield",y="executing",g="completed",m={};function b(){}function w(){}function x(){}var k={};u(k,i,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(T([])));L&&L!==r&&n.call(L,i)&&(k=L);var O=x.prototype=b.prototype=Object.create(k);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==s(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function B(e,r,n){var o=v;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=S(c,n);if(l){if(l===m)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=p(e,r,n);if("normal"===u.type){if(o=n.done?g:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=g,n.method="throw",n.arg=u.arg)}}}function S(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,S(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(s(e)+" is not iterable")}return w.prototype=x,o(O,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:w,configurable:!0}),w.displayName=u(x,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,u(t,l,"GeneratorFunction")),t.prototype=Object.create(O),t},e.awrap=function(t){return{__await:t}},_(N.prototype),u(N.prototype,c,(function(){return this})),e.AsyncIterator=N,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new N(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(O),u(O,l,"Generator"),u(O,i,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,Y.prototype={constructor:Y,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),C(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),m}},e}function h(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}const p={data:function(){return{changelogDatas:{},availableYears:[],selectedYear:(new Date).getFullYear().toString()}},mounted:function(){this.fetch()},methods:{fetch:function(){var t,e=this;return(t=f().mark((function t(){var r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Nova.request().get("/nova-vendor/nova-changelog/nova-changelog");case 2:r=t.sent,e.changelogDatas=r.data,e.availableYears=Object.keys(e.changelogDatas).sort((function(t,e){return e-t})),e.availableYears.includes(e.selectedYear)||(e.selectedYear=e.availableYears[0]);case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){h(a,n,o,i,c,"next",t)}function c(t){h(a,n,o,i,c,"throw",t)}i(void 0)}))})()}}};const v=(0,r(262).A)(p,[["render",function(t,e,r,s,f,h){var p=(0,n.resolveComponent)("Head"),v=(0,n.resolveComponent)("Heading"),d=(0,n.resolveComponent)("Card");return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createVNode)(p,{title:"Changelog"}),(0,n.createVNode)(v,{class:"mb-6"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.__("Changelog")),1)]})),_:1}),(0,n.createElementVNode)("div",a,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(f.availableYears,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{key:t,onClick:function(e){return f.selectedYear=t},class:(0,n.normalizeClass)(["px-4 py-2 text-sm font-bold rounded transition",{"bg-blue-600 text-white":f.selectedYear===t,"bg-gray-200 text-gray-700":f.selectedYear!==t}])},(0,n.toDisplayString)(t),11,i)})),128))]),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(f.changelogDatas[f.selectedYear],(function(t){return(0,n.openBlock)(),(0,n.createBlock)(d,{class:"px-6 pt-4 pb-2 mb-4",key:t.title},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",c,(0,n.toDisplayString)(t.date),1),(0,n.createElementVNode)("h3",l,(0,n.toDisplayString)(t.title),1),((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.components,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:t.subTitle},[(0,n.createElementVNode)("p",{class:(0,n.normalizeClass)(["mb-1 font-bold",{"text-green-600":"Added"==t.subTitle,"text-yellow-600":"Changed"==t.subTitle,"text-red-600":"Fixed"==t.subTitle}])},(0,n.toDisplayString)(t.subTitle),3),(0,n.createElementVNode)("ul",u,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t.list,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:t},(0,n.toDisplayString)(t),1)})),128))])])})),128))]})),_:2},1024)})),128))])}]]);Nova.booting((function(t,e){Nova.inertia("NovaChangelog",v)}))}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={exports:{}};return e[t](a,a.exports,n),a.exports}n.m=e,t=[],n.O=(e,r,o,a)=>{if(!r){var i=1/0;for(s=0;s<t.length;s++){for(var[r,o,a]=t[s],c=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](r[l])))?r.splice(l--,1):(c=!1,a<i&&(i=a));if(c){t.splice(s--,1);var u=o();void 0!==u&&(e=u)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[r,o,a]},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={416:0,757:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,a,[i,c,l]=r,u=0;if(i.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(l)var s=l(n)}for(e&&e(r);u<i.length;u++)a=i[u],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(s)},r=self.webpackChunkgabrielesbaiz_nova_changelog=self.webpackChunkgabrielesbaiz_nova_changelog||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[757],(()=>n(937)));var o=n.O(void 0,[757],(()=>n(351)));o=n.O(o)})();