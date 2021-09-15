(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1122:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Nn}});var i=t(5893),r=t(7294),o=t(2209),a=t(9163);function s(){var n=(0,o.Z)(["\n  width: 100%;\n  background-image: url('/images/layout/header.svg');\n  position: absolute;\n  top: 0;\n  z-index: 1;\n"]);return s=function(){return n},n}function l(){var n=(0,o.Z)(["\n  aspect-ratio: 900/100;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  @media only screen and (max-width: 600px) {\n    aspect-ratio: 150/50;\n  }\n"]);return l=function(){return n},n}function c(){var n=(0,o.Z)(["\n  max-width: calc(100vw - 250px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 5%;\n  padding-top: 150px;\n  padding-bottom: 0px;\n  margin-left: 250px;\n  @media only screen and (max-width: 600px) {\n    max-width: 100vw;\n    margin-left: 0px;\n    padding: 50px 2%;\n  }\n  @media only screen and (max-width: 700px) and (min-width: 420px) {\n    max-width: 100vw;\n    margin-left: 0px;\n    padding: 50px 10%;\n  }\n"]);return c=function(){return n},n}function u(){var n=(0,o.Z)(["\n  max-width: 100vw !important;\n  overflow: hidden !important;\n"]);return u=function(){return n},n}var d=a.ZP.div(u()),h=a.ZP.div(c()),f=a.ZP.div(l()),p=(0,a.ZP)(f)(s());function g(){var n=(0,o.Z)(["\n  @keyframes float {\n    0% {\n      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n      transform: translatey(0px);\n    }\n    50% {\n      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);\n      transform: translatey(-10px);\n    }\n    100% {\n      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n      transform: translatey(0px);\n    }\n  }\n  width: 175px;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at center, #007fff 0, #4facf7 100%);\n  animation: float 10s infinite;\n"]);return g=function(){return n},n}var x=a.ZP.img(g()),m=function(){return(0,i.jsx)(x,{src:"/images/avatar/James.png"})},v=t(7832),k=function(n){return"".concat(5*n,"px")};function w(){var n=(0,o.Z)(["\n  margin-top: ",";\n"]);return w=function(){return n},n}function j(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media only screen and (max-width: 700px) {\n    display: none;\n  }\n"]);return j=function(){return n},n}function y(){var n=(0,o.Z)(["\n  position: fixed;\n  top: 0;\n  width: 250px;\n  min-height: 500px;\n  padding-top: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  z-index: 1;\n\n  @media only screen and (max-width: 700px) {\n    flex-direction: row;\n    padding-top: 0;\n    position: relative;\n    justify-content: space-around;\n    bottom: 0;\n    width: 100%;\n    height: 250px;\n    min-height: 250px;\n  }\n"]);return y=function(){return n},n}var b=(0,a.ZP)(v.Zb)(y(),k(25)),L=a.ZP.div(j()),Z=(0,a.ZP)(v.H3)(w(),k(7)),P=t(2809),S=t(2609),T=t(1163);function O(){var n=(0,o.Z)(["\n  height: 100%;\n  width: 100%;\n  margin-left: ",";\n  font-size: small;\n  text-align: center;\n"]);return O=function(){return n},n}function N(){var n=(0,o.Z)(["\n  position: absolute;\n  padding: ",";\n  left: 0;\n  width: 20%;\n"]);return N=function(){return n},n}function J(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: ",";\n  cursor: pointer;\n"]);return J=function(){return n},n}var D=(0,a.ZP)(v.UW)(J(),k(2)),C=a.ZP.img(N(),k(1.5)),_=a.ZP.div(O(),(function(n){return n.icon?0:k(5)}));function H(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function E(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?H(Object(t),!0).forEach((function(e){(0,P.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):H(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var I=function(n){var e=n.icon,t=void 0===e?null:e,r=n.src,o=n.text,a=n.link,s=(0,T.useRouter)(),l=E({},a&&{onClick:function(){return s.push(a)}});return(0,i.jsxs)(D,E(E({},l),{},{intent:S.S.PRIMARY,icon:t,children:[r&&(0,i.jsx)(C,{src:r}),(0,i.jsx)(_,{icon:null!==t,children:o})]}))},z=function(){return(0,i.jsxs)(b,{elevation:4,children:[(0,i.jsx)(m,{}),(0,i.jsx)(Z,{children:"James Haworth Wheatman"}),(0,i.jsxs)(L,{children:[(0,i.jsx)("br",{}),(0,i.jsx)(I,{text:"Full-Stack Developer at Theodo UK",link:"https://www.theodo.co.uk/",src:"https://www.theodo.co.uk/hs-fs/hubfs/theodologo-ConvertImage-15.png?width=287&name=theodologo-ConvertImage-15.png"}),(0,i.jsx)(I,{text:(0,i.jsxs)(i.Fragment,{children:["MSc Computer Science ",(0,i.jsx)("br",{})," from UCL"]}),src:"https://www.ucl.ac.uk/aihealth-cdt/sites/aihealth_cdt/files/styles/small_image/public/ucl-logo-web.jpg?itok=ZUOfeBl9",link:"https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc"}),(0,i.jsx)(I,{text:(0,i.jsxs)(i.Fragment,{children:["BSc Physics from ",(0,i.jsx)("br",{})," University of Sheffield"]}),src:"/icons/Sheffield.png",link:"https://www.sheffield.ac.uk/undergraduate/courses/2022/physics-bsc"})]})]})};function A(){var n=(0,o.Z)(["\n  padding-top: ",";\n  :hover {\n    text-decoration: none;\n  }\n"]);return A=function(){return n},n}function G(){var n=(0,o.Z)(["\n  padding: ",";\n"]);return G=function(){return n},n}function R(){var n=(0,o.Z)(["\n  @media only screen and (max-width: 420px) {\n    display: none;\n  }\n"]);return R=function(){return n},n}function W(){var n=(0,o.Z)(["\n  background-color: transparent !important;\n  height: 100px;\n  /* overflow: visible; */\n  box-shadow: none !important;\n  max-width: 100vw !important;\n\n  ::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    background: url('/images/layout/navbar.svg');\n    aspect-ratio: 900/50;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    @media only screen and (max-width: 1000px) {\n      aspect-ratio: 600/50;\n    }\n    @media only screen and (max-width: 600px) {\n      aspect-ratio: 300/50;\n    }\n  }\n"]);return W=function(){return n},n}var B=(0,a.ZP)(v.wp)(W()),F=(0,a.ZP)(v.fT)(R()),M=a.ZP.a(G(),k(2)),U=a.ZP.a(A(),k(2)),Y=t(1229),X=24,q=function(){return(0,i.jsxs)(B,{fixedToTop:!0,children:[(0,i.jsxs)(v.fT,{align:Y.v.LEFT,children:[(0,i.jsx)(M,{href:"https://jamesdhw.github.io",children:(0,i.jsx)(v.JO,{size:X,color:"white",icon:"home"})}),(0,i.jsx)(v.ox,{}),(0,i.jsx)(U,{href:"/blog",children:(0,i.jsx)(v.H3,{children:"Blog \u270d\ufe0f"})})]}),(0,i.jsxs)(F,{align:Y.v.RIGHT,children:[(0,i.jsx)(v.ox,{}),(0,i.jsx)(M,{target:"_blank",href:"mailto:JamesHaworthWheatman@gmail.com?subject=[GitHub Pages]: ",children:(0,i.jsx)(v.JO,{size:X,color:"white",icon:"envelope"})}),(0,i.jsx)(M,{target:"_blank",href:"https://github.com/JamesDHW",children:(0,i.jsx)("img",{height:X,width:X,src:"/icons/GitHub.png",alt:""})}),(0,i.jsx)(M,{target:"_blank",href:"https://www.linkedin.com/in/jamesdhw/",children:(0,i.jsx)("img",{height:X,width:X,src:"/icons/LinkedIn.png",alt:""})})]})]})},K=function(n){var e=n.children;return(0,i.jsxs)(d,{className:"bp3-dark",children:[(0,i.jsx)(p,{}),(0,i.jsxs)(h,{children:[(0,i.jsx)(q,{}),e]}),(0,i.jsx)(z,{})]})},V=t(6482),Q=[{name:"React",skillLevel:4,iLikeThis:4,src:"react.svg",alt:"React logo"},{name:"Next.JS",skillLevel:3,iLikeThis:2,src:"next.svg",alt:"Next JS logo"},{name:"Android",skillLevel:3,iLikeThis:2,src:"android.svg",alt:"Droid"},{name:"Django",skillLevel:3,iLikeThis:2,src:"django.svg",alt:"Django logo"},{name:"DynamoDB",skillLevel:3,iLikeThis:2,src:"dynamodb.svg",alt:"DynamoDB logo"},{name:"Git",skillLevel:3,iLikeThis:2,src:"git.svg",alt:"Git logo"},{name:"HTML",skillLevel:3,iLikeThis:2,src:"html.svg",alt:"HTML logo"},{name:"Java",skillLevel:3,iLikeThis:2,src:"java.svg",alt:"Java logo"},{name:"JavaScript",skillLevel:3,iLikeThis:2,src:"javascript.svg",alt:"JavaScript logo"},{name:"Serverless",skillLevel:3,iLikeThis:2,src:"serverless.svg",alt:"Serverless logo"},{name:"Nginx",skillLevel:3,iLikeThis:2,src:"nginx.svg",alt:"Nginx logo"},{name:"Firebase",skillLevel:3,iLikeThis:2,src:"firebase.svg",alt:"Firebase logo"},{name:"Jupyter Notebooks",skillLevel:3,iLikeThis:2,src:"jupyter.svg",alt:"Jupyte Notebooks logo"},{name:"NumPy",skillLevel:3,iLikeThis:2,src:"numpy.svg",alt:"NumPy logo"},{name:"SciPy",skillLevel:3,iLikeThis:2,src:"scipy.svg",alt:"SciPy logo"},{name:"Heroku",skillLevel:3,iLikeThis:2,src:"heroku.svg",alt:"Heroku logo"},{name:"Flutter",skillLevel:3,iLikeThis:2,src:"flutter.svg",alt:"Flutter logo"},{name:"SASS",skillLevel:3,iLikeThis:2,src:"sass.svg",alt:"SASS logo"},{name:"Docker",skillLevel:3,iLikeThis:2,src:"docker.svg",alt:"Docker logo"},{name:"Node JS",skillLevel:3,iLikeThis:2,src:"nodejs.svg",alt:"Node JS logo"},{name:"AWS Lambda",skillLevel:3,iLikeThis:2,src:"lambda.svg",alt:"Lambda logo"},{name:"MongoDB",skillLevel:3,iLikeThis:2,src:"mongodb.svg",alt:"MongoDB logo"},{name:"Gatsby.JS",skillLevel:3,iLikeThis:2,src:"gatsby.svg",alt:"Gatsby JS logo"},{name:"Ionic",skillLevel:3,iLikeThis:2,src:"ionic.svg",alt:"Ionic logo"},{name:"TypeScript",skillLevel:3,iLikeThis:5,src:"ts.svg",alt:"TypeScript logo"},{name:"Python",skillLevel:3,iLikeThis:2,src:"python.svg",alt:"Python logo"}],$=["Well hello there","You found my GitHub Pages","Bienvenu","Salut","Welcome to my site","Nice to see you"];function nn(){var n=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  margin-top: ",";\n"]);return nn=function(){return n},n}var en=a.ZP.div(nn(),k(1)),tn=function(n){var e=n.rating,t=n.icon,r=n.iconEmpty,o=n.intent;return(0,i.jsxs)(en,{children:[Array.from({length:e}).map((function(n,e){return(0,i.jsx)(v.JO,{icon:t,intent:o},e)})),r&&Array.from({length:5-e}).map((function(n,e){return(0,i.jsx)(v.JO,{icon:r,intent:o},e)}))]})};function rn(){var n=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  padding: ",";\n  justify-content: space-between;\n"]);return rn=function(){return n},n}function on(){var n=(0,o.Z)(["\n  display: flex;\n  width: 100%;\n  padding: ",";\n  justify-content: center;\n"]);return on=function(){return n},n}function an(){var n=(0,o.Z)(["\n  margin-left: ",";\n"]);return an=function(){return n},n}function sn(){var n=(0,o.Z)(["\n  text-align: center;\n"]);return sn=function(){return n},n}function ln(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n"]);return ln=function(){return n},n}function cn(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return cn=function(){return n},n}function un(){var n=(0,o.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: ",";\n  width: 100%;\n  @media only screen and (max-width: 420px) {\n    flex-direction: column;\n  }\n"]);return un=function(){return n},n}function dn(){var n=(0,o.Z)(["\n  @keyframes float {\n    0% {\n      transform: translatey(0px);\n    }\n    50% {\n      transform: translatey(-5px);\n    }\n    100% {\n      transform: translatey(0px);\n    }\n  }\n  content: '';\n  height: 90px;\n  width: 90px;\n  margin-bottom: ",";\n  animation: float ","s infinite ease-in-out;\n  transition: all 0.2s ease-in-out;\n"]);return dn=function(){return n},n}function hn(){var n=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media only screen and (max-width: 420px) {\n    justify-content: start;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n"]);return hn=function(){return n},n}function fn(){var n=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  margin: "," 0px;\n  box-shadow: #007fff 0px 40px 20px -40px;\n  :hover {\n    cursor: pointer;\n    transform: scale(1.1);\n    transition: all 0.1s ease-in-out;\n    animation: none ease-in-out;\n  }\n\n  @media only screen and (max-width: 420px) {\n    margin: ",";\n  }\n"]);return fn=function(){return n},n}function pn(){var n=(0,o.Z)(["\n  margin: ",";\n  margin-top: ",";\n"]);return pn=function(){return n},n}var gn=(0,a.ZP)(v.UW)(pn(),k(5),k(25)),xn=a.ZP.div(fn(),k(5),k(5)),mn=a.ZP.div(hn()),vn=a.ZP.div(dn(),k(2),(function(n){var e=n.offset;return"7.".concat(2*e)})),kn=a.ZP.div(un(),k(5)),wn=a.ZP.div(cn()),jn=a.ZP.div(ln()),yn=(0,a.ZP)(v.H3)(sn()),bn=(0,a.ZP)(v.zx)(an(),k(2)),Ln=a.ZP.div(on(),k(5)),Zn=a.ZP.div(rn(),k(3)),Pn=t(6486),Sn=function(){var n=(0,r.useState)(""),e=n[0],t=n[1],o=(0,r.useState)(-1),a=o[0],s=o[1],l=(0,r.useState)(Q),c=l[0],u=l[1],d=function(){return u((0,Pn.shuffle)(Q))};return(0,r.useEffect)(d,[]),(0,i.jsxs)(gn,{intent:S.S.PRIMARY,icon:null,children:[(0,i.jsxs)(kn,{children:[(0,i.jsx)(v.H2,{children:"Tech on my radar:"}),(0,i.jsxs)(wn,{children:[(0,i.jsx)(v.BZ,{leftIcon:"search",type:"search",value:e,onChange:function(n){return t(n.target.value)}}),(0,i.jsx)(bn,{onClick:d,icon:"refresh"})]})]}),(0,i.jsx)(mn,{children:c.slice(0,12).filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())})).map((function(n,e){var t=n.name,r=n.alt,o=n.src,l=n.skillLevel,c=n.iLikeThis;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(v.Vq,{isOpen:a===e,onClose:function(){return s(-1)},title:t,usePortal:!1,icon:"info-sign",children:(0,i.jsxs)(jn,{children:[(0,i.jsx)(Ln,{children:(0,i.jsx)("img",{src:"/images/technologies/".concat(o),height:90,width:90,alt:r})}),(0,i.jsxs)(Zn,{children:["I am good at this:",(0,i.jsx)(tn,{icon:"star",iconEmpty:"star-empty",rating:l,intent:S.S.WARNING})]}),(0,i.jsxs)(Zn,{children:["I like using this:",(0,i.jsx)(tn,{icon:"thumbs-up",rating:c,intent:S.S.SUCCESS})]})]})}),(0,i.jsx)(V.u,{content:(0,i.jsxs)(jn,{children:[(0,i.jsx)(tn,{icon:"star",iconEmpty:"star-empty",rating:l,intent:S.S.WARNING}),(0,i.jsx)(tn,{icon:"thumbs-up",rating:c,intent:S.S.SUCCESS})]}),placement:"bottom",inheritDarkTheme:!0,intent:"primary",children:(0,i.jsxs)(xn,{onClick:function(){return s(e)},children:[(0,i.jsx)(vn,{offset:e,children:(0,i.jsx)("img",{src:"/images/technologies/".concat(o),height:90,width:90,alt:r})}),(0,i.jsx)(yn,{children:t})]})},e)]})}))})]})};function Tn(){var n=(0,o.Z)(["\n  position: absolute;\n  z-index: 3;\n  font-size: 50px !important;\n  text-align: center;\n  text-shadow: #000000 0px 5px 5px;\n  -webkit-font-smoothing: antialiased;\n  @media only screen and (max-width: 420px) {\n    font-size: 30px !important;\n  }\n"]);return Tn=function(){return n},n}var On=(0,a.ZP)(v.H1)(Tn()),Nn=function(){var n=$[Math.floor(Math.random()*$.length)];return(0,i.jsxs)(K,{children:[(0,i.jsxs)(On,{children:[n," \ud83d\udc4b"]}),(0,i.jsx)(Sn,{})]})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1122)}])}},function(n){n.O(0,[774,662,865,895,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);