(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],b=0,f=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"04c0":function(e,t,a){},5292:function(e,t,a){},"5c0b":function(e,t,a){"use strict";a("9c0c")},8152:function(e,t,a){"use strict";a("04c0")},"964f":function(e,t,a){},"9c0c":function(e,t,a){},b11c:function(e,t,a){"use strict";a("964f")},b31e:function(e,t,a){e.exports=a.p+"img/profile.4f39918a.png"},ba4b:function(e,t,a){"use strict";a("5292")},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=(a("d3b7"),a("bc3a")),i=a.n(n),o={},s=i.a.create(o);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},r["default"].use(Plugin);Plugin;var c=a("5f5b"),l=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(c["a"]),r["default"].use(l["a"]);var u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("Profile"),a("div",{staticClass:"content"},[a("AboutMe"),a("Courses")],1)],1)},b=[],f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{align:"center",variant:"success",type:"dark",sticky:"",fixed:""}},[a("b-navbar-brand",{attrs:{href:"#"}},[e._v("DS")]),a("b-navbar-nav",{staticClass:"ml-auto",attrs:{align:"right",fill:""}},[a("b-nav-item",{attrs:{href:"#skills"}},[e._v(e._s(e.$t("title.skills")))]),a("b-nav-item",{attrs:{href:"#courses"}},[e._v(e._s(e.$t("title.courses")))]),a("b-nav-item",{attrs:{href:"#projects"}},[e._v(e._s(e.$t("title.projects")))]),a("b-nav-item",{attrs:{href:"#contact"}},[e._v(e._s(e.$t("title.contact")))]),a("b-nav-item-dropdown",{attrs:{text:e.$t("language")}},[e._l(e.languages,(function(t){var r=t.title,n=t.value;return[a("b-dropdown-item",{key:n,attrs:{active:e.isActive(n),"data-value":n},on:{click:e.changeLanguage}},[e._v(" "+e._s(r)+" ")])]}))],2)],1)],1)},d=[],p=a("3835"),v=a("d4ec"),g=a("bee2"),m=a("257e"),h=a("262e"),j=a("2caf"),y=a("ade3"),O=(a("99af"),a("ac1f"),a("1276"),a("9ab4")),_=a("1b40"),k=function(e){Object(h["a"])(a,e);var t=Object(j["a"])(a);function a(){var e;Object(v["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(y["a"])(Object(m["a"])(e),"languages",[{title:"English",value:"en"},{title:"Español",value:"es"}]),e}return Object(g["a"])(a,[{key:"isActive",value:function(e){var t=this.$i18n.locale.split("-"),a=Object(p["a"])(t,1),r=a[0];return e==r}},{key:"changeLanguage",value:function(e){var t=e.target.dataset.value;this.$i18n.locale=t}}]),a}(_["b"]);k=Object(O["a"])([Object(_["a"])({})],k);var w=k,x=w,C=(a("ba4b"),a("2877")),$=Object(C["a"])(x,f,d,!1,null,"4bf486ec",null),P=$.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{attrs:{id:"about"}},[e._v(e._s(e.$t("title.about")))]),a("b-card",[e._v(e._s(e.$t("aboutme"))+" ")])],1)},A=[],L={},z=Object(C["a"])(L,S,A,!1,null,null,null),E=z.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",{attrs:{id:"courses"}},[e._v(e._s(e.$t("title.courses")))]),a("b-card",[e.isLoandingCourses?[a("div",{staticClass:"text-center",attrs:{"v-show":e.isLoandingCourses}},[a("b-spinner",{attrs:{variant:"success",type:"grow"}})],1)]:[a("b-table",{attrs:{small:"","no-border-collapse":"",striped:"",hover:"",items:e.items,fields:e.fields},scopedSlots:e._u([{key:"cell(badge)",fn:function(e){return[a("img",{attrs:{src:e.value,alt:"badge"}})]}},{key:"cell(diploma_link)",fn:function(t){return[a("b-link",{attrs:{href:e._f("diplomaLink")(t.value),target:"_blank"}},[a("b-icon",{attrs:{icon:"eye"}})],1)]}}])})]],2)],1)},T=[],I=a("1da1"),D=(a("96cf"),a("4de4"),a("4e82"),a("e9c4"),a("caad"),a("2532"),function(e){Object(h["a"])(a,e);var t=Object(j["a"])(a);function a(){var e;Object(v["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(y["a"])(Object(m["a"])(e),"isLoandingCourses",!0),Object(y["a"])(Object(m["a"])(e),"fields",[{key:"badge",label:""},{key:"career",label:e.$t("coursesTable.career")},{key:"title",label:e.$t("coursesTable.course")},{key:"diploma_link",label:e.$t("coursesTable.diploma")}]),Object(y["a"])(Object(m["a"])(e),"items",[]),Object(y["a"])(Object(m["a"])(e),"ignore",[1859]),e}return Object(g["a"])(a,[{key:"mounted",value:function(){var e=Object(I["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,o,s,c=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a="platzi_courses",r=JSON.parse(localStorage.getItem(a)),null!==r&&0!==(null===(t=r)||void 0===t?void 0:t.length)){e.next=8;break}return e.next=5,i.a.get("https://platzi-user-api.jecsham.com/api/v1/getUserSummary/@david.suarez");case 5:o=e.sent,s=o.data,r=((null===s||void 0===s||null===(n=s.userData)||void 0===n?void 0:n.courses)||[]).sort((function(e,t){return e.career<t.career?-1:e.career>t.career?1:0})).filter((function(e){return c.validCourse(e)}));case 8:localStorage.setItem(a,JSON.stringify(r)),this.isLoandingCourses=!1,this.items=r;case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"validCourse",value:function(e){return!this.ignore.includes(e.id)}}]),a}(_["b"]));D=Object(O["a"])([Object(_["a"])({filters:{diplomaLink:function(e){return"https://platzi.com".concat(e)}}})],D);var J=D,N=J,R=(a("8152"),Object(C["a"])(N,M,T,!1,null,"d649b54c",null)),q=R.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",{attrs:{id:"aboutme",title:"David Suárez","img-src":a("b31e"),"img-alt":"profile","img-top":""}},[r("b-card-text",[e._v(" Web fullstack developer"),r("br"),e._v(" México ")]),r("b-list-group",e._l(e.links,(function(t){var a=t.title,n=t.url,i=t.icon;return r("b-list-group-item",{key:i},[r("b-link",{attrs:{href:n,target:"_blank"}},[r("b-icon",{attrs:{icon:i}}),e._v(" "+e._s(a)+" ")],1)],1)})),1)],1)},H=[],U=function(e){Object(h["a"])(a,e);var t=Object(j["a"])(a);function a(){var e;Object(v["a"])(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return e=t.call.apply(t,[this].concat(n)),Object(y["a"])(Object(m["a"])(e),"links",[{icon:"mailbox",url:"mailto:contact@davidsuarez.dev",title:"Email"},{icon:"github",url:"https://github.com/dav1dsrz",title:"Github"},{icon:"linkedin",url:"https://www.linkedin.com/in/davidsuarezcdo/",title:"Linkedin"}]),e}return Object(g["a"])(a)}(_["b"]);U=Object(O["a"])([Object(_["a"])({})],U);var W=U,B=W,F=(a("b11c"),Object(C["a"])(B,G,H,!1,null,"2bf73ebe",null)),K=F.exports,Q={name:"App",components:{Navbar:P,AboutMe:E,Courses:q,Profile:K}},V=Q,X=(a("5c0b"),Object(C["a"])(V,u,b,!1,null,null,null)),Y=X.exports,Z=a("a925");r["default"].use(Z["a"]);var ee=new Z["a"]({locale:navigator.language,fallbackLocale:"en",messages:{en:{language:"Language",title:{about:"About me",profile:"Profile",skills:"Skills",courses:"Courses",projects:"Projects",contact:"Contact"},coursesTable:{career:"Career",course:"Course",diploma:"Diploma"},aboutme:"I define myself by my enthusiasm for programming. At the age of 14, I began developing in a self-taught way by reading in forums, sites, etc. Over time, I improved my skills thanks to my job opportunities and courses online."},es:{language:"Idioma",title:{about:"Acerca de mi",profile:"Perfil",skills:"Habilidades",courses:"Cursos",projects:"Proyectos",contact:"Contacto"},coursesTable:{career:"Carrera",course:"Curso"},aboutme:"Me defino a mi mismo como un entusiasta por la programación. A la edad de 14 años, comencé a desarrollar de forma autodidacta leyendo en foros, sitios, etc. Con el tiempo he mejorado mis habilidades gracias a mis oportunidades laborales y cursos en línea."}}});r["default"].config.productionTip=!1,new r["default"]({i18n:ee,render:function(e){return e(Y)}}).$mount("#app")}});
//# sourceMappingURL=app.9c4ecc3b.js.map