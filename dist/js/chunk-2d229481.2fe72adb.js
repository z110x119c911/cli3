(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229481"],{dd7b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",{staticClass:"nav justify-content-end"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link text-nav",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.userlogout()}}},[t._v("登出")])])]),s("div",{staticClass:"row no-gutters justify-content-center"},[s("div",{staticClass:"col-8 col-md-4 pt-5"},[s("form",{staticClass:"needs-validation",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.userLogin(e)}}},[t._m(0),s("div",{staticClass:"form-label-group"},[s("label",{attrs:{for:""}},[t._v("帳號")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v(" 未填寫 ")])]),s("div",{staticClass:"form-label-group"},[s("label",{attrs:{for:""}},[t._v("密碼")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),s("div",{staticClass:"invalid-feedback"},[t._v(" 未填寫 ")])]),s("button",{staticClass:"btn btn-lg btn-content btn-block mt-3",attrs:{type:"submit"}},[t._v("Sign in")])])])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center mb-4"},[s("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("登入")]),s("p",[t._v("歡迎登入")])])}],o=(s("99af"),{data:function(){return{user:{username:"",password:""}}},methods:{userLogin:function(){var t="".concat("https://vue-course-api.hexschool.io","/admin/signin"),e=this;this.$http.post(t,e.user).then((function(t){if(t.data.success){var s=t.data.token,a=t.data.expired;document.cookie="hexToken_1=".concat(s,"; expires=").concat(new Date(a),";"),console.log(t.data),e.$router.push("/admin")}else console.log(t.data),alert("帳號或密碼錯誤")}))},userlogout:function(){var t="".concat("https://vue-course-api.hexschool.io","/logout"),e=this;this.$http.post(t).then((function(t){t.data.success?(console.log(t.data),e.$router.push("/"),alert("您已登出")):console.log(t.data)}))}}}),r=o,i=s("2877"),u=Object(i["a"])(r,a,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d229481.2fe72adb.js.map