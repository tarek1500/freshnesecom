"use strict";(self.webpackChunkfreshnesecom=self.webpackChunkfreshnesecom||[]).push([[69],{1069:(h,a,e)=>{e.r(a),e.d(a,{LoginModule:()=>_});var i=e(6895),l=e(4463),g=e(9307),n=e(4650),p=e(3469),s=e(9810),C=e(5819),O=e(4662),M=e(3625);const P=function(t){return{rtl:t}},m=[{path:"",component:(()=>{class t{constructor(o){this.languageService=o,this.subscriptions=[],this.rtl=!1,this.breadcrumb=[{translate:"translate.components.breadcrumb.home",text:"Home",link:"/"},{translate:"translate.components.breadcrumb.login",text:"Login",link:""}]}ngOnInit(){let o=this.languageService.languageSubject$.subscribe(r=>{this.rtl=r.rtl});this.subscriptions.push(o)}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(p.T))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:41,vars:31,consts:[[1,"container",3,"ngClass"],[3,"breadcrumb"],[1,"header"],[1,"heading"],[1,"subheading"],["routerLink","/register"],[1,"content"],[1,"row"],[1,"col-12","form-group"],["for","email"],["id","email","type","email",1,"form-control",3,"placeholder"],["for","password"],["id","password","type","password",1,"form-control",3,"placeholder"],[1,"form-check"],["type","checkbox","id","remember",1,"form-check-input"],["for","remember",1,"form-check-label"],[1,"btn","login-button"]],template:function(o,r){1&o&&(n.TgZ(0,"div",0),n._UZ(1,"app-header")(2,"app-menu")(3,"app-breadcrumb",1),n.TgZ(4,"div",2)(5,"h2",3),n._uU(6),n.ALo(7,"translate"),n.qZA(),n.TgZ(8,"div",4),n._uU(9),n.ALo(10,"translate"),n.TgZ(11,"a",5),n._uU(12),n.ALo(13,"translate"),n.qZA(),n._uU(14,"."),n.qZA()(),n.TgZ(15,"div",6)(16,"form")(17,"div",7)(18,"div",8)(19,"label",9),n._uU(20),n.ALo(21,"translate"),n.qZA(),n._UZ(22,"input",10),n.ALo(23,"translate"),n.qZA(),n.TgZ(24,"div",8)(25,"label",11),n._uU(26),n.ALo(27,"translate"),n.qZA(),n._UZ(28,"input",12),n.ALo(29,"translate"),n.qZA(),n.TgZ(30,"div",8)(31,"div",13),n._UZ(32,"input",14),n.TgZ(33,"label",15),n._uU(34),n.ALo(35,"translate"),n.qZA()()(),n.TgZ(36,"div",8)(37,"button",16),n._uU(38),n.ALo(39,"translate"),n.qZA()()()()(),n._UZ(40,"app-footer"),n.qZA()),2&o&&(n.Q6J("ngClass",n.VKq(29,P,r.rtl)),n.xp6(3),n.Q6J("breadcrumb",r.breadcrumb),n.xp6(3),n.Oqu(n.lcZ(7,11,"translate.pages.login.login")),n.xp6(3),n.hij("",n.lcZ(10,13,"translate.pages.login.noAccount")," "),n.xp6(3),n.Oqu(n.lcZ(13,15,"translate.pages.login.register")),n.xp6(8),n.Oqu(n.lcZ(21,17,"translate.pages.login.email")),n.xp6(2),n.s9C("placeholder",n.lcZ(23,19,"translate.pages.login.email")),n.xp6(4),n.Oqu(n.lcZ(27,21,"translate.pages.login.password")),n.xp6(2),n.s9C("placeholder",n.lcZ(29,23,"translate.pages.login.password")),n.xp6(6),n.Oqu(n.lcZ(35,25,"translate.pages.login.remember")),n.xp6(4),n.Oqu(n.lcZ(39,27,"translate.pages.login.logging")))},dependencies:[i.mk,g.yS,s.G,C.M,O.c,M.L,l.X$],styles:[".container[_ngcontent-%COMP%]{padding:0;background-color:#fff;box-shadow:0 2px 4px #00000026}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding:8px 45px}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{margin-bottom:12px;color:#151515;font-family:Poppins;font-weight:600;font-size:32px}@media (max-width: 767.98px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:24px}}@media (max-width: 575.98px){.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-size:20px}}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{color:#151515;font-family:OpenSans;font-weight:400;font-size:17px}.container[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#151515}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px 45px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:50%;margin:auto}@media (max-width: 991.98px){.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:75%}}@media (max-width: 575.98px){.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{margin-bottom:32px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin:0}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#151515;font-family:Poppins;font-weight:600;font-size:12px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:OpenSans;font-weight:400;font-size:14px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{padding:11px 20px;border-radius:12px;border:1px solid #D1D1D1;background-color:#f9f9f9;color:#a9a9a9}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{width:22px;height:22px;margin:1px 8px 0 0;padding:0;border:1.5px solid #D1D1D1;cursor:pointer}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked{background-color:#6a983c;border-color:#46760a}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 4px #46761e40}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#d1d1d1}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 4px #a9a9bd40}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]{margin:0;padding:9.5px 16px;display:inline-block;border-radius:12px;border:1px solid #D1D1D1;background-color:#f9f9f9}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:inline;font-family:OpenSans;font-weight:400;font-size:14px;cursor:pointer}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{padding:12px 16px;border-radius:12px;border:2px solid #46760A;background-color:#6a983c;color:#fff;font-family:Poppins;font-weight:700;font-size:15px}.container[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 4px #46761e40}.container.rtl[_ngcontent-%COMP%]{direction:rtl}.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%]{font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]{font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:NotoSansArabic}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{margin:1px 0 0 8px;float:right}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-family:Cairo}.container.rtl[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .login-button[_ngcontent-%COMP%]{font-family:NotoSansArabic}"]}),t})()}];let d=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(m),g.Bz]}),t})();var f=e(2271),u=e(7336);let _=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[i.ez,l.aw,d,f.m,u.w]}),t})()}}]);