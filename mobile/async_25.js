(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[25],{129:function(t,o,n){"use strict";n.r(o);var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("fs-group",{attrs:{title:"alert"}},[n("fs-button",{on:{click:function(o){return t.dialog({title:"提示",message:"单行提示",showCloseIcon:!0})}}},[t._v("\n        消息提示-单行\n      ")]),n("fs-button",{staticClass:"mgl15",on:{click:function(o){return t.dialog({title:"提示",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"})}}},[t._v("\n        消息提示-多行\n      ")])],1),n("fs-group",{attrs:{title:"confirm"}},[n("fs-button",{on:{click:function(o){return t.dialog({type:"confirm",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"})}}},[t._v("确认")]),n("fs-button",{staticClass:"mgl15",on:{click:function(o){return t.dialog({type:"confirm",confirmButtonText:"保存",cancelButtonText:"不保存",title:"提示",message:"消息提示"})}}},[t._v("确认-单行")]),n("fs-button",{staticClass:"mgl15",on:{click:function(o){return t.dialog({type:"confirm",title:"提示",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"})}}},[t._v("\n        确认-多行\n      ")])],1),n("fs-group",{attrs:{title:"居左"}},[n("fs-button",{on:{click:function(o){return t.dialog({title:"提示",align:"left",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"})}}},[t._v("\n        消息提示-多行\n      ")]),n("fs-button",{staticClass:"mgl15",on:{click:function(o){return t.dialog({type:"confirm",align:"left",title:"提示",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"})}}},[t._v("\n      消息确认\n      ")])],1),n("fs-group",{attrs:{title:"高级用法"}},[n("fs-button",{on:{click:t.highDialog}},[t._v("消息确认")]),n("fs-button",{staticStyle:{"margin-left":"15px"},on:{click:t.prefixDialog}},[t._v("图片前缀")])],1),n("fs-dialog",{model:{value:t.show,callback:function(o){t.show=o},expression:"show"}},[n("fs-input",{attrs:{label:"用户名",placeholder:"请输入用户名"},model:{value:t.val2,callback:function(o){t.val2=o},expression:"val2"}},[n("span",{staticClass:"fs-input-prefix",attrs:{slot:"prefix"},slot:"prefix"},[n("i",{staticClass:"red"},[t._v("*")])])]),n("fs-input",{attrs:{type:"password"},model:{value:t.val3,callback:function(o){t.val3=o},expression:"val3"}})],1),n("fs-dialog",{attrs:{title:"标题单行",type:"alert",message:"说明当前状态、提示用户解决方案，最好不要超过两行。"},model:{value:t.show2,callback:function(o){t.show2=o},expression:"show2"}},[n("div",{staticClass:"dialog-prefix",attrs:{slot:"prefix"},slot:"prefix"},[n("span",{staticClass:"dialog-close",on:{click:function(o){t.show2=!1}}},[n("fs-icon",{attrs:{name:"error"}})],1),n("img",{attrs:{src:"https://dummyimage.com/600x400/000/fff",alt:"",width:"60%"}})])]),n("fs-dialog",{attrs:{align:"left",showCloseIcon:"",title:"自定义footer",message:"描述文字的字数尽量控制在三行\n内，并且单行最右侧尽量不要是\n标点符号。。"},model:{value:t.show3,callback:function(o){t.show3=o},expression:"show3"}},[n("div",{staticClass:"dialog-customer-footer",attrs:{slot:"footer"},slot:"footer"},[n("a",{on:{click:function(o){o.stopPropagation(),t.show3=!1}}},[t._v("取消")]),n("a",{on:{click:function(o){o.stopPropagation(),t.show3=!1}}},[t._v("确定")])])]),n("fs-dialog",{attrs:{align:"left",type:"alert",title:"自定义footer",message:"描述文字的字数尽量控制在三行\n内，并且单行最右侧尽量不要是\n标点符号。。"},model:{value:t.show4,callback:function(o){t.show4=o},expression:"show4"}},[n("div",{staticClass:"dialog-customer-footer",attrs:{slot:"footer"},slot:"footer"},[n("a",{on:{click:function(o){o.stopPropagation(),t.show4=!1}}},[t._v("确定")])])]),n("fs-group",{attrs:{title:"自定义footer"}},[n("fs-button",{on:{click:function(o){t.show3=!0}}},[t._v("消息确认")]),n("fs-button",{staticClass:"mgl15",on:{click:function(o){t.show4=!0}}},[t._v("消息提示")])],1)],1)};s._withStripped=!0;var i={name:"index",data:function(){return{show:!1,show2:!1,show3:!1,show4:!1,val2:"",val3:""}},methods:{dialog:function(t){this.$dialog(t).then(function(t){console.log("我确定了")}).catch(function(t){console.log("我取消了")})},highDialog:function(){this.show=!0},prefixDialog:function(){this.show2=!0}}},e=(n(96),n(1)),l=Object(e.a)(i,s,[],!1,null,null,null);l.options.__file="packages/dialog/demo/index.vue";o.default=l.exports},58:function(t,o,n){var s=n(97);"string"==typeof s&&(s=[[t.i,s,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(19)(s,i);s.locals&&(t.exports=s.locals)},96:function(t,o,n){"use strict";var s=n(58);n.n(s).a},97:function(t,o,n){(t.exports=n(15)(!1)).push([t.i,"\n.mgl15 {\n  margin-left: 15px;\n}\n.dialog-prefix {\n  margin: 20px;\n}\n.dialog-close {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  display: inline-block;\n  padding: 6px;\n  color: #999;\n  font-size: 18px;\n}\n.dialog-customer-footer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n          justify-content: flex-end;\n  width: 100%;\n}\n.dialog-customer-footer a {\n  margin-right: 25px;\n  color: #e83e43;\n  font-size: 18px;\n}\n",""])}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvZGlhbG9nL2RlbW8vaW5kZXgudnVlP2MxYTIiLCJ3ZWJwYWNrOi8vZnN1aS9wYWNrYWdlcy9kaWFsb2cvZGVtby9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2RpYWxvZy9kZW1vL2luZGV4LnZ1ZT8wODdhIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9kaWFsb2cvZGVtby9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL2RpYWxvZy9kZW1vL2luZGV4LnZ1ZT8wYzEzIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9kaWFsb2cvZGVtby9pbmRleC52dWU/YjNhNiIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvZGlhbG9nL2RlbW8vaW5kZXgudnVlPzIyZTYiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJ0aXRsZSIsIm9uIiwiY2xpY2siLCIkZXZlbnQiLCJkaWFsb2ciLCJtZXNzYWdlIiwic2hvd0Nsb3NlSWNvbiIsIl92Iiwic3RhdGljQ2xhc3MiLCJ0eXBlIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiYWxpZ24iLCJoaWdoRGlhbG9nIiwic3RhdGljU3R5bGUiLCJtYXJnaW4tbGVmdCIsInByZWZpeERpYWxvZyIsIm1vZGVsIiwidmFsdWUiLCJzaG93IiwiY2FsbGJhY2siLCIkJHYiLCJleHByZXNzaW9uIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInZhbDIiLCJzbG90IiwidmFsMyIsInNob3cyIiwibmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwic2hvdzMiLCJzdG9wUHJvcGFnYXRpb24iLCJzaG93NCIsIl93aXRoU3RyaXBwZWQiLCJkaWFsb2dfZGVtb3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyIsImRhdGEiLCJtZXRob2RzIiwib3B0IiwiJGRpYWxvZyIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50IiwiT2JqZWN0IiwiY29tcG9uZW50Tm9ybWFsaXplciIsIm9wdGlvbnMiLCJfX2ZpbGUiLCJfX3dlYnBhY2tfZXhwb3J0c19fIiwiY29udGVudCIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGUiLCJpIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyIsImV4cG9ydHMiLCJfbm9kZV9tb2R1bGVzX3N0eWxlX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfY3NzX2xvYWRlcl9pbmRleF9qc19ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfbG9hZGVyc19zdHlsZVBvc3RMb2FkZXJfanNfbm9kZV9tb2R1bGVzX3Bvc3Rjc3NfbG9hZGVyX3NyY19pbmRleF9qc19ub2RlX21vZHVsZXNfdnVlX2xvYWRlcl9saWJfaW5kZXhfanNfdnVlX2xvYWRlcl9vcHRpb25zX2luZGV4X3Z1ZV92dWVfdHlwZV9zdHlsZV9pbmRleF8wX2xhbmdfY3NzX19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fIiwibiIsInB1c2giXSwibWFwcGluZ3MiOiJzR0FBQSxJQUFBQSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsQ0FDQUEsRUFDQSxXQUNBLENBQVNFLE1BQUEsQ0FBU0MsTUFBQSxVQUNsQixDQUNBSCxFQUNBLFlBQ0EsQ0FDQUksR0FBQSxDQUNBQyxNQUFBLFNBQUFDLEdBQ0EsT0FBQVYsRUFBQVcsT0FBQSxDQUNBSixNQUFBLEtBQ0FLLFFBQUEsT0FDQUMsZUFBQSxPQUtBLENBQUFiLEVBQUFjLEdBQUEsK0JBRUFWLEVBQ0EsWUFDQSxDQUNBVyxZQUFBLFFBQ0FQLEdBQUEsQ0FDQUMsTUFBQSxTQUFBQyxHQUNBLE9BQUFWLEVBQUFXLE9B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QUFBLENBQWNWLEVBQUFDLEVBQVMsMmhCQUF5aEIiLCJmaWxlIjoiYXN5bmNfMjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJhbGVydFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmcy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIuWNleihjOaPkOekulwiLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2xvc2VJY29uOiB0cnVlXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIOa2iOaBr+aPkOekui3ljZXooYxcXG4gICAgICBcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZnMtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1nbDE1XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgICBcIuivtOaYjuW9k+WJjeeKtuaAgeOAgeaPkOekuueUqOaIt+ino+WGs+aWueahiO+8jOacgOWlveS4jeimgei2hei/h+S4pOihjOOAglwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIOa2iOaBr+aPkOekui3lpJrooYxcXG4gICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCJjb25maXJtXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb25maXJtXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgXCLor7TmmI7lvZPliY3nirbmgIHjgIHmj5DnpLrnlKjmiLfop6PlhrPmlrnmoYjvvIzmnIDlpb3kuI3opoHotoXov4fkuKTooYzjgIJcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZ2wxNVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJjb25maXJtXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIuS/neWtmFwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIuS4jeS/neWtmFwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLmtojmga/mj5DnpLpcIlxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kLeWNleihjFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmcy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWdsMTVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICAgICAgICAgICAgICBcIuivtOaYjuW9k+WJjeeKtuaAgeOAgeaPkOekuueUqOaIt+ino+WGs+aWueahiO+8jOacgOWlveS4jeimgei2hei/h+S4pOihjOOAglwiXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIOehruiupC3lpJrooYxcXG4gICAgICBcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZnMtZ3JvdXBcIixcbiAgICAgICAgeyBhdHRyczogeyB0aXRsZTogXCLlsYXlt6ZcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZnMtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICAgIFwi6K+05piO5b2T5YmN54q25oCB44CB5o+Q56S655So5oi36Kej5Yaz5pa55qGI77yM5pyA5aW95LiN6KaB6LaF6L+H5Lik6KGM44CCXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAg5raI5oGv5o+Q56S6LeWkmuihjFxcbiAgICAgIFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmcy1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWdsMTVcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiY29uZmlybVwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuaPkOekulwiLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgICAgICAgICAgICAgIFwi6K+05piO5b2T5YmN54q25oCB44CB5o+Q56S655So5oi36Kej5Yaz5pa55qGI77yM5pyA5aW95LiN6KaB6LaF6L+H5Lik6KGM44CCXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgIOa2iOaBr+ehruiupFxcbiAgICAgIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumrmOe6p+eUqOazlVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtYnV0dG9uXCIsIHsgb246IHsgY2xpY2s6IF92bS5oaWdoRGlhbG9nIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5raI5oGv56Gu6K6kXCIpXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1sZWZ0XCI6IFwiMTVweFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucHJlZml4RGlhbG9nIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5Zu+54mH5YmN57yAXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvdyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmcy1pbnB1dFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCLnlKjmiLflkI1cIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWl55So5oi35ZCNXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbDIsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnZhbDIgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsMlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZzLWlucHV0LXByZWZpeFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJwcmVmaXhcIiB9LFxuICAgICAgICAgICAgICAgICAgc2xvdDogXCJwcmVmaXhcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcInJlZFwiIH0sIFtfdm0uX3YoXCIqXCIpXSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJwYXNzd29yZFwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbDMsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0udmFsMyA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbDNcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0aXRsZTogXCLmoIfpopjljZXooYxcIixcbiAgICAgICAgICAgIHR5cGU6IFwiYWxlcnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+05piO5b2T5YmN54q25oCB44CB5o+Q56S655So5oi36Kej5Yaz5pa55qGI77yM5pyA5aW95LiN6KaB6LaF6L+H5Lik6KGM44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3cyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvdzIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3cyXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpYWxvZy1wcmVmaXhcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJwcmVmaXhcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcInByZWZpeFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkaWFsb2ctY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvdzIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJmcy1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJlcnJvclwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzcmM6IFwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS82MDB4NDAwLzAwMC9mZmZcIixcbiAgICAgICAgICAgICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjYwJVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWRpYWxvZ1wiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcbiAgICAgICAgICAgIHNob3dDbG9zZUljb246IFwiXCIsXG4gICAgICAgICAgICB0aXRsZTogXCLoh6rlrprkuYlmb290ZXJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwi5o+P6L+w5paH5a2X55qE5a2X5pWw5bC96YeP5o6n5Yi25Zyo5LiJ6KGMXFxu5YaF77yM5bm25LiU5Y2V6KGM5pyA5Y+z5L6n5bC96YeP5LiN6KaB5pivXFxu5qCH54K556ym5Y+344CC44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3czLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvdzMgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3czXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpYWxvZy1jdXN0b21lci1mb290ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImZvb3RlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3czID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93MyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7lrppcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1kaWFsb2dcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXG4gICAgICAgICAgICB0eXBlOiBcImFsZXJ0XCIsXG4gICAgICAgICAgICB0aXRsZTogXCLoh6rlrprkuYlmb290ZXJcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICAgICAgIFwi5o+P6L+w5paH5a2X55qE5a2X5pWw5bC96YeP5o6n5Yi25Zyo5LiJ6KGMXFxu5YaF77yM5bm25LiU5Y2V6KGM5pyA5Y+z5L6n5bC96YeP5LiN6KaB5pivXFxu5qCH54K556ym5Y+344CC44CCXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3c0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvdzQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3c0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRpYWxvZy1jdXN0b21lci1mb290ZXJcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgICAgICBzbG90OiBcImZvb3RlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3c0ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuehruWumlwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi6Ieq5a6a5LmJZm9vdGVyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93MyA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5raI5oGv56Gu6K6kXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtZ2wxNVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93NCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5raI5oGv5o+Q56S6XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxmcy1ncm91cCB0aXRsZT1cImFsZXJ0XCI+XG4gICAgICA8ZnMtYnV0dG9uXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIG1lc3NhZ2U6ICfljZXooYzmj5DnpLonLFxuICAgICAgICAgIHNob3dDbG9zZUljb246IHRydWVcbiAgICAgICAgfSlcIlxuICAgICAgPlxuICAgICAgICDmtojmga/mj5DnpLot5Y2V6KGMXG4gICAgICA8L2ZzLWJ1dHRvbj5cbiAgICAgIDxmcy1idXR0b25cbiAgICAgICAgY2xhc3M9XCJtZ2wxNVwiXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIG1lc3NhZ2U6ICfor7TmmI7lvZPliY3nirbmgIHjgIHmj5DnpLrnlKjmiLfop6PlhrPmlrnmoYjvvIzmnIDlpb3kuI3opoHotoXov4fkuKTooYzjgIInXG4gICAgICAgIH0pXCJcbiAgICAgID5cbiAgICAgICAg5raI5oGv5o+Q56S6LeWkmuihjFxuICAgICAgPC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCJjb25maXJtXCI+XG4gICAgICA8ZnMtYnV0dG9uXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgIG1lc3NhZ2U6ICfor7TmmI7lvZPliY3nirbmgIHjgIHmj5DnpLrnlKjmiLfop6PlhrPmlrnmoYjvvIzmnIDlpb3kuI3opoHotoXov4fkuKTooYzjgIInXG4gICAgICAgIH0pXCJcbiAgICAgID7noa7orqQ8L2ZzLWJ1dHRvbj5cbiAgICAgIDxmcy1idXR0b25cbiAgICAgICAgY2xhc3M9XCJtZ2wxNVwiXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiAn5L+d5a2YJyxcbiAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiAn5LiN5L+d5a2YJyxcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgbWVzc2FnZTogJ+a2iOaBr+aPkOekuidcbiAgICAgICAgfSlcIlxuICAgICAgPuehruiupC3ljZXooYw8L2ZzLWJ1dHRvbj5cbiAgICAgIDxmcy1idXR0b25cbiAgICAgICAgY2xhc3M9XCJtZ2wxNVwiXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICBtZXNzYWdlOiAn6K+05piO5b2T5YmN54q25oCB44CB5o+Q56S655So5oi36Kej5Yaz5pa55qGI77yM5pyA5aW95LiN6KaB6LaF6L+H5Lik6KGM44CCJ1xuICAgICAgICB9KVwiXG4gICAgICA+XG4gICAgICAgIOehruiupC3lpJrooYxcbiAgICAgIDwvZnMtYnV0dG9uPlxuICAgIDwvZnMtZ3JvdXA+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi5bGF5bemXCI+XG4gICAgICA8ZnMtYnV0dG9uXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgbWVzc2FnZTogJ+ivtOaYjuW9k+WJjeeKtuaAgeOAgeaPkOekuueUqOaIt+ino+WGs+aWueahiO+8jOacgOWlveS4jeimgei2hei/h+S4pOihjOOAgidcbiAgICAgICAgfSlcIlxuICAgICAgPlxuICAgICAgICDmtojmga/mj5DnpLot5aSa6KGMXG4gICAgICA8L2ZzLWJ1dHRvbj5cbiAgICAgIDxmcy1idXR0b25cbiAgICAgICAgY2xhc3M9XCJtZ2wxNVwiXG4gICAgICAgIEBjbGljaz1cImRpYWxvZyh7XG4gICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgIG1lc3NhZ2U6ICfor7TmmI7lvZPliY3nirbmgIHjgIHmj5DnpLrnlKjmiLfop6PlhrPmlrnmoYjvvIzmnIDlpb3kuI3opoHotoXov4fkuKTooYzjgIInXG4gICAgICAgIH0pXCJcbiAgICAgID5cbiAgICAgIOa2iOaBr+ehruiupFxuICAgICAgPC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLpq5jnuqfnlKjms5VcIj5cbiAgICAgIDxmcy1idXR0b24gQGNsaWNrPVwiaGlnaERpYWxvZ1wiPua2iOaBr+ehruiupDwvZnMtYnV0dG9uPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJwcmVmaXhEaWFsb2dcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4O1wiPuWbvueJh+WJjee8gDwvZnMtYnV0dG9uPlxuICAgIDwvZnMtZ3JvdXA+XG4gICAgPGZzLWRpYWxvZyB2LW1vZGVsPVwic2hvd1wiPlxuICAgICAgPGZzLWlucHV0IHYtbW9kZWw9XCJ2YWwyXCIgbGFiZWw9XCLnlKjmiLflkI1cIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeeUqOaIt+WQjVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImZzLWlucHV0LXByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cInJlZFwiPio8L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZnMtaW5wdXQ+XG4gICAgICA8ZnMtaW5wdXQgdi1tb2RlbD1cInZhbDNcIiB0eXBlPVwicGFzc3dvcmRcIj48L2ZzLWlucHV0PlxuICAgIDwvZnMtZGlhbG9nPlxuICAgIDxmcy1kaWFsb2cgdi1tb2RlbD1cInNob3cyXCIgdGl0bGU9XCLmoIfpopjljZXooYxcIiB0eXBlPVwiYWxlcnRcIiBtZXNzYWdlPVwi6K+05piO5b2T5YmN54q25oCB44CB5o+Q56S655So5oi36Kej5Yaz5pa55qGI77yM5pyA5aW95LiN6KaB6LaF6L+H5Lik6KGM44CCXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJwcmVmaXhcIiBjbGFzcz1cImRpYWxvZy1wcmVmaXhcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkaWFsb2ctY2xvc2VcIiBAY2xpY2s9XCJzaG93Mj1mYWxzZVwiPjxmcy1pY29uIG5hbWU9XCJlcnJvclwiLz48L3NwYW4+XG4gICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kdW1teWltYWdlLmNvbS82MDB4NDAwLzAwMC9mZmZcIiBhbHQ9XCJcIiB3aWR0aD1cIjYwJVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9mcy1kaWFsb2c+XG4gICAgPGZzLWRpYWxvZyB2LW1vZGVsPVwic2hvdzNcIiBhbGlnbj1cImxlZnRcIiBzaG93Q2xvc2VJY29uIHRpdGxlPVwi6Ieq5a6a5LmJZm9vdGVyXCIgbWVzc2FnZT1cIuaPj+i/sOaWh+Wtl+eahOWtl+aVsOWwvemHj+aOp+WItuWcqOS4ieihjFxu5YaF77yM5bm25LiU5Y2V6KGM5pyA5Y+z5L6n5bC96YeP5LiN6KaB5pivXG7moIfngrnnrKblj7fjgILjgIJcIj5cbiAgICAgIDxkaXYgc2xvdD1cImZvb3RlclwiIGNsYXNzPVwiZGlhbG9nLWN1c3RvbWVyLWZvb3RlclwiPlxuICAgICAgICA8YSBAY2xpY2suc3RvcD1cInNob3czPWZhbHNlXCI+5Y+W5raIPC9hPlxuICAgICAgICA8YSBAY2xpY2suc3RvcD1cInNob3czPWZhbHNlXCI+56Gu5a6aPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9mcy1kaWFsb2c+XG4gICAgPGZzLWRpYWxvZyB2LW1vZGVsPVwic2hvdzRcIiBhbGlnbj1cImxlZnRcIiB0eXBlPVwiYWxlcnRcIiB0aXRsZT1cIuiHquWumuS5iWZvb3RlclwiIG1lc3NhZ2U9XCLmj4/ov7DmloflrZfnmoTlrZfmlbDlsL3ph4/mjqfliLblnKjkuInooYxcbuWGhe+8jOW5tuS4lOWNleihjOacgOWPs+S+p+WwvemHj+S4jeimgeaYr1xu5qCH54K556ym5Y+344CC44CCXCI+XG4gICAgICA8ZGl2IHNsb3Q9XCJmb290ZXJcIiBjbGFzcz1cImRpYWxvZy1jdXN0b21lci1mb290ZXJcIj5cbiAgICAgICAgPGEgQGNsaWNrLnN0b3A9XCJzaG93ND1mYWxzZVwiPuehruWumjwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZnMtZGlhbG9nPlxuICAgIDxmcy1ncm91cCB0aXRsZT1cIuiHquWumuS5iWZvb3RlclwiPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJzaG93Mz10cnVlXCI+5raI5oGv56Gu6K6kPC9mcy1idXR0b24+XG4gICAgICA8ZnMtYnV0dG9uIGNsYXNzPVwibWdsMTVcIiBAY2xpY2s9XCJzaG93ND10cnVlXCI+5raI5oGv5o+Q56S6PC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnaW5kZXgnLFxuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBzaG93MjogZmFsc2UsXG4gICAgICBzaG93MzogZmFsc2UsXG4gICAgICBzaG93NDogZmFsc2UsXG4gICAgICB2YWwyOiAnJyxcbiAgICAgIHZhbDM6ICcnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZGlhbG9nIChvcHQpIHtcbiAgICAgIHRoaXMuJGRpYWxvZyhvcHQpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ+aIkeehruWumuS6hicpXG4gICAgICB9KS5jYXRjaChyZXMgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygn5oiR5Y+W5raI5LqGJylcbiAgICAgIH0pXG4gICAgfSxcbiAgICBoaWdoRGlhbG9nICgpIHtcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcbiAgICB9LFxuICAgIHByZWZpeERpYWxvZyAoKSB7XG4gICAgICB0aGlzLnNob3cyID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gIC5tZ2wxNSB7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLmRpYWxvZy1wcmVmaXgge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAuZGlhbG9nLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuICAuZGlhbG9nLWN1c3RvbWVyLWZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5kaWFsb2ctY3VzdG9tZXItZm9vdGVyIGEge1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICBjb2xvcjogI2U4M2U0MztcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY5OWEyYjkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tZWRpYS9vbmx5c3Rhci/otYTmlpkv57uE5Lu25bqTL2ZzLXVpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNjk5YTJiOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNjk5YTJiOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2OTlhMmI5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2OTlhMmI5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWNrYWdlcy9kaWFsb2cvZGVtby9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tZ2wxNSB7XFxuICBtYXJnaW4tbGVmdDogMTVweDtcXG59XFxuLmRpYWxvZy1wcmVmaXgge1xcbiAgbWFyZ2luOiAyMHB4O1xcbn1cXG4uZGlhbG9nLWNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNXB4O1xcbiAgcmlnaHQ6IDVweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGNvbG9yOiAjOTk5O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uZGlhbG9nLWN1c3RvbWVyLWZvb3RlciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1wYWNrOiBlbmQ7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmRpYWxvZy1jdXN0b21lci1mb290ZXIgYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxuICBjb2xvcjogI2U4M2U0MztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIl0sInNvdXJjZVJvb3QiOiIifQ==