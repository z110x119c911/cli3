(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd0ec"],{8086:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"container"},[s("h2",{staticClass:"py-5"},[t._v("我的購物車")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("table",{staticClass:"table"},[t._m(0),s("tbody",t._l(t.cartList.carts,(function(a){return s("tr",{key:a.id},[s("td",{staticClass:"align-middle"},[s("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"}},[s("i",{staticClass:"far fa-trash-alt",on:{click:function(s){return t.delCart(a.id)}}})])]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.product.tilte))]),s("td",{staticClass:"align-middle"},[t._v(t._s(a.qty)+" "+t._s(a.product.unit))]),s("td",{staticClass:"align-middle text-right"},[t._v(t._s(a.total)+" 元")])])})),0),s("tfoot",[s("tr",[s("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("總計")]),s("td",{staticClass:"text-right"},[t._v(t._s(t.cartList.total)+" 元 ")])]),t.cartList.final_total!==t.cartList.total?s("tr",[s("td",{staticClass:"text-right text-success",attrs:{colspan:"3"}},[t._v("折扣價 : "),s("span",{staticStyle:{color:"black"}},[t._v(t._s(t.message))])]),s("td",{staticClass:"text-right text-success"},[t._v(" "+t._s(t.cartList.final_total)+" 元 ")])]):t._e()])])]),s("div",{staticClass:"col-12 py-5"},[s("div",{staticClass:"row no-gutters justify-content-center"},[s("div",{staticClass:"col-md-4 col-12"},[s("p",[t._v("有優惠券嗎？")]),s("div",{staticClass:"input-group mb-3 input-group-sm"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode.code,expression:"couponCode.code"}],staticClass:"form-control",attrs:{type:"text",placeholder:"請輸入優惠碼"},domProps:{value:t.couponCode.code},on:{input:function(a){a.target.composing||t.$set(t.couponCode,"code",a.target.value)}}}),s("div",{staticClass:"input-group-append h-100"},[s("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(a){return t.addCoupon()}}},[t._v(" 套用優惠碼 ")])])])])])]),s("div",{staticClass:"col-12"},[s("form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(a){return a.preventDefault(),t.order(a)}}},[s("div",{staticClass:"form-row mx-0 justify-content-center"},[s("div",{staticClass:"col-md-8 col-12 mb-3"},[s("label",{attrs:{for:""}},[t._v("收件人姓名")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v("格式錯誤")])]),s("div",{staticClass:"col-md-8 col-12 mb-3"},[s("label",{attrs:{for:""}},[t._v("收件人電話")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v("格式錯誤")])]),s("div",{staticClass:"col-md-8 col-12 mb-3"},[s("label",{attrs:{for:""}},[t._v("收件人信箱")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",attrs:{type:"email",required:""},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v("格式錯誤")])]),s("div",{staticClass:"col-md-8 col-12 mb-3"},[s("label",{attrs:{for:""}},[t._v("收件人地址")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v("格式錯誤")])]),s("div",{staticClass:"col-md-8 col-12 mb-3"},[s("label",{attrs:{for:"comment"}},[t._v("留言")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v("格式錯誤")])]),t._m(1)])])])])]),s("Footer")],1)},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th",[t._v("品名")]),s("th",[t._v("數量")]),s("th",{staticClass:"text-right",attrs:{colspan:"2"}},[t._v("單價")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"col-md-8 col-12 mb-3 text-right"},[s("button",{staticClass:"btn btn-content"},[t._v("送出訂單")])])}],i=(s("99af"),s("076e")),r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("nav",{staticClass:"col-md-3 col-lg-2 d-md-block bg-light"},[s("div",{staticClass:"pt-3"},[s("ul",{staticClass:"nav flex-column"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link link hvr-shutter-out-horizontal",attrs:{to:"/admin/products"}},[s("i",{staticClass:"fas fa-box-open"}),t._v(" 產品列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/checkList"}},[s("i",{staticClass:"far fa-list-alt"}),t._v(" 訂單列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[s("i",{staticClass:"fas fa-ticket-alt"}),t._v(" 優惠券 ")])],1)])])])])},n=[],c={},l=c,d=s("2877"),u=Object(d["a"])(l,r,n,!1,null,null,null),m=u.exports,v={components:{Sidebar:m,Footer:i["a"]},data:function(){return{isLoading:!1,cartList:{},couponCode:{code:""},message:"",form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{getCartList:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/cart");this.$http.get(a).then((function(a){t.cartList=a.data.data,console.log(a.data)}))},addCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/coupon");this.$http.post(a,{data:t.couponCode}).then((function(a){console.log(a.data),t.message=a.data.message,t.getCartList()}))},delCart:function(t){var a=this,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/cart/").concat(t);this.$http.delete(s).then((function(t){console.log(t.data),a.getCartList()}))},order:function(){var t=this,a=t.form,s="".concat("https://vue-course-api.hexschool.io","/api/").concat("jamesapi1","/order");this.$http.post(s,{data:a}).then((function(a){a.data.success&&(t.$router.push("checkout/".concat(a.data.orderId)),console.log(a.data))}))}},created:function(){this.getCartList()}},p=v,f=Object(d["a"])(p,e,o,!1,null,null,null);a["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0dd0ec.8658f779.js.map