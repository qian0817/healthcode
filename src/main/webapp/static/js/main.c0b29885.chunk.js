(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{259:function(e,t,n){},438:function(e,t,n){"use strict";n.r(t);var a=n(6),c=n(0),r=n(34),i=n.n(r),s=(n(259),n(42)),l=n.n(s),o=n(54),u=n(445),d=n(152),j=n(440),b=n(441),h=n(244),O=n(57),x=n(453),p=n(454),f=n(202),m=n.n(f),v=n(250),g=n(203),y=n.n(g),I=m.a.create({headers:{"Content-Type":"application/x-www-form-urlencoded"}});I.interceptors.request.use((function(e){return e.data=y.a.stringify(e.data),e})),I.interceptors.response.use((function(e){return e}),(function(e){var t=e;return null!=t.response&&v.b.warn(t.response.data.message),Promise.reject(e)}));var k=I,S=n(36),w="set_login_status",C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return e=t.data;default:return e}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){t({type:w,data:e})}},T=n(14),A=n(207),N=n(108),L=n(109);function M(){var e=Object(N.a)(["\n  margin: auto;\n  height: 300px;\n  width: 500px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n"]);return M=function(){return e},e}var B,D=Object(L.a)(u.a)(M()),_=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(S.b)();if(e.login)switch(e.type){case"teacher":return Object(a.jsx)(T.a,{to:"/teacher"});case"student":return Object(a.jsx)(T.a,{to:"/student"});default:return Object(a.jsx)(T.a,{to:"/admin"})}var n=function(){var e=Object(o.a)(l.a.mark((function e(n){var a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.username,c=n.password,r=n.type,e.next=6,k.post("/login",{type:r,username:a,password:c});case 6:i=e.sent,t(E(i.data)),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(A.a,{type:"cobweb",bg:!0,num:60}),Object(a.jsxs)(D,{onFinish:n,children:[Object(a.jsx)("h2",{style:{display:"block",fontSize:30,textAlign:"center"},children:"\u5065\u5eb7\u7801\u7ba1\u7406\u7cfb\u7edf"}),Object(a.jsx)(u.a.Item,{name:"type",style:{textAlign:"center"},rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7528\u6237\u7c7b\u578b"}],children:Object(a.jsx)(d.a.Group,{style:{display:"block",width:"100%"},children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(d.a,{value:"student",children:"\u5b66\u751f"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(d.a,{value:"teacher",children:"\u6559\u5e08"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(d.a,{value:"admin",children:"\u7ba1\u7406\u5458"})})]})})}),Object(a.jsx)(u.a.Item,{name:"username",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u7528\u6237\u540d"}],children:Object(a.jsx)(h.a,{prefix:Object(a.jsx)(x.a,{className:"site-form-item-icon"}),autoComplete:"username",placeholder:"\u7528\u6237\u540d"})}),Object(a.jsx)(u.a.Item,{name:"password",rules:[{required:!0,message:"\u8bf7\u586b\u5199\u5bc6\u7801"}],children:Object(a.jsx)(h.a,{prefix:Object(a.jsx)(p.a,{className:"site-form-item-icon"}),placeholder:"\u5bc6\u7801",autoComplete:"current-password",type:"password"})}),Object(a.jsx)(u.a.Item,{children:Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",block:!0,children:"\u767b\u5f55"})})]})]})},F=n(442),G=n(77),W=n(32),q=n(446),R=n(451),Y=n(444);!function(e){e.GREEN="GREEN",e.YELLOW="YELLOW",e.RED="RED"}(B||(B={}));var K,z=function(e){switch(e){case null:return"\u672a\u586b\u62a5";case B.GREEN:return"\u7eff\u7801";case B.RED:return"\u7ea2\u7801";case B.YELLOW:return"\u9ec4\u7801";default:return"\u672a\u586b\u62a5"}},P=n(245),H=n(448),V=n(450),U=function(e){var t=e.visible,n=e.setVisible,r=Object(c.useState)([]),i=Object(W.a)(r,2),s=i[0],u=i[1],d=Object(c.useState)(null),j=Object(W.a)(d,2),b=j[0],O=j[1],x=Object(c.useState)(""),p=Object(W.a)(x,2),f=p[0],m=p[1],v=Object(c.useState)(""),g=Object(W.a)(v,2),y=g[0],I=g[1],S=Object(c.useState)(""),w=Object(W.a)(S,2),C=w[0],E=w[1],T=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("/admin/insertStudent",{id:f,name:y,classId:b,idCard:C});case 2:n(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){k.get("/admin/getAllCollege").then((function(e){return u(e.data.map((function(e){return{value:e.id,label:e.name,isLeaf:!1,type:"college"}})))}))}),[]);var A=function(){var e=Object(o.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:console.log(t),(n=t[t.length-1]).loading=!0,e.prev=5,n.id=n.value,e.t0=n.type,e.next="college"===e.t0?10:"major"===e.t0?15:20;break;case 10:return e.next=12,k.get("/admin/getMajorByCollegeId",{params:{collegeId:n.value}});case 12:return a=e.sent,n.children=a.data.map((function(e){return{value:e.id,label:e.name,isLeaf:!1,type:"major"}})),e.abrupt("break",20);case 15:return e.next=17,k.get("/admin/getAllClazzByMajor",{params:{majorId:n.value}});case 17:return c=e.sent,n.children=c.data.map((function(e){return{value:e.id,label:e.name,isLeaf:!0,type:"class"}})),e.abrupt("break",20);case 20:u(Object(P.a)(s)),e.next=25;break;case 23:e.prev=23,e.t1=e.catch(5);case 25:return e.prev=25,n.loading=!1,e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[5,23,25,28]])})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(H.a,{title:"\u6dfb\u52a0\u65b0\u5b66\u751f",onCancel:function(){return n(!1)},visible:t,onOk:T,children:[Object(a.jsx)(V.a,{options:s,loadData:A,changeOnSelect:!0,placeholder:"\u8bf7\u9009\u62e9\u73ed\u7ea7",onChange:function(e,t){3===e.length&&null!=t?O(t[2].value):O(null)},style:{width:"100%"}}),Object(a.jsx)(h.a,{placeholder:"\u5b66\u53f7",onChange:function(e){return m(e.target.value)},value:f}),Object(a.jsx)(h.a,{placeholder:"\u59d3\u540d",onChange:function(e){return I(e.target.value)},value:y}),Object(a.jsx)(h.a,{placeholder:"\u8eab\u4efd\u8bc1\u53f7",onChange:function(e){return E(e.target.value)},value:C})]})};!function(e){e.SYSTEM_ADMIN="SYSTEM_ADMIN",e.SCHOOL_ADMIN="SCHOOL_ADMIN",e.COLLEGE_ADMIN="COLLEGE_ADMIN"}(K||(K={}));var J=function(){var e=Object(c.useState)(!1),t=Object(W.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),s=Object(W.a)(i,2),l=s[0],o=s[1],u=Object(c.useState)(),d=Object(W.a)(u,2),j=d[0],b=d[1],h=Object(T.h)(),x=h.collegeId,p=h.majorId,f=h.classId,m=Object(S.c)((function(e){return e.login})),v=[{title:"\u5b66\u53f7",dataIndex:"studentId",key:"studentId"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5b66\u9662",dataIndex:"collegeName",key:"collegeName"},{title:"\u4e13\u4e1a",dataIndex:"majorName",key:"majorName"},{title:"\u73ed\u7ea7",dataIndex:"className",key:"className"},{title:"\u5065\u5eb7\u7801",dataIndex:"type",key:"type",render:function(e){return z(e)},filters:[{text:"\u7ea2\u7801",value:"\u7ea2\u7801"},{text:"\u7eff\u7801",value:"\u7eff\u7801"},{text:"\u9ec4\u7801",value:"\u9ec4\u7801"},{text:"\u672a\u586b\u62a5",value:"\u672a\u586b\u62a5"}],onFilter:function(e,t){return z(t.type)===e}}];Object(c.useEffect)((function(){r(!0),k.get("/admin/getStudentStatistic",{params:{collegeId:x,majorId:p,classId:f}}).then((function(e){return b(e.data)})).finally((function(){return r(!1)}))}),[x,p,f]);var g=m.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{onBack:function(){return window.history.back()},ghost:!1,title:"\u5b66\u751f\u7ba1\u7406",extra:g.role===K.SYSTEM_ADMIN&&Object(a.jsx)(O.a,{onClick:function(){return o(!0)},type:"primary",children:"\u6dfb\u52a0\u65b0\u5b66\u751f"}),children:Object(a.jsxs)(R.b,{children:[Object(a.jsx)(R.b.Item,{label:"\u5b66\u751f\u603b\u6570",children:null===j||void 0===j?void 0:j.totalStudentCount}),Object(a.jsx)(R.b.Item,{label:"\u7eff\u7801\u5b66\u751f\u6570\u91cf",children:null===j||void 0===j?void 0:j.greenCodeStudentCount}),Object(a.jsx)(R.b.Item,{label:"\u9ec4\u7801\u5b66\u751f\u6570\u91cf",children:null===j||void 0===j?void 0:j.yellowCodeStudentCount}),Object(a.jsx)(R.b.Item,{label:"\u7ea2\u7801\u5b66\u751f\u6570\u91cf",children:null===j||void 0===j?void 0:j.redCodeStudentCount})]})}),Object(a.jsx)(U,{visible:l,setVisible:o}),Object(a.jsx)(Y.a,{loading:n,columns:v,rowKey:"studentId",dataSource:null===j||void 0===j?void 0:j.dailyCardList})]})},$=n(121),Q=$.a.Option,X=function(e){var t=e.visible,n=e.setVisible,r=Object(c.useState)([]),i=Object(W.a)(r,2),s=i[0],u=i[1],d=Object(c.useState)(null),j=Object(W.a)(d,2),b=j[0],O=j[1],x=Object(c.useState)(),p=Object(W.a)(x,2),f=p[0],m=p[1],v=Object(c.useState)(),g=Object(W.a)(v,2),y=g[0],I=g[1],S=Object(c.useState)(),w=Object(W.a)(S,2),C=w[0],E=w[1];Object(c.useEffect)((function(){k.get("/admin/getAllCollege").then((function(e){return u(e.data)}))}),[]);var T=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("/admin/insertTeacher",{teacherId:f,name:y,collegeId:b,idCard:C});case 2:n(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(H.a,{title:"\u6dfb\u52a0\u65b0\u6559\u5e08",onCancel:function(){return n(!1)},visible:t,onOk:T,children:[Object(a.jsx)($.a,{placeholder:"\u5b66\u9662",style:{width:"100%"},onChange:function(e){return O(e)},children:s.map((function(e){return Object(a.jsx)(Q,{value:e.id,children:e.name},e.id)}))}),Object(a.jsx)(h.a,{placeholder:"\u5de5\u53f7",onChange:function(e){return m(e.target.value)},value:f}),Object(a.jsx)(h.a,{placeholder:"\u59d3\u540d",onChange:function(e){return I(e.target.value)},value:y}),Object(a.jsx)(h.a,{placeholder:"\u8eab\u4efd\u8bc1\u53f7",onChange:function(e){return E(e.target.value)},value:C})]})},Z=function(){var e=Object(c.useState)(!1),t=Object(W.a)(e,2),n=t[0],r=t[1],i=Object(S.c)((function(e){return e.login})),s=Object(c.useState)(!1),l=Object(W.a)(s,2),o=l[0],u=l[1],d=Object(c.useState)(),j=Object(W.a)(d,2),b=j[0],h=j[1],x=[{title:"\u5de5\u53f7",dataIndex:"teacherId",key:"teacherId"},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u5b66\u9662",dataIndex:"collegeName",key:"collegeName"},{title:"\u5065\u5eb7\u7801",dataIndex:"type",key:"type",render:function(e){return z(e)},filters:[{text:"\u7ea2\u7801",value:"\u7ea2\u7801"},{text:"\u7eff\u7801",value:"\u7eff\u7801"},{text:"\u9ec4\u7801",value:"\u9ec4\u7801"},{text:"\u672a\u586b\u62a5",value:"\u672a\u586b\u62a5"}],onFilter:function(e,t){return z(t.type)===e}}];Object(c.useEffect)((function(){u(!0),k.get("/admin/getTeacherStatistic").then((function(e){return h(e.data)})).finally((function(){return u(!1)}))}),[]);var p=i.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{onBack:function(){return window.history.back()},ghost:!1,title:"\u6559\u5e08\u7ba1\u7406",extra:p.role===K.SYSTEM_ADMIN&&Object(a.jsx)(O.a,{onClick:function(){return r(!0)},type:"primary",children:"\u6dfb\u52a0\u65b0\u6559\u5e08"}),children:Object(a.jsxs)(R.b,{children:[Object(a.jsx)(R.b.Item,{label:"\u6559\u5e08\u603b\u6570",children:null===b||void 0===b?void 0:b.totalTeacherCount}),Object(a.jsx)(R.b.Item,{label:"\u7eff\u7801\u6559\u5e08\u6570\u91cf",children:null===b||void 0===b?void 0:b.greenCodeTeacherCount}),Object(a.jsx)(R.b.Item,{label:"\u9ec4\u7801\u6559\u5e08\u6570\u91cf",children:null===b||void 0===b?void 0:b.yellowCodeTeacherCount}),Object(a.jsx)(R.b.Item,{label:"\u7ea2\u7801\u6559\u5e08\u6570\u91cf",children:null===b||void 0===b?void 0:b.redCodeTeacherCount})]})}),Object(a.jsx)(X,{visible:n,setVisible:r}),Object(a.jsx)(Y.a,{loading:o,columns:x,rowKey:"teacherId",dataSource:null===b||void 0===b?void 0:b.dailyCardList})]})},ee=n(64),te=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(c.useState)(!1),n=Object(W.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),l=Object(W.a)(s,2),o=l[0],u=l[1];Object(c.useEffect)((function(){i(!0),k.get("/admin/getAllCollege").then((function(e){return u(e.data)})).finally((function(){return i(!1)}))}),[]);var d=[{title:"\u5b66\u9662\u540d",dataIndex:"name",key:"name"},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/college/".concat(e),children:"\u67e5\u770b\u6240\u6709\u4e13\u4e1a"})}},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/student/".concat(e),children:"\u67e5\u770b\u8be5\u5b66\u9662\u6240\u6709\u5b66\u751f\u4fe1\u606f"})}},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/student/".concat(e),children:"\u67e5\u770b\u8be5\u5b66\u9662\u6240\u6709\u6559\u5e08\u4fe1\u606f"})}}],j=e.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{ghost:!1,title:"\u5b66\u9662\u7ba1\u7406",extra:j.role===K.SYSTEM_ADMIN&&Object(a.jsx)(O.a,{type:"primary",children:"\u6dfb\u52a0\u65b0\u5b66\u9662"})}),Object(a.jsx)(Y.a,{loading:r,rowKey:"name",columns:d,dataSource:o})]})},ne=n(455),ae=n(456),ce=n(457),re=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(c.useState)(!1),n=Object(W.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),l=Object(W.a)(s,2),o=l[0],u=l[1],d=Object(T.h)(),j=d.collegeId,b=d.majorId;Object(c.useEffect)((function(){i(!0),k.get("/admin/getAllClazzByMajor",{params:{majorId:b}}).then((function(e){return u(e.data)})).finally((function(){return i(!1)}))}),[b]);var h=[{title:"\u73ed\u7ea7\u540d",dataIndex:"name",key:"name"},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/student/".concat(j,"/").concat(b,"/").concat(e),children:"\u67e5\u770b\u8be5\u73ed\u7ea7\u6240\u6709\u5b66\u751f\u4fe1\u606f"})}}],x=e.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{onBack:function(){return window.history.back()},ghost:!1,title:"\u73ed\u7ea7\u7ba1\u7406",extra:x.role===K.SYSTEM_ADMIN&&Object(a.jsx)(O.a,{type:"primary",children:"\u6dfb\u52a0\u65b0\u73ed\u7ea7"})}),Object(a.jsx)(Y.a,{loading:r,columns:h,dataSource:o})]})},ie=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(c.useState)(!1),n=Object(W.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)([]),l=Object(W.a)(s,2),o=l[0],u=l[1],d=Object(T.h)().collegeId;Object(c.useEffect)((function(){i(!0),k.get("/admin/getMajorByCollegeId",{params:{collegeId:d}}).then((function(e){return u(e.data)})).finally((function(){return i(!1)}))}),[d]);var j=[{title:"\u4e13\u4e1a\u540d",dataIndex:"name",key:"name"},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/college/".concat(d,"/major/").concat(e),children:"\u67e5\u770b\u6240\u6709\u73ed\u7ea7"})}},{title:"",dataIndex:"id",key:"id",render:function(e){return Object(a.jsx)(ee.b,{to:"/admin/student/".concat(d,"/").concat(e),children:"\u67e5\u770b\u8be5\u4e13\u4e1a\u6240\u6709\u5b66\u751f\u4fe1\u606f"})}}],b=e.user;return Object(a.jsxs)("div",{children:[Object(a.jsx)(q.a,{onBack:function(){return window.history.back()},ghost:!1,title:"\u4e13\u4e1a\u7ba1\u7406",extra:b.role===K.SYSTEM_ADMIN&&Object(a.jsx)(O.a,{type:"primary",children:"\u6dfb\u52a0\u65b0\u4e13\u4e1a"})}),Object(a.jsx)(Y.a,{loading:r,columns:j,dataSource:o})]})},se=F.a.Content,le=F.a.Sider,oe=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(T.g)(),n=Object(S.b)();if(!e.login)return Object(a.jsx)(T.a,{to:"/"});if("teacher"===e.type)return Object(a.jsx)(T.a,{to:"/teacher"});if("student"===e.type)return Object(a.jsx)(T.a,{to:"/student"});var c=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("/logout");case 2:n(E(null)),t.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{children:Object(a.jsxs)(F.a,{style:{minHeight:"100vh"},children:[Object(a.jsxs)(le,{collapsible:!0,className:"site-layout-background",children:[Object(a.jsx)("div",{className:"logo"}),Object(a.jsxs)(G.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(a.jsx)(G.a.Item,{icon:Object(a.jsx)(ne.a,{}),onClick:function(){return t.push("/admin/student")},children:"\u5b66\u751f\u7ba1\u7406"},"1"),Object(a.jsx)(G.a.Item,{icon:Object(a.jsx)(x.a,{}),onClick:function(){return t.push("/admin/teacher")},children:"\u6559\u5e08\u7ba1\u7406"},"2"),Object(a.jsx)(G.a.Item,{icon:Object(a.jsx)(ae.a,{}),onClick:function(){return t.push("/admin/college")},children:"\u5b66\u9662\u7ba1\u7406"},"3"),Object(a.jsx)(G.a.Item,{icon:Object(a.jsx)(ce.a,{}),onClick:c,children:"\u767b\u51fa"},"4")]})]}),Object(a.jsx)(F.a,{className:"site-layout",children:Object(a.jsx)(se,{children:Object(a.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:360},children:Object(a.jsxs)(T.d,{children:[Object(a.jsx)(T.b,{path:"/admin/student",exact:!0,component:J}),Object(a.jsx)(T.b,{path:"/admin/student/:collegeId",exact:!0,component:J}),Object(a.jsx)(T.b,{path:"/admin/student/:collegeId/:majorId",exact:!0,component:J}),Object(a.jsx)(T.b,{path:"/admin/student/:collegeId/:majorId/:classId",exact:!0,component:J}),Object(a.jsx)(T.b,{path:"/admin/teacher",exact:!0,component:Z}),Object(a.jsx)(T.b,{path:"/admin/teacher/:collegeId",exact:!0,component:Z}),Object(a.jsx)(T.b,{path:"/admin/college",exact:!0,component:te}),Object(a.jsx)(T.b,{path:"/admin/college/:collegeId",exact:!0,component:ie}),Object(a.jsx)(T.b,{path:"/admin/college/:collegeId/major/:majorId",exact:!0,component:re})]})})})})]})})},ue=n(452),de=n(243);function je(){var e=Object(N.a)(["\n  margin-top: 15px;\n  margin-left: 30%;\n  float: left;\n"]);return je=function(){return e},e}function be(){var e=Object(N.a)(["\n  margin-top: 10px;\n  margin-right: 30%;\n  float: right;\n"]);return be=function(){return e},e}function he(){var e=Object(N.a)(["\n  z-index: 1;\n  position: relative;\n  color: white;\n  background: white;\n  height: 56px;\n  border-bottom: 1px solid #f0f0f0;\n"]);return he=function(){return e},e}var Oe=L.a.div(he()),xe=Object(L.a)(O.a)(be()),pe=Object(L.a)(de.a)(je()),fe=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(S.b)(),n=Object(T.g)(),c=function(){var e=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.post("/logout");case 2:t(E(null)),n.push("/");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)(ue.a,{children:Object(a.jsxs)(Oe,{children:["name"in e.user&&Object(a.jsx)(pe,{children:e.user.name}),"username"in e.user&&Object(a.jsx)(pe,{children:e.user.username}),Object(a.jsx)(xe,{onClick:c,type:"primary",children:"\u767b\u51fa"})]})})},me=n(443),ve=n(122),ge=function(e){var t=e.onFinish,n=e.user,c=e.isStudent,r={display:"block",height:"30px",lineHeight:"30px"};return Object(a.jsx)("div",{children:Object(a.jsxs)(u.a,{onFinish:function(e){var n=e.haveBeenToKeyEpidemicAreas,a=e.haveBeenAbroad,c=e.isTheExposed,r=e.isSuspectedCase,i=e.currentSymptoms;t(n,a,c,r,i)},style:{marginTop:30},children:[Object(a.jsx)(u.a.Item,{label:c?"\u5b66\u53f7":"\u5de5\u53f7",style:{display:"block"},children:Object(a.jsx)(h.a,{value:n.id,disabled:!0})}),Object(a.jsx)(u.a.Item,{label:"\u59d3\u540d",style:{display:"block"},children:Object(a.jsx)(h.a,{value:n.name,disabled:!0})}),Object(a.jsx)(u.a.Item,{label:"\u8eab\u4efd\u8bc1\u53f7",style:{display:"block"},children:Object(a.jsx)(h.a,{value:n.idCard,disabled:!0})}),Object(a.jsx)(u.a.Item,{style:{display:"block"},name:"haveBeenToKeyEpidemicAreas",label:"\u8fd1\u671f\uff0814\u5929\u5185\uff09\u53bb\u8fc7\u6e56\u5317\u7701\u6216\u91cd\u70b9\u75ab\u533a",rules:[{required:!0,message:"\u672a\u9009\u62e9\u6b64\u9879"}],children:Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a,{value:"true",style:r,children:"\u662f"}),Object(a.jsx)(d.a,{value:"false",style:r,children:"\u5426"})]})}),Object(a.jsx)(me.a,{}),Object(a.jsx)(u.a.Item,{name:"haveBeenAbroad",label:"\u8fd1\u671f\uff0814\u5929\u5185\uff09\u53bb\u8fc7\u56fd\u5916",style:{display:"block"},rules:[{required:!0,message:"\u672a\u9009\u62e9\u6b64\u9879"}],children:Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a,{value:"true",style:r,children:"\u662f"}),Object(a.jsx)(d.a,{value:"false",style:r,children:"\u5426"})]})}),Object(a.jsx)(me.a,{}),Object(a.jsx)(u.a.Item,{name:"isTheExposed",label:"\u8fd1\u671f\uff0814\u5929\u5185\uff09\u63a5\u89e6\u8fc7\u65b0\u51a0\u786e\u8bca\u75c5\u4eba\u6216\u7591\u4f3c\u75c5\u4eba",style:{display:"block"},rules:[{required:!0,message:"\u672a\u9009\u62e9\u6b64\u9879"}],children:Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a,{value:"true",style:r,children:"\u662f"}),Object(a.jsx)(d.a,{value:"false",style:r,children:"\u5426"})]})}),Object(a.jsx)(me.a,{}),Object(a.jsx)(u.a.Item,{name:"isSuspectedCase",label:"\u88ab\u536b\u751f\u90e8\u95e8\u786e\u8ba4\u4e3a\u65b0\u51a0\u80ba\u708e\u786e\u8bca\u75c5\u4f8b\u6216\u7591\u4f3c\u75c5\u4f8b",style:{display:"block"},rules:[{required:!0,message:"\u672a\u9009\u62e9\u6b64\u9879"}],children:Object(a.jsxs)(d.a.Group,{children:[Object(a.jsx)(d.a,{value:"true",style:r,children:"\u662f"}),Object(a.jsx)(d.a,{value:"false",style:r,children:"\u5426"})]})}),Object(a.jsx)(me.a,{}),Object(a.jsx)(u.a.Item,{name:"currentSymptoms",style:{display:"block"},label:"\u8eab\u4f53\u5065\u5eb7\u60c5\u51b5",children:Object(a.jsx)(ve.a.Group,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u53d1\u70e7",children:"\u53d1\u70e7\uff08\u226537.3\u2103\uff09"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u4e4f\u529b",children:"\u4e4f\u529b"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u5e72\u54b3",children:"\u5e72\u54b3"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u9f3b\u585e",children:"\u9f3b\u585e"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u6d41\u6d95",children:"\u6d41\u6d95"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u54bd\u75db",children:"\u54bd\u75db"})}),Object(a.jsx)(b.a,{span:8,children:Object(a.jsx)(ve.a,{value:"\u8179\u6cfb",children:"\u8179\u6cfb"})})]})})}),Object(a.jsx)(me.a,{}),Object(a.jsx)(u.a.Item,{name:"check",rules:[{required:!0,message:"\u672a\u52fe\u9009\u6b64\u9879"},function(){return{validator:function(e,t){return t?Promise.resolve():Promise.reject("\u8bf7\u52fe\u9009\u6b64\u9879")}}}],children:Object(a.jsx)(ve.a.Group,{children:Object(a.jsx)(ve.a,{value:"true",children:"\u672c\u4eba\u90d1\u91cd\u627f\u8bfa\uff1a\u586b\u62a5\u4fe1\u606f\u771f\u5b9e\uff0c\u613f\u610f\u627f\u62c5\u76f8\u5e94\u7684\u6cd5\u5f8b\u8d23\u4efb\u3002"})})}),Object(a.jsx)(u.a.Item,{children:Object(a.jsx)(O.a,{type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})})},ye=n(447),Ie=n(449),ke=function(){var e=Object(S.c)((function(e){return e.login})),t=e.user;return Object(a.jsxs)("div",{style:{display:"block",textAlign:"center"},children:[Object(a.jsxs)("h2",{children:[t.name," \u4f60\u597d"]}),Object(a.jsx)("h2",{children:"\u8bf7\u5728\u63a5\u53d7\u68c0\u67e5\u65f6\u4e3b\u52a8\u51fa\u793a\u5de5\u5927\u901a\u884c\u7801"}),Object(a.jsx)("h2",{children:"\u914d\u5408\u7ba1\u7406\u5458\u7684\u5de5\u4f5c\uff0c\u505a\u597d\u81ea\u4e3b\u9632\u62a4\u5de5\u4f5c"}),Object(a.jsx)("h2",{children:"\u4f60\u7684\u5065\u5eb7\u7801\u72b6\u6001\u5c06\u6839\u636e\u4f60\u7684\u7533\u62a5\u52a8\u6001\u5237\u65b0"}),Object(a.jsx)(Ie.a,{preview:!1,src:"student"===e.type?"/student/qrcode":"/teacher/qrcode",alt:"\u5065\u5eb7\u7801"})]})},Se=function(){var e=Object(S.c)((function(e){return e.login})),t=Object(c.useState)(!1),n=Object(W.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)(!0),u=Object(W.a)(s,2),d=u[0],j=u[1];if(Object(c.useEffect)((function(){k.get("/student/cardStatus").then((function(e){return i(e.data)})).finally((function(){return j(!1)}))}),[]),!e.login)return Object(a.jsx)(T.a,{to:"/"});if("teacher"===e.type)return Object(a.jsx)(T.a,{to:"/teacher"});if("student"!==e.type)return Object(a.jsx)(T.a,{to:"/admin"});var b=function(){var e=Object(o.a)(l.a.mark((function e(t,n,a,c,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.post("/student/submit",{haveBeenToKeyEpidemicAreas:t,haveBeenAbroad:n,isTheExposed:a,isSuspectedCase:c,currentSymptoms:r}).then((function(){return i(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(fe,{}),Object(a.jsxs)("div",{style:{marginLeft:"30%",marginRight:"30%",marginTop:30},children:[d&&Object(a.jsx)(ye.a,{active:!0}),!d&&r&&Object(a.jsx)(ke,{}),!d&&!r&&Object(a.jsx)(ge,{onFinish:b,isStudent:!0,user:e.user})]})]})},we=function(){var e=Object(c.useState)(!1),t=Object(W.a)(e,2),n=t[0],r=t[1],i=Object(S.c)((function(e){return e.login})),s=Object(c.useState)(!0),u=Object(W.a)(s,2),d=u[0],j=u[1];if(Object(c.useEffect)((function(){k.get("/teacher/cardStatus").then((function(e){return r(e.data)})).finally((function(){return j(!1)}))}),[]),!i.login)return Object(a.jsx)(T.a,{to:"/"});if("student"===i.type)return Object(a.jsx)(T.a,{to:"/student"});if("teacher"!==i.type)return Object(a.jsx)(T.a,{to:"/admin"});var b=function(){var e=Object(o.a)(l.a.mark((function e(t,n,a,c,i){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.post("/teacher/submit",{haveBeenToKeyEpidemicAreas:t,haveBeenAbroad:n,isTheExposed:a,isSuspectedCase:c,currentSymptoms:i}).then((function(){return r(!0)}));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a,c,r){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(fe,{}),Object(a.jsxs)("div",{style:{marginLeft:"30%",marginRight:"30%",marginTop:30},children:[d&&Object(a.jsx)(ye.a,{active:!0}),!d&&n&&Object(a.jsx)(ke,{}),!d&&!n&&Object(a.jsx)(ge,{onFinish:b,user:i.user,isStudent:!1})]})]})},Ce=n(228);var Ee=function(){var e=Object(S.b)(),t=Object(S.c)((function(e){return e.login}));return Object(c.useEffect)((function(){k.get("/checkLoginStatus").then((function(t){return e(E(t.data))}))}),[e]),Object(a.jsxs)(a.Fragment,{children:[!t&&Object(a.jsx)("div",{style:{width:"100%",height:"100%",textAlign:"center",marginTop:"20%"},children:Object(a.jsx)(Ce.a,{size:"large"})}),t&&Object(a.jsxs)(T.d,{children:[Object(a.jsx)(T.b,{path:"/",exact:!0,component:_}),Object(a.jsx)(T.b,{path:"/teacher",component:we}),Object(a.jsx)(T.b,{path:"/admin",component:oe}),Object(a.jsx)(T.b,{path:"/student",component:Se})]})]})},Te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,458)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Ae=n(92),Ne=n(238),Le=n(239),Me=Object(Ae.combineReducers)({login:C}),Be=Object(Ae.createStore)(Me,Object(Ne.composeWithDevTools)(Object(Ae.applyMiddleware)(Le.a))),De=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Fe=n(13),Ge=n(240),We=n.n(Ge);i.a.render(Object(a.jsx)(S.a,{store:Be,children:Object(a.jsx)(Fe.b,{locale:We.a,children:Object(a.jsx)(ee.a,{children:Object(a.jsx)(Ee,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");De?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):_e(t,e)}))}}(),Te()}},[[438,1,2]]]);
//# sourceMappingURL=main.c0b29885.chunk.js.map