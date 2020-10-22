(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},23:function(e,t,a){e.exports=a.p+"static/media/info-tool-tip-success.e38b395c.svg"},24:function(e,t,a){e.exports=a.p+"static/media/info-tool-tip-failure.f10ac534.svg"},27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),i=a(7),l=(a(32),a(11)),u=a(25),s=a(1),p=a(2),m=a(19),f=a.n(m);var d=function(e){var t=e.userData,a=e.signOut;return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:f.a,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e",className:"header__logo"}),o.a.createElement(p.b,{path:"/signup"},o.a.createElement(i.b,{to:"/signin",className:"header__link"},"\u0412\u043e\u0439\u0442\u0438")),o.a.createElement(p.b,{path:"/signin"},o.a.createElement(i.b,{to:"/signup",className:"header__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f")),o.a.createElement(p.b,{exact:!0,path:"/"},o.a.createElement("p",{className:"header__account"},t&&t.email,o.a.createElement("button",{className:"header__button",onClick:a,type:"button"},"\u0412\u044b\u0439\u0442\u0438"))))},h=o.a.createContext();var _=function(e){var t=e.card,a=e.onCardLike,n=e.onCardDelete,r=e.onCardClick,c=o.a.useContext(h);console.log("card",t);var i=t.owner===c._id,l="place__button-delete ".concat(i?"":"place__button-delete_hidden"),u=t.likes.some((function(e){return e===c._id})),s="place__button-like ".concat(u?"place__button-like_active":"");return o.a.createElement("div",{className:"place"},o.a.createElement("img",{src:t.link,alt:t.name,className:"place__image",onClick:function(){return r(t)}}),o.a.createElement("button",{className:l,type:"button",onClick:function(){return n(t)}}),o.a.createElement("div",{className:"place__description"},o.a.createElement("h3",{className:"place__title"},t.name),o.a.createElement("div",{className:"place__like"},o.a.createElement("button",{className:s,type:"button",onClick:function(){return a(t)}}),o.a.createElement("p",{className:"place__like-count"},t.likes.length))))};var b=function(e){var t=e.onEditProfile,a=e.onAddPlace,n=e.onEditAvatar,r=e.handleCardClick,c=e.handleCardLike,i=e.handleCardDelete,l=e.cards,u=o.a.useContext(h);return console.log("curUser!!!",u),o.a.createElement("main",null,o.a.createElement("section",{className:"profile"},o.a.createElement("img",{src:u.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440",className:"profile__logo"}),o.a.createElement("div",{className:"profile__avatar-hover",onClick:n}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("div",{className:"profile__user"},o.a.createElement("h3",{className:"profile__name"},u.name),o.a.createElement("p",{className:"profile__occupation"},u.about)),o.a.createElement("button",{className:"profile__edit-button",type:"button",onClick:t})),o.a.createElement("button",{className:"profile__add-button",type:"button",onClick:a})),o.a.createElement("section",{className:"places","aria-label":"\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b"},l.map((function(e,t){return o.a.createElement(_,{key:t,onCardLike:c,onCardDelete:i,card:e,onCardClick:r})}))))};var E=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var g=function(e){var t=e.isOpen,a=e.link,n=e.name,r=e.onClose;return o.a.createElement("div",{className:t?"popup show-photo popup_open":"popup show-photo"},o.a.createElement("div",{className:"show-photo__window"},o.a.createElement("button",{className:"popup__button-close show-photo__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:r}),o.a.createElement("img",{src:a.toString(),alt:n,className:"show-photo__image"}),o.a.createElement("p",{className:"show-photo__title"},n)))};var v=function(e){var t=e.isOpen,a=e.className,n=e.formName,r=e.onSubmit,c=e.onClose,i=e.title,l=e.children,u=e.buttonText;return o.a.createElement("div",{className:t?"popup  ".concat(a," popup_open"):"popup  ".concat(a)},o.a.createElement("form",{className:"popup__form ".concat(n),method:"post",action:"#",noValidate:!0,onSubmit:r},o.a.createElement("button",{className:"popup__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:c}),o.a.createElement("h3",{className:"popup__title"},i),l,o.a.createElement("button",{className:"popup__button-submit",type:"submit"},u)))};var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=e.isButtonProgress,c=o.a.useContext(h),i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],p=l[1],m=o.a.useState(""),f=Object(s.a)(m,2),d=f[0],_=f[1];return o.a.useEffect((function(){p(c.name),_(c.about)}),[c]),o.a.createElement(v,{isOpen:t,onClose:function(){a(),p(c.name),_(c.about)},title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:r?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),n({name:u,occupation:d})}},o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"input-name",className:"popup__input edit-profile__input-name",type:"text",value:u||"",onChange:function(e){return p(e.target.value)},name:"name",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",minLength:2,maxLength:40,pattern:"^[A-Za-z\u0410-\u042f\u0401\u0430-\u044f\u0451 -]+$",required:!0}),o.a.createElement("span",{id:"input-name-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{id:"input-occupation",className:"popup__input edit-profile__input-occupation",type:"text",value:d||"",onChange:function(e){return _(e.target.value)},name:"occupation",placeholder:"\u0420\u043e\u0434 \u0437\u0430\u043d\u044f\u0442\u0438\u0439",minLength:2,maxLength:200,required:!0}),o.a.createElement("span",{id:"input-occupation-error",className:"popup__input-error"}))))};var C=function(e){var t=e.isOpen,a=e.onClose,r=e.onUpdateAvatar,c=e.isButtonProgress,i=o.a.useRef();return Object(n.useEffect)((function(){i.current.value=""}),[t]),o.a.createElement(v,{isOpen:t,className:"change-avatar",formName:"change-avatar__form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClose:function(){a()},onSubmit:function(e){e.preventDefault(),r({avatar:i.current.value})}},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input change-avatar__input-link",ref:i,type:"url",id:"change-avatar__input-link",name:"link",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"change-avatar__input-link-error",className:"popup__input-error"})))};var j=function(e){var t=e.isOpen,a=e.onClose,r=e.onAddCard,c=e.isButtonProgress,i=o.a.useState(""),l=Object(s.a)(i,2),u=l[0],p=l[1],m=o.a.useState(""),f=Object(s.a)(m,2),d=f[0],h=f[1];return Object(n.useEffect)((function(){h(""),p("")}),[t]),o.a.createElement(v,{isOpen:t,className:"add-card",formName:"add-card__form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(e){e.preventDefault(),r({placeName:u,placeLink:d}),h(""),p("")},onClose:function(){a()}},o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input add-card__input-name",type:"text",id:"input-place-name",name:"name",value:u,onChange:function(e){return p(e.target.value)},placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:2,maxLength:30,required:!0}),o.a.createElement("span",{id:"input-place-name-error",className:"popup__input-error"})),o.a.createElement("div",{className:"popup__input-field"},o.a.createElement("input",{className:"popup__input add-card__input-link",type:"url",id:"input-place-link",name:"link",value:d,onChange:function(e){return h(e.target.value)},placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"input-place-link-error",className:"popup__input-error"})))};var k=function(e){var t=e.isOpen,a=e.onSubmitClick,n=e.onClose,r=e.isButtonProgress;return o.a.createElement("div",{className:t?"popup  confirmation popup_open":"popup  confirmation"},o.a.createElement("form",{className:"popup__form confirmation__form",method:"post",action:"#",noValidate:!0,onSubmit:function(e){e.preventDefault(),a()}},o.a.createElement("button",{className:"popup__button-close confirmation__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n}),o.a.createElement("h3",{className:"popup__title"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"),o.a.createElement("button",{className:"popup__button-submit",type:"submit","aria-label":"\u0414\u0430"},r?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")))},O=a(21),y=a(22),S={url:"http://localhost:3001",auth:"Bearer ".concat(localStorage.getItem("jwt"))},w=new(function(){function e(t){Object(O.a)(this,e),this.baseUrl=t.url,this.auth=t.auth}return Object(y.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{method:"GET",headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt")),"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"updateUserProfile",value:function(e,t){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:{Authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:{Authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.json()}))}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{Authorization:this.auth,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{Authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("error".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"".concat(t?"PUT":"DELETE"),headers:{Authorization:this.auth}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}))}}]),e}())(S),P="http://localhost:3001",T={name:"Jhonny Cash",avatar:"https://upload.wikimedia.org/wikipedia/commons/f/f2/JohnnyCash1969.jpg",about:"singer"};var A=function(e){var t=e.onSubmit,a=o.a.useState(""),r=Object(s.a)(a,2),c=r[0],l=r[1],u=o.a.useState(""),p=Object(s.a)(u,2),m=p[0],f=p[1];return Object(n.useEffect)((function(){l(""),f("")}),[]),o.a.createElement("div",{className:"login-popup popup_open"},o.a.createElement(d,null),o.a.createElement("form",{className:"login-popup__form",method:"post",action:"#",noValidate:!0,onSubmit:function(e){e.preventDefault(),c&&m&&t(c,m)}},o.a.createElement("h3",{className:"login-popup__title"},"\u0412\u0445\u043e\u0434"),o.a.createElement("input",{className:"login-popup__input",type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)},value:c||""}),o.a.createElement("input",{className:"login-popup__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){return f(e.target.value)},value:m||""}),o.a.createElement("button",{className:"login-popup__button-submit",type:"submit","aria-label":"\u0412\u043e\u0439\u0442\u0438"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("div",{className:"login-popup__register"},"\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(i.b,{to:"/signup",className:"login-popup__link"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))};var U=function(e){var t=e.onSubmit,a=o.a.useState(""),r=Object(s.a)(a,2),c=r[0],l=r[1],u=o.a.useState(""),p=Object(s.a)(u,2),m=p[0],f=p[1];return Object(n.useEffect)((function(){l(""),f("")}),[]),o.a.createElement("div",{className:"login-popup popup_open"},o.a.createElement(d,null),o.a.createElement("form",{className:"login-popup__form",method:"post",action:"#",noValidate:!0,onSubmit:function(e){e.preventDefault(),t(c,m)}},o.a.createElement("h3",{className:"login-popup__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),o.a.createElement("input",{className:"login-popup__input",type:"email",placeholder:"Email",required:!0,onChange:function(e){return l(e.target.value)},value:c||""}),o.a.createElement("input",{className:"login-popup__input",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){return f(e.target.value)},value:m||""}),o.a.createElement("button",{className:"login-popup__button-submit",type:"submit","aria-label":"\u0412\u043e\u0439\u0442\u0438"},"\u0412\u043e\u0439\u0442\u0438"),o.a.createElement("div",{className:"login-popup__register"},"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",o.a.createElement(i.b,{to:"/signin",className:"login-popup__link"},"\u0412\u043e\u0439\u0442\u0438"))))},x=a(26),L=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return o.a.createElement(p.b,null,(function(){return!0===a.loggedIn?o.a.createElement(t,a):o.a.createElement(p.a,{to:"./sign-up"})}))},D=a(23),I=a.n(D),B=a(24),q=a.n(B);var z=function(e){var t=e.isOpen,a=e.onClose,n=e.isOK;return o.a.createElement("div",{className:t?"popup  popup_open":"popup "},o.a.createElement("div",{className:"info-tooltip"},o.a.createElement("button",{className:"popup__button-close",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),o.a.createElement("img",{src:n?I.a:q.a,alt:n?"\u0423\u0441\u043f\u0435\u0448\u043d\u0430\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f.":"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",className:"popup__image_type_infoTooltip"}),o.a.createElement("h2",{className:"popup__title_type_infoTooltip"},n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")))};var J=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=o.a.useState(!1),i=Object(s.a)(c,2),m=i[0],f=i[1],_=o.a.useState(!1),v=Object(s.a)(_,2),O=v[0],y=v[1],S=o.a.useState(!1),x=Object(s.a)(S,2),D=x[0],I=x[1],B=Object(n.useState)(!1),q=Object(s.a)(B,2),J=q[0],V=q[1],G=o.a.useState(!1),F=Object(s.a)(G,2),H=F[0],K=F[1],M=Object(n.useState)(""),R=Object(s.a)(M,2),Z=R[0],$=R[1],Q=o.a.useState({isOpen:!1,name:"",link:""}),W=Object(s.a)(Q,2),X=W[0],Y=W[1],ee=Object(n.useState)({}),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],oe=Object(n.useState)([]),re=Object(s.a)(oe,2),ce=re[0],ie=re[1],le=Object(n.useState)(!1),ue=Object(s.a)(le,2),se=ue[0],pe=ue[1],me=o.a.useState(null),fe=Object(s.a)(me,2),de=fe[0],he=fe[1],_e=Object(p.g)(),be=Object(n.useCallback)((function(){var e=localStorage.getItem("jwt");e&&fetch("".concat(P,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},credentials:"same-origin"}).then((function(e){if(console.log(e),200===e.status)return e.json();if(400===e.status)throw new Error("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435");if(401===e.status)throw new Error("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d");throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0442\u043e\u043a\u0435\u043d\u0430: ".concat(e.status))})).then((function(e){e&&(he({id:e._id,email:e.email}),pe(!0),_e.push("/"))})).catch((function(e){console.log(e),pe(!1),K(!0),_e.push("/signin")}))}),[_e]);function Ee(){I(!1),f(!1),y(!1),V(!1),Y({isOpen:!1,name:"",link:""}),K(!1)}return o.a.useEffect((function(){be()}),[se,be]),Object(n.useEffect)((function(){Promise.all([w.getUserInfo(),w.getInitialCards()]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];console.log("userData",a),ie(n),ne(a)})).catch((function(e){return console.log(e)}))}),[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(h.Provider,{value:ae},o.a.createElement(d,{userData:de,signOut:function(){localStorage.removeItem("jwt"),_e.push("/signin"),pe(!1)}}),o.a.createElement(p.d,null,o.a.createElement(p.b,{path:"/signin"},o.a.createElement(A,{onSubmit:function(e,t){return function(e,t){return fetch("".concat(P,"/signin/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("jwt"))},credentials:"same-origin",body:JSON.stringify({email:e,password:t})}).then((function(e){if(200===e.status)return e.json();if(400===e.status)throw new Error("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439");if(401===e.status)throw new Error("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d");throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438: ".concat(e.status))}))}(e,t).then((function(e){e&&e.token&&(localStorage.setItem("jwt",e.token),be())})).catch((function(e){console.log(e),pe(!1),K(!0)}))}})),o.a.createElement(p.b,{path:"/signup"},o.a.createElement(U,{onSubmit:function(e,t){return function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},credentials:"same-origin",body:JSON.stringify(Object(l.a)({email:e,password:t},T))}).then((function(e){if(400!==e.status)return e.json();throw new Error("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")}))}(e,t).then((function(e){_e.push("/signin"),pe(!0),K(!0)})).catch((function(e){K(!0),console.log(e)}))}})),o.a.createElement(L,{exact:!0,path:"/",loggedIn:se,onEditProfile:function(){f(!0)},onAddPlace:function(){y(!0)},onEditAvatar:function(){I(!0)},handleCardClick:function(e){var t=e.name,a=e.link;Y({isOpen:!0,name:t,link:a})},handleCardLike:function(e){var t=e.likes.some((function(e){return e===ae._id}));w.changeLikeCardStatus(e._id,!t).then((function(t){var a=ce.map((function(a){return a._id===e._id?t:a}));ie(a)})).catch((function(e){return console.log(e)}))},handleCardDelete:function(e){V(!0),$(e)},cards:ce,component:b}),o.a.createElement(p.b,null,se?o.a.createElement(p.a,{to:"/"}):o.a.createElement(p.a,{to:"/signin"}))),o.a.createElement(E,null),o.a.createElement(N,{isOpen:m,onClose:Ee,onUpdateUser:function(e){var t=e.name,a=e.occupation;r(!0),w.updateUserProfile(t,a).then((function(e){ne(e)})).then((function(){return f(!1)})).catch((function(e){return console.log(e)})).finally((function(){return r(!1)}))},isButtonProgress:a}),o.a.createElement(j,{isOpen:O,onClose:Ee,onAddCard:function(e){var t=e.placeName,a=e.placeLink;r(!0),w.addNewCard(t,a).then((function(e){ie([e].concat(Object(u.a)(ce)))})).then((function(){return y(!1)})).catch((function(e){return console.log(e)})).finally((function(){return r(!1)}))},isButtonProgress:a}),o.a.createElement(C,{isOpen:D,onClose:Ee,isButtonProgress:a,onUpdateAvatar:function(e){var t=e.avatar;r(!0),w.setUserAvatar(t).then((function(e){ne(Object(l.a)(Object(l.a)({},ae),{},{avatar:e.avatar})),Ee()})).then((function(){return I(!1)})).catch((function(e){return console.log(e)})).finally((function(){return r(!1)}))}}),o.a.createElement(g,Object.assign({},X,{onClose:Ee})),o.a.createElement(k,{isOpen:J,onClose:Ee,onSubmitClick:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z;r(!0),w.deleteCard(e._id).then((function(){var t=ce.filter((function(t){return t._id!==e._id}));ie(t)})).then((function(){return V(!1)})).catch((function(e){return console.log(e)})).finally((function(){return r(!1)}))},isButtonProgress:a}),o.a.createElement(z,{isOpen:H,onClose:Ee,isOK:se})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.a,null,o.a.createElement(J,null))),document.querySelector("#root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.3f3d5004.chunk.js.map