(function(t){function e(e){for(var n,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/your-style/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"313e":function(t,e,a){},"3a34":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"name"},[a("h1",[t._v("About Us")]),a("span",[t._v("Name Lastname")]),a("h3",[t._v("Education")]),a("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit,")])]),a("div",{staticClass:"contact"},[a("h1",[t._v("Contact Us")]),a("div",{staticClass:"data"},[a("i",{staticClass:"material-icons nav__icon"},[t._v("email")]),a("span",[t._v("mail")])]),a("div",{staticClass:"data"},[a("i",{staticClass:"material-icons nav__icon"},[t._v("school")]),a("span",[t._v("university")])])])])}],i={name:"about"},o=i,r=(a("a61d"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],o={name:"app"},r=o,l=(a("034f"),a("2877")),c=Object(l["a"])(r,s,i,!1,null,null,null),u=c.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"home"}},[a("nav",{staticClass:"navbar",class:{navbaropen:t.opened},attrs:{id:"navigator"}},[a("div",{staticClass:"logo"},[t._v("LOGO")]),a("ul",{staticClass:"navbar-nav"},[t._m(0),a("li",[a("button",{on:{click:function(e){t.showModal=!0}}},[t._v("EXAMPLE")])]),t._m(1),t._m(2)]),a("span",{staticClass:"open-slide"},[t.opened?t._e():a("i",{staticClass:"material-icons nav__icon",on:{click:function(e){t.opened=!t.opened}}},[t._v("menu")])])]),t.opened?a("div",{staticClass:"side-nav",class:{sidenavopen:t.opened},attrs:{id:"side-menu"}},[a("i",{staticClass:"material-icons nav__icon",on:{click:function(e){t.opened=!t.opened}}},[t._v("close")]),a("a",{staticClass:"one",attrs:{href:"#Y"}},[t._v("YOUR STYLE")]),a("button",{on:{click:function(e){t.showModal=!0}}},[t._v("EXAMPLE")]),a("a",{attrs:{href:"#P"}},[t._v("PROJECT")]),a("a",{attrs:{href:"#B"}},[t._v("ABOUT US")])]):t._e(),t.showModal?a("div",{staticClass:"popup"},[a("div",{staticClass:"modal-vue"},[a("div",{staticClass:"overlay",on:{click:function(e){t.showModal=!1}}}),t.showModal?a("div",{staticClass:"modal"},[t._m(3),a("h3",[t._v("Example of use")]),a("button",{staticClass:"close",on:{click:function(e){t.showModal=!1}}},[t._v("CLOSE")])]):t._e()])]):t._e(),a("div",{class:{mainopen:t.opened},attrs:{id:"main"}},[a("div",{attrs:{id:"Y"}},[a("yourstyle")],1),a("div",{attrs:{id:"P"}},[a("project")],1),a("div",{attrs:{id:"A"}},[a("about")],1)])])},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#Y"}},[t._v("YOUR STYLE")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#P"}},[t._v("PROJECT")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"#B"}},[t._v("ABOUT US")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video",{attrs:{width:"400",controls:"",autoplay:""}},[n("source",{attrs:{src:a("c2fa")}})])}],m=a("dfef"),v=a("9593"),_=a("3a34"),h={name:"home",components:{yourstyle:m["default"],project:v["default"],about:_["default"]},data:function(){return{opened:!1,showModal:!0}},methods:{}},b=h,y=(a("cccb"),Object(l["a"])(b,p,f,!1,null,null,null)),C=y.exports;n["a"].use(d["a"]);var g=[{path:"/",name:"home",component:C},{path:"/yourstyle",name:"yourstyle",component:function(){return Promise.resolve().then(a.bind(null,"dfef"))}},{path:"/project",name:"project",component:function(){return Promise.resolve().then(a.bind(null,"9593"))}},{path:"/about",name:"about",component:function(){return Promise.resolve().then(a.bind(null,"3a34"))}}],E=new d["a"]({routes:g}),O=E,w=a("3cf9"),j=a.n(w);n["a"].config.productionTip=!1,new n["a"]({router:O,LazyTube:j.a,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,a){},6869:function(t,e,a){t.exports=a.p+"img/photo.883f32ab.svg"},"85ec":function(t,e,a){},9593:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"project"}},[n("div",{staticClass:"title"},[n("h1",[t._v("Title")]),n("h4",[t._v("Abstract")]),n("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Aliquet nibh praesent tristique magna sit amet purus. Duis at tellus at urna condimentum mattis pellentesque id. Eget nullam non nisi est sit amet facilisis. Amet porttitor eget dolor morbi non arcu risus. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Felis donec et odio pellentesque diam volutpat commodo sed.")])]),n("div",{staticClass:"style"},[n("div",{staticClass:"fashion"},[n("img",{attrs:{src:a("6869"),alt:""}}),n("div",{staticClass:"text"},[n("h2",[t._v("Kawaii Style")]),n("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Lobortis ")])])]),n("div",{staticClass:"fashion"},[n("img",{attrs:{src:a("6869"),alt:""}}),n("div",{staticClass:"text"},[n("h2",[t._v("........ Style")]),n("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Lobortis ")])])]),n("div",{staticClass:"fashion"},[n("img",{attrs:{src:a("6869"),alt:""}}),n("div",{staticClass:"text"},[n("h2",[t._v("......... Style")]),n("span",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac. Lobortis ")])])])])])}],i={name:"project"},o=i,r=(a("df97"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports},"99a8":function(t,e,a){"use strict";a("e503")},a61d:function(t,e,a){"use strict";a("313e")},c2fa:function(t,e,a){t.exports=a.p+"media/vdo.0d0413c1.mp4"},cccb:function(t,e,a){"use strict";a("5ced")},ce9c:function(t,e,a){},df97:function(t,e,a){"use strict";a("ce9c")},dfef:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"yourstyle"}},[a("div",{staticClass:"import"},[a("i",{staticClass:"material-icons nav__icon"},[t._v("add_photo_alternate")]),a("label",{staticClass:"input",attrs:{for:"file-upload"}},[t._v(" Submit ")]),a("input",{attrs:{id:"file-upload",type:"file"},on:{change:t.onFileChange}})]),a("div",{staticClass:"show"},[a("div",{staticClass:"img-show"}),t.url?a("img",{attrs:{src:t.url}}):t._e(),t.url?t._e():a("div",{staticClass:"space",attrs:{src:!t.url}},[t._v(">")]),t.url?a("h1",{attrs:{src:t.url}},[t._v(t._s(t.style))]):t._e()])])},s=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),{name:"yourstyle",data:function(){return{opened:!1,style:"KAWAII STYLE",url:null}},methods:{onFileChange:function(t){var e=t.target.files[0];this.url=URL.createObjectURL(e)}}}),o=i,r=(a("99a8"),a("2877")),l=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=l.exports},e503:function(t,e,a){}});
//# sourceMappingURL=app.aa39e327.js.map