(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3dc9"],{"5f24":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",[e._v("本页面内容均为测试功能，暂不提供稳定性保证")]),i("a-divider"),i("div",{staticClass:"multi-tab-test"},[i("h4",[e._v("多标签组件测试功能")]),i("a-button",{staticStyle:{"margin-right":"16px"},on:{click:e.handleCloseCurrentTab}},[e._v("关闭当前页")]),i("a-button",{staticStyle:{"margin-right":"16px"},on:{click:e.handleOpenTab}},[e._v("打开 任务列表")]),i("a-popconfirm",{attrs:{visible:e.visible,okText:"确定",cancelText:"取消"},on:{confirm:e.confirm,cancel:e.cancel},scopedSlots:e._u([{key:"title",fn:function(){return[i("div",[i("a-form",{attrs:{form:e.form,layout:"inline"}},[i("a-form-item",{attrs:{label:"自定义名称"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tabName",{rules:[{required:!0,message:"请输入新的 Tab 名称"}]}],expression:"['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]"}]})],1)],1)],1)]},proxy:!0}])},[i("a-button",{staticStyle:{"margin-right":"16px"},on:{click:function(){return e.visible=!e.visible}}},[e._v("修改当前 Tab 名称")])],1),i("a-popconfirm",{attrs:{visible:e.visible2,okText:"确定",cancelText:"取消"},on:{confirm:e.confirm2,cancel:function(){return e.visible2=!1}},scopedSlots:e._u([{key:"title",fn:function(){return[i("div",[i("p",[e._v("页面 KEY 是由页面的路由 "),i("code",[e._v("path")]),e._v(" 决定的")]),i("p",[e._v("如果要修改某一个页面标题，该页面必须已经被打开在 Tab 栏")]),i("p",[e._v("后期可以考虑优化到编程式 Tab 栏，就可以没有这种限制")]),i("a-form",{attrs:{form:e.form2,layout:"inline"}},[i("a-form-item",{attrs:{label:"页面KEY"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tabKey",{initialValue:"/dashboard/workplace"}],expression:"['tabKey', { initialValue: '/dashboard/workplace' }]"}]})],1),i("a-form-item",{attrs:{label:"自定义名称"}},[i("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tabName",{rules:[{required:!0,message:"请输入新的 Tab 名称"}]}],expression:"['tabName', {rules: [{required: true, message: '请输入新的 Tab 名称'}]}]"}]})],1)],1)],1)]},proxy:!0}])},[i("a-button",{on:{click:function(){return e.visible2=!e.visible2}}},[e._v("修改某一个 Tab 名称")])],1)],1),i("a-divider"),i("div",{staticClass:"page-loading-test"},[i("h4",[e._v("全局遮罩测试")]),i("a-button",{staticStyle:{"margin-right":"16px"},on:{click:e.handleOpenLoading}},[e._v("打开遮罩(5s 自动关闭)")]),i("a-button",{on:{click:e.handleOpenLoadingCustomTip}},[e._v("打开遮罩(自定义提示语)")])],1)],1)},n=[],o={name:"TestWork",data:function(){return{visible:!1,visible2:!1}},created:function(){this.form=this.$form.createForm(this),this.form2=this.$form.createForm(this)},methods:{handleCloseCurrentTab:function(){this.$multiTab.closeCurrentPage()},handleOpenTab:function(){this.$multiTab.open("/features/task")},handleOpenLoading:function(){var e=this;this.$nextTick((function(){})),this.$loading.show(),setTimeout((function(){e.$loading.hide()}),5e3)},handleOpenLoadingCustomTip:function(){var e=this;this.$loading.show({tip:"自定义提示语"}),setTimeout((function(){e.$loading.hide()}),5e3)},confirm:function(e){var t=this;e.stopPropagation();var i=this.$route.path;this.form.validateFields((function(e,a){e||(t.$multiTab.rename(i,a.tabName),t.visible=!1)}))},cancel:function(){this.visible=!1},confirm2:function(e){var t=this;e.stopPropagation(),this.form2.validateFields((function(e,i){e||(t.$multiTab.rename(i.tabKey,i.tabName),t.visible2=!1)}))}}},r=o,s=i("2877"),l=Object(s["a"])(r,a,n,!1,null,"dcab48e8",null);t["default"]=l.exports}}]);