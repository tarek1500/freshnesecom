"use strict";(self.webpackChunkfreshnesecom=self.webpackChunkfreshnesecom||[]).push([[143],{9143:(E,s,a)=>{a.r(s),a.d(s,{CompareModule:()=>$});var i=a(6895),p=a(4463),g=a(1366),r=a(9307),t=a(4650),d=a(3469),l=a(9810),u=a(5819),_=a(4662),m=a(3625);const C=function(n){return["/products",n]};function O(n,o){if(1&n&&(t.TgZ(0,"th")(1,"a",15),t._uU(2),t.qZA()()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,C,e.slug)),t.xp6(1),t.Oqu(e.name)}}function P(n,o){if(1&n&&t._UZ(0,"img",17),2&n){const e=t.oxw().$implicit;t.s9C("src",e.images[0],t.LSH)}}function f(n,o){if(1&n&&(t.TgZ(0,"td"),t.YNc(1,P,1,1,"img",16),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",e.images.length>0)}}function M(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.description)}}function h(n,o){if(1&n&&(t.TgZ(0,"span",21)(1,"span",22),t._uU(2,"\u2605"),t.qZA(),t._uU(3,"\u2605 "),t.qZA()),2&n){const e=o.fill;t.ekj("full",100===e),t.xp6(1),t.Udp("width",e,"%")}}function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"td")(1,"div",18),t.YNc(2,h,4,4,"ng-template",null,19,t.W1O),t.TgZ(4,"ngb-rating",20),t.NdJ("rateChange",function(Y){const z=t.CHM(e).$implicit;return t.KtG(z.rating=Y)}),t.qZA()()()}if(2&n){const e=o.$implicit,c=t.MAs(3);t.xp6(4),t.Q6J("rate",e.rating)("starTemplate",c)("readonly",!0)("max",5)}}function Z(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.AsE("",e.price," ",e.currency,"")}}function x(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.AsE("",e.oldPrice," ",e.currency,"")}}function b(n,o){if(1&n&&(t.TgZ(0,"td"),t.YNc(1,x,2,2,"span",23),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Q6J("ngIf",0!=e.oldPrice)}}function k(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.sku)}}function v(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" (",e.freshnessDescription,")")}}function q(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.YNc(2,v,2,1,"span",23),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.freshness),t.xp6(1),t.Q6J("ngIf",e.freshnessDescription)}}function A(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.farm)}}function T(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.category.name)}}function U(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.delivery)}}function w(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e.shipping)}}function F(n,o){if(1&n&&(t.TgZ(0,"td"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.AsE("",e.deliveryDays," ",t.lcZ(2,2,"translate.pages.compare.days"),"")}}function Q(n,o){1&n&&(t.TgZ(0,"td")(1,"div",24),t.O4$(),t.TgZ(2,"svg",25),t._UZ(3,"use",26),t.qZA(),t._uU(4),t.ALo(5,"translate"),t.qZA()()),2&n&&(t.xp6(4),t.hij(" ",t.lcZ(5,1,"translate.pages.compare.remove")," "))}const N=function(n){return{rtl:n}},S=[{path:"",component:(()=>{class n{constructor(e){this.languageService=e,this.subscriptions=[],this.rtl=!1,this.breadcrumb=[{translate:"translate.components.breadcrumb.home",text:"Home",link:"/"},{translate:"translate.components.breadcrumb.compare",text:"Compare",link:""}]}ngOnInit(){let e=this.languageService.languageSubject$.subscribe(c=>{this.rtl=c.rtl,this.loadProducts()});this.subscriptions.push(e)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}loadProducts(){this.products=this.rtl?[{id:1,name:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u062a\u062c",slug:"product-title",description:"\u0645\u0633\u0627\u062d\u0629 \u0644\u0648\u0635\u0641 \u0635\u063a\u064a\u0631 \u0644\u0644\u0645\u0646\u062a\u062c",rating:4.33,price:36.99,oldPrice:48.56,currency:"\u062c\u0646\u064a\u0647",sku:"",freshness:"\u062c\u062f\u064a\u062f",freshnessDescription:"\u0637\u0627\u0632\u062c \u062c\u062f\u0627",farm:"\u062d\u0642\u0648\u0644 \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0642\u0627\u0644\u0629",availablePacks:[{id:1,stock:10,pack:"\u0642\u0650\u0637\u064e\u0639"},{id:2,stock:20,pack:"\u0643\u064a\u0644\u0648\u062c\u0631\u0627\u0645"},{id:3,stock:1,pack:"\u0635\u0646\u062f\u0648\u0642"},{id:4,stock:2,pack:"\u062d\u0632\u0645\u0629"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"\u0623\u0648\u0631\u0648\u0628\u0627",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"\u0627\u0644\u0634\u062d\u0646 \u0645\u062c\u0627\u0646\u0627",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/112/600/300"]},{id:2,name:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u062a\u062c",slug:"product-title",description:"\u0645\u0633\u0627\u062d\u0629 \u0644\u0648\u0635\u0641 \u0635\u063a\u064a\u0631 \u0644\u0644\u0645\u0646\u062a\u062c",rating:4.33,price:36.99,oldPrice:48.56,currency:"\u062c\u0646\u064a\u0647",sku:"",freshness:"\u062c\u062f\u064a\u062f",freshnessDescription:"\u0637\u0627\u0632\u062c \u062c\u062f\u0627",farm:"\u062d\u0642\u0648\u0644 \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0642\u0627\u0644\u0629",availablePacks:[{id:1,stock:10,pack:"\u0642\u0650\u0637\u064e\u0639"},{id:2,stock:20,pack:"\u0643\u064a\u0644\u0648\u062c\u0631\u0627\u0645"},{id:3,stock:1,pack:"\u0635\u0646\u062f\u0648\u0642"},{id:4,stock:2,pack:"\u062d\u0632\u0645\u0629"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"\u0623\u0648\u0631\u0648\u0628\u0627",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"\u0627\u0644\u0634\u062d\u0646 \u0645\u062c\u0627\u0646\u0627",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/1080/600/300"]},{id:3,name:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u062a\u062c",slug:"product-title",description:"\u0645\u0633\u0627\u062d\u0629 \u0644\u0648\u0635\u0641 \u0635\u063a\u064a\u0631 \u0644\u0644\u0645\u0646\u062a\u062c",rating:4.33,price:36.99,oldPrice:0,currency:"\u062c\u0646\u064a\u0647",sku:"",freshness:"\u062c\u062f\u064a\u062f",freshnessDescription:"\u0637\u0627\u0632\u062c \u062c\u062f\u0627",farm:"\u062d\u0642\u0648\u0644 \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0642\u0627\u0644\u0629",availablePacks:[{id:1,stock:10,pack:"\u0642\u0650\u0637\u064e\u0639"},{id:2,stock:20,pack:"\u0643\u064a\u0644\u0648\u062c\u0631\u0627\u0645"},{id:3,stock:1,pack:"\u0635\u0646\u062f\u0648\u0642"},{id:4,stock:2,pack:"\u062d\u0632\u0645\u0629"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"\u0623\u0648\u0631\u0648\u0628\u0627",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"\u0627\u0644\u0634\u062d\u0646 \u0645\u062c\u0627\u0646\u0627",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/102/900/300"]},{id:4,name:"\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0645\u0646\u062a\u062c",slug:"product-title",description:"\u0645\u0633\u0627\u062d\u0629 \u0644\u0648\u0635\u0641 \u0635\u063a\u064a\u0631 \u0644\u0644\u0645\u0646\u062a\u062c",rating:4.33,price:36.99,oldPrice:48.56,currency:"\u062c\u0646\u064a\u0647",sku:"",freshness:"\u062c\u062f\u064a\u062f",freshnessDescription:"\u0637\u0627\u0632\u062c \u062c\u062f\u0627",farm:"\u062d\u0642\u0648\u0644 \u0645\u0632\u0631\u0639\u0629 \u0627\u0644\u0628\u0642\u0627\u0644\u0629",availablePacks:[{id:1,stock:10,pack:"\u0642\u0650\u0637\u064e\u0639"},{id:2,stock:20,pack:"\u0643\u064a\u0644\u0648\u062c\u0631\u0627\u0645"},{id:3,stock:1,pack:"\u0635\u0646\u062f\u0648\u0642"},{id:4,stock:2,pack:"\u062d\u0632\u0645\u0629"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"\u0623\u0648\u0631\u0648\u0628\u0627",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"\u0627\u0644\u0634\u062d\u0646 \u0645\u062c\u0627\u0646\u0627",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/107/600/300"]}]:[{id:1,name:"Product title",slug:"product-title",description:"Space for a small product description",rating:4.33,price:36.99,oldPrice:48.56,currency:"USD",sku:"",freshness:"New",freshnessDescription:"Extra fresh",farm:"Grocery Farm Fields",availablePacks:[{id:1,stock:10,pack:"pcs"},{id:2,stock:20,pack:"kgs"},{id:3,stock:1,pack:"box"},{id:4,stock:2,pack:"pack"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"Europe",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"Free Shipping",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/112/600/300"]},{id:2,name:"Product title",slug:"product-title",description:"Space for a small product description",rating:4.33,price:36.99,oldPrice:48.56,currency:"USD",sku:"",freshness:"New",freshnessDescription:"Extra fresh",farm:"Grocery Farm Fields",availablePacks:[{id:1,stock:10,pack:"pcs"},{id:2,stock:20,pack:"kgs"},{id:3,stock:1,pack:"box"},{id:4,stock:2,pack:"pack"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"Europe",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"Free Shipping",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/1080/600/300"]},{id:3,name:"Product title",slug:"product-title",description:"Space for a small product description",rating:4.33,price:36.99,oldPrice:0,currency:"USD",sku:"",freshness:"New",freshnessDescription:"Extra fresh",farm:"Grocery Farm Fields",availablePacks:[{id:1,stock:10,pack:"pcs"},{id:2,stock:20,pack:"kgs"},{id:3,stock:1,pack:"box"},{id:4,stock:2,pack:"pack"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"Europe",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"Free Shipping",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/102/900/300"]},{id:4,name:"Product title",slug:"product-title",description:"Space for a small product description",rating:4.33,price:36.99,oldPrice:48.56,currency:"USD",sku:"",freshness:"New",freshnessDescription:"Extra fresh",farm:"Grocery Farm Fields",availablePacks:[{id:1,stock:10,pack:"pcs"},{id:2,stock:20,pack:"kgs"},{id:3,stock:1,pack:"box"},{id:4,stock:2,pack:"pack"}],category:{id:0,name:"",slug:"",subcategories:[]},delivery:"Europe",selectedQuantity:{id:0,quantity:0,pack:""},shipping:"Free Shipping",deliveryDays:1,info:"",reviews:[],questions:[],images:["https://picsum.photos/id/107/600/300"]}]}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(d.T))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-compare"]],decls:96,vars:68,consts:[[1,"container",3,"ngClass"],[3,"breadcrumb"],[1,"header"],[1,"heading"],[1,"view"],[1,"item","products"],[1,"count"],[1,"text"],[1,"content"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"title"],[1,"footer"],[1,"products"],[3,"routerLink"],["class","product-image","alt","",3,"src",4,"ngIf"],["alt","",1,"product-image",3,"src"],[1,"stars"],["starTemplate",""],[3,"rate","starTemplate","readonly","max","rateChange"],[1,"star"],[1,"half"],[4,"ngIf"],[1,"remove"],["width","8","height","8",1,"close-icon"],[0,"xlink","href","../../../assets/icons/close.svg#close"]],template:function(e,c){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"app-header")(2,"app-menu")(3,"app-breadcrumb",1),t.TgZ(4,"div",2)(5,"h2",3),t._uU(6),t.ALo(7,"translate"),t.qZA(),t.TgZ(8,"div",4)(9,"div",5)(10,"span",6),t._uU(11),t.qZA(),t.TgZ(12,"span",7),t._uU(13),t.ALo(14,"translate"),t.qZA()()()(),t.TgZ(15,"div",8)(16,"div",9)(17,"table",10)(18,"thead")(19,"tr")(20,"th"),t._uU(21),t.ALo(22,"translate"),t.qZA(),t.YNc(23,O,3,4,"th",11),t.qZA()(),t.TgZ(24,"tbody")(25,"tr")(26,"td",12),t._uU(27),t.ALo(28,"translate"),t.qZA(),t.YNc(29,f,2,1,"td",11),t.qZA(),t.TgZ(30,"tr")(31,"td",12),t._uU(32),t.ALo(33,"translate"),t.qZA(),t.YNc(34,M,2,1,"td",11),t.qZA(),t.TgZ(35,"tr")(36,"td",12),t._uU(37),t.ALo(38,"translate"),t.qZA(),t.YNc(39,y,5,4,"td",11),t.qZA(),t.TgZ(40,"tr")(41,"td",12),t._uU(42),t.ALo(43,"translate"),t.qZA(),t.YNc(44,Z,2,2,"td",11),t.qZA(),t.TgZ(45,"tr")(46,"td",12),t._uU(47),t.ALo(48,"translate"),t.qZA(),t.YNc(49,b,2,1,"td",11),t.qZA(),t.TgZ(50,"tr")(51,"td",12),t._uU(52),t.ALo(53,"translate"),t.qZA(),t.YNc(54,k,2,1,"td",11),t.qZA(),t.TgZ(55,"tr")(56,"td",12),t._uU(57),t.ALo(58,"translate"),t.qZA(),t.YNc(59,q,3,2,"td",11),t.qZA(),t.TgZ(60,"tr")(61,"td",12),t._uU(62),t.ALo(63,"translate"),t.qZA(),t.YNc(64,A,2,1,"td",11),t.qZA(),t.TgZ(65,"tr")(66,"td",12),t._uU(67),t.ALo(68,"translate"),t.qZA(),t.YNc(69,T,2,1,"td",11),t.qZA(),t.TgZ(70,"tr")(71,"td",12),t._uU(72),t.ALo(73,"translate"),t.qZA(),t.YNc(74,U,2,1,"td",11),t.qZA(),t.TgZ(75,"tr")(76,"td",12),t._uU(77),t.ALo(78,"translate"),t.qZA(),t.YNc(79,w,2,1,"td",11),t.qZA(),t.TgZ(80,"tr")(81,"td",12),t._uU(82),t.ALo(83,"translate"),t.qZA(),t.YNc(84,F,3,4,"td",11),t.qZA(),t.TgZ(85,"tr"),t._UZ(86,"td",12),t.YNc(87,Q,6,3,"td",11),t.qZA()()()()(),t.TgZ(88,"div",13)(89,"div",14)(90,"span",6),t._uU(91),t.qZA(),t.TgZ(92,"span",7),t._uU(93),t.ALo(94,"translate"),t.qZA()()(),t._UZ(95,"app-footer"),t.qZA()),2&e&&(t.Q6J("ngClass",t.VKq(66,N,c.rtl)),t.xp6(3),t.Q6J("breadcrumb",c.breadcrumb),t.xp6(3),t.Oqu(t.lcZ(7,34,"translate.pages.compare.compare")),t.xp6(5),t.Oqu(c.products.length),t.xp6(2),t.Oqu(t.lcZ(14,36,"translate.pages.compare.products")),t.xp6(8),t.Oqu(t.lcZ(22,38,"translate.pages.compare.name")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(4),t.Oqu(t.lcZ(28,40,"translate.pages.compare.image")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(33,42,"translate.pages.compare.description")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(38,44,"translate.pages.compare.rating")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(43,46,"translate.pages.compare.price")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(48,48,"translate.pages.compare.oldPrice")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(53,50,"translate.pages.compare.sku")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(58,52,"translate.pages.compare.freshness")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(63,54,"translate.pages.compare.farm")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(68,56,"translate.pages.compare.category")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(73,58,"translate.pages.compare.delivery")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(78,60,"translate.pages.compare.shipping")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Oqu(t.lcZ(83,62,"translate.pages.compare.deliveryDays")),t.xp6(2),t.Q6J("ngForOf",c.products),t.xp6(3),t.Q6J("ngForOf",c.products),t.xp6(4),t.Oqu(c.products.length),t.xp6(2),t.Oqu(t.lcZ(94,64,"translate.pages.compare.products")))},dependencies:[i.mk,i.sg,i.O5,r.yS,g.OC,l.G,u.M,_.c,m.L,p.X$],styles:[".container[_ngcontent-%COMP%]{padding:0;background-color:#fff;box-shadow:0 2px 4px #00000026}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:8px 45px;display:flex;justify-content:space-between}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin:auto 0;color:#151515;font-family:Poppins;font-weight:600;font-size:32px}@media (max-width: 767.98px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:24px}}@media (max-width: 575.98px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:20px}}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{margin:auto 0}@media (max-width: 991.98px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{text-align:right}}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:8px 0 8px 24px;display:inline-block;color:#a9a9a9;font-family:OpenSans;font-weight:400;font-size:12px}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{margin-right:4px;padding:0 8px;border-radius:12px;background-color:#f4f8ec;color:#6a983c;font-family:Poppins;font-weight:600;font-size:12px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px 45px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]{margin:0}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{color:#151515;font-family:Poppins;font-weight:600;font-size:12px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:7px 0;border-color:#ebebeb;vertical-align:middle}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#151515}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border-top:none}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{color:#575757;font-family:OpenSans;font-weight:400;font-size:14px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd){background-color:#f9f9f9}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px 0;border:none;vertical-align:middle}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]{color:#151515;font-family:Poppins;font-weight:600;font-size:12px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .product-image[_ngcontent-%COMP%]{width:100%;height:auto}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]{position:relative;display:inline-block;font-size:20px;color:#d1d1d1}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star.full[_ngcontent-%COMP%]{color:#fdbc15}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .stars[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]   .half[_ngcontent-%COMP%]{position:absolute;display:inline-block;overflow:hidden;color:#fdbc15}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]{vertical-align:initial;color:#a9a9a9;font-family:OpenSans;font-weight:400;font-size:12px;cursor:pointer}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{margin-right:8px;--color: #151515}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]{padding:16px 45px}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{text-align:right}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{margin-right:4px;padding:0 8px;border-radius:12px;background-color:#f4f8ec;color:#6a983c;font-family:Poppins;font-weight:600;font-size:12px}.container[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{color:#a9a9a9;font-family:OpenSans;font-weight:400;font-size:12px}.container.rtl[_ngcontent-%COMP%]{direction:rtl}.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:NotoSansArabic}@media (max-width: 991.98px){.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{text-align:left}}.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:0 24px 0 0;font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{margin:0 0 0 4px;font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.title[_ngcontent-%COMP%]{font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]{font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .remove[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{margin:0 0 0 8px}.container.rtl[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]{text-align:left}.container.rtl[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{margin:0 0 0 4px;font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%]   .products[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-family:Cairo}"]}),n})()}];let D=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.Bz.forChild(S),r.Bz]}),n})();var J=a(2271),L=a(7336);let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.ez,p.aw,D,g.IJ,J.m,L.w]}),n})()}}]);