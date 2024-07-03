"use strict";(self["webpackChunk_400"]=self["webpackChunk_400"]||[]).push([[443],{733:function(e,l,a){a.r(l),a.d(l,{default:function(){return y}});var t=a(3396),o=a(4870),n=a(2748),i=a(7178);const d=e=>((0,t.dD)("data-v-583506cc"),e=e(),(0,t.Cn)(),e),u={key:0,class:"flex"},s={class:"input"},c=d((()=>(0,t._)("div",{class:"example"},[(0,t._)("p",null,"Search Example: AHDC1")],-1))),r={key:1,class:"flex2"},m={class:"button"},p={class:"dialog-footer"},f={class:"dialog-footer"};var h=(0,t.aZ)({__name:"DemoView",setup(e){let l=localStorage.getItem("name");const a=(0,o.iH)(""),d=(0,o.qj)({data:[]});let h=(0,o.iH)(!1),g=(0,o.iH)(!1);const w=(0,o.qj)({_id:"",patient:"",gene:"",inheritance:"",variants:"",genotype:"",disorder:"",classification:"",origin:""});function y(){a.value&&fetch(`http://localhost:3000/search?genes=${a.value}`).then((e=>e.json())).then((e=>{d.data=e}))}function v(){d.data=[]}function b(e){let l=(0,o.IU)(e);w._id=l["_id"],w.patient=l["Patient"],w.gene=l["Gene(s)"],w.inheritance=l["Inheri-tance"],w.variants=l["Variants"],w.genotype=l["Genotype"],w.disorder=l["Disorder (MIM#)"],w.classification=l["Classification"],w.origin=l["origin"],h.value=!0}function W(){fetch("http://localhost:3000/update",{method:"post",body:JSON.stringify((0,o.IU)(w)),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Edit successfully",type:"success"}),h.value=!1})).then((()=>{y()})).catch((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Someting Wrong",type:"error"})}))}function _(e){let l=(0,o.IU)(e),a=l._id;fetch("http://localhost:3000/delete",{method:"post",body:JSON.stringify({id:a}),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Delete successfully",type:"success"})})).then((()=>{y()})).catch((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Someting Wrong",type:"error"})}))}function V(){w.patient="",w.gene="",w.inheritance="",w.variants="",w.genotype="",w.disorder="",w.classification="",w.origin="",g.value=!0}function C(){fetch("http://localhost:3000/add",{method:"post",body:JSON.stringify((0,o.IU)(w)),headers:{"Content-Type":"application/json"}}).then((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Add successfully",type:"success"}),g.value=!1})).then((()=>{y()})).catch((function(e){console.log(e),(0,i.z8)({showClose:!0,message:"Someting Wrong",type:"error"})}))}return(e,i)=>{const k=(0,t.up)("el-button"),U=(0,t.up)("el-input"),x=(0,t.up)("el-table-column"),S=(0,t.up)("el-table"),D=(0,t.up)("el-form-item"),I=(0,t.up)("el-form"),j=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)(t.HY,null,[d.data.length?((0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(S,{data:d.data,style:{width:"80%"},stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(x,{prop:"Patient",label:"Patient",width:"80"}),(0,t.Wm)(x,{prop:"Gene(s)",label:"Gene(s)",width:"80"}),(0,t.Wm)(x,{prop:"Inheri-tance",label:"Inheri-tance",width:"110"}),(0,t.Wm)(x,{prop:"Variants",label:"Variants",width:"140"}),(0,t.Wm)(x,{prop:"Genotype",label:"Genotype",width:"200"}),(0,t.Wm)(x,{prop:"Disorder (MIM#)",label:"Disorder (MIM#)",width:"210"}),(0,t.Wm)(x,{prop:"Classification",label:"Classification",width:"180"}),(0,t.Wm)(x,{prop:"origin",label:"origin","min-width":"100"}),"YeCheng"==(0,o.SU)(l)?((0,t.wg)(),(0,t.j4)(x,{key:0,label:"Func",width:"70"},{default:(0,t.w5)((e=>[(0,t.Wm)(k,{key:"edit",type:"primary",link:"",onClick:l=>b(e.row)},{default:(0,t.w5)((()=>[(0,t.Uk)("edit")])),_:2},1032,["onClick"]),(0,t.Wm)(k,{key:"delete",type:"danger",link:"",onClick:l=>_(e.row),style:{"margin-left":"0"}},{default:(0,t.w5)((()=>[(0,t.Uk)("delete")])),_:2},1032,["onClick"])])),_:1})):(0,t.kq)("",!0)])),_:1},8,["data"]),(0,t._)("div",m,["YeCheng"==(0,o.SU)(l)?((0,t.wg)(),(0,t.j4)(k,{key:0,icon:(0,o.SU)(n.I8b),type:"info",size:"large",onClick:V,circle:""},null,8,["icon"])):(0,t.kq)("",!0),(0,t.Wm)(k,{icon:(0,o.SU)(n.XdH),type:"info",size:"large",onClick:v,circle:""},null,8,["icon"])])])):((0,t.wg)(),(0,t.iD)("div",u,[(0,t._)("div",s,[(0,t.Wm)(U,{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=e=>a.value=e),placeholder:"AHDC1",size:"large",class:"size"},{prepend:(0,t.w5)((()=>[(0,t.Uk)("Gene")])),append:(0,t.w5)((()=>[(0,t.Wm)(k,{icon:(0,o.SU)(n.olm),size:"large",onClick:y},null,8,["icon"])])),_:1},8,["modelValue"])]),c,"YeCheng"==(0,o.SU)(l)?((0,t.wg)(),(0,t.j4)(k,{key:0,icon:(0,o.SU)(n.I8b),type:"info",size:"large",onClick:V,circle:""},null,8,["icon"])):(0,t.kq)("",!0)])),(0,t.Wm)(j,{modelValue:(0,o.SU)(h),"onUpdate:modelValue":i[10]||(i[10]=e=>(0,o.dq)(h)?h.value=e:h=e),title:"Edit"},{footer:(0,t.w5)((()=>[(0,t._)("span",p,[(0,t.Wm)(k,{onClick:i[9]||(i[9]=e=>(0,o.dq)(h)?h.value=!1:h=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1}),(0,t.Wm)(k,{type:"primary",onClick:W},{default:(0,t.w5)((()=>[(0,t.Uk)(" Confirm ")])),_:1})])])),default:(0,t.w5)((()=>[(0,t.Wm)(I,{model:w},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{label:"Patient","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.patient,"onUpdate:modelValue":i[1]||(i[1]=e=>w.patient=e),autocomplete:"off",disabled:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Gene(s)","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.gene,"onUpdate:modelValue":i[2]||(i[2]=e=>w.gene=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Inheri-tance","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.inheritance,"onUpdate:modelValue":i[3]||(i[3]=e=>w.inheritance=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Variants","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.variants,"onUpdate:modelValue":i[4]||(i[4]=e=>w.variants=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Genotype","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.genotype,"onUpdate:modelValue":i[5]||(i[5]=e=>w.genotype=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Disorder (MIM#)","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.disorder,"onUpdate:modelValue":i[6]||(i[6]=e=>w.disorder=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Classification","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.classification,"onUpdate:modelValue":i[7]||(i[7]=e=>w.classification=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"origin","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.origin,"onUpdate:modelValue":i[8]||(i[8]=e=>w.origin=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"]),(0,t.Wm)(j,{modelValue:(0,o.SU)(g),"onUpdate:modelValue":i[20]||(i[20]=e=>(0,o.dq)(g)?g.value=e:g=e),title:"Add"},{footer:(0,t.w5)((()=>[(0,t._)("span",f,[(0,t.Wm)(k,{onClick:i[19]||(i[19]=e=>(0,o.dq)(g)?g.value=!1:g=!1)},{default:(0,t.w5)((()=>[(0,t.Uk)("Cancel")])),_:1}),(0,t.Wm)(k,{type:"primary",onClick:C},{default:(0,t.w5)((()=>[(0,t.Uk)(" Confirm ")])),_:1})])])),default:(0,t.w5)((()=>[(0,t.Wm)(I,{model:w},{default:(0,t.w5)((()=>[(0,t.Wm)(D,{label:"Patient","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.patient,"onUpdate:modelValue":i[11]||(i[11]=e=>w.patient=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Gene(s)","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.gene,"onUpdate:modelValue":i[12]||(i[12]=e=>w.gene=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Inheri-tance","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.inheritance,"onUpdate:modelValue":i[13]||(i[13]=e=>w.inheritance=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Variants","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.variants,"onUpdate:modelValue":i[14]||(i[14]=e=>w.variants=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Genotype","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.genotype,"onUpdate:modelValue":i[15]||(i[15]=e=>w.genotype=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Disorder (MIM#)","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.disorder,"onUpdate:modelValue":i[16]||(i[16]=e=>w.disorder=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"Classification","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.classification,"onUpdate:modelValue":i[17]||(i[17]=e=>w.classification=e),autocomplete:"off"},null,8,["modelValue"])])),_:1}),(0,t.Wm)(D,{label:"origin","label-width":150},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.origin,"onUpdate:modelValue":i[18]||(i[18]=e=>w.origin=e),autocomplete:"off"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])],64)}}}),g=a(89);const w=(0,g.Z)(h,[["__scopeId","data-v-583506cc"]]);var y=w},3073:function(e,l,a){a.r(l),a.d(l,{default:function(){return v}});var t=a(3396),o=a(9242),n=a(7139),i=a(7826),d=a(4870),u=a(357);const s=e=>((0,t.dD)("data-v-d8c1860c"),e=e(),(0,t.Cn)(),e),c=s((()=>(0,t._)("h3",null,"域名安全威胁场景",-1))),r={style:{"margin-top":"10px"}},m={style:{"margin-top":"10px"}},p=s((()=>(0,t._)("h3",null,"模拟影响网段",-1))),f=s((()=>(0,t._)("div",{class:"echarts"},[(0,t._)("div",{id:"container2"})],-1))),h={id:"centerDialog",class:"modal"};var g=(0,t.aZ)({__name:"HelpView",setup(e){const l=(0,d.iH)(!1),a=(0,d.iH)(!1),s=(0,d.iH)(null),g=(0,d.iH)({}),w=(0,d.iH)(""),y=[{ip:"x.x.x.x/10",organization:"xxx"},{ip:"x.x.x.x/10",organization:"xxx"},{ip:"x.x.x.x/10",organization:"xxx"}],v=[{value:"Option1",label:"Option1"},{value:"Option2",label:"Option2"},{value:"Option3",label:"Option3"}];let b;function W(){a.value=!0,Promise.all([fetch("/api/backgorund?state=stop",{method:"POST",headers:{"Content-Type":"application/json"}}),fetch("/api/simulate?state=start",{method:"POST",headers:{"Content-Type":"application/json"}})]).then((e=>Promise.all(e.map((e=>e.json()))))).then((([e,l])=>{console.log("Background data:",e),console.log("Simulate data:",l)})).catch((e=>{console.error("Error:",e)}))}function _(){a.value=!1,Promise.all([fetch("/api/backgorund?state=start",{method:"POST",headers:{"Content-Type":"application/json"}}),fetch("/api/simulate?state=stop",{method:"POST",headers:{"Content-Type":"application/json"}})]).then((e=>Promise.all(e.map((e=>e.json()))))).then((([e,l])=>{console.log("Background data:",e),console.log("Simulate data:",l)})).catch((e=>{console.error("Error:",e)}))}function V(){Promise.all([fetch("/api/backgorund?state=start",{method:"POST",headers:{"Content-Type":"application/json"}}),fetch("/api/simulate?state=stop",{method:"POST",headers:{"Content-Type":"application/json"}})]).then((e=>Promise.all(e.map((e=>e.json()))))).then((([e,l])=>{console.log("Background data:",e),console.log("Simulate data:",l)})).then((e=>{b=setInterval((()=>{k()}),5e3)})).catch((e=>{console.error("Error:",e)}))}function C(){clearInterval(b)}function k(){fetch("/api/requests").then((e=>e.json())).then((e=>{e.forEach(((l,a)=>{const t=5e3*a/e.length;setTimeout((()=>{s.value.addData("flyLine",[{from:{lon:l.From.longitude,lat:l.From.latitude,style:{}},to:{lon:l.To.longitude,lat:l.To.latitude,style:{}},style:{flyLineStyle:{color:"#cd79ff",duration:3e3,delay:0,repeat:0,onComplete:e=>{s.value.remove("flyLine",[`${e.from.lon}${e.from.lat}-${e.to.lon}${e.to.lat}`])}}}}])}),t)}))})).catch((e=>{console.error(e)}))}return(0,t.bv)((()=>{Promise.all([fetch("/api/nodes").then((e=>e.json()))]).then((([e])=>{i.Z.registerMap("world",u);const a=document.getElementById("container2");let t=a.offsetWidth;a.style.height=t+"px",s.value=i.Z.init({dom:a,map:"world",mode:"2d",config:{enableZoom:!1,hoverRegionStyle:{areaColor:"#2e3564"},mapStyle:{areaColor:"#2e3564",lineColor:"#797eff"}}}),e.map((e=>{s.value.addData("point",[{lat:e.location.latitude,lon:e.location.longitude,style:{color:"yellow",duration:2e3},domain:e.domain,name:e.name,ip:e.ip,city:e.city,software:e.sofeware}])}));const o=document.getElementById("centerDialog");console.log("初始化地图成功"),s.value.on("click",((e,a)=>{a&&"point"===a.name&&(g.value.name=a?.userData.name,g.value.city=a?.userData.city,g.value.domain=a?.userData.domain,g.value.ip=a?.userData.ip,g.value.software=a?.userData.software,e.clientX<900?o.style.left=`${e.clientX}px`:o.style.left=e.clientX-200+"px",e.clientY<400?o.style.top=`${e.clientY}px`:o.style.top=e.clientY-200+"px",l.value=!0)})),V()})).catch((e=>{console.error(e)}))})),(0,t.Ah)((()=>{C()})),(e,i)=>{const d=(0,t.up)("el-option"),u=(0,t.up)("el-select"),s=(0,t.up)("el-button"),b=(0,t.up)("el-table-column"),V=(0,t.up)("el-table"),C=(0,t.up)("el-col"),k=(0,t.up)("el-row");return(0,t.wg)(),(0,t.j4)(k,{gutter:24,style:{margin:"0"}},{default:(0,t.w5)((()=>[(0,t.Wm)(C,{span:6},{default:(0,t.w5)((()=>[c,(0,t.Wm)(u,{modelValue:w.value,"onUpdate:modelValue":i[0]||(i[0]=e=>w.value=e),placeholder:"Select",style:{width:"240px"}},{default:(0,t.w5)((()=>[((0,t.wg)(),(0,t.iD)(t.HY,null,(0,t.Ko)(v,(e=>(0,t.Wm)(d,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),64))])),_:1},8,["modelValue"]),(0,t.wy)((0,t._)("div",r,[(0,t.Wm)(s,{type:"primary",round:"",onClick:i[1]||(i[1]=e=>W())},{default:(0,t.w5)((()=>[(0,t.Uk)("开始模拟")])),_:1})],512),[[o.F8,!a.value]]),(0,t.wy)((0,t._)("div",m,[(0,t.Wm)(s,{type:"primary",round:"",onClick:i[2]||(i[2]=e=>_())},{default:(0,t.w5)((()=>[(0,t.Uk)("停止模拟")])),_:1})],512),[[o.F8,a.value]]),p,(0,t.Wm)(V,{data:y,style:{width:"100%"},height:"150","header-cell-style":{color:"#ffffff",backgroundColor:"#011946"},"cell-style":{color:"#ffffff",backgroundColor:"#011946"}},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{prop:"ip",label:"网段"}),(0,t.Wm)(b,{prop:"organization",label:"所属机构或组织"})])),_:1})])),_:1}),(0,t.Wm)(C,{span:18},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.wy)((0,t._)("div",h,[(0,t._)("p",null,(0,n.zw)(g.value.ip),1),(0,t._)("p",null,(0,n.zw)(g.value.name),1),(0,t._)("p",null,(0,n.zw)(g.value.city),1),(0,t._)("p",null,(0,n.zw)(g.value.domain),1),(0,t.Wm)(s,{onClick:i[3]||(i[3]=e=>l.value=!1),round:""},{default:(0,t.w5)((()=>[(0,t.Uk)("×")])),_:1})],512),[[o.F8,l.value]])])),_:1})}}}),w=a(89);const y=(0,w.Z)(g,[["__scopeId","data-v-d8c1860c"]]);var v=y}}]);
//# sourceMappingURL=about.365605d7.js.map