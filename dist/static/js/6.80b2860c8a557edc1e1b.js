webpackJsonp([6],{Le9g:function(t,e){},epW7:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("p+dL"),o=a("Pfph"),s=a("ZYmg");window.request=n.a,window.auth=o.a,window.blog=s.a;var r={data:function(){return{blogs:[],page:1,total:0}},created:function(){var t=this;this.page=parseInt(this.$route.query.page)||1,s.a.getIndexBlogs({page:this.page}).then(function(e){console.log(e),t.blogs=e.data,t.total=e.total,t.page=e.page,console.log(t.page)})},methods:{onPageChange:function(t){var e=this;console.log(t),s.a.getIndexBlogs({page:t}).then(function(a){console.log(a),e.blogs=a.data,e.total=a.total,e.page=a.page,e.$router.push({path:"/",query:{page:t}})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v(t._s(e.title)),a("span",[t._v(" "+t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v(t._s(e.description))])])})),t._v(" "),a("section",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var g=a("VU/8")(r,i,!1,function(t){a("Le9g")},"data-v-25bca900",null);e.default=g.exports}});
//# sourceMappingURL=6.80b2860c8a557edc1e1b.js.map