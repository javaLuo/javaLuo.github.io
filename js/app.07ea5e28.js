(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var r=n[i];0!==o[r]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({about:"about",article:"article",detail:"detail",live:"live",share:"share",tags:"tags",works:"works"}[t]||t)+"."+{about:"0a8fe07e",article:"5f61ccfc",detail:"24699d03",live:"5ef0410e",share:"07ebb3ad",tags:"9b3a32a3",works:"20edca9f"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1,article:1,detail:1,live:1,share:1,tags:1,works:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise((function(e,n){for(var a="css/"+({about:"about",article:"article",detail:"detail",live:"live",share:"share",tags:"tags",works:"works"}[t]||t)+"."+{about:"465e618e",article:"760a7c8f",detail:"3a8195f8",live:"f3589bcc",share:"87fdfe7b",tags:"4967c690",works:"e3062cf2"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===a||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete i[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",h.name="ChunkLoadError",h.type=a,h.request=i,n[1](h)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"033d":function(t,e,n){"use strict";var a=n("94b8"),i=n.n(a);i.a},"035b":function(t,e,n){t.exports=n.p+"img/email.d75b1019.png"},"0753":function(t,e,n){},"12e3":function(t,e,n){"use strict";var a=n("d40e"),i=n.n(a);i.a},2395:function(t,e,n){},3215:function(t,e,n){t.exports=n.p+"img/share_wechart.f5ec21b1.png"},3493:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"my-loading"},[n("i",{staticClass:"el-icon-box nodata-icon"}),n("div",[t._v("暂无数据")])])},i=[],o=n("cf1c"),s=n.n(o),r={data:function(){return{ImgLoading:s.a}},props:{show:{type:Boolean,default:!1}}},c=r,l=(n("033d"),n("2877")),u=Object(l["a"])(c,a,i,!1,null,"10374d60",null);e["a"]=u.exports},"386b":function(t,e,n){},"4ee8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QThENDdENUIxQjkxMTFFODkyOEREOTUyOTJEMDcxODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QThENDdENUExQjkxMTFFODkyOEREOTUyOTJEMDcxODIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjkxQTE1QzY5RkNBRTM0MkM4Q0U3N0UwMzkyQjAyRENEIiBzdFJlZjpkb2N1bWVudElEPSI5MUExNUM2OUZDQUUzNDJDOENFNzdFMDM5MkIwMkRDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkaZnYsAAATFSURBVHjazFdJTyNXEG6bZt/3fTshtgN7hNBIQKTALac555Q/kGEGDrYSYYl2nP+SKIdoHGVGigQnEAKxg1gjdlAO7KvzfU9TVqvlbuzBE1FSyf38lq7vVdVX1a7x8fFX+fn5X21vb//8+PiopaenaxSXy6UlJCRooVBIu7+/1zjH8cPDg5aYmKglJyerMedub2+VynrOcz3XUG5ubjS3263muF+EY+6ROVEK9/M5NTVVje/u7tSYdlHPzs7Ub319/Q87Ozuz7vLy8jksbujq6jooKSn59vz8XLu4uAiDeSkitlxeXir7iouLB7u7u/+BvV27u7szboD4F5PfXV9f/97S0vJrR0fH3/DQN1zMTS8FkADIzc3tbW1t/RP6B7w0fnp6+rqysvJEZ2gAnba6uvr9/v7+LsD8WFhY+Orw8PDD3t5e4Pj4OMhwSElJ+V8B8V0ML1yw+s3Jyemrrq4egq0DnJ+dnQ1cXV29hb0qvHWJ1YyMDE7+pOv6TXNz8xg29FMJCDEYwG8QcyruvyQgnk17ePsEgNDvraioeIvLHZA1MzMzvqmpKU9nZ6fKOYINA2HCZWdnaysrKwaeQ42NjQbnBNDBwYECdHR0FGTiJSUlxRWQAGAI0bi8vLzempqaIeTtoHnd5ubmKAz3tre3K3tJMhTdzCAmMH6MXU1NTWMyjwP7qQSE5AqANYIEQy89B5A5iT8B6KuqqnpjBSCeQGQoELSXFyosqJsXCpisrCxteXlZecQMxgwIufMRoAJItvc8kPvkVmP1AAVJTADhHLDK0tKSb2FhwQMvhSmf7xTK160bhNvpGYLBOIScMazrELN91JOTkw9bW1sBgArycPK+k4fMAGhQUVFR76ckHrTbs7i46Jufn/fQJjHcKnqkjdYw48vhGSPS2oKCgn4qXP4XiuovzCESAlnOKYmxR4VQaWnpoJPn4InRubk5L20xF8yIQITqxF1UjilpaWkaDvJzDtxt2L0QN/o1lTlE2iYgc2W25MAQAAw8FX70BNQrnmAI24kubQPbCm4QNjIjJzWjxvjhHVddXd2Y08slh+Chj8gj0vZ7tigIoT4ULtsciJQTDCfUj6hyzwVKDbveLrb5P9mJa/H8rq2tzYiWleCh3+Dd27KystfR7pFwIunwgoWZmFMgBa22tlYTgpGccdvliHXMw3Cr3OxfW1sbidYo9m+xgADB+AgiMzPTNrEjidtsLPNCuk55FuUN0CtgGI6NjY2NkXhXdeYEQDiy05NAYul92JshZIzJycnhlwAiJiBmISCyEQqUH9X22Z4BgFGc45FvIeYCQ9mq8l1kS7+xinw8oSBqCDGDTNfQ0DD2OWeBCX3ovL34dAi3OxLafDaXAiEdR9aKNrx4sHiFyjFoli9/51Rn7EAgVD0ojlGHkqyTDsSRtaI5jADoCSo9gy81P252OJZwYp0gCHYB9PBTKk1q3HJE3C/NG8fox/jLojkSZWIrinXKiVhyxB0PxiEoVm/e7vr6ujExMTHiVLHZxcZaJ74Ia9mJFE30WQaK5nAET6hwYsVmiMQLRFyByIcOPku1np4elTP4dB42tx0A4f3cOvGU6FqcxfxxNj097Uf3XInbT2UXy/8Iwi7OnyP/CTAAhmKCMxo5spgAAAAASUVORK5CYII="},"554a":function(t,e,n){"use strict";var a=n("878a"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("0c67"),n("450d");var a=n("299c"),i=n.n(a),o=(n("10cb"),n("f3ad")),s=n.n(o),r=(n("b84d"),n("c216")),c=n.n(r),l=(n("8f24"),n("76b9")),u=n.n(l),h=(n("672e"),n("101e")),d=n.n(h),p=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boss",attrs:{id:"app"}},[n("router-view")],1)},f=[],g=(n("7c55"),n("2877")),v={},b=Object(g["a"])(v,m,f,!1,null,null,null),w=b.exports,y=(n("d3b7"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home",attrs:{id:"home"},on:{mousewheel:t.onMouseWheel,DOMMouseScroll:t.onMouseWheel}},[t.isPc?n("audio",{staticClass:"audio",attrs:{src:"https://isluo.com/imgs/rain.mp3",loop:"",preload:"",id:"audio1"},on:{canplaythrough:t.onCanPlay}}):t._e(),n("div",{staticClass:"scroller",attrs:{id:"scroller"}},[n("ul",{staticClass:"scroll-wrapper"},[t.isPc?n("li",{staticClass:"scroll-page"},[n("Page1",{attrs:{pageNow:t.pageNow},on:{onDownClick:t.onClickScroll}})],1):t._e(),n("li",{staticClass:"scroll-page"},[n("Page2",{attrs:{pageNow:t.pageNow},on:{onDownClick:t.onClickScroll}})],1),t.isPc?n("li",{staticClass:"scroll-page foot-page"},[n("Page3",{attrs:{pageNow:t.pageNow,hi:t.hi}})],1):t._e()])])])},C=[],j=n("f3f3"),D=n("aed0"),_=n("8902"),x=n.n(_),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page1",class:{show:t.isShow}},[n("img",{staticClass:"backImg",class:{show:t.isBackShow},attrs:{src:"https://uploadbeta.com/api/pictures/random/"},on:{load:t.onBackImgLoad}}),n("div",{staticClass:"shadow all_trans1s"}),t._m(0),n("img",{staticClass:"down",attrs:{src:t.ImgDown},on:{click:t.onDownClick}})])},M=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-box"},[n("span",{staticClass:"all_trans1s title"},[t._v("ISLUO BLOG")]),n("div",{staticClass:"all_trans1s"},[t._v("hide in the city")]),n("div",{staticClass:"all_trans1s"},[t._v("no card, no phone, no ID")])])}],P=n("4ee8"),N=n.n(P),I={name:"page1",data:function(){return{isShow:!1,ImgDown:N.a,imgNum:0,isBackShow:!1}},props:["pageNow"],beforeMount:function(){this.imgNum=this.getRandom(0,29)},mounted:function(){0===this.pageNow&&(this.isShow=!0)},beforeUpdate:function(){this.isShow=0===this.pageNow},methods:{getRandom:function(t,e){return Math.round(Math.random()*(e-t)+t)},onDownClick:function(){this.$emit("onDownClick",1)},onBackImgLoad:function(){this.isBackShow=!0}}},L=I,O=(n("cf17"),Object(g["a"])(L,A,M,!1,null,"6a8a69e9",null)),S=O.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page2",class:{show:t.isShow,mobile:!t.isPc}},[n("Menus",{on:{onClickScroll:t.onClickScroll}}),n("div",{staticClass:"body-box",attrs:{id:"bodyBox"},on:{mousewheel:function(t){t.stopPropagation()},DOMMouseScroll:function(t){t.stopPropagation()}}},[n("router-view")],1)],1)},E=[],G=(n("a9e3"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menus",class:{mobile:!t.isPc}},[n("div",{staticClass:"head"},[n("div",{staticClass:"menu-btn",on:{click:t.onMenuTrigger}},[t.menuOpen?t._e():n("i",{staticClass:"el-icon-more"}),t.menuOpen?n("i",{staticClass:"el-icon-more-outline"}):t._e()]),n("span",[t._v("Luo's Blog")])]),n("div",{staticClass:"menu-body"},[n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"menu-body-box",on:{click:t.onMenuClose}},[n("transition",{attrs:{name:"leftmove"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],class:"back-img-box "+(t.isPc?"pc":"mobile"),on:{click:function(t){t.stopPropagation()}}})]),t.isPc?n("CanvasBack"):t._e(),n("transition",{attrs:{name:"leftmove"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"info-box",on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"photo-box"},[n("img",{staticClass:"photo",attrs:{src:t.ImgPic}}),t.isPc?n("div",{staticClass:"playing",class:{stop:!t.play}}):t._e(),t.isPc?n("div",{staticClass:"play-btn",on:{click:t.playOrStop}},[n("div",{staticClass:"line",class:{play:t.play}})]):t._e()]),n("div",{staticClass:"name"},[t._v("Logic")]),n("div",{staticClass:"func"},[t._v(" 躲过了黑夜的那只鸟 "),n("br"),t._v("最后也消失在漆黑里 ")]),n("ul",{staticClass:"link"},[n("li",{on:{click:function(e){return t.onLinkClick("/")},touchend:function(e){return t.onLinkClick("/")}}},[n("div",[t._v(t._s(t.allLength))]),n("div",[t._v("全部")])]),n("li",{on:{click:function(e){return t.onLinkClick("/live")},touchend:function(e){return t.onLinkClick("/live")}}},[n("div",[t._v(t._s(t.liveLength))]),n("div",[t._v("笔记")])]),n("li",{on:{click:function(e){return t.onLinkClick("/works")},touchend:function(e){return t.onLinkClick("/works")}}},[n("div",[t._v(t._s(t.workLength))]),n("div",[t._v("作品")])]),n("li",{on:{click:function(e){return t.onLinkClick("/article")},touchend:function(e){return t.onLinkClick("/article")}}},[n("div",[t._v(t._s(t.articleLength))]),n("div",[t._v("日志")])])]),n("div",{staticClass:"tips"},[n("span",{on:{click:function(e){return t.onLinkClick("/about")},touchend:function(e){return t.onLinkClick("/about")}}},[t._v("about")]),n("div",{staticClass:"line"}),n("span",{on:{click:function(e){return t.onLinkClick("/tags")},touchend:function(e){return t.onLinkClick("/tags")}}},[t._v("tags")]),n("div",{staticClass:"line"}),n("span",{on:{click:function(e){return t.onLinkClick("/share")},touchend:function(e){return t.onLinkClick("/share")}}},[t._v("share")])])])]),t.isPc?n("img",{staticClass:"down",attrs:{src:t.ImgDown},on:{click:t.onDownClick}}):t._e()],1)])],1)])}),V=[],B=(n("4de4"),n("7a88")),H=n.n(B),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("canvas",{staticClass:"canvas-back"})},Q=[],R=(n("99af"),n("2f62")),U={name:"Header",data:function(){return{ctx:null,width:0,height:0,theRain:[]}},props:{},mounted:function(){this.ctx=this.$el.getContext("2d"),this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.$el.width=this.width,this.$el.height=this.height,this.ctx.fillStyle="transparent",this.ctx.lineCap="round",window.addEventListener("resize",this.resize,!1),this.init(250),this.animate()},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing}})),methods:{init:function(t){for(var e=0;e<t;e++){var n=null,a=Math.round(this.random(60,150));n=e<t/4?{h:60,w:1,s:this.random(10,15),color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 0.4)")}:e<t/3?{h:90,w:1,s:this.random(15,20),color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 0.5)")}:e<t/2?{h:120,w:1,s:this.random(20,25),color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 0.6)")}:e<t/1.5?{h:150,w:1,s:this.random(25,30),color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 0.7)")}:{h:200,w:1,s:this.random(30,35),color:"rgba(".concat(a,", ").concat(a,", ").concat(a,", 0.8)")};var i={x:this.random(-10,this.width+10),y:this.random(-1e3,this.height+1e3),deg:this.random(-2,5),h:n.h,w:n.w,color:n.color,s:n.s};this.theRain.push(i)}},random:function(t,e){return Math.random()*(e-t)+t},resize:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.$el.width=this.width,this.$el.height=this.height},drow:function(){var t=this.ctx,e=this.play?1:20;t.clearRect(0,0,this.width,this.height);for(var n=0;n<this.theRain.length;n++){var a=this.theRain[n],i=Math.PI/180*a.deg;Math.abs(a.y)>this.height?(a.x=this.random(-10,this.width+10),a.y=-a.h):(a.x=Math.sin(i)*a.s/e+a.x,a.y=Math.cos(i)*a.s/e+a.y),t.strokeStyle=a.color,t.lineWidth=a.w,t.beginPath(),t.moveTo(a.x,a.y),t.lineTo(Math.sin(i)*a.h+a.x,Math.cos(i)*a.h+a.y),t.closePath(),t.stroke()}},animate:function(){this.drow(),requestAnimationFrame(this.animate)}},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}},Y=U,F=(n("12e3"),Object(g["a"])(Y,z,Q,!1,null,"12315a51",null)),W=F.exports,J={name:"Menus",data:function(){return{ImgPic:H.a,isPc:Object(D["a"])(),menuOpen:Object(D["a"])(),ImgDown:N.a}},methods:{playOrStop:function(){this.$store.dispatch({type:"page/setPlaying",params:{playing:!this.play}})},onLinkClick:function(t){this.$router.push(t),this.isPc||(this.menuOpen=!1)},onMenuTrigger:function(){this.menuOpen=!this.menuOpen},onMenuClose:function(){this.isPc||(this.menuOpen=!1)},onDownClick:function(){this.$emit("onClickScroll")}},components:{CanvasBack:W},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing},liveLength:function(t){return t.app.blogConfig.filter((function(t){return 1===t.type})).length},workLength:function(t){return t.app.blogConfig.filter((function(t){return 2===t.type})).length},articleLength:function(t){return t.app.blogConfig.filter((function(t){return 3===t.type})).length},allLength:function(t){return t.app.blogConfig.length}}))},Z=J,q=(n("9e28"),Object(g["a"])(Z,G,V,!1,null,"9b00d89e",null)),X=q.exports,K={name:"page2",data:function(){return{isPc:Object(D["a"])(),isShow:!1,scrollDom:null}},props:{pageNow:Number},components:{Menus:X},methods:{onClickScroll:function(){this.$emit("onDownClick",2)}},mounted:function(){1===this.pageNow&&(this.isShow=!0)},beforeUpdate:function(){this.isShow=1===this.pageNow}},$=K,tt=(n("8a79"),Object(g["a"])($,T,E,!1,null,"f28b72c8",null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page3"},[n("ul",{staticClass:"friends-link"},[n("li",{staticClass:"title"},[t._v("联系方式")]),n("li",{staticClass:"line"}),n("li",{staticClass:"find"},[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"QQ 376693576",placement:"top"}},[n("img",{attrs:{src:t.ImgQQ}})]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("img",{staticClass:"img-wechart",attrs:{src:t.ImgWeChart}})]),n("img",{attrs:{src:t.ImgWechart}})]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Twitter",placement:"top"}},[n("a",{attrs:{href:"https://twitter.com/Logic_yes",target:"_blank",rel:"me noopener"}},[n("img",{attrs:{src:t.ImgTwitter}})])]),n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"376693576@qq.com",placement:"top"}},[n("a",{attrs:{href:"mailto:376693576@qq.com",target:"_blank",rel:"me noopener"}},[n("img",{attrs:{src:t.ImgEmail}})])])],1),n("li",{staticClass:"title",staticStyle:{"margin-top":"16px"}},[t._v("去往其他异次元世界")]),n("li",{staticClass:"line"}),t._m(0),t._m(1)]),n("div",{staticClass:"hi-one"},[n("div",[n("div",[t._v(t._s(t.hi.hitokoto))]),n("div",{staticClass:"from"},[t._v(t._s(t.hi.from))])])]),n("div",{staticClass:"info-box"},[n("div",{staticClass:"open-icons"},[n("a",{attrs:{href:"https://cn.vuejs.org",target:"_blank",rel:"nofollow me noopener noreferrer",title:"vue.js"}},[n("img",{attrs:{src:t.LogoVue}})]),n("a",{attrs:{href:"https://developer.mozilla.org/",target:"_blank",rel:"nofollow me noopener noreferrer",title:"mozilla.org"}},[n("img",{attrs:{src:t.LogoMdn}})]),n("a",{attrs:{href:"http://www.w3school.com.cn/",target:"_blank",rel:"nofollow me noopener noreferrer",title:"w3school"}},[n("img",{attrs:{src:t.LogoHTML5}})]),n("a",{attrs:{href:"https://github.com/javaLuo",target:"_blank",rel:"nofollow me noopener noreferrer",title:"github"}},[n("img",{attrs:{src:t.LogoGitHub}})])]),n("div",[t._v("vue-cli 4.x 全家桶框架支持")]),n("div",[t._v("整站都放在了GitHub, V3API获取文章和评论")]),n("div",[t._v("感谢开源世界的恩惠")])]),t._m(2)])},at=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"friend"},[n("a",{attrs:{href:"https://www.microanswer.cn",target:"_blank",rel:"noopener"}},[t._v("Microanswer 首页")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"friend"},[n("a",{attrs:{href:"https://blog.itnote.me",target:"_blank",rel:"noopener"}},[t._v("Mt.r 先生")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"last"},[t._v(" © 2014–2020 "),n("a",{attrs:{href:"https://isluo.com",target:"_blank",rel:"nofollow me noopener noreferrer"}},[t._v("isluo.com")]),t._v(" Ltd. ")])}],it=n("e669"),ot=n.n(it),st=n("f633"),rt=n.n(st),ct=n("9efa"),lt=n.n(ct),ut=n("a365"),ht=n.n(ut),dt=n("e281"),pt=n.n(dt),mt=n("8c9c"),ft=n.n(mt),gt=n("3215"),vt=n.n(gt),bt=n("e0d3"),wt=n.n(bt),yt=n("035b"),kt=n.n(yt),Ct=n("a43f"),jt=n.n(Ct),Dt={name:"page3",data:function(){return{LogoVue:ot.a,LogoGitHub:rt.a,LogoMdn:lt.a,LogoHTML5:ht.a,ImgPic:pt.a,ImgQQ:ft.a,ImgEmail:kt.a,ImgWechart:vt.a,ImgTwitter:wt.a,ImgWeChart:jt.a}},props:{hi:{type:Object}}},_t=Dt,xt=(n("554a"),Object(g["a"])(_t,nt,at,!1,null,"0a66670f",null)),At=xt.exports,Mt={name:"home",data:function(){return{isPc:Object(D["a"])(),scrollDom:null,scrolling:!1,pageNow:0,mp3Dom:{canplay:!1,a:null}}},components:{Page1:S,Page2:et,Page3:At},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing},hi:function(t){return t.app.hi}})),mounted:function(){this.isPc&&(this.initScroll(),this.mp3Dom.a=document.getElementById("audio1"),this.mp3Dom.a.volume=0)},beforeDestroy:function(){this.scrollDom&&this.scrollDom.destroy()},methods:{initScroll:function(){var t=this;this.scrollDom=new x.a("#scroller",{snap:!0,bounceEasing:{style:"cubic-bezier(1,0.1,0.1,1)"},bounceTime:1e3,preventDefault:!0,disablePointer:!0}),this.scrollDom.on("scrollEnd",(function(){t.scrolling=!1})),document.body.classList.add("page0")},onCanPlay:function(){var t=this;this.mp3Dom.canplay=!0,this.mp3Dom.a.ontimeupdate=function(){t.mp3Dom.a.duration-3<t.mp3Dom.a.currentTime&&(t.mp3Dom.a.currentTime=2)}},onMouseWheel:function(t){var e=t.wheelDeltaY||-t.detail||t.wheelDelta;this.scrolling||(e<0&&this.pageNow<2?(this.scrolling=!0,this.pageNow++,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3)):e>0&&this.pageNow>0&&(this.scrolling=!0,this.pageNow--,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3)))},onClickScroll:function(t){this.pageNow!==t&&(this.scrolling=!0,this.pageNow=t,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3))},onMp3Play:function(){this.mp3Dom.canplay&&(this.mp3Dom.a.play(),this.volumeUp())},onMp3Pause:function(){this.volumeDown()},volumeUp:function(){var t=this;clearTimeout(this.volumeTimer),this.mp3Dom.a.volume+.1<=1&&(this.mp3Dom.a.volume+=.1,this.volumeTimer=setTimeout((function(){t.volumeUp()}),200))},volumeDown:function(){var t=this;clearTimeout(this.volumeTimer),this.mp3Dom.a.volume-.1>=0?(this.mp3Dom.a.volume-=.1,this.volumeTimer=setTimeout((function(){t.volumeDown()}),200)):this.mp3Dom.a.pause()}},watch:{pageNow:function(t){0!==t&&this.play?(this.onMp3Play(),document.body.classList.remove("page0"),2===t&&D["a"]&&this.$store.dispatch({type:"app/getHi"})):(this.onMp3Pause(),document.body.classList.add("page0"))},play:function(t){t?this.onMp3Play():this.onMp3Pause()}}},Pt=Mt,Nt=(n("dab8"),Object(g["a"])(Pt,k,C,!1,null,"aa5234a2",null)),It=Nt.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"live-box"},[n("div",{staticClass:"bread"},[n("i",{staticClass:"el-icon-location"}),n("el-breadcrumb",[n("el-breadcrumbItem",[t._v("博客列表")])],1),n("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索","prefix-icon":"el-icon-search"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),n("transition-group",{staticClass:"live",attrs:{name:"list",tag:"ul"}},t._l(t.pageNowData,(function(t){return n("ArtiveList",{key:t.name,attrs:{thisData:t}})})),1),n("MyLoading",{attrs:{show:!t.pageNowData.length}}),n("div",{staticClass:"pagin"},[n("el-pagination",{attrs:{total:t.total,"current-page":t.pageNow,pageSize:t.pageSize,layout:"total, prev, pager, next"},on:{"current-change":t.onPageChange}})],1)],1)},Ot=[],St=(n("caad"),n("b0c0"),n("2532"),n("9c91")),Tt=n("3493"),Et={name:"name-all",data:function(){return{pageNow:1,pageSize:10,total:0,pageNowData:[],searchValue:""}},components:{ArtiveList:St["a"],MyLoading:Tt["a"]},computed:Object(j["a"])(Object(j["a"])({},Object(R["b"])({blogConfig:function(t){return t.app.blogConfig}})),{},{searchData:function(){var t=this,e=this.blogConfig;return this.searchValue&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}))),e},listData:function(){var t=this;return Object(D["b"])(this.searchData).filter((function(e,n){return n>=(t.pageNow-1)*t.pageSize&&n<t.pageNow*t.pageSize}))}}),watch:{searchValue:function(t){this.pageNow=1},searchData:{handler:function(t){this.total=t.length},immediate:!0},listData:{handler:function(t){var e=this;this.pageNowData=[];var n=document.getElementById("bodyBox");n&&(n.scrollTop=0);for(var a=t,i=function(t){setTimeout((function(){return e.pageNowData.push(a[t])}),80*t)},o=0;a[o];o++)i(o)},immediate:!0}},methods:{onPageChange:function(t){this.pageNow=t}}},Gt=Et,Vt=(n("d7bb"),Object(g["a"])(Gt,Lt,Ot,!1,null,"8b55a78a",null)),Bt=Vt.exports;p["default"].use(y["a"]);var Ht=new y["a"]({routes:[{path:"/",name:"home",component:It,children:[{path:"all",name:"all",alias:"/",component:Bt},{path:"live",name:"live",component:function(){return n.e("live").then(n.bind(null,"324a"))}},{path:"works",name:"works",component:function(){return n.e("works").then(n.bind(null,"f8ce"))}},{path:"article",name:"article",component:function(){return n.e("article").then(n.bind(null,"227e"))}},{path:"tags",name:"class",component:function(){return n.e("tags").then(n.bind(null,"b163"))}},{path:"detail/:id",name:"detail",component:function(){return n.e("detail").then(n.bind(null,"89257"))}},{path:"about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"share",name:"share",component:function(){return n.e("share").then(n.bind(null,"fbd8"))}}]}]}),zt=(n("0fb7"),n("f529")),Qt=n.n(zt),Rt=(n("96cf"),n("c964")),Ut=n("bc3a"),Yt=n.n(Ut),Ft=n("f121"),Wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={url:"".concat(t).concat(i?"":"?client_id=".concat(Ft["b"],"&client_secret=").concat(Ft["c"])),method:n,data:e,headers:{"Content-Type":"text/plain; charset=utf-8"},responseType:"json"};return a&&delete o.responseType,Yt()(o)},Jt=Wt,Zt={namespaced:!0,state:{blogConfig:Ft["a"],hi:{hitokoto:"Loading..."}},actions:{getHi:function(t){return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n="https://international.v1.hitokoto.cn?c=d&time=".concat(Date.now()),e.next=4,Jt(n,null,"GET",!1,!0);case 4:return a=e.sent,200!==a.status&&304!==a.status||t.commit({type:"setHi",data:a.data}),e.abrupt("return",a);case 9:e.prev=9,e.t0=e["catch"](0),Qt.a.info("一言获取失败，需要翻墙");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mutations:{setHi:function(t,e){t.hi=e.data}}},qt=Zt,Xt={namespaced:!0,state:{playing:!0},actions:{setPlaying:function(t,e){return Object(Rt["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.commit({type:"setPlaying",playing:e.params.playing});case 3:n.next=7;break;case 5:n.prev=5,n.t0=n["catch"](0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})))()}},mutations:{setPlaying:function(t,e){t.playing=e.playing}}},Kt=Xt;p["default"].use(R["a"]);var $t=new R["a"].Store({modules:{app:qt,page:Kt}});p["default"].use(d.a),p["default"].use(u.a),p["default"].use(c.a),p["default"].use(s.a),p["default"].use(i.a),p["default"].config.productionTip=!1,new p["default"]({router:Ht,store:$t,render:function(t){return t(w)}}).$mount("#app")},5731:function(t,e,n){},"5f15":function(t,e,n){"use strict";var a=n("7873"),i=n.n(a);i.a},"687b":function(t,e,n){},7873:function(t,e,n){},"7a88":function(t,e,n){t.exports=n.p+"img/pic.9598862d.jpg"},"7c55":function(t,e,n){"use strict";var a=n("2395"),i=n.n(a);i.a},"878a":function(t,e,n){},"8a79":function(t,e,n){"use strict";var a=n("687b"),i=n.n(a);i.a},"8c9c":function(t,e,n){t.exports=n.p+"img/share_qq.7a1bed8a.png"},"94b8":function(t,e,n){},"9c91":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"artive-list"},[n("div",{staticClass:"title",on:{click:t.onDetailChose}},[t._v(t._s(t.thisData.name))]),n("div",{staticClass:"time"},[t._v(t._s(t.thisData.date))]),t.thisData.pic?n("div",{staticClass:"pic"},[n("img",{attrs:{src:t.thisData.pic}})]):t._e(),n("div",{staticClass:"info"},[n("span",{domProps:{innerHTML:t._s(t.thisData.info)}})]),n("div",{staticClass:"tags"},t._l(t.thisData.tags,(function(e,a){return n("div",{key:a},[n("i",{staticClass:"el-icon-price-tag"}),t._v(" "+t._s(e)+" ")])})),0),n("div",{staticClass:"read-more",on:{click:t.onDetailChose}},[t._v("阅读全文")])])},i=[],o={name:"ArtiveList",data:function(){return{}},props:{thisData:Object},methods:{onDetailChose:function(){this.$router.push("/detail/".concat(this.thisData.id))}},watch:{}},s=o,r=(n("5f15"),n("2877")),c=Object(r["a"])(s,a,i,!1,null,"2f2b9a88",null);e["a"]=c.exports},"9e28":function(t,e,n){"use strict";var a=n("386b"),i=n.n(a);i.a},"9efa":function(t,e,n){t.exports=n.p+"img/logo-mdn.5daec185.png"},"9faf":function(t,e,n){},a365:function(t,e,n){t.exports=n.p+"img/logo-html5.ac790518.png"},a43f:function(t,e,n){t.exports=n.p+"img/weima2.734fea31.png"},aed0:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return s}));n("7db0"),n("caad"),n("a15b"),n("a9e3"),n("ac1f"),n("2532"),n("1276");var a=n("2ef0"),i=n.n(a),o=function(){for(var t=navigator.userAgent.toLowerCase(),e=["android","iphone","symbianOS","windows phone","ipad","ipod"],n=!0,a=0;a<e.length;a++)if(t.includes(e[a])){n=!1;break}return n},s=function(t){var e=i.a.cloneDeep(t);return e.sort((function(t,e){return Number(e.date.split("/").join("")-Number(t.date.split("/").join("")))})),e}},cf17:function(t,e,n){"use strict";var a=n("5731"),i=n.n(a);i.a},cf1c:function(t,e,n){t.exports=n.p+"img/loading.14a0936b.gif"},d40e:function(t,e,n){},d7bb:function(t,e,n){"use strict";var a=n("9faf"),i=n.n(a);i.a},dab8:function(t,e,n){"use strict";var a=n("0753"),i=n.n(a);i.a},e0d3:function(t,e,n){t.exports=n.p+"img/share_twitter.7841adaf.png"},e281:function(t,e,n){t.exports=n.p+"img/myhead.49bad8a6.png"},e669:function(t,e,n){t.exports=n.p+"img/logo-vue.56141cac.png"},f121:function(t,e,n){"use strict";n.d(e,"e",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return c}));var a="javaLuo",i="javaimluo",o="f598c816b3b65783625b",s="702577a65885617a20f9b39e07de260f7987aef7",r=[{id:"gd",name:"Ghost Blade 鬼刀",info:"Ghost Blade 鬼刀 主题宣传站。素材均来自wlop大佬",type:2,pic:"https://isluo.com/files/work/gd1.jpg",date:"2018/03/10",tags:["作品","canvas"]},{id:"abouttime",name:"这一次，彻底搞清楚Date对象在Chrome和Safari中的坑",info:"什么GMT、UTC、夏令时，受够了",type:1,date:"2019/02/22",tags:["js"]},{id:"along",name:"独行者",info:"在C世界的边缘地带，只有一扇窗户，其余三面被书籍围住",type:3,date:"2012/10/17",tags:["日志"]},{id:"algorithm",name:"基础算法",info:"基础算法记录 上学时写得都很溜，现在全忘了",type:1,date:"2018/06/02",tags:["js"]},{id:"b_night_snow",name:"夜雪",info:"青春岁月留下的痕迹",type:3,date:"2008/04/04",tags:["日志","故事"]},{id:"brcity",name:"边城",info:"他正趴在冷冰冰的生满锈迹的钢板上，身子被雨水淋了个遍，寒意席卷了每一寸皮肤…",type:3,date:"2011/09/19",tags:["日志","故事"]},{id:"datafeed",name:"TradingView DataFeed笔记",info:"图表学习记录",type:1,date:"2018/09/27",tags:["js"]},{id:"datediff",name:"真正准确的“两个日期相差多少天”函数",info:"第一天最后1秒到第二天第1秒，也是过了一天!",type:1,date:"2018/04/02",tags:["js"]},{id:"dll",name:"webpack.DllPlugin和webpack.DllReferencePlugin静态资源预编译插件",info:"现在因为有HMR局部热更新，所以dllPlugin这两个插件用得少了，不过还是记录一下配置方法，可能以后会再次使用",type:1,date:"2018/04/02",tags:["js"]},{id:"download",name:"纯前端弹出下载框的方式下载img或pdf等资源",info:"a标签download属性，弹出下载框的方式下载内容，而不是让浏览器解析",type:1,date:"2019/05/07",tags:["js"]},{id:"earth",name:"Earth 3D TNC - 大自然保护协会",info:"学习Three.js时做的东西，又很长时间没有去学习了",pic:"https://isluo.com/files/work/earth.jpg",type:2,date:"2018/03/14",tags:["js","three.js"]},{id:"facebook",name:"FaceBook Share 功能 JS SDK 自定义图片和文字的方法",info:"acebook的分享设置及注意的地方",type:1,date:"2018/07/02",tags:["js"]},{id:"featuresets",name:"TradingView Featuresets部分官方文档补全",info:"图表笔记",type:1,date:"2018/09/29",tags:["js"]},{id:"flex",name:"Flex 全属性笔记",info:"flex各属性",type:1,date:"2018/03/28",tags:["css"]},{id:"flip",name:"FLIP 反转动画原理及实现",info:"First-Last-Invert-Play动画，太骚了，大佬的气息如泉涌般袭来",type:1,date:"2019/02/14",tags:["js","css"]},{id:"glsl",name:"GLSL 基础",info:"需要一颗虔诚的心来专研这一切，真希望自己能静下心来，有连续的时间来学习这些东西",type:1,date:"2019/11/22",tags:["js","webgl"]},{id:"graphql",name:"GraphQL Express 基础使用",info:"最近学习了一下GraphQL，我觉得这是一种更合理的前后端交互方式",type:1,date:"2018/12/08",tags:["js"]},{id:"grid",name:"Grid布局 所有属性笔记",info:"grid布局相关属性笔记，方便查阅",type:1,date:"2018/06/07",tags:["css"]},{id:"hooks",name:"React16.8所有内置Hooks功能一览",info:"笔记，需要在实际应用中才能掌握",type:1,date:"2019/02/10",tags:["js","React"]},{id:"isluo",name:"个人网站 主站",info:"多年以前做的个人网站，那时还用着jquery",pic:"https://isluo.com/imgs/blog-isluo.jpg",type:2,date:"2018/04/27",tags:["作品"]},{id:"markdown",name:"MarkDown 语法教程",info:"从别处搬运的，记录于此，方便自己查阅",type:1,date:"2018/04/27",tags:["js","markdown"]},{id:"offset",name:"各种取高度位置关系及相关API",info:"常用的DOM对象各种高度和位置设置的API",type:1,date:"2018/07/17",tags:["js"]},{id:"orbitcontrols",name:"OrbitControls.js 镜头控制器所有属性",info:"常用的DOM对象各种高度和位置设置的API",type:1,date:"2018/09/24",tags:["js","three.js"]},{id:"paomo",name:"泡沫 - 邓紫棋 2014早期作品",info:"很久以前做的了",pic:"https://isluo.com/files/work/pm1.jpg",type:2,date:"2018/03/26",tags:["作品"]},{id:"picture",name:"HTML5 响应式图片picture标签使用方法",info:"sizes中是基础规格值，与dpi相乘得到最终规格值，拿着最终规格值去srcset里找符合的图片资源加载",type:1,date:"2019/08/19",tags:["html"]},{id:"pit",name:"我所遇到的各种匪夷所思的坑们",info:"各种匪夷所思的坑，持续记录",type:1,date:"2020/01/10",tags:["js","html"]},{id:"pre",name:"所有预加载标签一览",info:"目前有5个：preload、prefetch、preconnect、dns-prefetch、prerender",type:1,date:"2019/10/11",tags:["html"]},{id:"qi",name:"冷门的奇淫技巧",info:"补充奇怪的知识",type:1,date:"2018/07/11",tags:["html","css","js"]},{id:"reg",name:"Regexp：正向断言和反向断言",info:"易混淆的，易忘的，常用的正则知识",type:1,date:"2019/02/20",tags:["js"]},{id:"rose",name:"仿樱花漫天飞舞效果 3D",info:"一个使用Three.js制作的网站，Three.js练手。曾见识过大佬的DEMO",pic:"https://isluo.com/files/work/rose1.jpg",type:2,date:"2018/03/26",tags:["three.js"]},{id:"sailor",name:"水手",info:"他曾时常梦见船长的女儿和那晚的风暴，但现在他只想像个凡人一样",type:3,date:"2017/10/16",tags:["日志","故事"]},{id:"seven_years",name:"七年后",info:"岁月留下的痕迹,愚蠢的自己",pic:"https://isluo.com/imgs/blog-seven-years.png",type:3,date:"2017/10/22",tags:["日志"]},{id:"shadow",name:"Shadow DOM 影中世界",info:"潜伏在HTML表面之下的代码",type:1,date:"2019/03/25",tags:["js","html"]},{id:"smooth1",name:"IntersectionObserverAPI 实现的列表滑动效果",info:"以前用jquery写过，现在这种方式我认为更好一点。CSS变量的话貌似做不到",type:1,date:"2018/08/01",tags:["js"]},{id:"snow_mountain",name:"雪山",info:"这具身体不是他，他只是在控制着这骨骼和血肉筑成的躯干。",type:3,date:"2019/04/15",tags:["日志","故事"]},{id:"svg",name:"SVG 学习笔记",info:"啊，不用的话就会忘掉",type:1,date:"2018/05/06",tags:["js","svg"]},{id:"three_1",name:"Three.js 泛光外发光例子",info:"Three.js官方示例学习笔记",type:1,date:"2018/11/23",tags:["js","three.js"]},{id:"three_fire",name:"Three.js 火焰特效",info:"Three.js官方示例学习笔记",type:1,date:"2019/01/17",tags:["js","three.js"]},{id:"three_fire",name:"TradingView笔记 配置和JS API",info:"主要说明一下Tradingview不好理解的地方",type:1,date:"2018/09/16",tags:["js"]},{id:"url",name:"有用的网址",info:"可能以后还会用到的网址",type:1,date:"2018/04/12",tags:["html"]},{id:"violet",name:"紫罗兰永恒花园",pic:"https://isluo.com/imgs/blog-violet1.jpg",info:"近期在看的动漫，闲暇时间做了这个网站，轻微剧透，为了高清，加载速度可能有点慢",type:2,date:"2018/03/27",tags:["作品"]},{id:"wasm",name:"装逼课程：WebAssembly(wasm)用webpack加载的正确姿势",info:"WebAssembly本身的API并不难，需要关心的是wasm的限制和在实际应用中的使用",type:1,date:"2019/01/11",tags:["js"]},{id:"water",name:"三体水滴计划 3D",info:"消灭人类暴政，世界属于三体",pic:"https://isluo.com/work/water/libs/imgs/book.jpg",type:2,date:"2018/06/23",tags:["作品","three.js"]},{id:"words",name:"感受过的句子",info:"心中激起涟漪和触动的句子",type:3,date:"2018/06/16",tags:["文学"]},{id:"wxstudy",name:"周末撸了一个小程序",info:"关于专升本复习的小程序，真实复习班资料",type:2,date:"2018/07/09",tags:["js","小程序"]},{id:"actions",name:"GitHub Actions自动部署Vue-cli项目到GitHub pages",info:"自动部署vue项目到github博客页面教程",type:1,date:"2020/02/25",tags:["js"]},{id:"lockscreen",name:"原生API锁定浏览器屏幕方向",info:"正统方法，真·锁定屏幕方向, Chrome、FireFox甚至IE都可以，唯独Safari这傻屌浏览器尚未支持",type:1,date:"2020/05/06",tags:["js"]},{id:"gitssh",name:"Windows中使用Git生成ssh rsa key",info:"生成key后，将公钥添加到Github用户Setting中，本地把私钥设置到sourcetree中，就可以用SSH来拉取和提交代码了",type:1,date:"2020/10/20",tags:["Github"]},{id:"taobao",name:"淘宝小程序（淘宝商家应用）开发巨TM坑我狂踩指西",info:"以前一直以为微信开发体验是一坨屎，直到接触了淘宝开发，才发现微信开发简直是一根巧克力味的屎做成的冰棒，美妙，甚至还想再吃几根",type:1,date:"2020/10/29",tags:["小程序","js"]}],c=[{title:"DAN DAN 心魅かれてく",url:"//player.bilibili.com/player.html?aid=20028312&cid=32674930&page=1&high_quality=1"},{title:"【微小微】Apink - My My",url:"//player.bilibili.com/player.html?aid=2573814&cid=4020549&page=1&high_quality=1"},{title:"Sofia - She Taught Me How to Yodel",url:"//player.bilibili.com/player.html?aid=626401766&bvid=BV1Mt4y1X718&cid=213794602&page=1&high_quality=1"}]},f633:function(t,e,n){t.exports=n.p+"img/logo-github.c054d83e.png"}});