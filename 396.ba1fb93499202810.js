"use strict";(self.webpackChunkecommerce_alte=self.webpackChunkecommerce_alte||[]).push([[396],{9396:(f,u,a)=>{a.r(u),a.d(u,{CartModule:()=>h});var i=a(6895),s=a(3128),t=a(8256),l=a(9171);function m(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"currency"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.ALo(10,"currency"),t.qZA(),t.TgZ(11,"td")(12,"button",10),t.NdJ("click",function(){const Z=t.CHM(r).$implicit,_=t.oxw(2);return t.KtG(_.removeFromCart(Z))}),t._uU(13,"X"),t.qZA()()()}if(2&e){const r=o.$implicit;t.xp6(2),t.Oqu(r.item.name),t.xp6(2),t.Oqu(t.lcZ(5,4,r.item.price)),t.xp6(3),t.Oqu(r.quantity),t.xp6(2),t.Oqu(t.lcZ(10,6,r.total))}}function p(e,o){if(1&e){const r=t.EpF();t.TgZ(0,"table",2)(1,"thead")(2,"tr")(3,"th",3),t._uU(4,"Product"),t.qZA(),t.TgZ(5,"th",3),t._uU(6,"Price"),t.qZA(),t.TgZ(7,"th",3),t._uU(8,"Quantity"),t.qZA(),t.TgZ(9,"th",3),t._uU(10,"Total"),t.qZA(),t._UZ(11,"th"),t.qZA()(),t.TgZ(12,"tbody"),t.YNc(13,m,14,8,"tr",4),t._UZ(14,"br"),t.TgZ(15,"div",5)(16,"div",6)(17,"h3",7),t._uU(18),t.ALo(19,"currency"),t.qZA()(),t.TgZ(20,"div",8)(21,"button",9),t.NdJ("click",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.checkout())}),t._uU(22,"Checkout"),t.qZA()()()()()}if(2&e){const r=t.oxw();t.xp6(13),t.Q6J("ngForOf",r.cartItems),t.xp6(5),t.hij("Total Price: ",t.lcZ(19,2,r.cartSum),"")}}function d(e,o){1&e&&(t.TgZ(0,"div",11)(1,"h3",7),t._uU(2,"Your cart is empty !"),t.qZA(),t._UZ(3,"img",12),t.qZA())}const g=[{path:"",component:(()=>{class e{constructor(r,c,n){this.cartService=r,this.orderService=c,this.router=n,this.cartItems=[],this.cartSum=0}ngOnInit(){this.getCarts()}getCarts(){this.cartService.getCart().pipe().subscribe(r=>{this.cartItems=r,this.cartSum=this.cartItems.reduce((c,n)=>c+n.total,0),console.log(this.cartItems)})}removeFromCart(r){this.cartService.deleteFromCart(r.id).pipe().subscribe(()=>{this.getCarts()})}checkout(){this.orderService.createOrder().subscribe(()=>{this.router.navigate(["/order"])})}}return e.\u0275fac=function(r){return new(r||e)(t.Y36(l.Ni),t.Y36(l.px),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-cart"]],decls:3,vars:2,consts:[["class","table table-hover",4,"ngIf","ngIfElse"],["nothingHere",""],[1,"table","table-hover"],["scope","col"],[4,"ngFor","ngForOf"],[1,"row","d-grid"],[1,"col-6"],[1,"total"],[1,"col-1"],[1,"btn","btn-dark",3,"click"],[1,"btn","btn-1","btn-danger",3,"click"],[1,"text-center","mt-5"],["alt","empty cart","src","assets/images/emtyCart.png",1,"img-fluid","w-25","mt-5"]],template:function(r,c){if(1&r&&(t.YNc(0,p,23,4,"table",0),t.YNc(1,d,4,0,"ng-template",null,1,t.W1O)),2&r){const n=t.MAs(2);t.Q6J("ngIf",c.cartItems.length)("ngIfElse",n)}},dependencies:[i.sg,i.O5,i.H9],styles:[".total[_ngcontent-%COMP%]{font-size:1.5rem;font-weight:600;margin-top:1rem}.btn-1[_ngcontent-%COMP%]{border-radius:30px}"]}),e})()}];let C=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[s.Bz.forChild(g),s.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,C]}),e})()}}]);