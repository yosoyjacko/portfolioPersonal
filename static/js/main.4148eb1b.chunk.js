(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{45:function(A,e,t){},51:function(A,e,t){},52:function(A,e,t){},53:function(A,e,t){},71:function(A,e,t){},72:function(A,e,t){},73:function(A,e,t){},74:function(A,e,t){},75:function(A,e,t){},76:function(A,e,t){},77:function(A,e,t){"use strict";t.r(e);var c=t(2),a=t.n(c),n=t(26),s=t.n(n),i=t(23),r=t(34),o=t(35),d=t(13),l=t(20),j=t(1),g=[{title:"Home",path:"/home",icon:Object(j.jsx)(l.b,{}),cName:"nav-text"},{title:"Sobre mi",path:"/Sobre-mi",icon:Object(j.jsx)(l.a,{}),cName:"nav-text"},{title:"Mi CV",path:"/Mi-CV",icon:Object(j.jsx)(l.e,{}),cName:"nav-text"},{title:"Proyectos",path:"/Proyectos",icon:Object(j.jsx)(l.c,{}),cName:"nav-text"},{title:"Certificados",path:"/Certificados",icon:Object(j.jsx)(l.d,{}),cName:"nav-text"}],b=t(0);t(45);var u=function(){var A=Object(c.useState)(!1),e=Object(i.a)(A,2),t=e[0],a=e[1],n=function(){return a(!t)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(b.b.Provider,{value:{color:"#fff"},children:[Object(j.jsx)("div",{className:"navbar",children:Object(j.jsx)(d.b,{to:"#",className:"menu-bars",children:Object(j.jsx)(r.a,{onClick:n})})}),Object(j.jsx)("nav",{className:t?"nav-menu active":"nav-menu",children:Object(j.jsxs)("ul",{className:"nav-menu-items",onClick:n,children:[Object(j.jsx)("li",{className:"navbar-toggle",children:Object(j.jsx)(d.b,{to:"#",className:"menu-bars",children:Object(j.jsx)(o.a,{})})}),g.map((function(A,e){return Object(j.jsx)("li",{className:A.cName,children:Object(j.jsxs)(d.b,{to:A.path,children:[A.icon,Object(j.jsx)("span",{children:A.title})]})},e)}))]})})]})})},m=(t(51),t(4));t(52);var p,Q,h=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{className:"tittle",children:Object(j.jsx)("span",{className:"lead-1",children:"Hello World! "})}),Object(j.jsx)("h1",{className:"tittle",children:Object(j.jsxs)("span",{className:"lead lead-2",children:["Soy ",Object(j.jsx)("strong",{className:"red-text",children:"Jorge Correa,"})]})}),Object(j.jsx)("h1",{className:"tittle",children:Object(j.jsxs)("span",{className:"lead lead-3",children:["el ",Object(j.jsx)("strong",{className:"red-text",children:"Desarrollador Web"})," que estabas buscando"]})})]})})})},C=t(7),f=t(12),x=t(10),B=t(9),v=(t(53),t(16)),O=t(18),y=t(15),E=t(37),I=t(38),D=O.a.div(p||(p=Object(v.a)(["\n  position: absolute;\n  height: 70%;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-origin: 50% 50%;\n"]))),k=O.a.div(Q||(Q=Object(v.a)(["\n  position: relative;\n  max-width: 100%;\n  min-width: 30%;\n  width: 31vw;\n  height: 100%;\n  background: white;\n  font-size: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform-origin: 50% 50%;\n"])));var N,w,G,M=Object(I.a)()((function(A){var e=A.content,t=A.offsetRadius,c=A.index,a=A.animationConfig,n=A.moveSlide,s=A.delta,i=A.down,r=(A.up,c-t),o=2*t+1,d=1-Math.abs(r/(t+1)),l=Math.abs(r)/(t+1)*50,g=-50;return 0!==t&&(0===c?g=0:c===o-1&&(g=-100)),0===r&&i&&((g+=s[1]/(t+1))>-40&&n(-1),g<-100&&n(1)),r>0?g+=l:r<0&&(g-=l),Object(j.jsx)(E.Spring,{to:{transform:"translateX(0%) translateY(".concat(g,"%) scale(").concat(d,")"),top:"".concat(0===t?50:50+50*r/t,"%"),opacity:d*d},config:a,children:function(A){return Object(j.jsx)(D,{style:Object(y.a)(Object(y.a)({},A),{},{zIndex:Math.abs(Math.abs(r)-2)}),children:Object(j.jsx)(k,{onClick:function(){return n(r)},children:e})})}})})),P=O.a.div(N||(N=Object(v.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: 70%;\n  // border-left: 1px solid #fff;\n"]))),V=O.a.div(w||(w=Object(v.a)(["\n  position: relative;\n  display: flex;\n\n  height: 0px;\n  margin: 0 auto;\n  width: 20%;\n  margin-top: 3rem;\n  justify-content: space-between;\n  z-index: 1000;\n"]))),Z=O.a.div(G||(G=Object(v.a)(["\n  background: transparent;\n  padding: 15px;\n  margin-bottom: 10px;\n  border-radius: 3px;\n"])));function R(A,e){return(A%e+e)%e}var Y=function(A){Object(x.a)(t,A);var e=Object(B.a)(t);function t(){var A;Object(C.a)(this,t);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(A=e.call.apply(e,[this].concat(a))).state={index:0,goToSlide:null,prevPropsGoToSlide:0,newSlide:!1},A.componentDidMount=function(){document.addEventListener("keydown",(function(e){e.isComposing||229===e.keyCode||(38===e.keyCode&&A.moveSlide(-1),40===e.keyCode&&A.moveSlide(1))}))},A.modBySlidesLength=function(e){return R(e,A.props.slides.length)},A.moveSlide=function(e){A.setState({index:A.modBySlidesLength(A.state.index+e),goToSlide:null})},A}return Object(f.a)(t,[{key:"clampOffsetRadius",value:function(A){var e=this.props.slides,t=Math.floor((e.length-1)/2);return A<0?0:A>t?t:A}},{key:"getPresentableSlides",value:function(){var A=this.props.slides,e=this.state.index,t=this.props.offsetRadius;t=this.clampOffsetRadius(t);for(var c=new Array,a=-t;a<1+t;a++)c.push(A[this.modBySlidesLength(e+a)]);return c}},{key:"render",value:function(){var A=this,e=this.props,t=e.animationConfig,c=e.offsetRadius,n=null;return e.showNavigation&&(n=Object(j.jsxs)(V,{children:[Object(j.jsx)(Z,{onClick:function(){return A.moveSlide(1)},children:"\u2191"}),Object(j.jsx)(Z,{onClick:function(){return A.moveSlide(-1)},children:"\u2193"})]})),Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(P,{children:this.getPresentableSlides().map((function(e,a){return Object(j.jsx)(M,{content:e.content,moveSlide:A.moveSlide,offsetRadius:A.clampOffsetRadius(c),index:a,animationConfig:t},e.key)}))}),n]})}}]),t}(a.a.Component);Y.defaultProps={offsetRadius:2,animationConfig:{tension:120,friction:14}};var K=Y,T=t(39),q=t.p+"static/media/video5.e4d827d9.mp4",L=t.p+"static/media/video6.3c8e52c8.mp4",z=t.p+"static/media/video7.61e720bb.mp4",H=t.p+"static/media/borderSnake.54cff59a.mp4",X=t.p+"static/media/desenfoqueDeFondo.88dd3865.mp4",J=t.p+"static/media/Shinybutton.c73bdcb8.mp4",S=t.p+"static/media/videoCube3D.5b9fd9d7.mp4",F=t.p+"static/media/video8.0159272c.mp4",W=t.p+"static/media/video9.499968cb.mp4",U=[{key:1,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:q,type:"video/mp4"})})},{key:2,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:L,type:"video/mp4"})})},{key:3,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:z,type:"video/mp4"})})},{key:4,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:H,type:"video/mp4"})})},{key:5,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:X,type:"video/mp4"})})},{key:6,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:J,type:"video/mp4"})})},{key:7,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:S,type:"video/mp4"})})},{key:8,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:F,type:"video/mp4"})})},{key:9,content:Object(j.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,children:Object(j.jsx)("source",{src:W,type:"video/mp4"})})}],_=function(A){Object(x.a)(t,A);var e=Object(B.a)(t);function t(){var A;Object(C.a)(this,t);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(A=e.call.apply(e,[this].concat(a))).state={goToSlide:0,offsetRadius:2,showNavigation:!0,config:T.a.gentle},A}return Object(f.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"div-none",style:{position:"relative",flexDirection:"column",justifyContent:"center",width:"34vw",height:"88vh",float:"right"},children:Object(j.jsx)(K,{slides:U,offsetRadius:this.state.offsetRadius,showNavigation:this.state.showNavigation,animationConfig:this.state.config})})}}]),t}(c.Component);t(71);function $(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(_,{})]})}t(72);function AA(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-about-me",children:Object(j.jsxs)("div",{className:"content-about-me",children:[Object(j.jsx)("h2",{className:"aboutMe",children:"\xbfQuer\xe9s saber un poco m\xe1s de mi?"}),Object(j.jsx)("div",{className:"aboutMe-text",children:Object(j.jsxs)("p",{className:"texto-aboutme",children:["Soy desarrollador web fullstack con fuerte enfoque en el front-end, en especial porque me gusta enfocarme en generar una buena experiencia de usuario. ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Hace relativamente poco, tuve la oportunidad de completar un bootcamp de desarrollador fullstack en la plataforma SOYHENRY, con mas de 700hs de pr\xe1cticas con el stack PERN (PostgreSQL, EXPRESS, React y Node.) ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Soy una persona curiosa a la que le encanta la tecnolog\xeda y seguir descubriendo y capacitandome todos los d\xedas. A nivel laboral, considero primordial la comunicaci\xf3n dentro del equipo, y soy capaz de aportar al grupo nuevas ideas, soluciones y mucha buena onda, para as\xed poder aumentar la productividad y entregar proyectos de gran calidad. ",Object(j.jsx)("br",{})," ",Object(j.jsx)("br",{}),"Busco llevar a cabo proyectos diversos y desafiantes, para crecer como desarrollador y as\xed continuar avanzando en mi carrera profesional."]})}),Object(j.jsx)("div",{className:"banner",children:function(){for(var A=[],e=function(){var e={animationDuration:2+(c=5*Math.random())+"s",animationDelay:1+c+"s"};A.push(Object(j.jsx)("div",{className:"blocks",style:e}))},t=1;t<400;t++){var c;e()}return A}()})]})})})}t(73);var eA=t.p+"static/media/foto3.c9964672.jpg",tA=t.p+"static/media/github.dffa84d4.png",cA=t.p+"static/media/CV_Correa,Jorge.ab49bb11.pdf";function aA(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container-cv",children:Object(j.jsxs)("div",{className:"content-cv",children:[Object(j.jsx)("h1",{className:"tittle-cv",children:Object(j.jsx)("span",{className:"span-tittle",children:"Si queres contactarme"})}),Object(j.jsx)("h1",{className:"tittle-cv",children:Object(j.jsx)("span",{className:"lead lead-2",children:"ac\xe1 te dejo mi CV,"})}),Object(j.jsx)("h1",{className:"tittle-cv",children:Object(j.jsx)("span",{className:"lead lead-3",children:"clickeando en la "})}),Object(j.jsx)("h1",{className:"tittle-cv",children:Object(j.jsx)("span",{className:"lead lead-4",children:"imagen lo descargas"})}),Object(j.jsxs)("div",{className:"text-cv",children:[Object(j.jsx)("p",{className:"text-cv",children:"Tambien podes contactarme a trav\xe9s de mis redes:"}),Object(j.jsxs)("div",{className:"iconos-redes",children:[Object(j.jsxs)("a",{href:"http://linkedin.com/in/jorge-correa-44881a157",target:"_blank",rel:"noopener noreferrer",children:[Object(j.jsx)("img",{className:"redes",src:"data:image/png;base64,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",alt:""})," "]}),Object(j.jsx)("a",{href:"http://github.com/yosoyjacko",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)("img",{className:"redes-git",src:tA,alt:""})})]})]})]})}),Object(j.jsx)("div",{className:"cv-image",children:Object(j.jsx)("div",{className:"content-cv-image",children:Object(j.jsx)("a",{href:cA,download:!0,children:Object(j.jsx)("img",{className:"cv-imagen",src:eA,alt:""})})})})]})}t(74);var nA=t.p+"static/media/proyecto2.70f34ec1.jpg",sA=t.p+"static/media/proyecto1.83dcc07e.jpg",iA=t.p+"static/media/proyecto6.cea5f7b4.jpg",rA=t.p+"static/media/proyecto4.3ff6ab35.jpg",oA=t.p+"static/media/proyecto5.485d5bff.jpg",dA=[{title:"Movie-App",subtitle:Object(j.jsx)("a",{href:"https://github.com/yosoyjacko/movie-app",target:"_blank",children:"GitHub"}),description:"App utilizando una api p\xfablica con informaci\xf3n de todas las peliculas creado con react.js",image:sA},{title:"Todo-List",subtitle:Object(j.jsx)("a",{href:"https://github.com/yosoyjacko/todo-list",target:"_blank",children:"GitHub"}),description:"Todo-list creado con React.js",image:nA},{title:"Fragancias Salas",subtitle:Object(j.jsx)("a",{href:"http://fraganciasalas.com/",target:"_blank",children:"Web"}),description:"P\xe1gina para un local de ventas de perfumes",image:iA},{title:"TreeBank",subtitle:Object(j.jsx)("a",{href:"https://github.com/yosoyjacko/treebank",target:"_blank",children:"GitHub"}),description:"Billetera virtual creada como ultimo proyecto de SOYHENRY creado con React native",image:rA},{title:"Prueba Fotografo",subtitle:Object(j.jsx)("a",{href:"https://github.com/yosoyjacko/pruebaFotografo",target:"_blank",children:"GitHub"}),description:"Pr\xe1ctica simple con html y css",image:oA}];var lA={slideIndex:0},jA=function(A,e){return"NEXT"===e.type?Object(y.a)(Object(y.a)({},A),{},{slideIndex:(A.slideIndex+1)%dA.length}):"PREV"===e.type?Object(y.a)(Object(y.a)({},A),{},{slideIndex:0===A.slideIndex?dA.length-1:A.slideIndex-1}):void 0};function gA(A){var e=A.slide,t=A.offset,a=0===t||null,n=function(A){var e=Object(c.useRef)(null);return Object(c.useEffect)((function(){if(e.current&&A){var t={rect:void 0,mouseX:void 0,mouseY:void 0},c=e.current,a=function(A){if(c){t.rect||(t.rect=c.getBoundingClientRect()),t.mouseX=A.clientX,t.mouseY=A.clientY;var e=(t.mouseX-t.rect.left)/t.rect.width,a=(t.mouseY-t.rect.top)/t.rect.height;c.style.setProperty("--px",e),c.style.setProperty("--py",a)}};return c.addEventListener("mousemove",a),function(){c.removeEventListener("mousemove",a)}}}),[A]),e}(a);return Object(j.jsxs)("div",{ref:n,className:"slide","data-active":a,style:{"--offset":t,"--dir":0===t?0:t>0?1:-1},children:[Object(j.jsx)("div",{className:"slideBackground",style:{backgroundImage:"url('".concat(e.image,"')")}}),Object(j.jsx)("div",{className:"slideContent",style:{backgroundImage:"url('".concat(e.image,"')")},children:Object(j.jsxs)("div",{className:"slideContentInner",children:[Object(j.jsx)("h2",{className:"slideTitle",children:e.title}),Object(j.jsx)("h3",{className:"slideSubtitle",children:e.subtitle}),Object(j.jsx)("p",{className:"slideDescription",children:e.description})]})})]})}var bA=function(){var A=Object(c.useReducer)(jA,lA),e=Object(i.a)(A,2),t=e[0],a=e[1];return Object(j.jsx)("div",{className:"works-container",children:Object(j.jsxs)("div",{className:"slides",children:[Object(j.jsx)("button",{onClick:function(){return a({type:"PREV"})},children:"\u2039"}),[].concat(dA,dA,dA).map((function(A,e){var c=dA.length+(t.slideIndex-e);return Object(j.jsx)(gA,{slide:A,offset:c},e)})),Object(j.jsx)("button",{onClick:function(){return a({type:"NEXT"})},children:"\u203a"})]})})},uA=(t(75),t.p+"static/media/codecademy.9b0a9046.png"),mA=t.p+"static/media/FreeCodeCamp.bbb5d969.png",pA=(t.p,t.p+"static/media/certificadohenry.9ef3e522.jpg"),QA=t.p+"static/media/certificadocodecademy1.4ed5ee94.jpg",hA=t.p+"static/media/certificadocodecademy2.c9ff3e9f.jpg",CA=t.p+"static/media/certificadofreecodecamp.ebdbd4a8.jpg";function fA(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"container-certification",children:Object(j.jsx)("div",{className:"content-certification",children:Object(j.jsxs)("div",{className:"container-card",children:[Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"face face1",children:Object(j.jsx)("div",{className:"content-face1",children:Object(j.jsx)("img",{src:"data:image/png;base64,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",alt:""})})}),Object(j.jsx)("div",{className:"face face2",children:Object(j.jsx)("img",{src:pA,alt:""})})]}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"face face1",children:Object(j.jsx)("div",{className:"content-face1",children:Object(j.jsx)("img",{src:uA,alt:""})})}),Object(j.jsx)("div",{className:"face face2",children:Object(j.jsx)("img",{src:QA,alt:""})})]}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"face face1",children:Object(j.jsx)("div",{className:"content-face1",children:Object(j.jsx)("img",{src:uA,alt:""})})}),Object(j.jsx)("div",{className:"face face2",children:Object(j.jsx)("img",{src:hA,alt:""})})]}),Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{className:"face face1",children:Object(j.jsx)("div",{className:"content-face1",children:Object(j.jsx)("img",{src:mA,alt:""})})}),Object(j.jsx)("div",{className:"face face2",children:Object(j.jsx)("img",{src:CA,alt:""})})]})]})})})})}t(76);var xA=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("nav",{className:"nav-horizontal",children:[Object(j.jsx)(d.b,{to:"/home",className:"nav-left",children:"Home"}),Object(j.jsx)(d.b,{to:"/mi-cv",className:"nav-button",children:"Contacto"}),Object(j.jsx)("div",{className:"nav-line"})]})})};var BA=function(){return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(xA,{}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{path:"/home",exact:!0,component:$}),Object(j.jsx)(m.a,{path:"/sobre-mi",exact:!0,component:AA}),Object(j.jsx)(m.a,{path:"/mi-cv",exact:!0,component:aA}),Object(j.jsx)(m.a,{path:"/proyectos",exact:!0,component:bA}),Object(j.jsx)(m.a,{path:"/Certificados",exact:!0,component:fA})]})]})};s.a.render(Object(j.jsx)(BA,{}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.4148eb1b.chunk.js.map