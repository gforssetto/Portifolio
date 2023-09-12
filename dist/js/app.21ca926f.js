(function(){"use strict";var t={850:function(t,e,n){var o=n(963),i=n(252);function r(t,e,n,o,r,l){const s=(0,i.up)("HeaderSection"),a=(0,i.up)("AboutSection"),c=(0,i.up)("SkillSections"),u=(0,i.up)("ProjectsSection"),p=(0,i.up)("ContactForm"),f=(0,i.up)("FooterSection");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(s),(0,i.Wm)(a),(0,i.Wm)(c),(0,i.Wm)(u),(0,i.Wm)(p),(0,i.Wm)(f)])}const l={class:"aboutSection row",id:"about"},s=(0,i._)("section",null,[(0,i._)("p",null," Hello there! I am a motivated and dedicated full stack web developer with a passion for creating innovative and functional websites. Through personal projects and self-learning, I have built a strong foundation in web development. My ability to work well in a team, combined with an easygoing nature, allows me to thrive in collaborative environments. My goal is to leverage my skills and passion to make a positive impact and deliver exceptional results as a full stack web developer. ")],-1);function a(t,e,n,o,r,a){const c=(0,i.up)("SectionTitle");return(0,i.wg)(),(0,i.iD)("section",l,[(0,i.Wm)(c,{title:"About Me"}),s])}var c=n(577);const u=(0,i._)("hr",null,null,-1);function p(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("article",null,[(0,i._)("h3",null,(0,c.zw)(this.title),1),u])}var f={name:"SectionTitle",props:{title:[]}},m=n(744);const g=(0,m.Z)(f,[["render",p]]);var d=g,h={name:"AboutSection",components:{SectionTitle:d}};const v=(0,m.Z)(h,[["render",a]]);var b=v;const S={class:"formSection row",id:"contact"},w=(0,i.uE)('<form action="#"><input type="text" name="name" id="name" placeholder="Your Name"><select name="subject" id="subject"><option value="none" selected disabled>Select One</option><option value="bussiness">Bussines</option><option value="others">Others...</option></select><textarea name="message" id="message">\r\n            </textarea></form>',1);function _(t,e,n,o,r,l){const s=(0,i.up)("SectionTitle");return(0,i.wg)(),(0,i.iD)("section",S,[(0,i.Wm)(s,{title:"Contact Me"}),w])}var k={name:"ContactForm",components:{SectionTitle:d}};const W=(0,m.Z)(k,[["render",_]]);var y=W;const C=(0,i._)("a",{href:"#header"},"GO TO TOP",-1),j=(0,i._)("p",null,[(0,i.Uk)(" Copyright to @ 2023 "),(0,i._)("span",null,"Guilherme")],-1),P=[C,j];function T(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("footer",null,P)}var D={name:"FooterSection"};const O=(0,m.Z)(D,[["render",T]]);var F=O;const x={id:"header"},Z=(0,i._)("section",null,[(0,i._)("h1",null," Guilherme Forssetto Correa "),(0,i._)("h3",null," Full stack Developer ")],-1);function M(t,e,n,o,r,l){const s=(0,i.up)("nav-section");return(0,i.wg)(),(0,i.iD)("header",x,[(0,i.Wm)(s),Z])}const H=(0,i._)("ul",null,[(0,i._)("li",null,[(0,i._)("a",{href:"#about"},"About Me")]),(0,i._)("li",null,[(0,i._)("a",{href:"#skills"},"Skills")]),(0,i._)("li",null,[(0,i._)("a",{href:"#portifolio"},"Portifolio")]),(0,i._)("li",null,[(0,i._)("a",{href:"#contact"},"Contacts")])],-1),E=[H];function A(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("nav",null,E)}var L={name:"NavSection"};const z=(0,m.Z)(L,[["render",A]]);var B=z,G={name:"HeaderSection",components:{NavSection:B}};const N=(0,m.Z)(G,[["render",M]]);var I=N;const J={class:"projectsSection row",id:"portifolio"},Q={class:"Projects-Container"};function R(t,e,n,o,r,l){const s=(0,i.up)("SectionTitle"),a=(0,i.up)("ProjectCard");return(0,i.wg)(),(0,i.iD)("section",J,[(0,i.Wm)(s,{title:"My Projects"}),(0,i._)("section",Q,[(0,i.Wm)(a,{title:"Flex Page",alt:"Flex Blog",description:"CSS - HTML",src:"img/Flex.png",git:"https://github.com/gforssetto/2023-03-Flex",web:"https://gforssetto.github.io/2023-03-Flex/"},null,8,["src","git","web"]),(0,i.Wm)(a,{title:"Elegant Page",alt:"Elegant Blog",description:"CSS - HTML",src:"img/Elegant.png",git:"https://github.com/gforssetto/2023-02-Elegant",web:"https://gforssetto.github.io/2023-02-Elegant/"},null,8,["src","git","web"]),(0,i.Wm)(a,{title:"Delivery Page",alt:"Blog",description:"CSS - HTML",src:"img/Delivery.png",git:"https://github.com/gforssetto/2030-03-Delivery",web:"https://gforssetto.github.io/2030-03-Delivery/"},null,8,["src","git","web"])])])}const U={class:"Project-Card"},Y=["src","alt"],q=["href"],K=["href"];function V(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("figure",U,[(0,i._)("img",{src:this.src,alt:n.alt},null,8,Y),(0,i._)("figcaption",null,[(0,i._)("h4",null,(0,c.zw)(n.title),1),(0,i._)("p",null,(0,c.zw)(n.description),1),(0,i._)("span",null,[(0,i._)("a",{href:this.git,class:"fa-brands fa-github"},null,8,q),(0,i._)("a",{href:this.web,class:"fa-solid fa-globe"},null,8,K)])])])}var X={name:"ProjectCard",props:{src:[],alt:[],title:[],description:[],git:[],web:[]}};const $=(0,m.Z)(X,[["render",V]]);var tt=$,et={name:"ProjectsSection",components:{SectionTitle:d,ProjectCard:tt}};const nt=(0,m.Z)(et,[["render",R]]);var ot=nt;const it={class:"skillsSection row",id:"skills"};function rt(t,e,n,o,r,l){const s=(0,i.up)("SectionTitle"),a=(0,i.up)("skill-cards");return(0,i.wg)(),(0,i.iD)("section",it,[(0,i.Wm)(s,{title:"Skills"}),(0,i._)("section",null,[(0,i.Wm)(a,{title:"CSS"}),(0,i.Wm)(a,{title:"HTML"}),(0,i.Wm)(a,{title:"JS"}),(0,i.Wm)(a,{title:"vue.JS"},null,8,["title"]),(0,i.Wm)(a,{title:"React"}),(0,i.Wm)(a,{title:"PHP"}),(0,i.Wm)(a,{title:"SQL"})])])}function lt(t,e,n,o,r,l){return(0,i.wg)(),(0,i.iD)("aside",null,[(0,i._)("h6",null,(0,c.zw)(this.title),1)])}var st={name:"SkillCards",props:{title:[]}};const at=(0,m.Z)(st,[["render",lt]]);var ct=at,ut={name:"SkillSection",components:{SkillCards:ct,SectionTitle:d}};const pt=(0,m.Z)(ut,[["render",rt]]);var ft=pt,mt={name:"App",components:{HeaderSection:I,FooterSection:F,SkillSections:ft,AboutSection:b,ContactForm:y,ProjectsSection:ot}};const gt=(0,m.Z)(mt,[["render",r]]);var dt=gt;(0,o.ri)(dt).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var l=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],r=t[u][2];for(var s=!0,a=0;a<o.length;a++)(!1&r||l>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[a])}))?o.splice(a--,1):(s=!1,r<l&&(l=r));if(s){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[o,i,r]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,l=o[0],s=o[1],a=o[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(a)var u=a(n)}for(e&&e(o);c<l.length;c++)r=l[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(u)},o=self["webpackChunkportifolio"]=self["webpackChunkportifolio"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(850)}));o=n.O(o)})();
//# sourceMappingURL=app.21ca926f.js.map