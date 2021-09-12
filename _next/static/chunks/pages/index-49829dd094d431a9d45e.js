(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4512:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return pn}});var r=e(5893),i=(e(7294),e(2209)),a=e(9163);function o(){var n=(0,i.Z)(["\n  width: 100%;\n  background-image: url('/images/layout/header.svg');\n  position: absolute;\n  top: 0;\n  z-index: 1;\n"]);return o=function(){return n},n}function s(){var n=(0,i.Z)(["\n  aspect-ratio: 900/100;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  @media only screen and (max-width: 600px) {\n    aspect-ratio: 150/50;\n  }\n"]);return s=function(){return n},n}function c(){var n=(0,i.Z)(["\n  max-width: calc(100vw - 250px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  padding: 5%;\n  padding-top: 150px;\n  padding-bottom: 0px;\n  margin-left: 250px;\n  @media only screen and (max-width: 600px) {\n    max-width: 100vw;\n    margin-left: 0px;\n    padding: 50px 2%;\n  }\n  @media only screen and (max-width: 700px) and (min-width: 420px) {\n    max-width: 100vw;\n    margin-left: 0px;\n    padding: 50px 10%;\n  }\n"]);return c=function(){return n},n}function l(){var n=(0,i.Z)(["\n  max-width: 100vw !important;\n  overflow: hidden !important;\n"]);return l=function(){return n},n}var u=a.ZP.div(l()),d=a.ZP.div(c()),p=a.ZP.div(s()),x=(0,a.ZP)(p)(o());function f(){var n=(0,i.Z)(["\n  @keyframes float {\n    0% {\n      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n      transform: translatey(0px);\n    }\n    50% {\n      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);\n      transform: translatey(-10px);\n    }\n    100% {\n      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);\n      transform: translatey(0px);\n    }\n  }\n  width: 175px;\n  border-radius: 50%;\n  background-image: radial-gradient(circle at center, #007fff 0, #4facf7 100%);\n  animation: float 10s infinite;\n"]);return f=function(){return n},n}var h=a.ZP.img(f()),m=function(){return(0,r.jsx)(h,{src:"/images/avatar/James.png"})},g=e(1284),w=function(n){return"".concat(5*n,"px")};function v(){var n=(0,i.Z)(["\n  margin-top: ",";\n"]);return v=function(){return n},n}function b(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  @media only screen and (max-width: 700px) {\n    display: none;\n  }\n"]);return b=function(){return n},n}function j(){var n=(0,i.Z)(["\n  position: fixed;\n  top: 0;\n  width: 250px;\n  min-height: 500px;\n  padding-top: ",";\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  z-index: 1;\n\n  @media only screen and (max-width: 700px) {\n    flex-direction: row;\n    padding-top: 0;\n    position: relative;\n    justify-content: space-around;\n    bottom: 0;\n    width: 100%;\n    height: 250px;\n    min-height: 250px;\n  }\n"]);return j=function(){return n},n}var y=(0,a.ZP)(g.Zb)(j(),w(25)),Z=a.ZP.div(b()),k=(0,a.ZP)(g.H3)(v(),w(7)),P=e(2809),O=e(2609),_=e(1163);function S(){var n=(0,i.Z)(["\n  height: 100%;\n  width: 100%;\n  margin-left: ",";\n  font-size: small;\n  text-align: center;\n"]);return S=function(){return n},n}function H(){var n=(0,i.Z)(["\n  position: absolute;\n  padding: ",";\n  left: 0;\n  width: 20%;\n"]);return H=function(){return n},n}function J(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: ",";\n  cursor: pointer;\n"]);return J=function(){return n},n}var T=(0,a.ZP)(g.UW)(J(),w(2)),z=a.ZP.img(H(),w(1.5)),I=a.ZP.div(S(),(function(n){return n.icon?0:w(5)}));function L(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function E(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?L(Object(e),!0).forEach((function(t){(0,P.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):L(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var N=function(n){var t=n.icon,e=void 0===t?null:t,i=n.src,a=n.text,o=n.link,s=(0,_.useRouter)(),c=E({},o&&{onClick:function(){return s.push(o)}});return(0,r.jsxs)(T,E(E({},c),{},{intent:O.S.PRIMARY,icon:e,children:[i&&(0,r.jsx)(z,{src:i}),(0,r.jsx)(I,{icon:null!==e,children:a})]}))},R=function(){return(0,r.jsxs)(y,{elevation:4,children:[(0,r.jsx)(m,{}),(0,r.jsx)(k,{children:"James Haworth Wheatman"}),(0,r.jsxs)(Z,{children:[(0,r.jsx)("br",{}),(0,r.jsx)(N,{text:"Full-Stack Developer at Theodo UK",link:"https://www.theodo.co.uk/",src:"https://www.theodo.co.uk/hs-fs/hubfs/theodologo-ConvertImage-15.png?width=287&name=theodologo-ConvertImage-15.png"}),(0,r.jsx)(N,{text:"MSc Computer Science",src:"https://www.ucl.ac.uk/aihealth-cdt/sites/aihealth_cdt/files/styles/small_image/public/ucl-logo-web.jpg?itok=ZUOfeBl9",link:"https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/computer-science-msc"}),(0,r.jsx)(N,{text:"BSc Physics",src:"/icons/Sheffield.png",link:"https://www.sheffield.ac.uk/undergraduate/courses/2022/physics-bsc"})]})]})};function D(){var n=(0,i.Z)(["\n  padding-top: ",";\n  :hover {\n    text-decoration: none;\n  }\n"]);return D=function(){return n},n}function C(){var n=(0,i.Z)(["\n  padding: ",";\n"]);return C=function(){return n},n}function W(){var n=(0,i.Z)(["\n  @media only screen and (max-width: 420px) {\n    display: none;\n  }\n"]);return W=function(){return n},n}function G(){var n=(0,i.Z)(["\n  background-color: transparent !important;\n  height: 100px;\n  /* overflow: visible; */\n  box-shadow: none !important;\n  max-width: 100vw !important;\n\n  ::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    background: url('/images/layout/navbar.svg');\n    aspect-ratio: 900/50;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    @media only screen and (max-width: 1000px) {\n      aspect-ratio: 600/50;\n    }\n    @media only screen and (max-width: 600px) {\n      aspect-ratio: 300/50;\n    }\n  }\n"]);return G=function(){return n},n}var A=(0,a.ZP)(g.wp)(G()),U=(0,a.ZP)(g.fT)(W()),B=a.ZP.a(C(),w(2)),F=a.ZP.a(D(),w(2)),M=e(1229),X=24,Y=function(){return(0,r.jsxs)(A,{fixedToTop:!0,children:[(0,r.jsxs)(g.fT,{align:M.v.LEFT,children:[(0,r.jsx)(B,{href:"https://jamesdhw.github.io",children:(0,r.jsx)(g.JO,{size:X,color:"white",icon:"home"})}),(0,r.jsx)(g.ox,{}),(0,r.jsx)(F,{href:"/blog",children:(0,r.jsx)(g.H3,{children:"Blog \u270d\ufe0f"})})]}),(0,r.jsxs)(U,{align:M.v.RIGHT,children:[(0,r.jsx)(g.ox,{}),(0,r.jsx)(B,{target:"_blank",href:"mailto:JamesHaworthWheatman@gmail.com?subject=[GitHub Pages]: ",children:(0,r.jsx)(g.JO,{size:X,color:"white",icon:"envelope"})}),(0,r.jsx)(B,{target:"_blank",href:"https://github.com/JamesDHW",children:(0,r.jsx)("img",{height:X,width:X,src:"/icons/GitHub.png",alt:""})}),(0,r.jsx)(B,{target:"_blank",href:"https://www.linkedin.com/in/jamesdhw/",children:(0,r.jsx)("img",{height:X,width:X,src:"/icons/LinkedIn.png",alt:""})})]})]})},K=function(n){var t=n.children;return(0,r.jsxs)(u,{className:"bp3-dark",children:[(0,r.jsx)(x,{}),(0,r.jsxs)(d,{children:[(0,r.jsx)(Y,{}),t]}),(0,r.jsx)(R,{})]})},q=e(6482),Q=[{name:"React",skillLevel:3,src:"react.svg",alt:"React logo"},{name:"Next.JS",skillLevel:3,src:"next.svg",alt:"Next JS logo"},{name:"Gatsby.JS",skillLevel:3,src:"gatsby.svg",alt:"Gatsby JS logo"},{name:"Ionic",skillLevel:3,src:"ionic.svg",alt:"Ionic logo"},{name:"TypeScript",skillLevel:3,src:"ts.svg",alt:"TypeScript logo"},{name:"Python",skillLevel:3,src:"python.svg",alt:"Python logo"}];function V(){var n=(0,i.Z)(["\n  margin: ",";\n  width: 100%auto;\n  text-align: center;\n"]);return V=function(){return n},n}function $(){var n=(0,i.Z)(["\n  @keyframes float {\n    0% {\n      transform: translatey(0px);\n    }\n    50% {\n      transform: translatey(-5px);\n    }\n    100% {\n      transform: translatey(0px);\n    }\n  }\n  content: '';\n  height: 90px;\n  width: 90px;\n  margin-bottom: ",";\n  animation: float ","s infinite ease-in-out;\n  transition: all 0.2s ease-in-out;\n"]);return $=function(){return n},n}function nn(){var n=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  @media only screen and (max-width: 420px) {\n    justify-content: start;\n    overflow-x: auto;\n    flex-wrap: nowrap;\n  }\n"]);return nn=function(){return n},n}function tn(){var n=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n  margin: "," 0px;\n  box-shadow: #007fff 0px 40px 20px -40px;\n  :hover {\n    transform: scale(1.1);\n    transition: all 0.1s ease-in-out;\n    animation: none ease-in-out;\n  }\n\n  @media only screen and (max-width: 420px) {\n    margin: ",";\n  }\n"]);return tn=function(){return n},n}function en(){var n=(0,i.Z)(["\n  padding: "," 0;\n  margin: ",";\n  margin-top: ",";\n"]);return en=function(){return n},n}var rn=(0,a.ZP)(g.UW)(en(),w(10),w(5),w(25)),an=a.ZP.div(tn(),w(5),w(5)),on=a.ZP.div(nn()),sn=a.ZP.div($(),w(2),(function(n){var t=n.offset;return"7.".concat(2*t)})),cn=(0,a.ZP)(g.H1)(V(),w(5)),ln=function(){return(0,r.jsxs)(rn,{intent:O.S.PRIMARY,icon:null,children:[(0,r.jsx)(cn,{children:"Here are some of the technologies I have used:"}),(0,r.jsx)(on,{children:Q.map((function(n,t){var e=n.name,i=n.alt,a=n.src,o=n.skillLevel;return(0,r.jsx)(q.u,{content:(0,r.jsxs)(r.Fragment,{children:[Array.from({length:o}).map((function(n,t){return(0,r.jsx)(g.JO,{icon:"star",intent:"warning"},t)})),Array.from({length:5-o}).map((function(n,t){return(0,r.jsx)(g.JO,{icon:"star-empty",intent:"warning"},t)}))]}),placement:"bottom",inheritDarkTheme:!0,intent:"primary",children:(0,r.jsxs)(an,{children:[(0,r.jsx)(sn,{offset:t,children:(0,r.jsx)("img",{src:"/images/technologies/".concat(a),height:90,width:90,alt:i})}),(0,r.jsx)(g.H3,{children:e})]})},t)}))})]})};function un(){var n=(0,i.Z)(["\n  position: absolute;\n  z-index: 3;\n  font-size: 50px !important;\n  text-align: center;\n  text-shadow: #000000 0px 5px 5px;\n  -webkit-font-smoothing: antialiased;\n  @media only screen and (max-width: 420px) {\n    font-size: 30px !important;\n  }\n"]);return un=function(){return n},n}var dn=(0,a.ZP)(g.H1)(un()),pn=function(){return(0,r.jsxs)(K,{children:[(0,r.jsx)(dn,{children:"Well hello there \ud83d\udc4b"}),(0,r.jsx)(ln,{})]})}},5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(4512)}])}},function(n){n.O(0,[774,865,326,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);