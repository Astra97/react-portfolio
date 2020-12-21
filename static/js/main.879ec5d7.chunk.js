(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c(1),n=c.n(a),s=c(11),i=c.n(s),o=(c(26),c(27),c(3)),l=c(4),j=c(6),b=c(5),h=c(2),d=c.n(h),u={headerTagline:["My name is Abel Estrada Aguilar","a full stack web developer"],contactEmail:"abelestrada9@gmail.com",resume:"./Resume.docx",abouttext:"I am an organized person. As well as a problem solver and a quick learner. Striving to become certified as a full stack web developer.",aboutImage:"./image0.jpeg",ShowAboutImage:!0,projects:[{id:1,title:"Work Day Scheduler",service:"A program to plan out your day",imageSrc:"./scheduler.png",url:"https://astra97.github.io/scheduler/"},{id:2,title:"Germ Stoppers",service:"First group project, front project",imageSrc:"./germstoppers.png",url:"https://vutanguofa.github.io/group4_project1"},{id:3,title:"Note Taker",service:"First assignment using Express.js",imageSrc:"./notetaker.png",url:"https://note-takerv1.herokuapp.com/"},{id:4,title:"Budget Tracker",service:"A budget tracker and first use of a PWA",imageSrc:"./budgettracker.png",url:"https://mon3y-track3r.herokuapp.com/"},{id:5,title:"Tech-blog",service:"Implementing the MVC software design",imageSrc:"./techblog.png",url:"https://tek-b1og.herokuapp.com/"},{id:6,title:"Password Generator",service:"Combining the use JS, HTML, and CSS",imageSrc:"./passwordgen.png",url:"https://astra97.github.io/passwordgen/"}],social:[{name:"Github",url:"https://github.com/Astra97/"},{name:"Linkedin",url:"www.linkedin.com/in/abel-estrada-aguilar-0992781ab"}]},p=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"heading-background",children:"Estrada"}),Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:Object(r.jsx)(d.a,{bottom:!0,cascade:!0,children:u.name})})}),Object(r.jsx)(d.a,{bottom:!0,children:Object(r.jsxs)("p",{className:"header-title",children:[u.headerTagline[0],Object(r.jsx)("br",{}),u.headerTagline[1],Object(r.jsx)("br",{}),u.headerTagline[2],Object(r.jsx)("br",{}),Object(r.jsx)("button",{children:Object(r.jsx)("a",{href:"mailto:".concat(u.contactEmail),rel:"noopener noreferrer",children:"Contact"})}),Object(r.jsx)("button",{children:Object(r.jsx)("a",{href:"".concat(u.resume),rel:"noopener noreferrer",children:"Resume"})})]})})]})}}]),c}(a.Component),m=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsxs)("div",{className:"about-content",children:[Object(r.jsx)("h1",{children:Object(r.jsx)(d.a,{bottom:!0,cascade:!0,children:"About Me"})}),Object(r.jsx)(d.a,{bottom:!0,children:Object(r.jsx)("p",{children:u.abouttext})})]}),u.ShowAboutImage?Object(r.jsx)("img",{src:u.aboutImage,alt:"about image",width:"300",height:"400"}):null]})}}]),c}(a.Component),O=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsx)(d.a,{bottom:!0,children:Object(r.jsxs)("div",{className:"project",children:[Object(r.jsx)("a",{href:this.props.url,children:Object(r.jsx)("img",{src:this.props.imageSrc,alt:this.props.title})}),Object(r.jsx)("h1",{children:this.props.title}),Object(r.jsx)("span",{children:this.props.service})]})})}}]),c}(a.Component),g=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"heading",children:Object(r.jsx)(d.a,{bottom:!0,cascade:!0,children:"Projects"})}),Object(r.jsx)("div",{className:"work-content",children:u.projects.map((function(e){return Object(r.jsx)(O,{title:e.title,service:e.service,imageSrc:e.imageSrc,url:e.url},e.id)}))})]})}}]),c}(a.Component),x=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:Object(r.jsx)(d.a,{bottom:!0,cascade:!0,children:" Contact "})}),Object(r.jsx)(d.a,{bottom:!0,children:Object(r.jsxs)("div",{className:"contact-content",children:[Object(r.jsx)("a",{href:"mailto:".concat(u.contactEmail),className:"email",children:u.contactEmail}),Object(r.jsx)("ul",{children:u.social.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,children:e.name})},t)}))})]})})]})}}]),c}(a.Component),v=c(8),f=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var r=arguments.length,a=new Array(r),n=0;n<r;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={},e.scrollToTop=function(){v.animateScroll.scrollToTop()},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(v.Link,{className:"link",activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-70,duration:500,onClick:this.scrollToTop,children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.Link,{className:"link",activeClass:"active",to:"About",spy:!0,smooth:!0,offset:-70,duration:500,children:"About"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.Link,{className:"link",activeClass:"active",to:"work",spy:!0,smooth:!0,offset:-70,duration:500,children:"Projects"})}),Object(r.jsx)("li",{children:Object(r.jsx)(v.Link,{className:"link",activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-70,duration:500,children:"Contact"})})]})})}}]),c}(a.Component);var k=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(f,{}),Object(r.jsx)("div",{className:"app-header",children:Object(r.jsx)(p,{})}),Object(r.jsx)("div",{className:"about",children:Object(r.jsx)(m,{})}),Object(r.jsx)("div",{className:"work",children:Object(r.jsx)(g,{})}),Object(r.jsx)("div",{className:"contact",children:Object(r.jsx)(x,{})})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,r=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),r(e),a(e),n(e),s(e)}))};i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.879ec5d7.chunk.js.map