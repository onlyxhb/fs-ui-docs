(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[29],{150:function(e,t,d){"use strict";d.r(t);var i=function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",[d("fs-group",{attrs:{title:"选择地区"}},[d("fs-input",{attrs:{placeholder:"请选择地区",readonly:"",value:e.formatAddress1},nativeOn:{click:function(t){e.show1=!0}}}),d("fs-linkage",{attrs:{data:e.currentData1,"text-key":"title","value-key":"code","columns-num":2,show:e.show1},on:{"update:show":function(t){e.show1=t},"change-select":e.requestAddress1},model:{value:e.address1,callback:function(t){e.address1=t},expression:"address1"}})],1),d("fs-group",{attrs:{title:"带初始值"}},[d("fs-input",{attrs:{placeholder:"请选择地区",readonly:"",value:e.formatAddress2},nativeOn:{click:function(t){e.show2=!0}}}),d("fs-linkage",{attrs:{data:e.currentData2,"text-key":"title","value-key":"code",show:e.show2},on:{"update:show":function(t){e.show2=t},"change-select":e.requestAddress2},model:{value:e.address2,callback:function(t){e.address2=t},expression:"address2"}})],1)],1)};i._withStripped=!0;var s=function(e){return new Promise(function(t,d){setTimeout(function(){0===e&&t([{title:"吉林省",id:1,code:"110000"},{title:"湖北省",id:2,code:"120000"},{title:"浙江省",id:3,code:"130000"},{title:"甘肃省",id:4,code:"140000"},{title:"海南省",id:5,code:"150000"},{title:"湖南",id:6,code:"160000"},{title:"黑龙江",id:7,code:"170000"},{title:"新疆",id:8,code:"180000"},{title:"西藏",id:9,code:"190000"},{title:"青海省",id:10,code:"200000"},{title:"广东省",id:11,code:"210000"},{title:"广西省",id:12,code:"220000"},{title:"安徽省",id:13,code:"230000"},{title:"辽宁省",id:14,code:"240000"},{title:"河北省",id:15,code:"250000"}]),1===e&&t([{title:"长春市",code:"100100"},{title:"武汉市",code:"110100"},{title:"天水市",code:"120100"},{title:"杭州市",code:"120100"},{title:"兰州市",code:"140100"}]),2===e&&t([{title:"九台区",code:"100101"},{title:"泗水县",code:"110101"},{title:"黄梅县",code:"120101"},{title:"西湖区",code:"130101"},{title:"余杭区",code:"140101"}]),3===e&&t([])},1e3)})},n={data:function(){return{address1:[],address2:[{id:"220000",title:"吉林省"},{id:"220100",title:"长春市"},{id:"220113",title:"九台区"}],currentData1:[],currentData2:[],show1:!1,show2:!1}},computed:{formatAddress1:function(){return this.address1&&this.address1.length?this.address1.map(function(e){return e.title}).join("/"):""},formatAddress2:function(){return this.address2&&this.address2.length?this.address2.map(function(e){return e.title}).join("/"):""}},methods:{requestAddress1:function(e){var t=this,d=e.len;e.id;s(parseInt(d)).then(function(e){t.currentData1=e})},requestAddress2:function(e){var t=this,d=e.len;e.id;s(parseInt(d)).then(function(e){t.currentData2=e})}}},o=d(1),r=Object(o.a)(n,i,[],!1,null,null,null);r.options.__file="packages/linkage/demo/index.vue";t.default=r.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGlua2FnZS9kZW1vL2luZGV4LnZ1ZT8xMDA1Iiwid2VicGFjazovL2ZzdWkvcGFja2FnZXMvbGlua2FnZS9kZW1vL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvbGlua2FnZS9kZW1vL2luZGV4LnZ1ZT9jMGI2Iiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9saW5rYWdlL2RlbW8vaW5kZXgudnVlIl0sIm5hbWVzIjpbInJlbmRlciIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsImF0dHJzIiwidGl0bGUiLCJwbGFjZWhvbGRlciIsInJlYWRvbmx5IiwidmFsdWUiLCJmb3JtYXRBZGRyZXNzMSIsIm5hdGl2ZU9uIiwiY2xpY2siLCIkZXZlbnQiLCJzaG93MSIsImRhdGEiLCJjdXJyZW50RGF0YTEiLCJ0ZXh0LWtleSIsInZhbHVlLWtleSIsImNvbHVtbnMtbnVtIiwic2hvdyIsIm9uIiwidXBkYXRlOnNob3ciLCJjaGFuZ2Utc2VsZWN0IiwicmVxdWVzdEFkZHJlc3MxIiwibW9kZWwiLCJhZGRyZXNzMSIsImNhbGxiYWNrIiwiJCR2IiwiZXhwcmVzc2lvbiIsImZvcm1hdEFkZHJlc3MyIiwic2hvdzIiLCJjdXJyZW50RGF0YTIiLCJyZXF1ZXN0QWRkcmVzczIiLCJhZGRyZXNzMiIsIl93aXRoU3RyaXBwZWQiLCJtb2NrRGF0YSIsImxlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImlkIiwiY29kZSIsImxpbmthZ2VfZGVtb3Z1ZV90eXBlX3NjcmlwdF9sYW5nX2pzXyIsImNvbXB1dGVkIiwibGVuZ3RoIiwibWFwIiwidiIsImpvaW4iLCJtZXRob2RzIiwiX3JlZiIsIl90aGlzIiwicGFyc2VJbnQiLCJ0aGVuIiwiX3JlZjIiLCJfdGhpczIiLCJjb21wb25lbnQiLCJPYmplY3QiLCJjb21wb25lbnROb3JtYWxpemVyIiwib3B0aW9ucyIsIl9fZmlsZSIsIl9fd2VicGFja19leHBvcnRzX18iXSwibWFwcGluZ3MiOiJzR0FBQSxJQUFBQSxFQUFBLFdBQ0EsSUFBQUMsRUFBQUMsS0FDQUMsRUFBQUYsRUFBQUcsZUFDQUMsRUFBQUosRUFBQUssTUFBQUQsSUFBQUYsRUFDQSxPQUFBRSxFQUNBLE1BQ0EsQ0FDQUEsRUFDQSxXQUNBLENBQVNFLE1BQUEsQ0FBU0MsTUFBQSxTQUNsQixDQUNBSCxFQUFBLFlBQ0FFLE1BQUEsQ0FDQUUsWUFBQSxRQUNBQyxTQUFBLEdBQ0FDLE1BQUFWLEVBQUFXLGdCQUVBQyxTQUFBLENBQ0FDLE1BQUEsU0FBQUMsR0FDQWQsRUFBQWUsT0FBQSxNQUlBWCxFQUFBLGNBQ0FFLE1BQUEsQ0FDQVUsS0FBQWhCLEVBQUFpQixhQUNBQyxXQUFBLFFBQ0FDLFlBQUEsT0FDQUMsY0FBQSxFQUNBQyxLQUFBckIsRUFBQWUsT0FFQU8sR0FBQSxDQUNBQyxjQUFBLFNBQUFULEdBQ0FkLEVBQUFlLE1BQUFELEdBRUFVLGdCQUFBeEIsRUFBQXlCLGlCQUVBQyxNQUFBLENBQ0FoQixNQUFBVixFQUFBMkIsU0FDQUMsU0FBQSxTQUFBQyxHQUNBN0IsRUFBQTJCLFNBQUFFLEdBRUFDLFdBQUEsZUFJQSxHQUVBMUIsRUFDQSxXQUNBLENBQVNFLE1BQUEsQ0FBU0MsTUFBQSxTQUNsQixDQUNBSCxFQUFBLFlBQ0FFLE1BQUEsQ0FDQUUsWUFBQSxRQUNBQyxTQUFBLEdBQ0FDLE1BQUFWLEVBQUErQixnQkFFQW5CLFNBQUEsQ0FDQUMsTUFBQSxTQUFBQyxHQUNBZCxFQUFBZ0MsT0FBQSxNQUlBNUIsRUFBQSxjQUNBRSxNQUFBLENBQ0FVLEtBQUFoQixFQUFBaUMsYUFDQWYsV0FBQSxRQUNBQyxZQUFBLE9BQ0FFLEtBQUFyQixFQUFBZ0MsT0FFQVYsR0FBQSxDQUNBQyxjQUFBLFNBQUFULEdBQ0FkLEVBQUFnQyxNQUFBbEIsR0FFQVUsZ0JBQUF4QixFQUFBa0MsaUJBRUFSLE1BQUEsQ0FDQWhCLE1BQUFWLEVBQUFtQyxTQUNBUCxTQUFBLFNBQUFDLEdBQ0E3QixFQUFBbUMsU0FBQU4sR0FFQUMsV0FBQSxlQUlBLElBR0EsSUFJQS9CLEVBQUFxQyxlQUFBLEVDaEVBLElBQUFDLEVBQUEsU0FBQUMsR0FDQSxXQUFBQyxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FDLFdBQUEsV0E4RkEsSUFBQUosR0FBQUUsRUE3RkEsRUFDQWpDLE1BQUEsTUFDQW9DLEdBQUEsRUFDQUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FvQyxHQUFBLEVBQ0FDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBb0MsR0FBQSxFQUNBQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQW9DLEdBQUEsRUFDQUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FvQyxHQUFBLEVBQ0FDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxLQUNBb0MsR0FBQSxFQUNBQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQW9DLEdBQUEsRUFDQUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLEtBQ0FvQyxHQUFBLEVBQ0FDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxLQUNBb0MsR0FBQSxFQUNBQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQW9DLEdBQUEsR0FDQUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FvQyxHQUFBLEdBQ0FDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBb0MsR0FBQSxHQUNBQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQW9DLEdBQUEsR0FDQUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FvQyxHQUFBLEdBQ0FDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBb0MsR0FBQSxHQUNBQyxLQUFBLFlBbUNBLElBQUFOLEdBQUFFLEVBakNBLEVBQ0FqQyxNQUFBLE1BQ0FxQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQXFDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBcUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FxQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQXFDLEtBQUEsWUFvQkEsSUFBQU4sR0FBQUUsRUFsQkEsRUFDQWpDLE1BQUEsTUFDQXFDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBcUMsS0FBQSxVQUNBLENBQ0FyQyxNQUFBLE1BQ0FxQyxLQUFBLFVBQ0EsQ0FDQXJDLE1BQUEsTUFDQXFDLEtBQUEsVUFDQSxDQUNBckMsTUFBQSxNQUNBcUMsS0FBQSxZQUtBLElBQUFOLEdBQUFFLEVBQUEsS0FDQSxRQ2pJMkxLLEVEb0kzTCxDQUNBN0IsS0FEQSxXQUVBLE9BQ0FXLFNBQUEsR0FDQVEsU0FBQSxFQUNBUSxHQUFBLFNBQ0FwQyxNQUFBLE9BQ0EsQ0FDQW9DLEdBQUEsU0FDQXBDLE1BQUEsT0FDQSxDQUNBb0MsR0FBQSxTQUNBcEMsTUFBQSxRQUVBVSxhQUFBLEdBQ0FnQixhQUFBLEdBQ0FsQixPQUFBLEVBQ0FpQixPQUFBLElBR0FjLFNBQUEsQ0FDQW5DLGVBREEsV0FFQSxPQUFBVixLQUFBMEIsVUFBQTFCLEtBQUEwQixTQUFBb0IsT0FBQTlDLEtBQUEwQixTQUFBcUIsSUFBQSxTQUFBQyxHQUFBLE9BQUFBLEVBQUExQyxRQUFBMkMsS0FBQSxTQUVBbkIsZUFKQSxXQUtBLE9BQUE5QixLQUFBa0MsVUFBQWxDLEtBQUFrQyxTQUFBWSxPQUFBOUMsS0FBQWtDLFNBQUFhLElBQUEsU0FBQUMsR0FBQSxPQUFBQSxFQUFBMUMsUUFBQTJDLEtBQUEsVUFHQUMsUUFBQSxDQUlBMUIsZ0JBSkEsU0FBQTJCLEdBSUEsSUFBQUMsRUFBQXBELEtBQUFxQyxFQUFBYyxFQUFBZCxJQUFBYyxFQUFBVCxHQUNBTixFQUFBaUIsU0FBQWhCLElBQUFpQixLQUFBLFNBQUF2QyxHQUNBcUMsRUFBQXBDLGFBQUFELEtBR0FrQixnQkFUQSxTQUFBc0IsR0FTQSxJQUFBQyxFQUFBeEQsS0FBQXFDLEVBQUFrQixFQUFBbEIsSUFBQWtCLEVBQUFiLEdBQ0FOLEVBQUFpQixTQUFBaEIsSUFBQWlCLEtBQUEsU0FBQXZDLEdBQ0F5QyxFQUFBeEIsYUFBQWpCLGNFcEtBMEMsRUFBZ0JDLE9BQUFDLEVBQUEsRUFBQUQsQ0FDZGQsRUFDQTlDLEVIbUZGLElHakZBLEVBQ0EsS0FDQSxLQUNBLE1BdUJBMkQsRUFBQUcsUUFBQUMsT0FBQSxrQ0FDZUMsRUFBQSxRQUFBTCIsImZpbGUiOiJhc3luY18yOS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIumAieaLqeWcsOWMulwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5Zyw5Yy6XCIsXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdEFkZHJlc3MxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MSA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtbGlua2FnZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkYXRhOiBfdm0uY3VycmVudERhdGExLFxuICAgICAgICAgICAgICBcInRleHQta2V5XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJjb2RlXCIsXG4gICAgICAgICAgICAgIFwiY29sdW1ucy1udW1cIjogMixcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLnNob3cxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGU6c2hvd1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdzEgPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjaGFuZ2Utc2VsZWN0XCI6IF92bS5yZXF1ZXN0QWRkcmVzczFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZHJlc3MxLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmFkZHJlc3MxID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWRkcmVzczFcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIuW4puWIneWni+WAvFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnMtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+36YCJ5oup5Zyw5Yy6XCIsXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1hdEFkZHJlc3MyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmF0aXZlT246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93MiA9IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwiZnMtbGlua2FnZVwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkYXRhOiBfdm0uY3VycmVudERhdGEyLFxuICAgICAgICAgICAgICBcInRleHQta2V5XCI6IFwidGl0bGVcIixcbiAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJjb2RlXCIsXG4gICAgICAgICAgICAgIHNob3c6IF92bS5zaG93MlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwidXBkYXRlOnNob3dcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3cyID0gJGV2ZW50XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hhbmdlLXNlbGVjdFwiOiBfdm0ucmVxdWVzdEFkZHJlc3MyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5hZGRyZXNzMixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5hZGRyZXNzMiA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFkZHJlc3MyXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGZzLWdyb3VwIHRpdGxlPVwi6YCJ5oup5Zyw5Yy6XCI+XG4gICAgICA8ZnMtaW5wdXQgcGxhY2Vob2xkZXI9XCLor7fpgInmi6nlnLDljLpcIiBAY2xpY2submF0aXZlPVwic2hvdzEgPSB0cnVlXCIgcmVhZG9ubHkgOnZhbHVlPVwiZm9ybWF0QWRkcmVzczFcIi8+XG4gICAgICA8ZnMtbGlua2FnZVxuICAgICAgICA6ZGF0YT1cImN1cnJlbnREYXRhMVwiXG4gICAgICAgIHRleHQta2V5PVwidGl0bGVcIlxuICAgICAgICB2YWx1ZS1rZXk9XCJjb2RlXCJcbiAgICAgICAgOmNvbHVtbnMtbnVtPVwiMlwiXG4gICAgICAgIHYtbW9kZWw9XCJhZGRyZXNzMVwiXG4gICAgICAgIDpzaG93LnN5bmM9XCJzaG93MVwiXG4gICAgICAgIEBjaGFuZ2Utc2VsZWN0PVwicmVxdWVzdEFkZHJlc3MxXCI+XG4gICAgICA8L2ZzLWxpbmthZ2U+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLluKbliJ3lp4vlgLxcIj5cbiAgICAgIDxmcy1pbnB1dCBwbGFjZWhvbGRlcj1cIuivt+mAieaLqeWcsOWMulwiIEBjbGljay5uYXRpdmU9XCJzaG93MiA9IHRydWVcIiByZWFkb25seSA6dmFsdWU9XCJmb3JtYXRBZGRyZXNzMlwiLz5cbiAgICAgIDxmcy1saW5rYWdlXG4gICAgICAgIDpkYXRhPVwiY3VycmVudERhdGEyXCJcbiAgICAgICAgdGV4dC1rZXk9XCJ0aXRsZVwiXG4gICAgICAgIHZhbHVlLWtleT1cImNvZGVcIlxuICAgICAgICB2LW1vZGVsPVwiYWRkcmVzczJcIlxuICAgICAgICA6c2hvdy5zeW5jPVwic2hvdzJcIlxuICAgICAgICBAY2hhbmdlLXNlbGVjdD1cInJlcXVlc3RBZGRyZXNzMlwiPlxuICAgICAgPC9mcy1saW5rYWdlPlxuICAgIDwvZnMtZ3JvdXA+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmxldCBtb2NrRGF0YSA9IChsZW4pID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBwcm92aW5jZSA9IFt7XG4gICAgICAgIHRpdGxlOiAn5ZCJ5p6X55yBJyxcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGNvZGU6ICcxMTAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5rmW5YyX55yBJyxcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIGNvZGU6ICcxMjAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5rWZ5rGf55yBJyxcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIGNvZGU6ICcxMzAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn55SY6IKD55yBJyxcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIGNvZGU6ICcxNDAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5rW35Y2X55yBJyxcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIGNvZGU6ICcxNTAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5rmW5Y2XJyxcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIGNvZGU6ICcxNjAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6buR6b6Z5rGfJyxcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIGNvZGU6ICcxNzAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5paw55aGJyxcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIGNvZGU6ICcxODAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6KW/6JePJyxcbiAgICAgICAgaWQ6IDksXG4gICAgICAgIGNvZGU6ICcxOTAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6Z2S5rW355yBJyxcbiAgICAgICAgaWQ6IDEwLFxuICAgICAgICBjb2RlOiAnMjAwMDAwJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+W5v+S4nOecgScsXG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgY29kZTogJzIxMDAwMCdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICflub/opb/nnIEnLFxuICAgICAgICBpZDogMTIsXG4gICAgICAgIGNvZGU6ICcyMjAwMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5a6J5b6955yBJyxcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICBjb2RlOiAnMjMwMDAwJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+i+veWugeecgScsXG4gICAgICAgIGlkOiAxNCxcbiAgICAgICAgY29kZTogJzI0MDAwMCdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfmsrPljJfnnIEnLFxuICAgICAgICBpZDogMTUsXG4gICAgICAgIGNvZGU6ICcyNTAwMDAnXG4gICAgICB9XVxuICAgICAgbGV0IGNpdHkgPSBbe1xuICAgICAgICB0aXRsZTogJ+mVv+aYpeW4gicsXG4gICAgICAgIGNvZGU6ICcxMDAxMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5q2m5rGJ5biCJyxcbiAgICAgICAgY29kZTogJzExMDEwMCdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICflpKnmsLTluIInLFxuICAgICAgICBjb2RlOiAnMTIwMTAwJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+adreW3nuW4gicsXG4gICAgICAgIGNvZGU6ICcxMjAxMDAnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn5YWw5bee5biCJyxcbiAgICAgICAgY29kZTogJzE0MDEwMCdcbiAgICAgIH1dXG4gICAgICBsZXQgY291bnRyeSA9IFt7XG4gICAgICAgIHRpdGxlOiAn5Lmd5Y+w5Yy6JyxcbiAgICAgICAgY29kZTogJzEwMDEwMSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfms5fmsLTljr8nLFxuICAgICAgICBjb2RlOiAnMTEwMTAxJ1xuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ+m7hOaiheWOvycsXG4gICAgICAgIGNvZGU6ICcxMjAxMDEnXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAn6KW/5rmW5Yy6JyxcbiAgICAgICAgY29kZTogJzEzMDEwMSdcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICfkvZnmna3ljLonLFxuICAgICAgICBjb2RlOiAnMTQwMTAxJ1xuICAgICAgfV1cbiAgICAgIGxlbiA9PT0gMCAmJiByZXNvbHZlKHByb3ZpbmNlKVxuICAgICAgbGVuID09PSAxICYmIHJlc29sdmUoY2l0eSlcbiAgICAgIGxlbiA9PT0gMiAmJiByZXNvbHZlKGNvdW50cnkpXG4gICAgICBsZW4gPT09IDMgJiYgcmVzb2x2ZShbXSlcbiAgICB9LCAxMDAwKVxuICB9KVxufVxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkcmVzczE6IFtdLCAvLyDlvZPliY3pgInmi6nnmoTmlbDmja5cbiAgICAgIGFkZHJlc3MyOiBbe1xuICAgICAgICBpZDogJzIyMDAwMCcsXG4gICAgICAgIHRpdGxlOiAn5ZCJ5p6X55yBJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzIyMDEwMCcsXG4gICAgICAgIHRpdGxlOiAn6ZW/5pil5biCJ1xuICAgICAgfSwge1xuICAgICAgICBpZDogJzIyMDExMycsXG4gICAgICAgIHRpdGxlOiAn5Lmd5Y+w5Yy6J1xuICAgICAgfV0sIC8vIOW9k+WJjemAieaLqeeahOaVsOaNrlxuICAgICAgY3VycmVudERhdGExOiBbXSwgLy8g5b2T5YmN6I635Y+W55qE5pWw5o2uXG4gICAgICBjdXJyZW50RGF0YTI6IFtdLCAvLyDlvZPliY3ojrflj5bnmoTmlbDmja5cbiAgICAgIHNob3cxOiBmYWxzZSwgLy8g5piv5ZCm5pi+56S6XG4gICAgICBzaG93MjogZmFsc2UgLy8g5piv5ZCm5pi+56S6XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZvcm1hdEFkZHJlc3MxICgpIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZHJlc3MxICYmIHRoaXMuYWRkcmVzczEubGVuZ3RoID8gdGhpcy5hZGRyZXNzMS5tYXAodiA9PiB2LnRpdGxlKS5qb2luKCcvJykgOiAnJ1xuICAgIH0sXG4gICAgZm9ybWF0QWRkcmVzczIgKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkcmVzczIgJiYgdGhpcy5hZGRyZXNzMi5sZW5ndGggPyB0aGlzLmFkZHJlc3MyLm1hcCh2ID0+IHYudGl0bGUpLmpvaW4oJy8nKSA6ICcnXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICog5qC55o2u5b2T5YmN5Zyw5Z2A6I635Y+W5LiL5LiA5Liq5Zyw5Z2A5pWw5o2uXG4gICAgICovXG4gICAgcmVxdWVzdEFkZHJlc3MxICh7IGxlbiwgaWQgfSkge1xuICAgICAgbW9ja0RhdGEocGFyc2VJbnQobGVuKSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YTEgPSBkYXRhXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVxdWVzdEFkZHJlc3MyICh7IGxlbiwgaWQgfSkge1xuICAgICAgbW9ja0RhdGEocGFyc2VJbnQobGVuKSkudGhlbihkYXRhID0+IHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0YTIgPSBkYXRhXG4gICAgICB9KVxuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjgwZWMzMTgmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9tZWRpYS9vbmx5c3Rhci/otYTmlpkv57uE5Lu25bqTL2ZzLXVpL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmODBlYzMxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmODBlYzMxOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY4MGVjMzE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y4MGVjMzE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWNrYWdlcy9saW5rYWdlL2RlbW8vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==