(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc38104c"],{"0b33":function(t,e,a){"use strict";a("e8c3")},1276:function(t,e,a){"use strict";var r=a("2ba4"),s=a("c65b"),i=a("e330"),n=a("d784"),c=a("44e7"),o=a("825a"),l=a("1d80"),u=a("4840"),d=a("8aa5"),h=a("50c4"),f=a("577e"),v=a("dc4a"),m=a("4dae"),g=a("14c3"),p=a("9263"),b=a("9f7f"),_=a("d039"),x=b.UNSUPPORTED_Y,y=4294967295,C=Math.min,k=[].push,P=i(/./.exec),w=i(k),I=i("".slice),O=!_((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));n("split",(function(t,e,a){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var i=f(l(this)),n=void 0===a?y:a>>>0;if(0===n)return[];if(void 0===t)return[i];if(!c(t))return s(e,i,t,n);var o,u,d,h=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,b=new RegExp(t.source,v+"g");while(o=s(p,b,i)){if(u=b.lastIndex,u>g&&(w(h,I(i,g,o.index)),o.length>1&&o.index<i.length&&r(k,h,m(o,1)),d=o[0].length,g=u,h.length>=n))break;b.lastIndex===o.index&&b.lastIndex++}return g===i.length?!d&&P(b,"")||w(h,""):w(h,I(i,g)),h.length>n?m(h,0,n):h}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:s(e,this,t,a)}:e,[function(e,a){var r=l(this),n=void 0==e?void 0:v(e,t);return n?s(n,e,r,a):s(i,f(r),e,a)},function(t,r){var s=o(this),n=f(t),c=a(i,s,n,r,i!==e);if(c.done)return c.value;var l=u(s,RegExp),v=s.unicode,m=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(x?"g":"y"),p=new l(x?"^(?:"+s.source+")":s,m),b=void 0===r?y:r>>>0;if(0===b)return[];if(0===n.length)return null===g(p,n)?[n]:[];var _=0,k=0,P=[];while(k<n.length){p.lastIndex=x?0:k;var O,N=g(p,x?I(n,k):n);if(null===N||(O=C(h(p.lastIndex+(x?k:0)),n.length))===_)k=d(n,k,v);else{if(w(P,I(n,_,k)),P.length===b)return P;for(var $=1;$<=N.length-1;$++)if(w(P,N[$]),P.length===b)return P;k=_=O}}return w(P,I(n,_)),P}]}),!O,x)},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,a){var r=a("da84"),s=a("c65b"),i=a("825a"),n=a("1626"),c=a("c6b6"),o=a("9263"),l=r.TypeError;t.exports=function(t,e){var a=t.exec;if(n(a)){var r=s(a,t,e);return null!==r&&i(r),r}if("RegExp"===c(t))return s(o,t,e);throw l("RegExp#exec called on incompatible receiver")}},"20fb":function(t,e,a){},"44e7":function(t,e,a){var r=a("861d"),s=a("c6b6"),i=a("b622"),n=i("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[n])?!!e:"RegExp"==s(t))}},"48f5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("typeNav"),a("div",{staticClass:"main"},[a("div",{staticClass:"py-container"},[a("div",{staticClass:"bread"},[t._m(0),a("ul",{staticClass:"fl sui-tag"},[t.searchParams.categoryName?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.categoryName)),a("i",{on:{click:t.removeCategoryName}},[t._v("×")])]):t._e(),t.searchParams.keyword?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.keyword)),a("i",{on:{click:t.removeKeyword}},[t._v("×")])]):t._e(),t.searchParams.trademark?a("li",{staticClass:"with-x"},[t._v(" "+t._s(t.searchParams.trademark.split(":")[1])),a("i",{on:{click:t.removeTradeMark}},[t._v("×")])]):t._e(),t._l(t.searchParams.props,(function(e,r){return a("li",{key:r,staticClass:"with-x"},[t._v(" "+t._s(e.split(":")[1])),a("i",{on:{click:function(e){return t.removeAttr(r)}}},[t._v("×")])])}))],2)]),a("SearchSelector",{on:{trademarkInfo:t.trademarkInfo,attrInfo:t.attrInfo}}),a("div",{staticClass:"details clearfix"},[a("div",{staticClass:"sui-navbar"},[a("div",{staticClass:"navbar-inner filter"},[a("ul",{staticClass:"sui-nav"},[a("li",{class:{active:t.isOne},on:{click:function(e){return t.changeOrder("1")}}},[a("a",[t._v("综合"),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isOne,expression:"isOne"}],staticClass:"iconfont",class:{"icon-UP":t.isAsc,"icon-DOWN":t.isDesc}})])]),a("li",{class:{active:t.isTwo},on:{click:function(e){return t.changeOrder("2")}}},[a("a",[t._v("价格"),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isTwo,expression:"isTwo"}],staticClass:"iconfont",class:{"icon-UP":t.isAsc,"icon-DOWN":t.isDesc}})])])])])]),a("div",{staticClass:"goods-list"},[a("ul",{staticClass:"yui3-g"},t._l(t.goodsList,(function(e,r){return a("li",{key:e.id,staticClass:"yui3-u-1-5"},[a("div",{staticClass:"list-wrap"},[a("div",{staticClass:"p-img"},[a("router-link",{attrs:{to:"/detail/"+e.id}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.defaultImg,expression:"good.defaultImg"}]})])],1),a("div",{staticClass:"price"},[a("strong",[a("em",[t._v("¥")]),a("i",[t._v(t._s(e.price)+".00")])])]),a("div",{staticClass:"attr"},[a("a",{attrs:{target:"_blank",href:"item.html",title:"促销信息，下单即赠送三个月CIBN视频会员卡！【小米电视新品4A 58 火爆预约中】"}},[t._v(t._s(e.title))])]),t._m(1,!0),t._m(2,!0)])])})),0)]),a("Pagination",{attrs:{pageNo:t.searchParams.pageNo,pageSize:t.searchParams.pageSize,total:t.total,continues:5},on:{getPageNo:t.getPageNo}})],1)],1)])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"fl sui-breadcrumb"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("全部结果")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"commit"},[a("i",{staticClass:"command"},[t._v("已有"),a("span",[t._v("2000")]),t._v("人评价")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"operate"},[a("a",{staticClass:"sui-btn btn-bordered btn-danger",attrs:{href:"success-cart.html",target:"_blank"}},[t._v("加入购物车")]),a("a",{staticClass:"sui-btn btn-bordered",attrs:{href:"javascript:void(0);"}},[t._v("收藏")])])}],i=a("5530"),n=(a("99af"),a("a434"),a("ac1f"),a("1276"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"clearfix selector"},[a("div",{staticClass:"type-wrap logo"},[a("div",{staticClass:"fl key brand"},[t._v("品牌")]),a("div",{staticClass:"value logos"},[a("ul",{staticClass:"logo-list"},t._l(t.trademarkList,(function(e,r){return a("li",{key:e.tmId,on:{click:function(a){return t.tradeMatkHandler(e)}}},[t._v(" "+t._s(e.tmName)+" ")])})),0)]),a("div",{staticClass:"ext"})]),t._l(t.attrsList,(function(e,r){return a("div",{key:e.attrId,staticClass:"type-wrap"},[a("div",{staticClass:"fl key"},[t._v(t._s(e.attrName))]),a("div",{staticClass:"fl value"},[a("ul",{staticClass:"type-list"},t._l(e.attrValueList,(function(r,s){return a("li",{key:r,on:{click:function(a){return t.attrInfo(e,r)}}},[a("a",[t._v(t._s(r))])])})),0)]),a("div",{staticClass:"fl ext"})])}))],2)}),c=[],o=a("2f62"),l={name:"SearchSelector",computed:Object(i["a"])({},Object(o["b"])(["trademarkList","attrsList"])),methods:{tradeMatkHandler:function(t){this.$emit("trademarkInfo",t)},attrInfo:function(t,e){this.$emit("attrInfo",t,e)}}},u=l,d=(a("7ad7"),a("2877")),h=Object(d["a"])(u,n,c,!1,null,"2ccb6a76",null),f=h.exports,v={name:"Search",data:function(){return{searchParams:{category1Id:"",category2Id:"",category3Id:"",categoryName:"",keyword:"",order:"1:desc",pageNo:1,pageSize:3,props:[],trademark:""}}},components:{SearchSelector:f},beforeMount:function(){Object.assign(this.searchParams,this.$route.query,this.$route.params)},mounted:function(){this.getData()},methods:{getData:function(){this.$store.dispatch("getSearchList",this.searchParams)},removeCategoryName:function(){this.searchParams.categoryName=void 0,this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0,this.getData(),this.$route.params&&this.$router.push({name:"search",params:this.$route.params})},removeKeyword:function(){this.searchParams.keyword=void 0,this.getData(),this.$bus.$emit("clear"),this.$route.query&&this.$router.push({name:"search",query:this.$route.query})},trademarkInfo:function(t){this.searchParams.trademark="".concat(t.tmId,":").concat(t.tmName),this.getData()},removeTradeMark:function(){this.searchParams.trademark=void 0,this.getData()},attrInfo:function(t,e){console.log(t,e);var a="".concat(t.attrId,":").concat(e,":").concat(t.attrName);-1==this.searchParams.props.indexOf(a)&&this.searchParams.props.push(a),this.getData()},removeAttr:function(t){this.searchParams.props.splice(t,1),this.getData()},changeOrder:function(t){var e=this.searchParams.order,a=e.split(":")[0],r=e.split(":")[1],s="";s=t==a?"".concat(a,":").concat("desc"==r?"asc":"desc"):"".concat(t,":","desc"),this.searchParams.order=s,this.getData()},getPageNo:function(t){this.searchParams.pageNo=t,this.getData()}},computed:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["goodsList"])),{},{isOne:function(){return-1!=this.searchParams.order.indexOf("1")},isTwo:function(){return-1!=this.searchParams.order.indexOf("2")},isAsc:function(){return-1!=this.searchParams.order.indexOf("asc")},isDesc:function(){return-1!=this.searchParams.order.indexOf("desc")}},Object(o["c"])({total:function(t){return t.search.searchList.total}})),watch:{$route:function(t,e){Object.assign(this.searchParams,this.$route.query,this.$route.params),this.getData(),this.searchParams.category1Id=void 0,this.searchParams.category2Id=void 0,this.searchParams.category3Id=void 0}}},m=v,g=(a("0b33"),Object(d["a"])(m,r,s,!1,null,"59d0afb4",null));e["default"]=g.exports},"7ad7":function(t,e,a){"use strict";a("20fb")},"841c":function(t,e,a){"use strict";var r=a("c65b"),s=a("d784"),i=a("825a"),n=a("1d80"),c=a("129f"),o=a("577e"),l=a("dc4a"),u=a("14c3");s("search",(function(t,e,a){return[function(e){var a=n(this),s=void 0==e?void 0:l(e,t);return s?r(s,e,a):new RegExp(e)[t](o(a))},function(t){var r=i(this),s=o(t),n=a(e,r,s);if(n.done)return n.value;var l=r.lastIndex;c(l,0)||(r.lastIndex=0);var d=u(r,s);return c(r.lastIndex,l)||(r.lastIndex=l),null===d?-1:d.index}]}))},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},a434:function(t,e,a){"use strict";var r=a("23e7"),s=a("da84"),i=a("23cb"),n=a("5926"),c=a("07fa"),o=a("7b0b"),l=a("65f0"),u=a("8418"),d=a("1dde"),h=d("splice"),f=s.TypeError,v=Math.max,m=Math.min,g=9007199254740991,p="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!h},{splice:function(t,e){var a,r,s,d,h,b,_=o(this),x=c(_),y=i(t,x),C=arguments.length;if(0===C?a=r=0:1===C?(a=0,r=x-y):(a=C-2,r=m(v(n(e),0),x-y)),x+a-r>g)throw f(p);for(s=l(_,r),d=0;d<r;d++)h=y+d,h in _&&u(s,d,_[h]);if(s.length=r,a<r){for(d=y;d<x-r;d++)h=d+r,b=d+a,h in _?_[b]=_[h]:delete _[b];for(d=x;d>x-r+a;d--)delete _[d-1]}else if(a>r)for(d=x-r;d>y;d--)h=d+r-1,b=d+a-1,h in _?_[b]=_[h]:delete _[b];for(d=0;d<a;d++)_[d+y]=arguments[d+2];return _.length=x-r+a,s}})},d784:function(t,e,a){"use strict";a("ac1f");var r=a("e330"),s=a("6eeb"),i=a("9263"),n=a("d039"),c=a("b622"),o=a("9112"),l=c("species"),u=RegExp.prototype;t.exports=function(t,e,a,d){var h=c(t),f=!n((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),v=f&&!n((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[l]=function(){return a},a.flags="",a[h]=/./[h]),a.exec=function(){return e=!0,null},a[h](""),!e}));if(!f||!v||a){var m=r(/./[h]),g=e(h,""[t],(function(t,e,a,s,n){var c=r(t),o=e.exec;return o===i||o===u.exec?f&&!n?{done:!0,value:m(e,a,s)}:{done:!0,value:c(a,e,s)}:{done:!1}}));s(String.prototype,t,g[0]),s(u,h,g[1])}d&&o(u[h],"sham",!0)}},e8c3:function(t,e,a){}}]);