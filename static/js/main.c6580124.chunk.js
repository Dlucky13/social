(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={site_nav:"Nav_site_nav__3MfPQ",item:"Nav_item__96rLj",link:"Nav_link__1CVGd",activeLink:"Nav_activeLink__GsTVR"}},131:function(e,t,a){e.exports={formErr:"login_formErr__2_Z81"}},132:function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return o}));var n=a(24),r=a(2),i={news:[{id:1,text:"We added new function"}],addNewsText:"something happing?"},s=function(e){return{type:"updateNewsText",text:e}},o=function(){return{type:"updateNews"}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"updateNews":var a={id:2,text:e.addNewsText};return Object(r.a)(Object(r.a)({},e),{},{news:[].concat(Object(n.a)(e.news),[a]),addNewsText:""});case"updateNewsText":return Object(r.a)(Object(r.a)({},e),{},{addNewsText:t.text});default:return e}}},135:function(e,t,a){e.exports={sidebar:"Sidebar_sidebar__2WupE"}},136:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__21gkV",dialog:"Dialogs_dialog__2uWZD"}},14:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return c}));var n=a(140),r=n.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"4f14103a-79ff-4533-920c-cb87d80768f3"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},getProfile:function(e){return console.warn("Use obsolete method, please use new profileAPI method!!!"),s.getProfile(e)}},s={getProfile:function(e){return r.get("profile/".concat(e))},getProfileStatus:function(e){return r.get("profile/status/".concat(e))},updateProfileStatus:function(e){return r.put("profile/status",{status:e})},updateProfileAvatar:function(e){var t=new FormData;return t.append("image",e),r.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileChanges:function(e){return r.put("/profile",e)}},o={me:function(){return r.get("auth/me")},login:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:a,captcha:n})},logout:function(){return r.delete("auth/login")}},c={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},141:function(e,t,a){e.exports={current_page:"Pagination_current_page__2nwS2"}},142:function(e,t,a){e.exports=a.p+"static/media/loading.cda0f21d.svg"},171:function(e,t,a){e.exports=a(299)},172:function(e,t,a){},177:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},25:function(e,t,a){e.exports={users_wrapper:"Users_users_wrapper__2MLsW",user_wrapper:"Users_user_wrapper__3Na_N",user_status:"Users_user_status__3D0B_",user_info:"Users_user_info__2lov0",ava:"Users_ava__dN1VK",btn:"Users_btn__9AIH5"}},299:function(e,t,a){"use strict";a.r(t);a(172),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=a(65),r=a.n(n),i=a(0),s=a.n(i),o=a(36),c=a(37),u=a(39),l=a(38),d=(a(177),a(10)),m=a.n(d),f=a(12),p=function(){return s.a.createElement("nav",{className:m.a.site_nav},s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"/profile",className:m.a.link,activeClassName:m.a.activeLink},"Profile")),s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"/users",className:m.a.link,activeClassName:m.a.activeLink},"Users")),s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"/messages",className:m.a.link,activeClassName:m.a.activeLink},"Messages")),s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"news",className:m.a.link,activeClassName:m.a.activeLink},"News")),s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"music",className:m.a.link,activeClassName:m.a.activeLink},"Music")),s.a.createElement("div",{className:m.a.item},s.a.createElement(f.b,{to:"settings",className:m.a.link,activeClassName:m.a.activeLink},"Settings")))},g=(a(182),function(e){return s.a.createElement("div",null,s.a.createElement("h1",null,"Music"))}),b=(a(183),function(e){return s.a.createElement("div",null,"Settings")}),h=a(135),v=a.n(h),_=a(92),E=a.n(_),O=function(e){return s.a.createElement("div",{className:E.a.friend_wrapper},s.a.createElement("img",{src:"https://i1.sndcdn.com/avatars-000323700456-wu94n2-t500x500.jpg",className:E.a.ava}),s.a.createElement("div",null,e.fname))},j=function(e){var t=e.state.friendsData.map((function(e){return s.a.createElement(O,{fname:e.name,key:e.id})}));return s.a.createElement("div",{className:v.a.sidebar},t)},w=a(9),P=a(69),N=a.n(P),y=a(136),C=a.n(y),k=a(89),D=a(133),x=a(56),L=a(34),S=Object(L.a)(150),U=Object(x.a)("textarea"),M=Object(D.a)({form:"addMessageForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement(k.a,{component:U,name:"addMessageText",validate:[L.b,S],placeholder:"type your message"}),s.a.createElement("button",null,"Send Message"))})),T=function(e){return s.a.createElement("div",{className:C.a.dialog},s.a.createElement("div",null,e.text))},z=a(98),A=function(e){var t=e.contactsData.map((function(e){return s.a.createElement(z.a,{name:e.name,key:e.id,id:e.id})})),a=e.dialogsData.map((function(e){return s.a.createElement(T,{text:e.text,key:e.id})}));return s.a.createElement("div",{className:N.a.messages},s.a.createElement("div",{className:N.a.contacts_wrapper},t),s.a.createElement("div",{className:N.a.dialogs_wrapper},a),s.a.createElement(M,{onSubmit:e.addMessage}))},I=a(24),F=a(2),H={contactsData:[{id:1,name:"Dmitry"},{id:2,name:"Danil"},{id:3,name:"Andrey"},{id:4,name:"Kostya"},{id:5,name:"Artem"}],dialogsData:[{id:1,text:"Hey."},{id:2,text:"How about Thusday at 7.00 ?"},{id:3,text:"Have any plan on the next weekend?"}]},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addMessageState":var a={id:4,text:t.data.addMessageText};return Object(F.a)(Object(F.a)({},e),{},{dialogsData:[].concat(Object(I.a)(e.dialogsData),[a])});default:return e}},W=a(11),K=a(72),R=a(7),X=Object(R.d)(K.a,Object(W.b)((function(e){return{contactsData:e.messagesPage.contactsData,dialogsData:e.messagesPage.dialogsData}}),{addMessage:function(e){return{type:"addMessageState",data:e}}}))(A),B=a(96),G=a(14),J={usersData:[],pagesData:{pageSize:8,totalUsersCount:0,currentPage:1},isLoading:!0,isDisabled:[],fake:1},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fake":return Object(F.a)(Object(F.a)({},e),{},{fake:e.fake+1});case"follow":return Object(F.a)(Object(F.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(F.a)(Object(F.a)({},e),{},{followed:!0}):e}))});case"unfollow":return Object(F.a)(Object(F.a)({},e),{},{usersData:e.usersData.map((function(e){return e.id===t.userId?Object(F.a)(Object(F.a)({},e),{},{followed:!1}):e}))});case"setUsers":return Object(F.a)(Object(F.a)({},e),{},{usersData:Object(I.a)(t.users)});case"setCurrentPage":return Object(F.a)(Object(F.a)({},e),{},{pagesData:Object(F.a)(Object(F.a)({},e.pagesData),{},{currentPage:t.currentPage})});case"setPagesTotalCount":return Object(F.a)(Object(F.a)({},e),{},{pagesData:Object(F.a)(Object(F.a)({},e.pagesData),{},{totalUsersCount:t.totalCount})});case"isLoading":return Object(F.a)(Object(F.a)({},e),{},{isLoading:t.isLoading});case"disableToggle":return Object(F.a)(Object(F.a)({},e),{},{isDisabled:t.condition?[].concat(Object(I.a)(e.isDisabled),[t.userId]):e.isDisabled.filter((function(e){return e!=t.userId}))});default:return e}},Y=function(e){return{type:"isLoading",isLoading:e}},Z=function(e,t){return{type:"disableToggle",condition:e,userId:t}},q=a(25),$=a.n(q),ee=a(99),te=a.n(ee),ae=a(141),ne=a.n(ae),re=function(e){for(var t=e.pagesCount,a=e.currentPage,n=e.onPageChanged,r=[],i=1;i<=5;i++)r.push(i);for(var o=t-2;o<=t;o++)r.push(o);return s.a.createElement("div",null,r.map((function(e,t){return s.a.createElement("span",{className:(a===e&&ne.a.current_page).toString(),key:t,onClick:function(){n(e)}}," ",e," ")})))},ie=function(e){return s.a.createElement("div",{className:$.a.users_wrapper},s.a.createElement(re,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,pagesCount:e.pagesCount}),e.usersData.map((function(t){return s.a.createElement("div",{key:t.id,className:$.a.user_wrapper},s.a.createElement("div",{className:$.a.user_status},s.a.createElement(f.b,{to:"/profile/".concat(t.id)},t.photos.small?s.a.createElement("img",{src:t.photos.small,className:$.a.ava}):s.a.createElement("img",{src:te.a,className:$.a.ava})),t.followed?s.a.createElement("button",{className:$.a.btn,disabled:e.isDisabled.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)}},"Unfollow"):s.a.createElement("button",{className:$.a.btn,disabled:e.isDisabled.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)}},"Follow")),s.a.createElement("div",{className:$.a.user_info},s.a.createElement("div",null,s.a.createElement("div",null,t.name),s.a.createElement("div",null,t.status)),s.a.createElement("div",null,"user.location")))})))},se=a(40),oe=a(143),ce=Object(oe.a)((function(e){return e.usersPage.usersData}),(function(e){return e.filter((function(e){return!0}))})),ue=function(e){return e.usersPage.pagesData.pageSize},le=function(e){return e.usersPage.pagesData.currentPage},de=function(e){return Math.ceil(e.usersPage.pagesData.totalUsersCount/e.usersPage.pagesData.pageSize)},me=function(e){return e.usersPage.isLoading},fe=function(e){return e.usersPage.isDisabled},pe=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.setCurrentPage(t),e.props.getUsers(t,e.props.pageSize)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,this.props.isLoading&&s.a.createElement(se.a,null),s.a.createElement(ie,{usersData:this.props.usersData,pageSize:this.props.pageSize,currentPage:this.props.currentPage,pagesCount:this.props.pagesCount,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,isDisabled:this.props.isDisabled,disableToggle:this.props.disableToggle}))}}]),a}(s.a.Component),ge=Object(R.d)(Object(W.b)((function(e){return{usersData:ce(e),pageSize:ue(e),currentPage:le(e),pagesCount:de(e),isLoading:me(e),isDisabled:fe(e)}}),{follow:function(e){return function(t){t(Z(!0,e)),G.d.follow(e).then((function(a){t(Z(!1,e)),0===a.resultCode&&t(function(e){return{type:"follow",userId:e}}(e))}))}},unfollow:function(e){return function(t){t(Z(!0,e)),G.d.unfollow(e).then((function(a){t(Z(!1,e)),0===a.resultCode&&t(function(e){return{type:"unfollow",userId:e}}(e))}))}},getUsers:function(e,t){return function(a){a(Y(!0)),G.d.getUsers(e,t).then((function(e){a(Y(!1)),a({type:"setUsers",users:e.items}),a({type:"setPagesTotalCount",totalCount:e.totalCount})}))}},setCurrentPage:function(e){return{type:"setCurrentPage",currentPage:e}}}),w.f)(pe),be=a(45),he=a.n(be),ve=function(e){return s.a.createElement("header",{className:he.a.header},s.a.createElement("img",{src:"https://i1.sndcdn.com/avatars-000324128843-md332r-t500x500.jpg"}),s.a.createElement("div",{className:he.a.auth_block},e.isLogged?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:he.a.auth_info},e.login),s.a.createElement("button",{onClick:e.logout,className:he.a.logout_btn},"Logout")):s.a.createElement(s.a.Fragment,null,s.a.createElement(f.b,{to:"/login",className:he.a.auth_link},"Login"),e.isLoading&&s.a.createElement(se.a,null))))},_e=a(44),Ee=a.n(_e),Oe=a(68),je=a(28),we={id:null,email:null,login:null,isLogged:!1,isLoading:!1,captchaUrl:null},Pe=function(e,t,a,n){return{type:"setAuthorizedUser",data:{id:e,login:t,email:a,isLogged:n}}},Ne=function(e){return{type:"getCaptchaUrlSuccess",payload:{captchaUrl:e}}},ye=function(){return function(e){return G.a.me().then((function(t){if(0===t.data.resultCode){var a=t.data.data,n=a.id,r=a.login,i=a.email;e(Pe(n,r,i,!0))}}))}},Ce=function(){return function(){var e=Object(Oe.a)(Ee.a.mark((function e(t){var a,n;return Ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.c.getCaptchaUrl();case 2:a=e.sent,n=a.data.url,t(Ne(n));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setAuthorizedUser":return Object(F.a)(Object(F.a)({},e),t.data);case"loadingAuthDataToogle":return Object(F.a)(Object(F.a)({},e),{},{isLoading:t.isLoading});case"getCaptchaUrlSuccess":return Object(F.a)(Object(F.a)({},e),{},{captchaUrl:t.payload.captchaUrl});default:return e}},De=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(ve,{isLoading:this.props.auth.isLoading,isLogged:this.props.auth.isLogged,login:this.props.auth.login,logout:this.props.logout}))}}]),a}(s.a.Component),xe=Object(W.b)((function(e){return Object(F.a)({},e)}),{logout:function(){return function(e){G.a.logout().then((function(t){0===t.data.resultCode&&e(Pe(null,null,null,!1))}))}}})(De),Le=a(131),Se=a.n(Le),Ue=Object(x.a)("input"),Me=Object(D.a)({form:"login"})((function(e){var t=e.error,a=e.handleSubmit,n=e.captchaUrl;return s.a.createElement("form",{onSubmit:a},s.a.createElement("div",null,s.a.createElement(k.a,{placeholder:"email",name:"email",component:Ue,validate:[L.b],type:"email"})),s.a.createElement("div",null,s.a.createElement(k.a,{placeholder:"password",name:"password",component:Ue,type:"password",validate:[L.b]})),s.a.createElement("div",null,s.a.createElement(k.a,{type:"checkbox",name:"rememberMe",component:Ue})),t&&s.a.createElement("p",{className:Se.a.formErr},t),n&&s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("img",{src:n})),s.a.createElement(k.a,{placeholder:"symbols on captcha",name:"captcha",validate:[L.b],component:"input"})),s.a.createElement("div",null,s.a.createElement("button",null,"Sign in")))})),Te=Object(W.b)((function(e){return{captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,a,n){return function(r){G.a.login(e,t,a,n).then((function(e){if(0===e.data.resultCode)r(ye());else{10===e.data.resultCode&&r(Ce());var t=Object(je.a)("login",{_error:e.data.messages});r(t)}}))}}})((function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null," Login"),s.a.createElement(Me,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)},captchaUrl:e.captchaUrl}))})),ze={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"initializedSuccess":return Object(F.a)(Object(F.a)({},e),{},{initialized:!0});default:return e}},Ie=a(132),Fe=a(97),He={friendsData:[{id:1,name:"Vlad"},{id:2,name:"Ivan"},{id:3,name:"Nikita"}]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He;return Object(F.a)({},e)},We=a(144),Ke=a(134),Re=Object(R.c)({messagesPage:V,newsPage:Ie.b,profilePage:Fe.b,sidebarPage:Ve,usersPage:Q,auth:ke,form:Ke.a,app:Ae}),Xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.d,Be=Object(R.e)(Re,Xe(Object(R.a)(We.a)));window.__store__=Be;var Ge=Be,Je=Object(B.a)((function(){return a.e(3).then(a.bind(null,307))})),Qe=Object(B.a)((function(){return a.e(4).then(a.bind(null,308))})),Ye=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializingApp()}},{key:"render",value:function(){if(!this.props.initialized)return s.a.createElement(se.a,{className:"initialize_load"});var e=this.props.store.getState();return s.a.createElement("div",{className:"app_wrapper"},s.a.createElement(xe,null),s.a.createElement(p,null),s.a.createElement(j,{state:e.sidebarPage}),s.a.createElement("div",{className:"wrapper_main_content"},s.a.createElement(w.b,{path:"/profile/:UserId?",render:function(){return s.a.createElement(Je,null)}}),s.a.createElement(w.b,{path:"/messages",render:function(){return s.a.createElement(X,null)}}),s.a.createElement(w.b,{path:"/news",render:function(){return s.a.createElement(Qe,null)}}),s.a.createElement(w.b,{path:"/music",render:g}),s.a.createElement(w.b,{path:"/settings",render:b}),s.a.createElement(w.b,{path:"/users",render:function(){return s.a.createElement(ge,null)}}),s.a.createElement(w.b,{path:"/login",render:function(){return s.a.createElement(Te,null)}})))}}]),a}(s.a.Component),Ze=Object(R.d)(w.f,Object(W.b)((function(e){return{initialized:e.app.initialized}}),{initializingApp:function(){return function(e){var t=e(ye());Promise.all([t]).then((function(){e({type:"initializedSuccess"})}))}}}))(Ye),qe=function(e){return s.a.createElement(f.a,null,s.a.createElement(W.a,{store:Ge},s.a.createElement(Ze,{store:Ge})))};r.a.render(s.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return e?void 0:"field is required"},r=function(e){return function(t){if(t&&t.length>e)return"maxLength is: "+e+" symbols"}}},40:function(e,t,a){"use strict";var n=a(142),r=a.n(n),i=a(0),s=a.n(i);t.a=function(){return s.a.createElement("img",{src:r.a})}},45:function(e,t,a){e.exports={header:"Header_header__1VCKf",auth_block:"Header_auth_block__13h6M",auth_link:"Header_auth_link__k0fTs",auth_info:"Header_auth_info__3MUoW",logout_btn:"Header_logout_btn__2uOiy"}},55:function(e,t,a){e.exports={contact_info:"Contacts_contact_info__1g_SO",nameLink:"Contacts_nameLink__2W9V0",active_contact:"Contacts_active_contact__2QuiQ",avatar:"Contacts_avatar__2nOyk"}},56:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return l}));var n=a(145),r=a(0),i=a.n(r),s=a(70),o=a.n(s),c=a(89),u=function(e){return function(t){var a=t.input,r=t.meta,s=Object(n.a)(t,["input","meta"]),c=r.touched?r.error:void 0;return i.a.createElement("div",{className:o.a.postWrapper},i.a.createElement(e,Object.assign({},a,s,{className:c&&o.a.fieldErr})),i.a.createElement("div",null,c&&i.a.createElement("span",{className:o.a.errorMessage}," ",r.error," ")))}},l=function(e,t,a,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return i.a.createElement("div",null,i.a.createElement(c.a,Object.assign({placeholder:e,name:t,validate:a,component:n},r)),s)}},69:function(e,t,a){e.exports={messages:"Messages_messages__24vfu",contacts_wrapper:"Messages_contacts_wrapper__1VNYv",dialogs_wrapper:"Messages_dialogs_wrapper__VGXck"}},70:function(e,t,a){e.exports={postWrapper:"FormControls_postWrapper__12rCV",fieldErr:"FormControls_fieldErr__dJYyD",errorMessage:"FormControls_errorMessage__XmrRL"}},72:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n),i=a(9),s=a(11),o=function(e){return{isLogged:e.auth.isLogged}},c=function(e){return Object(s.b)(o)((function(t){return t.isLogged?r.a.createElement(e,t):r.a.createElement(i.a,{to:"/login"})}))}},92:function(e,t,a){e.exports={friend_wrapper:"Friend_sidebar_friend_wrapper__crHPE",ava:"Friend_sidebar_ava__2iOpd"}},97:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"d",(function(){return f})),a.d(t,"c",(function(){return p})),a.d(t,"g",(function(){return g})),a.d(t,"f",(function(){return b})),a.d(t,"e",(function(){return h}));var n=a(44),r=a.n(n),i=a(68),s=a(24),o=a(2),c=a(14),u=a(28),l={myPostsData:[{id:1,text:"Hi, how are you?",likeCount:10},{id:2,text:"It's my first post",likeCount:25}],profile:null,status:""},d=function(e){return{type:"addPost",data:e}},m=function(e){return{type:"setProfileStatus",status:e}},f=function(e){return function(t){c.d.getProfile(e).then((function(e){t({type:"setProfile",profile:e.data})}))}},p=function(e){return function(t){c.b.getProfileStatus(e).then((function(e){t(m(e.data))}))}},g=function(e){return function(t){c.b.updateProfileStatus(e).then((function(a){0===a.data.resultCode&&t(m(e))}))}},b=function(e){return function(t){c.b.updateProfileAvatar(e).then((function(e){0===e.data.resultCode&&t(function(e){return{type:"changeAvatar",img:e}}(e.data.data.photos))}))}},h=function(e){return function(){var t=Object(i.a)(r.a.mark((function t(a,n){var i,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n().auth.id,t.next=3,c.b.saveProfileChanges(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}a(f(i)),t.next=10;break;case 8:return a(Object(u.a)("editProfile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addPost":var a={id:3,text:t.data.newPostText,likeCount:0};return Object(o.a)(Object(o.a)({},e),{},{myPostsData:[].concat(Object(s.a)(e.myPostsData),[a]),newPostText:""});case"setProfile":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"setProfileStatus":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"deletePost":return Object(o.a)(Object(o.a)({},e),{},{myPostsData:e.myPostsData.filter((function(e){return e.id!==t.postId}))});case"changeAvatar":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.img})});default:return e}}},98:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(55),s=a.n(i),o=a(12);t.a=function(e){var t="/messages/dialog/"+e.id;return r.a.createElement("div",{className:s.a.contact_info},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Avatar_2_logo.jpg/220px-Avatar_2_logo.jpg",className:s.a.avatar}),r.a.createElement(o.b,{to:t,className:s.a.nameLink,activeClassName:s.a.active_contact},e.name))}},99:function(e,t,a){e.exports=a.p+"static/media/avatar_default.82c9d8dd.jpg"}},[[171,1,2]]]);
//# sourceMappingURL=main.c6580124.chunk.js.map