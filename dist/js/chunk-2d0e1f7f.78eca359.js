(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1f7f"],{"7d62":function(t,s,a){"use strict";a.r(s);var o=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"row py-5 no-gutters justify-content-center"},[a("div",{staticClass:"col-md-10"},[a("div",{staticClass:"row no-gutters"},t._l(t.products,(function(s){return a("div",{key:s.id,staticClass:"col-md-4 px-2 pt-4"},[a("div",{staticClass:"card h-100"},[a("img",{staticClass:"card-img-top",attrs:{src:s.imageUrl,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(s.tilte))]),a("p",{staticClass:"card-text"},[t._v(t._s(s.content))]),a("del",[t._v("$"+t._s(s.origin_price))]),a("span",{staticClass:"h4"},[t._v(" $"+t._s(s.price))]),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-content",on:{click:function(a){return t.openModal(s)}}},[t._v("詳細資訊")])])])])])})),0)])]),a("div",{staticClass:"modal fade",attrs:{id:"openModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(t.tempProducts.tilte))]),t._m(0)]),a("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.tempProducts.description)+" ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-content",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(s){return t.orderProduct(t.tempProducts.id)}}},[t._v("我要購買")]),a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("關閉")])])])])]),a("Footer")],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],e=(a("99af"),a("076e")),c=a("1157"),d=a.n(c),n={components:{Footer:e["a"]},data:function(){return{products:[],tempProducts:[]}},methods:{getProduct:function(){var t=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/products");this.$http.get(s).then((function(s){t.products=s.data.products,console.log(t.products)}))},openModal:function(t){this.tempProducts=t,d()("#openModal").modal("show")},orderProduct:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this,o="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/cart"),i={product_id:t,qty:s};a.isLoading=!0,this.$http.post(o,{data:i}).then((function(t){a.isLoading=!1,console.log(t.data)}))}},created:function(){this.getProduct()}},l=n,r=a("2877"),u=Object(r["a"])(l,o,i,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e1f7f.78eca359.js.map