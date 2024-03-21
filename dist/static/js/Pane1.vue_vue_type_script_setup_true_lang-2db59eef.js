import{J as e,L as a,d as l,r as t,o as n,e as i,i as o,w as s,a as r,p as d,j as c,h as u,_ as p,g as m,c as h,u as f,H as _,t as y,C as g,M as k,G as v,N as w,O as x,P as z,E as b,f as C,F as V,b as j,Q as M}from"./index-5da0dba2.js";import{u as S}from"./usePagination-2deb1a46.js";import B from"./EditModal-035b7296.js";import{g as I}from"./index-5d36fe3b.js";import{S as N}from"./person-ff3306fc.js";const O=l({__name:"TreeSwitcherIcon",props:{expanded:{type:Boolean},hasChildren:{type:Boolean}},setup:e=>(e,a)=>{const l=o,s=t("icon-drive-file");return e.hasChildren&&e.expanded?(n(),i(l,{key:0,class:"switcher-icon",name:"plus-square",size:16})):e.hasChildren&&!e.expanded?(n(),i(l,{key:1,class:"switcher-icon",name:"minus-square",size:16,style:{transform:"rotate(0deg)"}})):(n(),i(s,{key:2,size:16}))}}),R=e=>(d("data-v-a9b7b123"),e=e(),c(),e),q=R((()=>u("span",null,"新增",-1))),A=R((()=>u("span",null,"编辑",-1))),E=R((()=>u("span",null,"移动",-1))),P=R((()=>u("span",null,"删除",-1))),T=p(l({__name:"RightMenu",props:{treeData:{}},emits:["click"],setup(e,{emit:a}){const l=e=>{a("click",e)};return(e,a)=>{const d=t("icon-plus-circle"),c=t("a-menu-item"),u=t("icon-edit"),p=t("icon-export"),m=t("icon-right"),h=t("a-space"),f=o,_=t("a-tree"),y=t("a-scrollbar"),g=t("a-popover"),k=t("icon-delete"),v=t("a-menu");return n(),i(v,{class:"menu"},{default:s((()=>[r(c,{onClick:a[0]||(a[0]=e=>l("add"))},{icon:s((()=>[r(d,{size:16,"stroke-width":3})])),default:s((()=>[q])),_:1}),r(c,{onClick:a[1]||(a[1]=e=>l("edit"))},{icon:s((()=>[r(u,{size:16,"stroke-width":3})])),default:s((()=>[A])),_:1}),r(g,{position:"right",trigger:"click","content-style":{padding:0,overflow:"hidden"},"unmount-on-close":!1},{content:s((()=>[r(y,{style:{height:"100%",overflow:"auto"},"outer-style":"width: 260px;height: 500px"},{default:s((()=>[r(_,{ref:"treeMoveRef","show-line":"",size:"mini",data:e.treeData[0].children,fieldNames:{key:"id",title:"name"}},{"switcher-icon":s(((e,{checked:a,selected:l,expanded:t})=>[r(O,{expanded:t,"has-children":Boolean(e.children&&e.children.length)},null,8,["expanded","has-children"])])),icon:s((e=>[e.children?e.children?(n(),i(f,{key:1,name:"com-file-open",size:16})):(n(),i(f,{key:2,name:"com-file",size:16})):(n(),i(f,{key:0,name:"com-file-close",size:16}))])),_:1},8,["data"])])),_:1})])),default:s((()=>[r(c,{onClick:a[2]||(a[2]=e=>l("move"))},{icon:s((()=>[r(p,{size:16,"stroke-width":3})])),default:s((()=>[r(h,{size:18},{default:s((()=>[E,r(m)])),_:1})])),_:1})])),_:1}),r(c,{onClick:a[3]||(a[3]=e=>l("delete"))},{icon:s((()=>[r(k,{size:16,"stroke-width":3})])),default:s((()=>[P])),_:1})])),_:1})}}}),[["__scopeId","data-v-a9b7b123"]]),U={class:"cate-tree"},D={class:"search-wrap"},F={class:"wrap"},G=p(l({__name:"index",props:{type:{default:1},placeholder:{default:"请输入关键词"}},emits:["node-click"],setup(l,{emit:d}){const c=l,p=m(!1),v=m(),w=m(""),x=m([]),z=()=>{d("node-click")};(async()=>{try{p.value=!0;const l=await e.get(`${a}/cate/tree`);x.value=l.data,g((()=>{v.value.expandAll()}))}catch(l){return l}finally{p.value=!1}})();const b=e=>{"move"!==e&&k.info(e)};return(e,a)=>{const l=t("icon-search"),d=t("a-input"),p=o,m=t("a-trigger"),g=t("a-tree"),k=t("a-scrollbar");return n(),h("div",U,[u("div",D,[r(d,{"allow-clear":"",maxlength:20,placeholder:c.placeholder,modelValue:f(w),"onUpdate:modelValue":a[0]||(a[0]=e=>_(w)?w.value=e:null)},{prefix:s((()=>[r(l)])),_:1},8,["placeholder","modelValue"])]),u("div",F,[r(k,{style:{height:"100%",overflow:"auto"},"outer-style":"height: 100%"},{default:s((()=>[r(g,{ref_key:"treeRef",ref:v,"show-line":"",size:"mini",data:f(x),fieldNames:{key:"id"},onSelect:z},{"switcher-icon":s(((e,{checked:a,selected:l,expanded:t})=>[r(O,{expanded:t,"has-children":Boolean(e.children&&e.children.length)},null,8,["expanded","has-children"])])),icon:s((e=>[e.children?e.children?(n(),i(p,{key:1,name:"com-file-open",size:16})):(n(),i(p,{key:2,name:"com-file",size:16})):(n(),i(p,{key:0,name:"com-file-close",size:16}))])),title:s((e=>[r(m,{trigger:"contextMenu","align-point":"","animation-name":"slide-dynamic-origin","auto-fit-transform-origin":"",position:"bl","update-at-scroll":""},{content:s((()=>[r(T,{"tree-data":f(x),onClick:b},null,8,["tree-data"])])),default:s((()=>[u("div",null,y(e.name),1)])),_:2},1024)])),_:1},8,["data"])])),_:1})])])}}}),[["__scopeId","data-v-2b2a084c"]]),H={class:"data-pane"},J={class:"content"},L={class:"gi_table_box"},Q=l({__name:"Pane1",setup(e){const a=v(),{pagination:l,setTotal:o}=S((()=>_())),d=w({name:"",status:""}),c=m([]),p=m(!1),_=async()=>{try{p.value=!0;const e=await I({...d,current:l.current,pageSize:l.pageSize});c.value=e.data.list,o(e.data.total)}catch(e){}finally{p.value=!1}};x((()=>{_()}));const g=()=>{M.warning({title:"提示",content:"是否确认删除？",hideCancel:!1,onOk:()=>{c.value=[]}})},O=m(),R=()=>{var e;null==(e=O.value)||e.add()},q=()=>{if(!A.value.length)return k.warning("请勾选数据");k.success("点击了导出")},A=m([]),E=e=>{A.value=e},P=e=>{A.value=e?c.value.map((e=>e.id)):[]};return(e,o)=>{const m=t("a-card"),v=t("icon-plus"),w=t("a-button"),x=t("icon-delete"),M=t("icon-export"),S=t("a-space"),I=t("a-option"),A=t("a-select"),T=t("a-input"),U=t("icon-search"),D=t("a-input-group"),F=t("icon-refresh"),Q=t("a-row"),W=t("a-table-column"),$=t("a-progress"),K=t("a-tag"),X=t("a-popconfirm"),Y=t("a-table");return n(),h("div",H,[f(z).browse().isMobile?b("",!0):(n(),i(m,{key:0,title:"数据分类",bordered:!1,class:"gi_card pane-left"},{default:s((()=>[r(G,{placeholder:"请输入搜索关键词",onNodeClick:o[0]||(o[0]=e=>f(l).onChange(1))})])),_:1})),r(m,{title:"数据列表",bordered:!1,"header-style":{display:"none"},class:"gi_card pane-right"},{default:s((()=>[u("div",J,[r(Q,{justify:"space-between",style:{"margin-bottom":"12px"}},{default:s((()=>[r(S,null,{default:s((()=>[r(w,{type:"primary",onClick:R},{icon:s((()=>[r(v)])),_:1}),r(w,{type:"primary",status:"danger",onClick:g},{icon:s((()=>[r(x)])),default:s((()=>[C("删除")])),_:1}),r(w,{type:"primary",status:"success",onClick:q},{icon:s((()=>[r(M)])),_:1})])),_:1}),r(S,null,{default:s((()=>[r(A,{modelValue:f(d).status,"onUpdate:modelValue":o[1]||(o[1]=e=>f(d).status=e),class:"gi_select_input",placeholder:"请选择","allow-clear":""},{default:s((()=>[(n(!0),h(V,null,j(f(N),(e=>(n(),i(I,{key:e.value,value:e.value},{default:s((()=>[C(y(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["modelValue"]),r(D,null,{default:s((()=>[r(T,{modelValue:f(d).name,"onUpdate:modelValue":o[2]||(o[2]=e=>f(d).name=e),placeholder:"请输入搜索关键词","allow-clear":""},null,8,["modelValue"]),r(w,{type:"primary",onClick:_},{default:s((()=>[r(U)])),_:1})])),_:1}),r(w,{type:"primary",onClick:_},{icon:s((()=>[r(F)])),_:1})])),_:1})])),_:1}),u("section",L,[r(Y,{"row-key":"id",size:"small",loading:f(p),bordered:{cell:!0},data:f(c),scroll:{x:"100%",y:"100%",minWidth:1e3},"row-selection":{type:"checkbox",showCheckedAll:!0},pagination:f(l),onSelect:E,onSelectAll:P},{columns:s((()=>[r(W,{title:"序号",width:68},{cell:s((e=>[C(y(e.rowIndex+1),1)])),_:1}),r(W,{title:"姓名","data-index":"name"}),r(W,{title:"地址","data-index":"address",ellipsis:"",tooltip:""}),r(W,{title:"比例",width:200},{cell:s((({record:e})=>{return[r($,{status:(a=e.proportion,a<30?"danger":a<60?"warning":"success"),percent:e.proportion/100},null,8,["status","percent"])];var a})),_:1}),r(W,{title:"状态",width:100,align:"center"},{cell:s((({record:e})=>[(n(!0),h(V,null,j(f(N),(a=>(n(),h(V,{key:a.value},[a.value===e.status?(n(),i(K,{key:0,size:"small",color:a.color},{default:s((()=>[C(y(a.name),1)])),_:2},1032,["color"])):b("",!0)],64)))),128))])),_:1}),r(W,{title:"创建时间","data-index":"createTime",width:180}),r(W,{title:"操作",width:200,align:"center",fixed:"right"},{cell:s((({record:e})=>[r(S,null,{default:s((()=>[r(w,{type:"primary",size:"mini",onClick:a=>{return l=e,void(null==(t=O.value)||t.edit(l.id));var l,t}},{default:s((()=>[C("修改")])),_:2},1032,["onClick"]),r(w,{size:"mini",onClick:l=>{return t=e,void a.push({path:"/data/detail",query:{id:t.id}});var t}},{default:s((()=>[C("详情")])),_:2},1032,["onClick"]),r(X,{type:"warning",content:"您确定要删除该项吗?",onOk:a=>(e.id,k.success("删除成功"),void _())},{default:s((()=>[r(w,{type:"primary",status:"danger",size:"mini"},{default:s((()=>[C("删除")])),_:1})])),_:2},1032,["onOk"])])),_:2},1024)])),_:1})])),_:1},8,["loading","data","pagination"])])])])),_:1}),r(B,{ref_key:"EditModalRef",ref:O},null,512)])}}});export{Q as _};
