(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-person-address"],{"03f8":function(t,e,i){"use strict";i.r(e);var s=i("b8f2"),n=i("981a");for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);i("6fc1");var d,o=i("f0c5"),l=Object(o["a"])(n["default"],s["b"],s["c"],!1,null,"23d644b4",null,!1,s["a"],d);e["default"]=l.exports},"36aa":function(t,e,i){var s=i("6c87");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("cec8d30a",s,!0,{sourceMap:!1,shadowMode:!1})},"6c87":function(t,e,i){var s=i("24fb");e=s(!1),e.push([t.i,".selectDialog[data-v-23d644b4]{position:absolute;margin:auto;bottom:0;right:0;left:0}.infoIcon[data-v-23d644b4]{position:absolute;left:%?20?%;line-height:%?120?%}.infoCard[data-v-23d644b4]{position:absolute;left:%?80?%;line-height:%?60?%}.info-edit[data-v-23d644b4]{position:absolute;right:%?50?%;line-height:%?120?% /*与父亲节点同一高度，设置垂直居中*/}.infoDetail[data-v-23d644b4]{position:absolute;left:%?80?%;line-height:%?150?%}\r\n\r\n/* .btn-edit{\r\n\twidth: 300rpx;\r\n}\r\n\r\n.btn-del{\r\n\twidth: 300rpx;\r\n} */",""]),t.exports=e},"6fc1":function(t,e,i){"use strict";var s=i("36aa"),n=i.n(s);n.a},"981a":function(t,e,i){"use strict";i.r(e);var s=i("d1ac"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,(function(){return s[t]}))}(a);e["default"]=n.a},b8f2:function(t,e,i){"use strict";var s;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return s}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("cu-custom",{attrs:{bgColor:"bg-blue",isBack:!0,isAdd:!0},on:{addClick:function(e){arguments[0]=e=t.$handleEvent(e),t.narBarAddBtnClick.apply(void 0,arguments)}}},[i("template",{attrs:{slot:"backText"},slot:"backText"},[t._v("Address")])],2),i("v-uni-view",{staticClass:"margin-bottom text-center padding-x solid-top"},t._l(t.addressList,(function(e,s){return i("v-uni-view",{key:s,staticClass:"bankInfo margin-tb-sm has-bg-white",staticStyle:{height:"120upx"}},[i("v-uni-view",[i("v-uni-text",{staticClass:"infoIcon cuIcon-location"}),i("v-uni-text",{staticClass:"infoCard"},[t._v(t._s(e.address))]),i("v-uni-text",{staticClass:"info-edit cuIcon-info",attrs:{"data-id":e.addressId},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onclickInfo.apply(void 0,arguments)}}})],1),i("v-uni-view",[i("v-uni-text",{staticClass:"infoDetail text-grey text-sm"},[t._v(t._s(e.info))])],1)],1)})),1),i("v-uni-view",{staticClass:"cu-modal",class:"editModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"selectDialog cu-dialog justify-center",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"text-left"},[i("v-uni-view",[i("v-uni-text",{staticClass:"modal-title padding-xs block"},[t._v("Select")])],1),i("v-uni-view",{staticClass:"padding block"},[i("v-uni-button",{staticClass:"btn-edit cu-btn bg-white cuIcon-writefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openModal.apply(void 0,arguments)}}},[t._v("Edit")])],1),i("v-uni-view",{staticClass:"padding block"},[i("v-uni-button",{staticClass:"btn-del cu-btn bg-white cuIcon-deletefill",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delModal.apply(void 0,arguments)}}},[t._v("Delete")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"delModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"delDialog cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-view",{staticClass:"text-left bg-white"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content",staticStyle:{"font-weight":"bold"}},[t._v("Confirm")])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"logout-text"},[t._v("Do you want to delete this address?")])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"delete-text"},[t._v(t._s(t.delAddressName))])],1),i("v-uni-view",{staticClass:"flex justify-end padding"},[i("v-uni-button",{staticClass:"cu-btn text-gray border",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeModal.apply(void 0,arguments)}}},[t._v("CANCEL")]),i("v-uni-button",{staticClass:"cu-btn text-blue border margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onclickDel.apply(void 0,arguments)}}},[t._v("DELETE")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-tabbar-height"})],1)},a=[]},d1ac:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{modalName:null,selectId:null,addressList:[],delAddressName:null}},onLoad:function(){this.initAddress()},methods:{narBarAddBtnClick:function(){this.$queue.enterPage("/pages/person/address","/pages/person/addAddress?title=Add Address")},onclickInfo:function(e){t("log","=======onclickInfo=======",JSON.stringify(e)," at pages/person/address.vue:93"),this.modalName="editModal",this.selectId=e.currentTarget.dataset.id},closeModal:function(){this.modalName=null},delModal:function(){this.modalName="delModal";for(var t=0;t<this.addressList.length;t++)this.selectId==this.addressList[t].id&&(this.delAddressName=this.addressList[t].fullName+this.addressList[t].mobileNumber)},onclickDel:function(){var e=this;this.modalName=null,this.$Request.postT("/user/delAddress?id="+this.selectId).then((function(i){t("log","==========res====",JSON.stringify(i)," at pages/person/address.vue:114"),1===i.res?(e.modalName=null,e.initAddress()):uni.showModal({showCancel:!1,title:"delete address fail",content:i.res.resMsg?i.res.resMsg:"Please try again"})}))},openModal:function(){for(var t={},e=0;e<this.addressList.length;e++)if(this.selectId==this.addressList[e].addressId){t=this.addressList[e];break}this.modalName=null;var i=encodeURIComponent(JSON.stringify(t));uni.navigateTo({url:"/pages/person/addAddress?title=Edit Address&msg="+i})},initAddress:function(){var e=this;this.addressList=[],this.$Request.postT("/user/findAddress").then((function(i){if(t("log","==========res====",JSON.stringify(i)," at pages/person/address.vue:148"),1===i.res){for(var s=0;s<i.obj.length;s++){var n=i.obj[s];n.info=n.detailAddress+" "+n.city+" "+n.state+" "+n.pincode,n.address=n.fullName+" "+n.mobileNumber,n.info}e.addressList=i.obj}else uni.showModal({showCancel:!1,title:"find address fail",content:i.res.resMsg?i.res.resMsg:"Please try again"})}))}}};e.default=i}).call(this,i("0de9")["log"])}}]);