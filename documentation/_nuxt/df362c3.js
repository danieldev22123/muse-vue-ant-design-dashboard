(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{1179:function(t,e,r){"use strict";r.r(e);r(106),r(640);var n={props:["anchors"],data:function(){return{url:""}},beforeMount:function(){this.url=window.location.href.split("#")[0]}},o=r(81),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page-anchor"},[r("a-anchor",{attrs:{targetOffset:80,offsetTop:85}},t._l(t.anchors,(function(title,e){return r("a-anchor-link",{key:e,attrs:{href:t.url+"#"+e,title:title}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports},1180:function(t,e,r){"use strict";r.r(e);var n={inheritAttrs:!0,props:["code","lang"],data:function(){return{}},methods:{onCopy:function(t){this.$message.success({content:"Copied!"})}}},o=r(81),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"highlight-section"},[r("a-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code.trim(),expression:"code.trim()",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btn-copy",attrs:{type:"primary",icon:"copy",size:"small"}},[t._v("Copy")]),t._v(" "),r("highlight-code",{staticStyle:{"max-height":"500px"},attrs:{lang:t.lang?t.lang:"html"}},[t._v("\n\t\t"+t._s(t.code)+"\n\t")])],1)}),[],!1,null,null,null);e.default=component.exports},1219:function(t,e,r){"use strict";r.r(e);var n={head:function(){return{title:"Avatar | Muse Dashboard Ant Design Vue @ Creative Tim",meta:[{hid:"description",name:"description",content:"Avatars can be used to represent people or objects. It supports images, ‘Icon’s, or letters."}]}},data:function(){return{anchors:{Basic:"Basic"},basic:'\n<template>\n  <div>\n    <div>\n      <a-avatar :size="64" icon="user" />\n      <a-avatar size="large" icon="user" />\n      <a-avatar icon="user" />\n      <a-avatar size="small" icon="user" />\n    </div>\n    <br />\n    <div>\n      <a-avatar shape="square" :size="64" icon="user" />\n      <a-avatar shape="square" size="large" icon="user" />\n      <a-avatar shape="square" icon="user" />\n      <a-avatar shape="square" size="small" icon="user" />\n    </div>\n  </div>\n</template>'}},methods:{}},o=r(81),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"page-row"},[r("div",{staticClass:"page-content"},[t._m(0),t._v(" "),r("a-divider"),t._v(" "),r("h2",[t._v("Examples")]),t._v(" "),r("section",{staticClass:"mb-24",attrs:{id:"Basic"}},[r("a-divider",{attrs:{orientation:"left"}},[t._v("Basic")]),t._v(" "),r("p",[t._v("\n\t\t\t\t\t\tThree sizes and two shapes are available.\n\t\t\t\t\t")]),t._v(" "),r("div",{staticClass:"showcase"},[r("div",[r("a-avatar",{attrs:{size:64,icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{size:"large",icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{size:"small",icon:"user"}})],1),t._v(" "),r("br"),t._v(" "),r("div",[r("a-avatar",{attrs:{shape:"square",size:64,icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{shape:"square",size:"large",icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{shape:"square",icon:"user"}}),t._v(" "),r("a-avatar",{attrs:{shape:"square",size:"small",icon:"user"}})],1)]),t._v(" "),r("muse-snippet",{attrs:{code:t.basic}})],1),t._v(" "),t._m(1)],1),t._v(" "),r("muse-anchor",{attrs:{anchors:t.anchors}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"mb-24"},[r("h1",[t._v("Avatar")]),t._v(" "),r("p",{staticClass:"text-dark"},[t._v("\n\t\t\t\t\t\tAvatars can be used to represent people or objects. It supports images, ‘Icon’s, or letters.\n\t\t\t\t\t")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"text-right font-semibold mb-24"},[t._v("\n\t\t\t\t\tLooking for more Ant Design Vue Avatar? Please check the\n\t\t\t\t\t"),r("a",{attrs:{target:"_blank",href:"https://antdv.com/components/avatar/"}},[t._v("official docs")]),t._v(".\n\t\t\t\t")])}],!1,null,"08ce1866",null);e.default=component.exports;installComponents(component,{MuseSnippet:r(1180).default,MuseAnchor:r(1179).default})}}]);