(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&h.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==o[r]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},i={app:0},o={app:0},s=[];function r(t){return c.p+"js/"+({about:"about",article:"article",detail:"detail",live:"live",share:"share",tags:"tags",works:"works"}[t]||t)+"."+{about:"0a8fe07e",article:"5f61ccfc",detail:"24699d03",live:"5ef0410e",share:"07ebb3ad",tags:"9b3a32a3",works:"20edca9f"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1,article:1,detail:1,live:1,share:1,tags:1,works:1};i[t]?e.push(i[t]):0!==i[t]&&a[t]&&e.push(i[t]=new Promise((function(e,a){for(var n="css/"+({about:"about",article:"article",detail:"detail",live:"live",share:"share",tags:"tags",works:"works"}[t]||t)+"."+{about:"465e618e",article:"760a7c8f",detail:"3a8195f8",live:"f3589bcc",share:"87fdfe7b",tags:"4967c690",works:"e3062cf2"}[t]+".css",o=c.p+n,s=document.getElementsByTagName("link"),r=0;r<s.length;r++){var l=s[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var h=document.getElementsByTagName("style");for(r=0;r<h.length;r++){l=h[r],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete i[t],d.parentNode.removeChild(d),a(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){i[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=r(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",h.name="ChunkLoadError",h.type=n,h.request=i,a[1](h)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"033d":function(t,e,a){"use strict";var n=a("94b8"),i=a.n(n);i.a},"035b":function(t,e,a){t.exports=a.p+"img/email.d75b1019.png"},"0753":function(t,e,a){},"12e3":function(t,e,a){"use strict";var n=a("d40e"),i=a.n(n);i.a},2395:function(t,e,a){},3215:function(t,e,a){t.exports=a.p+"img/share_wechart.f5ec21b1.png"},3493:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"my-loading"},[a("i",{staticClass:"el-icon-box nodata-icon"}),a("div",[t._v("暂无数据")])])},i=[],o=a("cf1c"),s=a.n(o),r={data:function(){return{ImgLoading:s.a}},props:{show:{type:Boolean,default:!1}}},c=r,l=(a("033d"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"10374d60",null);e["a"]=u.exports},"386b":function(t,e,a){},4686:function(t,e,a){},"4ee8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAZCAYAAABzVH1EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QThENDdENUIxQjkxMTFFODkyOEREOTUyOTJEMDcxODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QThENDdENUExQjkxMTFFODkyOEREOTUyOTJEMDcxODIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjkxQTE1QzY5RkNBRTM0MkM4Q0U3N0UwMzkyQjAyRENEIiBzdFJlZjpkb2N1bWVudElEPSI5MUExNUM2OUZDQUUzNDJDOENFNzdFMDM5MkIwMkRDRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkaZnYsAAATFSURBVHjazFdJTyNXEG6bZt/3fTshtgN7hNBIQKTALac555Q/kGEGDrYSYYl2nP+SKIdoHGVGigQnEAKxg1gjdlAO7KvzfU9TVqvlbuzBE1FSyf38lq7vVdVX1a7x8fFX+fn5X21vb//8+PiopaenaxSXy6UlJCRooVBIu7+/1zjH8cPDg5aYmKglJyerMedub2+VynrOcz3XUG5ubjS3263muF+EY+6ROVEK9/M5NTVVje/u7tSYdlHPzs7Ub319/Q87Ozuz7vLy8jksbujq6jooKSn59vz8XLu4uAiDeSkitlxeXir7iouLB7u7u/+BvV27u7szboD4F5PfXV9f/97S0vJrR0fH3/DQN1zMTS8FkADIzc3tbW1t/RP6B7w0fnp6+rqysvJEZ2gAnba6uvr9/v7+LsD8WFhY+Orw8PDD3t5e4Pj4OMhwSElJ+V8B8V0ML1yw+s3Jyemrrq4egq0DnJ+dnQ1cXV29hb0qvHWJ1YyMDE7+pOv6TXNz8xg29FMJCDEYwG8QcyruvyQgnk17ePsEgNDvraioeIvLHZA1MzMzvqmpKU9nZ6fKOYINA2HCZWdnaysrKwaeQ42NjQbnBNDBwYECdHR0FGTiJSUlxRWQAGAI0bi8vLzempqaIeTtoHnd5ubmKAz3tre3K3tJMhTdzCAmMH6MXU1NTWMyjwP7qQSE5AqANYIEQy89B5A5iT8B6KuqqnpjBSCeQGQoELSXFyosqJsXCpisrCxteXlZecQMxgwIufMRoAJItvc8kPvkVmP1AAVJTADhHLDK0tKSb2FhwQMvhSmf7xTK160bhNvpGYLBOIScMazrELN91JOTkw9bW1sBgArycPK+k4fMAGhQUVFR76ckHrTbs7i46Jufn/fQJjHcKnqkjdYw48vhGSPS2oKCgn4qXP4XiuovzCESAlnOKYmxR4VQaWnpoJPn4InRubk5L20xF8yIQITqxF1UjilpaWkaDvJzDtxt2L0QN/o1lTlE2iYgc2W25MAQAAw8FX70BNQrnmAI24kubQPbCm4QNjIjJzWjxvjhHVddXd2Y08slh+Chj8gj0vZ7tigIoT4ULtsciJQTDCfUj6hyzwVKDbveLrb5P9mJa/H8rq2tzYiWleCh3+Dd27KystfR7pFwIunwgoWZmFMgBa22tlYTgpGccdvliHXMw3Cr3OxfW1sbidYo9m+xgADB+AgiMzPTNrEjidtsLPNCuk55FuUN0CtgGI6NjY2NkXhXdeYEQDiy05NAYul92JshZIzJycnhlwAiJiBmISCyEQqUH9X22Z4BgFGc45FvIeYCQ9mq8l1kS7+xinw8oSBqCDGDTNfQ0DD2OWeBCX3ovL34dAi3OxLafDaXAiEdR9aKNrx4sHiFyjFoli9/51Rn7EAgVD0ojlGHkqyTDsSRtaI5jADoCSo9gy81P252OJZwYp0gCHYB9PBTKk1q3HJE3C/NG8fox/jLojkSZWIrinXKiVhyxB0PxiEoVm/e7vr6ujExMTHiVLHZxcZaJ74Ia9mJFE30WQaK5nAET6hwYsVmiMQLRFyByIcOPku1np4elTP4dB42tx0A4f3cOvGU6FqcxfxxNj097Uf3XInbT2UXy/8Iwi7OnyP/CTAAhmKCMxo5spgAAAAASUVORK5CYII="},"56d7":function(t,e,a){"use strict";a.r(e);a("0c67"),a("450d");var n=a("299c"),i=a.n(n),o=(a("10cb"),a("f3ad")),s=a.n(o),r=(a("b84d"),a("c216")),c=a.n(r),l=(a("8f24"),a("76b9")),u=a.n(l),h=(a("672e"),a("101e")),d=a.n(h),p=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("2b0e")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"boss",attrs:{id:"app"}},[a("router-view")],1)},g=[],f=(a("7c55"),a("2877")),v={},b=Object(f["a"])(v,m,g,!1,null,null,null),w=b.exports,y=(a("d3b7"),a("8c4f")),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home",attrs:{id:"home"},on:{mousewheel:t.onMouseWheel,DOMMouseScroll:t.onMouseWheel}},[t.isPc?a("audio",{staticClass:"audio",attrs:{src:"https://isluo.com/imgs/rain.mp3",loop:"",preload:"",id:"audio1"},on:{canplaythrough:t.onCanPlay}}):t._e(),a("div",{staticClass:"scroller",attrs:{id:"scroller"}},[a("ul",{staticClass:"scroll-wrapper"},[t.isPc?a("li",{staticClass:"scroll-page"},[a("Page1",{attrs:{pageNow:t.pageNow},on:{onDownClick:t.onClickScroll}})],1):t._e(),a("li",{staticClass:"scroll-page"},[a("Page2",{attrs:{pageNow:t.pageNow},on:{onDownClick:t.onClickScroll}})],1),t.isPc?a("li",{staticClass:"scroll-page foot-page"},[a("Page3",{attrs:{pageNow:t.pageNow,hi:t.hi}})],1):t._e()])])])},C=[],j=a("f3f3"),D=a("aed0"),_=a("8902"),x=a.n(_),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page1",class:{show:t.isShow}},[a("img",{staticClass:"backImg",class:{show:t.isBackShow},attrs:{src:"https://uploadbeta.com/api/pictures/random/"},on:{load:t.onBackImgLoad}}),a("div",{staticClass:"shadow all_trans1s"}),t._m(0),a("img",{staticClass:"down",attrs:{src:t.ImgDown},on:{click:t.onDownClick}})])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info-box"},[a("span",{staticClass:"all_trans1s title"},[t._v("ISLUO BLOG")]),a("div",{staticClass:"all_trans1s"},[t._v("hide in the city")]),a("div",{staticClass:"all_trans1s"},[t._v("no card, no phone, no ID")])])}],P=a("4ee8"),N=a.n(P),I={name:"page1",data:function(){return{isShow:!1,ImgDown:N.a,imgNum:0,isBackShow:!1}},props:["pageNow"],beforeMount:function(){this.imgNum=this.getRandom(0,29)},mounted:function(){0===this.pageNow&&(this.isShow=!0)},beforeUpdate:function(){this.isShow=0===this.pageNow},methods:{getRandom:function(t,e){return Math.round(Math.random()*(e-t)+t)},onDownClick:function(){this.$emit("onDownClick",1)},onBackImgLoad:function(){this.isBackShow=!0}}},L=I,O=(a("cf17"),Object(f["a"])(L,A,M,!1,null,"6a8a69e9",null)),S=O.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page2",class:{show:t.isShow,mobile:!t.isPc}},[a("Menus",{on:{onClickScroll:t.onClickScroll}}),a("div",{staticClass:"body-box",attrs:{id:"bodyBox"},on:{mousewheel:function(t){t.stopPropagation()},DOMMouseScroll:function(t){t.stopPropagation()}}},[a("router-view")],1)],1)},E=[],G=(a("a9e3"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menus",class:{mobile:!t.isPc}},[a("div",{staticClass:"head"},[a("div",{staticClass:"menu-btn",on:{click:t.onMenuTrigger}},[t.menuOpen?t._e():a("i",{staticClass:"el-icon-more"}),t.menuOpen?a("i",{staticClass:"el-icon-more-outline"}):t._e()]),a("span",[t._v("Luo's Blog")])]),a("div",{staticClass:"menu-body"},[a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"menu-body-box",on:{click:t.onMenuClose}},[a("transition",{attrs:{name:"leftmove"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],class:"back-img-box "+(t.isPc?"pc":"mobile"),on:{click:function(t){t.stopPropagation()}}})]),t.isPc?a("CanvasBack"):t._e(),a("transition",{attrs:{name:"leftmove"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.menuOpen,expression:"menuOpen"}],staticClass:"info-box",on:{click:function(t){t.stopPropagation()}}},[a("div",{staticClass:"photo-box"},[a("img",{staticClass:"photo",attrs:{src:t.ImgPic}}),t.isPc?a("div",{staticClass:"playing",class:{stop:!t.play}}):t._e(),t.isPc?a("div",{staticClass:"play-btn",on:{click:t.playOrStop}},[a("div",{staticClass:"line",class:{play:t.play}})]):t._e()]),a("div",{staticClass:"name"},[t._v("Logic")]),a("div",{staticClass:"func"},[t._v(" 躲过了黑夜的那只鸟 "),a("br"),t._v("最后也消失在漆黑里 ")]),a("ul",{staticClass:"link"},[a("li",{on:{click:function(e){return t.onLinkClick("/")},touchend:function(e){return t.onLinkClick("/")}}},[a("div",[t._v(t._s(t.allLength))]),a("div",[t._v("全部")])]),a("li",{on:{click:function(e){return t.onLinkClick("/live")},touchend:function(e){return t.onLinkClick("/live")}}},[a("div",[t._v(t._s(t.liveLength))]),a("div",[t._v("笔记")])]),a("li",{on:{click:function(e){return t.onLinkClick("/works")},touchend:function(e){return t.onLinkClick("/works")}}},[a("div",[t._v(t._s(t.workLength))]),a("div",[t._v("作品")])]),a("li",{on:{click:function(e){return t.onLinkClick("/article")},touchend:function(e){return t.onLinkClick("/article")}}},[a("div",[t._v(t._s(t.articleLength))]),a("div",[t._v("日志")])])]),a("div",{staticClass:"tips"},[a("span",{on:{click:function(e){return t.onLinkClick("/about")},touchend:function(e){return t.onLinkClick("/about")}}},[t._v("about")]),a("div",{staticClass:"line"}),a("span",{on:{click:function(e){return t.onLinkClick("/tags")},touchend:function(e){return t.onLinkClick("/tags")}}},[t._v("tags")]),a("div",{staticClass:"line"}),a("span",{on:{click:function(e){return t.onLinkClick("/share")},touchend:function(e){return t.onLinkClick("/share")}}},[t._v("share")])])])]),t.isPc?a("img",{staticClass:"down",attrs:{src:t.ImgDown},on:{click:t.onDownClick}}):t._e()],1)])],1)])}),V=[],B=(a("4de4"),a("7a88")),H=a.n(B),z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("canvas",{staticClass:"canvas-back"})},Q=[],R=(a("99af"),a("2f62")),U={name:"Header",data:function(){return{ctx:null,width:0,height:0,theRain:[]}},props:{},mounted:function(){this.ctx=this.$el.getContext("2d"),this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.$el.width=this.width,this.$el.height=this.height,this.ctx.fillStyle="transparent",this.ctx.lineCap="round",window.addEventListener("resize",this.resize,!1),this.init(250),this.animate()},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing}})),methods:{init:function(t){for(var e=0;e<t;e++){var a=null,n=Math.round(this.random(60,150));a=e<t/4?{h:60,w:1,s:this.random(10,15),color:"rgba(".concat(n,", ").concat(n,", ").concat(n,", 0.4)")}:e<t/3?{h:90,w:1,s:this.random(15,20),color:"rgba(".concat(n,", ").concat(n,", ").concat(n,", 0.5)")}:e<t/2?{h:120,w:1,s:this.random(20,25),color:"rgba(".concat(n,", ").concat(n,", ").concat(n,", 0.6)")}:e<t/1.5?{h:150,w:1,s:this.random(25,30),color:"rgba(".concat(n,", ").concat(n,", ").concat(n,", 0.7)")}:{h:200,w:1,s:this.random(30,35),color:"rgba(".concat(n,", ").concat(n,", ").concat(n,", 0.8)")};var i={x:this.random(-10,this.width+10),y:this.random(-1e3,this.height+1e3),deg:this.random(-2,5),h:a.h,w:a.w,color:a.color,s:a.s};this.theRain.push(i)}},random:function(t,e){return Math.random()*(e-t)+t},resize:function(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.$el.width=this.width,this.$el.height=this.height},drow:function(){var t=this.ctx,e=this.play?1:20;t.clearRect(0,0,this.width,this.height);for(var a=0;a<this.theRain.length;a++){var n=this.theRain[a],i=Math.PI/180*n.deg;Math.abs(n.y)>this.height?(n.x=this.random(-10,this.width+10),n.y=-n.h):(n.x=Math.sin(i)*n.s/e+n.x,n.y=Math.cos(i)*n.s/e+n.y),t.strokeStyle=n.color,t.lineWidth=n.w,t.beginPath(),t.moveTo(n.x,n.y),t.lineTo(Math.sin(i)*n.h+n.x,Math.cos(i)*n.h+n.y),t.closePath(),t.stroke()}},animate:function(){this.drow(),requestAnimationFrame(this.animate)}},beforeDestroy:function(){window.removeEventListener("resize",this.resize)}},Y=U,F=(a("12e3"),Object(f["a"])(Y,z,Q,!1,null,"12315a51",null)),W=F.exports,J={name:"Menus",data:function(){return{ImgPic:H.a,isPc:Object(D["a"])(),menuOpen:Object(D["a"])(),ImgDown:N.a}},methods:{playOrStop:function(){this.$store.dispatch({type:"page/setPlaying",params:{playing:!this.play}})},onLinkClick:function(t){this.$router.push(t),this.isPc||(this.menuOpen=!1)},onMenuTrigger:function(){this.menuOpen=!this.menuOpen},onMenuClose:function(){this.isPc||(this.menuOpen=!1)},onDownClick:function(){this.$emit("onClickScroll")}},components:{CanvasBack:W},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing},liveLength:function(t){return t.app.blogConfig.filter((function(t){return 1===t.type})).length},workLength:function(t){return t.app.blogConfig.filter((function(t){return 2===t.type})).length},articleLength:function(t){return t.app.blogConfig.filter((function(t){return 3===t.type})).length},allLength:function(t){return t.app.blogConfig.length}}))},Z=J,q=(a("9e28"),Object(f["a"])(Z,G,V,!1,null,"9b00d89e",null)),X=q.exports,K={name:"page2",data:function(){return{isPc:Object(D["a"])(),isShow:!1,scrollDom:null}},props:{pageNow:Number},components:{Menus:X},methods:{onClickScroll:function(){this.$emit("onDownClick",2)}},mounted:function(){1===this.pageNow&&(this.isShow=!0)},beforeUpdate:function(){this.isShow=1===this.pageNow}},$=K,tt=(a("8a79"),Object(f["a"])($,T,E,!1,null,"f28b72c8",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page3"},[a("ul",{staticClass:"friends-link"},[a("li",{staticClass:"title"},[t._v("联系方式")]),a("li",{staticClass:"line"}),a("li",{staticClass:"find"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"QQ 376693576",placement:"top"}},[a("img",{attrs:{src:t.ImgQQ}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("img",{staticClass:"img-wechart",attrs:{src:t.ImgWeChart}})]),a("img",{staticClass:"ml",attrs:{src:t.ImgWechart}})]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Twitter",placement:"top"}},[a("a",{attrs:{href:"https://twitter.com/Logic_yes",target:"_blank",rel:"me noopener"}},[a("img",{staticClass:"ml",attrs:{src:t.ImgTwitter}})])]),a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"376693576@qq.com",placement:"top"}},[a("a",{attrs:{href:"mailto:376693576@qq.com",target:"_blank",rel:"me noopener"}},[a("img",{staticClass:"ml",attrs:{src:t.ImgEmail}})])])],1),a("li",{staticClass:"title",staticStyle:{"margin-top":"16px"}},[t._v("去往其他异次元世界")]),a("li",{staticClass:"line"}),t._m(0)]),a("div",{staticClass:"hi-one"},[a("div",[a("div",[t._v(t._s(t.hi.hitokoto))]),a("div",{staticClass:"from"},[t._v(t._s(t.hi.from))])])]),a("div",{staticClass:"info-box"},[a("div",{staticClass:"open-icons"},[a("a",{attrs:{href:"https://cn.vuejs.org",target:"_blank",rel:"nofollow me noopener noreferrer",title:"vue.js"}},[a("img",{attrs:{src:t.LogoVue}})]),a("a",{attrs:{href:"https://developer.mozilla.org/",target:"_blank",rel:"nofollow me noopener noreferrer",title:"mozilla.org"}},[a("img",{attrs:{src:t.LogoMdn}})]),a("a",{attrs:{href:"http://www.w3school.com.cn/",target:"_blank",rel:"nofollow me noopener noreferrer",title:"w3school"}},[a("img",{attrs:{src:t.LogoHTML5}})]),a("a",{attrs:{href:"https://github.com/javaLuo",target:"_blank",rel:"nofollow me noopener noreferrer",title:"github"}},[a("img",{attrs:{src:t.LogoGitHub}})])]),a("div",[t._v("vue-cli 4.x 全家桶框架支持")]),a("div",[t._v("整站都放在了GitHub, V3API获取文章和评论")]),a("div",[t._v("感谢开源世界的恩惠")])]),a("div",{staticClass:"last"},[t._v(" © 2014–"+t._s((new Date).getFullYear())+" "),a("a",{attrs:{href:"https://isluo.com",target:"_blank",rel:"me noopener"}},[t._v("isluo.com")]),t._v(" Ltd. ")])])},nt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"friend-box"},[a("a",{attrs:{href:"https://www.microanswer.cn",target:"_blank",rel:"noopener"}},[t._v("Microanswer")]),a("a",{attrs:{href:"https://blog.itnote.me",target:"_blank",rel:"noopener"}},[t._v("Mt.r 先生")]),a("a",{attrs:{href:"http://lsy.dulv.net",target:"_blank",rel:"noopener"}},[t._v("平平无奇深情段子手无霜")])])}],it=a("e669"),ot=a.n(it),st=a("f633"),rt=a.n(st),ct=a("9efa"),lt=a.n(ct),ut=a("a365"),ht=a.n(ut),dt=a("e281"),pt=a.n(dt),mt=a("8c9c"),gt=a.n(mt),ft=a("3215"),vt=a.n(ft),bt=a("e0d3"),wt=a.n(bt),yt=a("035b"),kt=a.n(yt),Ct=a("a43f"),jt=a.n(Ct),Dt={name:"page3",data:function(){return{LogoVue:ot.a,LogoGitHub:rt.a,LogoMdn:lt.a,LogoHTML5:ht.a,ImgPic:pt.a,ImgQQ:gt.a,ImgEmail:kt.a,ImgWechart:vt.a,ImgTwitter:wt.a,ImgWeChart:jt.a}},props:{hi:{type:Object}}},_t=Dt,xt=(a("9399"),Object(f["a"])(_t,at,nt,!1,null,"0b52ce1a",null)),At=xt.exports,Mt={name:"home",data:function(){return{isPc:Object(D["a"])(),scrollDom:null,scrolling:!1,pageNow:0,mp3Dom:{canplay:!1,a:null}}},components:{Page1:S,Page2:et,Page3:At},computed:Object(j["a"])({},Object(R["b"])({play:function(t){return t.page.playing},hi:function(t){return t.app.hi}})),mounted:function(){this.isPc&&(this.initScroll(),this.mp3Dom.a=document.getElementById("audio1"),this.mp3Dom.a.volume=0)},beforeDestroy:function(){this.scrollDom&&this.scrollDom.destroy()},methods:{initScroll:function(){var t=this;this.scrollDom=new x.a("#scroller",{snap:!0,bounceEasing:{style:"cubic-bezier(1,0.1,0.1,1)"},bounceTime:1e3,preventDefault:!0,disablePointer:!0}),this.scrollDom.on("scrollEnd",(function(){t.scrolling=!1})),document.body.classList.add("page0")},onCanPlay:function(){var t=this;this.mp3Dom.canplay=!0,this.mp3Dom.a.ontimeupdate=function(){t.mp3Dom.a.duration-3<t.mp3Dom.a.currentTime&&(t.mp3Dom.a.currentTime=2)}},onMouseWheel:function(t){var e=t.wheelDeltaY||-t.detail||t.wheelDelta;this.scrolling||(e<0&&this.pageNow<2?(this.scrolling=!0,this.pageNow++,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3)):e>0&&this.pageNow>0&&(this.scrolling=!0,this.pageNow--,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3)))},onClickScroll:function(t){this.pageNow!==t&&(this.scrolling=!0,this.pageNow=t,this.scrollDom&&this.scrollDom.goToPage(1,this.pageNow,1e3))},onMp3Play:function(){this.mp3Dom.canplay&&(this.mp3Dom.a.play(),this.volumeUp())},onMp3Pause:function(){this.volumeDown()},volumeUp:function(){var t=this;clearTimeout(this.volumeTimer),this.mp3Dom.a.volume+.1<=1&&(this.mp3Dom.a.volume+=.1,this.volumeTimer=setTimeout((function(){t.volumeUp()}),200))},volumeDown:function(){var t=this;clearTimeout(this.volumeTimer),this.mp3Dom.a.volume-.1>=0?(this.mp3Dom.a.volume-=.1,this.volumeTimer=setTimeout((function(){t.volumeDown()}),200)):this.mp3Dom.a.pause()}},watch:{pageNow:function(t){0!==t&&this.play?(this.onMp3Play(),document.body.classList.remove("page0"),2===t&&D["a"]&&this.$store.dispatch({type:"app/getHi"})):(this.onMp3Pause(),document.body.classList.add("page0"))},play:function(t){t?this.onMp3Play():this.onMp3Pause()}}},Pt=Mt,Nt=(a("dab8"),Object(f["a"])(Pt,k,C,!1,null,"aa5234a2",null)),It=Nt.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"live-box"},[a("div",{staticClass:"bread"},[a("i",{staticClass:"el-icon-location"}),a("el-breadcrumb",[a("el-breadcrumbItem",[t._v("博客列表")])],1),a("el-input",{staticClass:"search-input",attrs:{size:"mini",placeholder:"搜索","prefix-icon":"el-icon-search"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),a("transition-group",{staticClass:"live",attrs:{name:"list",tag:"ul"}},t._l(t.pageNowData,(function(t){return a("ArtiveList",{key:t.name,attrs:{thisData:t}})})),1),a("MyLoading",{attrs:{show:!t.pageNowData.length}}),a("div",{staticClass:"pagin"},[a("el-pagination",{attrs:{total:t.total,"current-page":t.pageNow,pageSize:t.pageSize,layout:"total, prev, pager, next"},on:{"current-change":t.onPageChange}})],1)],1)},Ot=[],St=(a("caad"),a("b0c0"),a("2532"),a("9c91")),Tt=a("3493"),Et={name:"name-all",data:function(){return{pageNow:1,pageSize:10,total:0,pageNowData:[],searchValue:""}},components:{ArtiveList:St["a"],MyLoading:Tt["a"]},computed:Object(j["a"])(Object(j["a"])({},Object(R["b"])({blogConfig:function(t){return t.app.blogConfig}})),{},{searchData:function(){var t=this,e=this.blogConfig;return this.searchValue&&(e=e.filter((function(e){return e.name.toLowerCase().includes(t.searchValue.toLowerCase())}))),e},listData:function(){var t=this;return Object(D["b"])(this.searchData).filter((function(e,a){return a>=(t.pageNow-1)*t.pageSize&&a<t.pageNow*t.pageSize}))}}),watch:{searchValue:function(t){this.pageNow=1},searchData:{handler:function(t){this.total=t.length},immediate:!0},listData:{handler:function(t){var e=this;this.pageNowData=[];var a=document.getElementById("bodyBox");a&&(a.scrollTop=0);for(var n=t,i=function(t){setTimeout((function(){return e.pageNowData.push(n[t])}),80*t)},o=0;n[o];o++)i(o)},immediate:!0}},methods:{onPageChange:function(t){this.pageNow=t}}},Gt=Et,Vt=(a("d7bb"),Object(f["a"])(Gt,Lt,Ot,!1,null,"8b55a78a",null)),Bt=Vt.exports;p["default"].use(y["a"]);var Ht=new y["a"]({routes:[{path:"/",name:"home",component:It,children:[{path:"all",name:"all",alias:"/",component:Bt},{path:"live",name:"live",component:function(){return a.e("live").then(a.bind(null,"324a"))}},{path:"works",name:"works",component:function(){return a.e("works").then(a.bind(null,"f8ce"))}},{path:"article",name:"article",component:function(){return a.e("article").then(a.bind(null,"227e"))}},{path:"tags",name:"class",component:function(){return a.e("tags").then(a.bind(null,"b163"))}},{path:"detail/:id",name:"detail",component:function(){return a.e("detail").then(a.bind(null,"89257"))}},{path:"about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"share",name:"share",component:function(){return a.e("share").then(a.bind(null,"fbd8"))}}]}]}),zt=(a("0fb7"),a("f529")),Qt=a.n(zt),Rt=(a("96cf"),a("c964")),Ut=a("bc3a"),Yt=a.n(Ut),Ft=a("f121"),Wt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o={url:"".concat(t).concat(i?"":"?client_id=".concat(Ft["b"],"&client_secret=").concat(Ft["c"])),method:a,data:e,headers:{"Content-Type":"text/plain; charset=utf-8"},responseType:"json"};return n&&delete o.responseType,Yt()(o)},Jt=Wt,Zt={namespaced:!0,state:{blogConfig:Ft["a"],hi:{hitokoto:"Loading..."}},actions:{getHi:function(t){return Object(Rt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a="https://international.v1.hitokoto.cn?c=d&time=".concat(Date.now()),e.next=4,Jt(a,null,"GET",!1,!0);case 4:return n=e.sent,200!==n.status&&304!==n.status||t.commit({type:"setHi",data:n.data}),e.abrupt("return",n);case 9:e.prev=9,e.t0=e["catch"](0),Qt.a.info("一言获取失败，需要翻墙");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mutations:{setHi:function(t,e){t.hi=e.data}}},qt=Zt,Xt={namespaced:!0,state:{playing:!0},actions:{setPlaying:function(t,e){return Object(Rt["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.commit({type:"setPlaying",playing:e.params.playing});case 3:a.next=7;break;case 5:a.prev=5,a.t0=a["catch"](0);case 7:case"end":return a.stop()}}),a,null,[[0,5]])})))()}},mutations:{setPlaying:function(t,e){t.playing=e.playing}}},Kt=Xt;p["default"].use(R["a"]);var $t=new R["a"].Store({modules:{app:qt,page:Kt}});p["default"].use(d.a),p["default"].use(u.a),p["default"].use(c.a),p["default"].use(s.a),p["default"].use(i.a),p["default"].config.productionTip=!1,new p["default"]({router:Ht,store:$t,render:function(t){return t(w)}}).$mount("#app")},5731:function(t,e,a){},"5f15":function(t,e,a){"use strict";var n=a("7873"),i=a.n(n);i.a},"687b":function(t,e,a){},7873:function(t,e,a){},"7a88":function(t,e,a){t.exports=a.p+"img/pic.9598862d.jpg"},"7c55":function(t,e,a){"use strict";var n=a("2395"),i=a.n(n);i.a},"8a79":function(t,e,a){"use strict";var n=a("687b"),i=a.n(n);i.a},"8c9c":function(t,e,a){t.exports=a.p+"img/share_qq.7a1bed8a.png"},9399:function(t,e,a){"use strict";var n=a("4686"),i=a.n(n);i.a},"94b8":function(t,e,a){},"9c91":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"artive-list"},[a("div",{staticClass:"title",on:{click:t.onDetailChose}},[t._v(t._s(t.thisData.name))]),a("div",{staticClass:"time"},[t._v(t._s(t.thisData.date))]),t.thisData.pic?a("div",{staticClass:"pic"},[a("img",{attrs:{src:t.thisData.pic}})]):t._e(),a("div",{staticClass:"info"},[a("span",{domProps:{innerHTML:t._s(t.thisData.info)}})]),a("div",{staticClass:"tags"},t._l(t.thisData.tags,(function(e,n){return a("div",{key:n},[a("i",{staticClass:"el-icon-price-tag"}),t._v(" "+t._s(e)+" ")])})),0),a("div",{staticClass:"read-more",on:{click:t.onDetailChose}},[t._v("阅读全文")])])},i=[],o={name:"ArtiveList",data:function(){return{}},props:{thisData:Object},methods:{onDetailChose:function(){this.$router.push("/detail/".concat(this.thisData.id))}},watch:{}},s=o,r=(a("5f15"),a("2877")),c=Object(r["a"])(s,n,i,!1,null,"2f2b9a88",null);e["a"]=c.exports},"9e28":function(t,e,a){"use strict";var n=a("386b"),i=a.n(n);i.a},"9efa":function(t,e,a){t.exports=a.p+"img/logo-mdn.5daec185.png"},"9faf":function(t,e,a){},a365:function(t,e,a){t.exports=a.p+"img/logo-html5.ac790518.png"},a43f:function(t,e,a){t.exports=a.p+"img/weima2.734fea31.png"},aed0:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return s}));a("7db0"),a("caad"),a("a15b"),a("a9e3"),a("ac1f"),a("2532"),a("1276");var n=a("2ef0"),i=a.n(n),o=function(){for(var t=navigator.userAgent.toLowerCase(),e=["android","iphone","symbianOS","windows phone","ipad","ipod"],a=!0,n=0;n<e.length;n++)if(t.includes(e[n])){a=!1;break}return a},s=function(t){var e=i.a.cloneDeep(t);return e.sort((function(t,e){return Number(e.date.split("/").join("")-Number(t.date.split("/").join("")))})),e}},cf17:function(t,e,a){"use strict";var n=a("5731"),i=a.n(n);i.a},cf1c:function(t,e,a){t.exports=a.p+"img/loading.14a0936b.gif"},d40e:function(t,e,a){},d7bb:function(t,e,a){"use strict";var n=a("9faf"),i=a.n(n);i.a},dab8:function(t,e,a){"use strict";var n=a("0753"),i=a.n(n);i.a},e0d3:function(t,e,a){t.exports=a.p+"img/share_twitter.7841adaf.png"},e281:function(t,e,a){t.exports=a.p+"img/myhead.49bad8a6.png"},e669:function(t,e,a){t.exports=a.p+"img/logo-vue.56141cac.png"},f121:function(t,e,a){"use strict";a.d(e,"e",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"f",(function(){return c}));var n="javaLuo",i="javaimluo",o="f598c816b3b65783625b",s="702577a65885617a20f9b39e07de260f7987aef7",r=[{id:"gd",name:"Ghost Blade 鬼刀",info:"Ghost Blade 鬼刀 主题宣传站。素材均来自wlop大佬",type:2,pic:"https://isluo.com/files/work/gd1.jpg",date:"2018/03/10",tags:["作品","canvas"]},{id:"abouttime",name:"这一次，彻底搞清楚Date对象在Chrome和Safari中的坑",info:"什么GMT、UTC、夏令时，受够了",type:1,date:"2019/02/22",tags:["js"]},{id:"along",name:"独行者",info:"在C世界的边缘地带，只有一扇窗户，其余三面被书籍围住",type:3,date:"2012/10/17",tags:["日志"]},{id:"algorithm",name:"基础算法",info:"基础算法记录 上学时写得都很溜，现在全忘了",type:1,date:"2018/06/02",tags:["js"]},{id:"b_night_snow",name:"夜雪",info:"青春岁月留下的痕迹",type:3,date:"2008/04/04",tags:["日志","故事"]},{id:"brcity",name:"边城",info:"他正趴在冷冰冰的生满锈迹的钢板上，身子被雨水淋了个遍，寒意席卷了每一寸皮肤…",type:3,date:"2011/09/19",tags:["日志","故事"]},{id:"datafeed",name:"TradingView DataFeed笔记",info:"图表学习记录",type:1,date:"2018/09/27",tags:["js"]},{id:"datediff",name:"真正准确的“两个日期相差多少天”函数",info:"第一天最后1秒到第二天第1秒，也是过了一天!",type:1,date:"2018/04/02",tags:["js"]},{id:"dll",name:"webpack.DllPlugin和webpack.DllReferencePlugin静态资源预编译插件",info:"现在因为有HMR局部热更新，所以dllPlugin这两个插件用得少了，不过还是记录一下配置方法，可能以后会再次使用",type:1,date:"2018/04/02",tags:["js"]},{id:"download",name:"纯前端弹出下载框的方式下载img或pdf等资源",info:"a标签download属性，弹出下载框的方式下载内容，而不是让浏览器解析",type:1,date:"2019/05/07",tags:["js"]},{id:"earth",name:"Earth 3D TNC - 大自然保护协会",info:"学习Three.js时做的东西，又很长时间没有去学习了",pic:"https://isluo.com/files/work/earth.jpg",type:2,date:"2018/03/14",tags:["js","three.js"]},{id:"facebook",name:"FaceBook Share 功能 JS SDK 自定义图片和文字的方法",info:"acebook的分享设置及注意的地方",type:1,date:"2018/07/02",tags:["js"]},{id:"featuresets",name:"TradingView Featuresets部分官方文档补全",info:"图表笔记",type:1,date:"2018/09/29",tags:["js"]},{id:"flex",name:"Flex 全属性笔记",info:"flex各属性",type:1,date:"2018/03/28",tags:["css"]},{id:"flip",name:"FLIP 反转动画原理及实现",info:"First-Last-Invert-Play动画，太骚了，大佬的气息如泉涌般袭来",type:1,date:"2019/02/14",tags:["js","css"]},{id:"glsl",name:"GLSL 基础",info:"需要一颗虔诚的心来专研这一切，真希望自己能静下心来，有连续的时间来学习这些东西",type:1,date:"2019/11/22",tags:["js","webgl"]},{id:"graphql",name:"GraphQL Express 基础使用",info:"最近学习了一下GraphQL，我觉得这是一种更合理的前后端交互方式",type:1,date:"2018/12/08",tags:["js"]},{id:"grid",name:"Grid布局 所有属性笔记",info:"grid布局相关属性笔记，方便查阅",type:1,date:"2018/06/07",tags:["css"]},{id:"hooks",name:"React16.8所有内置Hooks功能一览",info:"笔记，需要在实际应用中才能掌握",type:1,date:"2019/02/10",tags:["js","React"]},{id:"isluo",name:"个人网站 主站",info:"多年以前做的个人网站，那时还用着jquery",pic:"https://isluo.com/imgs/blog-isluo.jpg",type:2,date:"2018/04/27",tags:["作品"]},{id:"markdown",name:"MarkDown 语法教程",info:"从别处搬运的，记录于此，方便自己查阅",type:1,date:"2018/04/27",tags:["js","markdown"]},{id:"offset",name:"各种取高度位置关系及相关API",info:"常用的DOM对象各种高度和位置设置的API",type:1,date:"2018/07/17",tags:["js"]},{id:"orbitcontrols",name:"OrbitControls.js 镜头控制器所有属性",info:"常用的DOM对象各种高度和位置设置的API",type:1,date:"2018/09/24",tags:["js","three.js"]},{id:"paomo",name:"泡沫 - 邓紫棋 2014早期作品",info:"很久以前做的了",pic:"https://isluo.com/files/work/pm1.jpg",type:2,date:"2018/03/26",tags:["作品"]},{id:"picture",name:"HTML5 响应式图片picture标签使用方法",info:"sizes中是基础规格值，与dpi相乘得到最终规格值，拿着最终规格值去srcset里找符合的图片资源加载",type:1,date:"2019/08/19",tags:["html"]},{id:"pit",name:"我所遇到的各种匪夷所思的坑们",info:"各种匪夷所思的坑，持续记录",type:1,date:"2020/01/10",tags:["js","html"]},{id:"pre",name:"所有预加载标签一览",info:"目前有5个：preload、prefetch、preconnect、dns-prefetch、prerender",type:1,date:"2019/10/11",tags:["html"]},{id:"qi",name:"冷门的奇淫技巧",info:"补充奇怪的知识",type:1,date:"2018/07/11",tags:["html","css","js"]},{id:"reg",name:"Regexp：正向断言和反向断言",info:"易混淆的，易忘的，常用的正则知识",type:1,date:"2019/02/20",tags:["js"]},{id:"rose",name:"仿樱花漫天飞舞效果 3D",info:"一个使用Three.js制作的网站，Three.js练手。曾见识过大佬的DEMO",pic:"https://isluo.com/files/work/rose1.jpg",type:2,date:"2018/03/26",tags:["three.js"]},{id:"sailor",name:"水手",info:"他曾时常梦见船长的女儿和那晚的风暴，但现在他只想像个凡人一样",type:3,date:"2017/10/16",tags:["日志","故事"]},{id:"seven_years",name:"七年后",info:"岁月留下的痕迹,愚蠢的自己",pic:"https://isluo.com/imgs/blog-seven-years.png",type:3,date:"2017/10/22",tags:["日志"]},{id:"shadow",name:"Shadow DOM 影中世界",info:"潜伏在HTML表面之下的代码",type:1,date:"2019/03/25",tags:["js","html"]},{id:"smooth1",name:"IntersectionObserverAPI 实现的列表滑动效果",info:"以前用jquery写过，现在这种方式我认为更好一点。CSS变量的话貌似做不到",type:1,date:"2018/08/01",tags:["js"]},{id:"snow_mountain",name:"雪山",info:"这具身体不是他，他只是在控制着这骨骼和血肉筑成的躯干。",type:3,date:"2019/04/15",tags:["日志","故事"]},{id:"svg",name:"SVG 学习笔记",info:"啊，不用的话就会忘掉",type:1,date:"2018/05/06",tags:["js","svg"]},{id:"three_1",name:"Three.js 泛光外发光例子",info:"Three.js官方示例学习笔记",type:1,date:"2018/11/23",tags:["js","three.js"]},{id:"three_fire",name:"Three.js 火焰特效",info:"Three.js官方示例学习笔记",type:1,date:"2019/01/17",tags:["js","three.js"]},{id:"three_fire",name:"TradingView笔记 配置和JS API",info:"主要说明一下Tradingview不好理解的地方",type:1,date:"2018/09/16",tags:["js"]},{id:"url",name:"有用的网址",info:"可能以后还会用到的网址",type:1,date:"2018/04/12",tags:["html"]},{id:"violet",name:"紫罗兰永恒花园",pic:"https://isluo.com/imgs/blog-violet1.jpg",info:"近期在看的动漫，闲暇时间做了这个网站，轻微剧透，为了高清，加载速度可能有点慢",type:2,date:"2018/03/27",tags:["作品"]},{id:"wasm",name:"装逼课程：WebAssembly(wasm)用webpack加载的正确姿势",info:"WebAssembly本身的API并不难，需要关心的是wasm的限制和在实际应用中的使用",type:1,date:"2019/01/11",tags:["js"]},{id:"water",name:"三体水滴计划 3D",info:"消灭人类暴政，世界属于三体",pic:"https://isluo.com/work/water/libs/imgs/book.jpg",type:2,date:"2018/06/23",tags:["作品","three.js"]},{id:"words",name:"感受过的句子",info:"心中激起涟漪和触动的句子",type:3,date:"2018/06/16",tags:["文学"]},{id:"wxstudy",name:"周末撸了一个小程序",info:"关于专升本复习的小程序，真实复习班资料",type:2,date:"2018/07/09",tags:["js","小程序"]},{id:"actions",name:"GitHub Actions自动部署Vue-cli项目到GitHub pages",info:"自动部署vue项目到github博客页面教程",type:1,date:"2020/02/25",tags:["js"]},{id:"lockscreen",name:"原生API锁定浏览器屏幕方向",info:"正统方法，真·锁定屏幕方向, Chrome、FireFox甚至IE都可以，唯独Safari这傻屌浏览器尚未支持",type:1,date:"2020/05/06",tags:["js"]},{id:"gitssh",name:"Windows中使用Git生成ssh rsa key",info:"生成key后，将公钥添加到Github用户Setting中，本地把私钥设置到sourcetree中，就可以用SSH来拉取和提交代码了",type:1,date:"2020/10/20",tags:["Github"]},{id:"taobao",name:"淘宝小程序（淘宝商家应用）开发巨TM坑我狂踩指西",info:"以前一直以为微信开发体验是一坨屎，直到接触了淘宝开发，才发现微信开发简直是一根巧克力味的屎做成的冰棒，美妙，甚至还想再吃几根",type:1,date:"2020/10/29",tags:["小程序","js"]},{id:"shadow2",name:"一种前端防御技术",info:"在服务器被黑的情况下，前端如何保护用户关键信息不被修改",type:1,date:"2020/12/31",tags:["js"]}],c=[{title:"DAN DAN 心魅かれてく",url:"//player.bilibili.com/player.html?aid=20028312&cid=32674930&page=1&high_quality=1"},{title:"【微小微】Apink - My My",url:"//player.bilibili.com/player.html?aid=2573814&cid=4020549&page=1&high_quality=1"},{title:"Sofia - She Taught Me How to Yodel",url:"//player.bilibili.com/player.html?aid=626401766&bvid=BV1Mt4y1X718&cid=213794602&page=1&high_quality=1"}]},f633:function(t,e,a){t.exports=a.p+"img/logo-github.c054d83e.png"}});