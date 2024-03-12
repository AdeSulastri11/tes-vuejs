(function(){"use strict";var t={5029:function(t,e,a){var n=a(6848),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("NavbarMenu"),e("HomePage"),e("AboutFashion"),e("DisplayProduct"),e("ContactUs"),e("FooterWeb")],1)},s=[],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contentHome"},[e("div",{staticClass:"dot-blue"}),e("div",{staticClass:"dot-pink"}),e("div",{staticClass:"contentLeft"},[e("Transition",{attrs:{appear:""}},[e("h1",[t._v("Welcome to Fashion's Latest Trends")])]),e("p",[t._v("Welcome to our latest fashion catalog! Discover your unique style with our newest collection. Enjoy your shopping experience with us!")]),t._m(0)],1),t._m(1)])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"btn"},[e("button",{attrs:{type:"submit"}},[t._v("Learn More")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"img-main"},[e("img",{attrs:{src:a(2589),alt:""}})])}],c={name:"HomePage",props:{}},l=c,u=a(1656),d=(0,u.A)(l,i,o,!1,null,"72a430fa",null),p=d.exports,v=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("header",[e("nav",[e("div",{staticClass:"logo"},[e("img",{attrs:{alt:"logo ecommerce",src:a(3153)}})]),e("ul",[e("li",[e("a",{attrs:{href:"#"}},[t._v("Home")])]),e("li",[e("a",{attrs:{href:"#product"}},[t._v("Product")])]),e("li",[e("a",{attrs:{href:"#contact"}},[t._v("Contact")])])]),e("div",{staticClass:"search"},[e("input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search..."}})])])])}],m={name:"NavbarMenu",props:{}},f=m,g=(0,u.A)(f,v,h,!1,null,"4a9897d9",null),_=g.exports,w=function(){var t=this;t._self._c;return t._m(0)},b=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left"},[e("h1",[t._v("Fashion Store")]),e("p",[t._v("Fashion Store adalah tempat yang sempurna untuk menemukan gaya terkini untuk pria dan wanita. Dari pakaian casual hingga gaun mewah, kami menawarkan berbagai koleksi yang memenuhi segala selera dan kebutuhan fashion Anda. Temukan produk berkualitas tinggi dengan desain terbaru dan harga yang terjangkau. Jelajahi toko kami sekarang dan temukan penampilan yang sesuai dengan gaya Anda!")])]),e("div",{staticClass:"content-right"},[e("div",[e("img",{attrs:{src:a(5142),alt:""}})]),e("div",[e("img",{attrs:{src:a(3672),alt:""}})])])])])}],y={name:"AboutFashion",props:{}},C=y,x=(0,u.A)(C,w,b,!1,null,"c7ff1f5e",null),k=x.exports,A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container-product",attrs:{id:"product"}},[e("TransitionGroup",{staticClass:"card-product",attrs:{mode:"out-in"}},t._l(t.products,(function(a){return e("div",{key:a.id},[e("div",{class:{"men-section":"men's clothing"===a.category,"women-section":"women's clothing"===a.category}},["men's clothing"===a.category||"women's clothing"===a.category?e("div",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex===a.id,expression:"currentIndex === product.id"}],staticClass:"card-product-layer2"},[e("div",{staticClass:"product"},[e("div",{staticClass:"img-product"},[e("img",{attrs:{src:a.image,alt:""}})]),e("div",{staticClass:"content-product"},[e("h3",[t._v(t._s(a.title))]),e("div",{staticClass:"detail"},[e("p",[t._v(t._s(a.category))]),e("div",{staticClass:"rating"},[e("p",[t._v(t._s(a.rating.rate))])])]),e("hr"),e("p",{staticClass:"description"},[t._v(t._s(a.description))]),e("hr"),e("p",{staticClass:"price"},[t._v("$"+t._s(a.price))]),e("div",{staticClass:"btn"},[e("button",[t._v("Buy now")]),e("button",{on:{click:t.nextProduct}},[t._v("Next product")])])])])]):t._e(),"jewelery"===a.category||"electronics"===a.category?e("div",{class:{"unavailable-section-jewelery":"jewelery"===a.category,"unavailable-section-electronics":"electronics"===a.category}},[t.currentIndex===a.id?e("div",[e("div",{staticClass:"container-card"},[e("div",{staticClass:"card-unavailable"},[e("div",{staticClass:"content-unavailable"},[e("p",[t._v("This product is unavailable to show")]),e("div",{staticClass:"btn"},[e("button",{on:{click:t.nextProduct}},[t._v("Next product")])])])])])]):t._e()]):t._e()])])})),0)],1)},j=[],P=(a(4114),a(8355)),M={name:"DisplayProduct",comments:{TransitionGroup:n.TransitionGroup},data(){return{products:[],currentIndex:1}},created(){P.A.get("https://fakestoreapi.com/products").then((t=>{t.data.forEach((t=>{"men's clothing"===t.category||"women's clothing"===t.category?this.products.push(t):"electronics"!==t.category&&"jewelery"!==t.category||this.products.push(t)}))})).catch((t=>{console.error("Error fetching data",t)}))},methods:{nextProduct(){this.currentIndex++,this.currentIndex>=this.products.length&&(this.currentIndex=1)}}},O=M,S=(0,u.A)(O,A,j,!1,null,null,null),T=S.exports,F=function(){var t=this;t._self._c;return t._m(0)},H=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact",attrs:{id:"contact"}},[e("form",{attrs:{action:""}},[e("input",{attrs:{type:"text",name:"",id:"",placeholder:"Username"}}),e("input",{attrs:{type:"password",name:"",id:"",placeholder:"Password"}}),e("textarea",{attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Message"}}),e("div",{staticClass:"btn"},[e("button",{attrs:{type:"submit"}},[t._v("Submit")])])]),e("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127365.52505754633!2d122.45464150803211!3d-3.9848743333095142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d98ecde0b6b7183%3A0x1397347f9e562fc7!2sKendari%2C%20Kota%20Kendari%2C%20Sulawesi%20Tenggara!5e0!3m2!1sid!2sid!4v1709546256997!5m2!1sid!2sid",width:"100%",height:"350",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})])}],I={name:"ContactUs"},N=I,V=(0,u.A)(N,F,H,!1,null,null,null),z=V.exports,D=function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"dots man"}),e("div",[e("img",{attrs:{src:a(3153),alt:""}}),e("h3",[t._v("Fashion Store")]),e("div",{staticClass:"socialMedia"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"}})]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2"}})]),e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"}},[e("path",{attrs:{fill:"currentColor",d:"M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"}})])]),e("p",[t._v("Ade Sulastri")])]),e("div",{staticClass:"dots woman"})])},W=[],B={name:"FooterWeb"},E=B,U=(0,u.A)(E,D,W,!1,null,null,null),G=U.exports,K={name:"App",components:{HomePage:p,NavbarMenu:_,AboutFashion:k,DisplayProduct:T,ContactUs:z,FooterWeb:G}},L=K,$=(0,u.A)(L,r,s,!1,null,null,null),q=$.exports;n.Ay.config.productionTip=!1,new n.Ay({render:t=>t(q)}).$mount("#app")},3672:function(t,e,a){t.exports=a.p+"./img/img-man.8f40371e.jpg"},5142:function(t,e,a){t.exports=a.p+"img/img-woman.4cab2804.jpg"},3153:function(t,e,a){t.exports=a.p+"img/logo.f9e877f2.png"},2589:function(t,e,a){t.exports=a.p+"../img/model-bg.06aa4222.png"}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,s){if(!n){var i=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],s=t[u][2];for(var o=!0,c=0;c<n.length;c++)(!1&s||i>=s)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(o=!1,s<i&&(i=s));if(o){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,r,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,s,i=n[0],o=n[1],c=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(c)var u=c(a)}for(e&&e(n);l<i.length;l++)s=i[l],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(u)},n=self["webpackChunkecommerce"]=self["webpackChunkecommerce"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5029)}));n=a.O(n)})();
//# sourceMappingURL=app.2af0fb83.js.map