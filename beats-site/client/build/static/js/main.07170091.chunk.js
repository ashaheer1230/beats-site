(this["webpackJsonpbeats-site"]=this["webpackJsonpbeats-site"]||[]).push([[0],{196:function(e,s,c){},197:function(e,s,c){},214:function(e,s){},216:function(e,s){},246:function(e,s){},248:function(e,s){},281:function(e,s){},283:function(e,s){},284:function(e,s){},289:function(e,s){},291:function(e,s){},297:function(e,s){},299:function(e,s){},318:function(e,s){},330:function(e,s){},333:function(e,s){},365:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(35),n=c.n(a),i=c(188),j=c(8),r=c(22),l=c.n(r),b=c(182),o=c(183),d=c(36),m=(c(76),c(196),c.p+"static/media/img1.7f110bd1.jpg"),u=c.p+"static/media/img2.abab9ece.jpg",x=c.p+"static/media/img3.5c1ea6a8.jpg",O=c.p+"static/media/img4.e6e9e3e8.jpg",h=c.p+"static/media/img5.6331845e.png",p=c.p+"static/media/distance.e0697448.mp3",f=c.p+"static/media/wild.003766eb.mp3",N=c.p+"static/media/noise.51f7449f.wav",v=c.p+"static/media/ot.10f0e324.wav",g=c.p+"static/media/fresh.815dd4ae.wav",w=c.p+"static/media/glass.62e30d7c.wav",y=(c(197),c(0)),C=["btn--primary","btn--outline"],S=["btn--medium","btn--large"],k=function(e){var s=e.children,c=e.type,t=e.onClick,a=e.buttonStyle,n=e.buttonSize,i=C.includes(a)?a:C[0],j=S.includes(n)?n:S[0];return Object(y.jsx)("button",{className:"btn ".concat(i," ").concat(j),onClick:t,type:c,children:s})},H=[{title:"Home",cName:"nav-links"},{title:"About",cName:"nav-links"},{title:"Contact Info",cName:"nav-links"}],T=c(199);T.initialize("coCYo2bMg7Z52LoGnNFsZ7pautR5bKpQRGZNVman","vx1iqHfNGOdVi3DBE1lf4iRk8pVt845pzPvPrMt7"),T.serverURL="https://parseapi.back4app.com/";var A=function(e){var s=Object(t.useState)([]),c=Object(d.a)(s,2),a=c[0],n=c[1],i=Object(t.useState)(!1),j=Object(d.a)(i,2),r=j[0],C=j[1],S=[m,u,x,O,h],A=[p,f,v,N,g,w];return Object(t.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var s,c,t,a,i,j,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=new T.Query("Beat"),c=[],e.next=4,s.find();case 4:t=e.sent;try{a=Object(b.a)(t);try{for(a.s();!(i=a.n()).done;)j=i.value,c.push(j.attributes)}catch(l){a.e(l)}finally{a.f()}}catch(o){console.log("ERROR while fetching 'Beats'"+o)}r=c.sort((function(e,s){return new Date(e.beatNum)-new Date(s.beatNum)})),n(r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(y.jsxs)("div",{className:"App",id:1,children:[Object(y.jsx)("div",{children:Object(y.jsxs)("nav",{className:"NavbarItems",children:[Object(y.jsxs)("h1",{className:"navbar-logo",children:["SHERU",Object(y.jsx)("i",{className:"fas fa-record-vinyl"})]}),Object(y.jsx)("div",{className:"menu-icon",onClick:function(){C(!r)},children:Object(y.jsx)("i",{className:r?"fas fa-times":"fas fa-bars"})}),Object(y.jsx)("ul",{className:r?"nav-menu active":"nav-menu",children:H.map((function(s,c){return Object(y.jsx)("li",{children:Object(y.jsx)(k,{className:s.cName,onClick:function(){return function(s){0===s?(e.history.push("/"),window.location.reload(!1)):1===s?(e.history.push("/about"),window.location.reload(!1)):(e.history.push("/contact"),window.location.reload(!1))}(c)},children:s.title})},c)}))})]})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"column-left",children:Object(y.jsxs)("div",{className:"filterSectionApp",children:[Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"aboutTitles",children:"5 Sounds 5 Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"All beats listed are free to use"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for stems, wavs, and mp3s"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h2",{className:"aboutTitles",children:"Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"prodsheru@gmail.com"})]})}),Object(y.jsx)("div",{className:"column-right",children:a.map((function(e){return Object(y.jsxs)("div",{className:"beatCard",children:[Object(y.jsx)("div",{flex:1,children:Object(y.jsx)("img",{src:S[e.Img-1],alt:"Cant display",className:"cardImg"})}),Object(y.jsxs)("div",{className:"cardContent",flex:1,children:[Object(y.jsx)("h2",{className:"cardTextTitle",children:e.Name}),Object(y.jsxs)("h5",{className:"cardText",children:[e.Tempo,"bpm"]}),Object(y.jsxs)("h5",{className:"cardText",children:[e.Key," ",e.Scale]}),Object(y.jsxs)("audio",{className:"audioSlider",controls:!0,controlsList:"nodownload",children:[Object(y.jsx)("source",{src:A[e.beatNum-1],type:"audio/mpeg"}),Object(y.jsx)("source",{src:A[e.beatNum-1],type:"audio/wav"}),Object(y.jsx)("source",{src:A[e.beatNum-1],type:"audio/ogg"}),Object(y.jsx)("p",{children:"Your browser does not support audio playback"})]},e.Name)]})]},e.Name)}))})]})]})},I=c.p+"static/media/imgmain.4a4630bf.png";function B(e){var s=Object(t.useState)(!1),c=Object(d.a)(s,2),a=c[0],n=c[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("nav",{className:"NavbarItems",children:[Object(y.jsxs)("h1",{className:"navbar-logo",children:["SHERU",Object(y.jsx)("i",{className:"fas fa-record-vinyl"})]}),Object(y.jsx)("div",{className:"menu-icon",onClick:function(){n(!a)},children:Object(y.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(y.jsx)("ul",{className:a?"nav-menu active":"nav-menu",children:H.map((function(s,c){return Object(y.jsx)("li",{children:Object(y.jsx)(k,{className:s.cName,onClick:function(){return function(s){0===s?(e.history.push("/"),window.location.reload(!1)):1===s?(e.history.push("/about"),window.location.reload(!1)):(e.history.push("/contact"),window.location.reload(!1))}(c)},children:s.title})},c)}))})]})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"column-left",children:Object(y.jsxs)("div",{className:"filterSectionApp",children:[Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"aboutTitles",children:"5 Sounds 5 Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"All beats listed are free to use"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for stems, wavs, and mp3s"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h2",{className:"aboutTitles",children:"Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"prodsheru@gmail.com"})]})}),Object(y.jsx)("div",{className:"column-rightAbout",children:Object(y.jsxs)("div",{className:"row",children:[Object(y.jsxs)("div",{className:"columnImg",children:[Object(y.jsx)("img",{src:I,alt:"Cant display",className:"aboutImg"}),Object(y.jsx)("div",{className:"emptySpaceAbout"})]}),Object(y.jsxs)("div",{className:"columnInfo",children:[Object(y.jsx)("br",{}),Object(y.jsx)("p",{className:"personalTextHeading",children:"Sheru"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{className:"hr-line"}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{className:"personalText",children:"Toronto"}),Object(y.jsx)("h3",{className:"personalText",children:"21"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{className:"personalText",children:"All beats listed are free to use"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{className:"hr-line2"}),Object(y.jsx)("br",{}),Object(y.jsx)("h3",{className:"personalText",children:"prodsheru@gmail.com"}),Object(y.jsx)("br",{}),Object(y.jsx)("div",{className:"emptySpaceAbout",children:" "})]})]})})]})]})}var E=c.p+"static/media/iglogo.98ded4a6.png",R=c.p+"static/media/mailimg.52601c09.png",D=c(383);function z(e){var s=Object(t.useState)(!1),c=Object(d.a)(s,2),a=c[0],n=c[1],i=Object(t.useState)(!1),j=Object(d.a)(i,2),r=j[0],l=j[1];return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("div",{children:Object(y.jsxs)("nav",{className:"NavbarItems",children:[Object(y.jsxs)("h1",{className:"navbar-logo",children:["SHERU",Object(y.jsx)("i",{className:"fas fa-record-vinyl"})]}),Object(y.jsx)("div",{className:"menu-icon",onClick:function(){n(!a)},children:Object(y.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})}),Object(y.jsx)("ul",{className:a?"nav-menu active":"nav-menu",children:H.map((function(s,c){return Object(y.jsx)("li",{children:Object(y.jsx)(k,{className:s.cName,onClick:function(){return function(s){0===s?(e.history.push("/"),window.location.reload(!1)):1===s?(e.history.push("/about"),window.location.reload(!1)):(e.history.push("/contact"),window.location.reload(!1))}(c)},children:s.title})},c)}))})]})}),Object(y.jsxs)("div",{className:"row",children:[Object(y.jsx)("div",{className:"column-left",children:Object(y.jsxs)("div",{className:"filterSectionApp",children:[Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"aboutTitles",children:"5 Sounds 5 Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"All beats listed are free to use"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for stems, wavs, and mp3s"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h2",{className:"aboutTitles",children:"Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"Contact for Exclusive Beats"}),Object(y.jsx)("br",{}),Object(y.jsx)("h4",{className:"aboutHeadings",children:"prodsheru@gmail.com"})]})}),Object(y.jsxs)("div",{className:"column-rightContact",children:[Object(y.jsx)("h1",{className:"personalTextHeading",children:"Contact for Inquiries"}),Object(y.jsx)("br",{}),Object(y.jsx)("h1",{className:"contactPrompt",children:"(Press below to contact)"}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsxs)("div",{className:"contactImgDiv",children:[Object(y.jsx)("img",{src:R,alt:"prodsheru@gmail.com",className:"contactImg",onClick:function(){window.open("https://mail.google.com/mail/u/0/?fs=1&to=prodsheru@gmail.com&tf=cm")}}),Object(y.jsx)("img",{src:E,alt:"ayosheru",className:"contactImg",onClick:function(){window.open("https://instagram.com/ayosheru?utm_medium=copy_link")}})]})]})]}),r&&Object(y.jsx)(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:3e3,onClose:function(){return l(!1)},message:"Coming Soon ;)"})]})}function P(){return Object(y.jsx)(i.a,{children:Object(y.jsxs)(j.c,{children:[Object(y.jsx)(j.a,{exact:!0,path:"/",component:A}),Object(y.jsx)(j.a,{exact:!0,path:"/about",component:B}),Object(y.jsx)(j.a,{exact:!0,path:"/contact",component:z})]})})}n.a.render(Object(y.jsx)(P,{}),document.getElementById("root"))},76:function(e,s,c){}},[[365,1,2]]]);
//# sourceMappingURL=main.07170091.chunk.js.map