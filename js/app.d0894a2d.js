(function(e){function t(t){for(var r,o,l=t[0],c=t[1],s=t[2],u=0,f=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={1:0},a={1:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{2:"fb01e292",3:"8457d149",4:"52dbf43a",5:"ec6b7a07",6:"faebe58f",7:"f919db82",8:"6a367ff9",9:"762e899a",10:"a836b64a"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={2:1,3:1,4:1,5:1,6:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{2:"f4962305",3:"15896802",4:"5ab31d54",5:"9ffd9010",6:"e54ba312",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0",10:"31d6cfe0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===a))return t()}var f=document.getElementsByTagName("style");for(l=0;l<f.length;l++){s=f[l],u=s.getAttribute("data-href");if(u===r||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var f=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var d=u;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);n("e6cf"),n("5319"),n("13da"),n("9f29"),n("4848"),n("0ca9");var r=n("2b0e"),o=n("1f91"),a=n("8e37"),i=n("b05d"),l=n("9c64");r["a"].use(i["a"],{config:{brand:{primary:"#027BE3",secondary:"#26A69A",accent:"#9C27B0",dark:"#1d1d1d",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}},lang:o["a"],iconSet:a["a"],plugins:{Meta:l["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],u=r["a"].extend({name:"App"}),f=u,d=n("2877"),p=Object(d["a"])(f,c,s,!1,null,null,null),h=p.exports,b=n("4bde"),m=n("2f62"),g=Object(b["store"])((function({Vue:e}){e.use(m["a"]);const t=new m["a"].Store({modules:{},strict:!1});return t})),v=n("8c4f"),w=(n("ddb0"),[{path:"sign-in",name:"SignInPage",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"7791"))}]),y=[{path:"role-business-select",name:"RoleBusinessSelectPage",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"b321"))}],P=[{path:"sign-up",name:"SignUpPage",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"3e20"))}],O=[{path:"forgot-password",name:"ForgotPasswordPage",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"1f31"))}],j=[{path:"recover-password",name:"RecoverPasswordPage",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"dc2a"))}],C=[...w,...y,...P,...O,...j],S=[{path:"dashboard",name:"DashboardPage",component:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"d39b"))}],A=[{path:"/",component:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"d2b5")),children:[...C]},{path:"/",component:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"6f47")),children:[...S]}],E=[...A,{path:"*",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"2cb7"))}];const x=[...E];var _=x,k=Object(b["route"])((function({Vue:e}){e.use(v["a"]);const t=new v["a"]({scrollBehavior:()=>({x:0,y:0}),routes:_,mode:"history",base:"/"});return t})),B=async function(){const e="function"===typeof g?await g({Vue:r["a"]}):g,t="function"===typeof k?await k({Vue:r["a"],store:e}):k;e.$router=t;const n={router:t,store:e,render:e=>e(h),el:"#q-app"};return{app:n,store:e,router:t}},T={failed:"Action failed",success:"Action was successful"},L={"en-us":T},M=n("a925");r["a"].use(M["a"]);const N=new M["a"]({locale:"en-us",fallbackLocale:"en-us",messages:L});var V=Object(b["boot"])((({app:e})=>{e.i18n=N})),q=n("4cf5");const D="/";async function F(){const{app:e,store:t,router:n}=await B();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),l=[V,q["a"]];for(let s=0;!1===o&&s<l.length;s++)if("function"===typeof l[s])try{await l[s]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:D})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==o&&new r["a"](e)}F()}});