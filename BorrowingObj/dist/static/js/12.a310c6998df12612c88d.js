webpackJsonp([12,73],{2:function(t,a,e){t.exports={default:e(3),__esModule:!0}},3:function(t,a,e){var i=e(4),s=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return s.stringify.apply(s,arguments)}},43:function(t,a,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var s=e(2),n=i(s);a.default={data:function(){return{data:{pic1:"",pic2:"",name:"",id:"",issued:"",valid:""},imgSrc:"https://cgtzimage.b0.upaiyun.com/projectTests//151800/00/00/81/2016/11/07/4EFEC782-8B33-7886-CE53-BBFCA82CE419.jpg"}},methods:{goSubmit:function(){var t=this;""===this.data.name||""===this.data.id?this.$dialog("请重拍身份证正面"):""===this.data.issued||""===this.data.valid?this.$dialog("请重拍身份证背面"):(this.$store.commit("uploadCreditStatu",{name:"userIdpic",val:!0}),this.$store.commit("uploadCreditData",{name:"userIdpic",val:(0,n.default)(this.data)}),this.$dialog(["保存成功","true"]),setTimeout(function(){t.$router.back()},2e3))},getPic1:function(){this.data.pic1=this.imgSrc,this.data.name="测试数据",this.data.id="320721199010022431"},getPic2:function(){this.data.pic2=this.imgSrc,this.data.issued="杭州市余杭区五常派出所",this.data.valid="2020-10-20"}},mounted:function(){this.$store.state.creditStatus.userIdpic===!0&&(void 0!==this.$store.state.creditDatas.userIdpic?this.data=JSON.parse(this.$store.state.creditDatas.userIdpic):console.log("发送ajax"))}}},188:function(t,a,e){var i=e(1)(e(43),e(322),null,null);t.exports=i.exports},322:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("topComponent",{attrs:{title:"身份认证"}}),t._v(" "),e("p",{staticClass:"listTop"},[t._v("请拍摄身份证正反两面，以便确认身份")]),t._v(" "),e("ul",{staticClass:"photoCamera"},[e("li",{staticClass:"facade",class:{noCamera:""===t.data.pic1}},[e("i",{staticClass:"cameraIcon",on:{click:t.getPic1}},[t._v("正面")]),t._v(" "),""!==t.data.pic1?e("img",{attrs:{src:t.data.pic1}}):t._e()]),t._v(" "),e("li",{staticClass:"obverse",class:{noCamera:""===t.data.pic2}},[e("i",{staticClass:"cameraIcon",on:{click:t.getPic2}},[t._v("拍照")]),t._v(" "),""!==t.data.pic2?e("img",{attrs:{src:t.data.pic2}}):t._e()])]),t._v(" "),e("ul",{staticClass:"formCom mt20"},[t._m(0),t._v(" "),e("li",[e("label",[e("span",[t._v("姓名")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.name,expression:"data.name"}],attrs:{type:"text",placeholder:"请点击上方按钮拍照识别",readonly:"readonly"},domProps:{value:t.data.name},on:{input:function(a){a.target.composing||t.$set(t.data,"name",a.target.value)}}})])]),t._v(" "),e("li",[e("label",[e("span",[t._v("身份证")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.id,expression:"data.id"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.data.id},on:{input:function(a){a.target.composing||t.$set(t.data,"id",a.target.value)}}})])]),t._v(" "),e("li",[e("label",[e("span",[t._v("签发机关")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.issued,expression:"data.issued"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.data.issued},on:{input:function(a){a.target.composing||t.$set(t.data,"issued",a.target.value)}}})])]),t._v(" "),e("li",[e("label",[e("span",[t._v("有效期限")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.data.valid,expression:"data.valid"}],attrs:{type:"text",readonly:"readonly"},domProps:{value:t.data.valid},on:{input:function(a){a.target.composing||t.$set(t.data,"valid",a.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"btnWarp"},[e("span",{staticClass:"subBtn",on:{click:t.goSubmit}},[t._v("确认")])])],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",[e("div",[t._v("请确认身份证信息，如"),e("span",{staticClass:"red"},[t._v("有误请重拍")])])])}]}}});