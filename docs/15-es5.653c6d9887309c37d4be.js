!function(){function e(e,n){for(var a=0;a<n.length;a++){var c=n[a];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"7rQJ":function(a,c,i){"use strict";i.r(c),i.d(c,"SkiplastSkipMergeModule",function(){return T});var t=i("iInd"),o=function e(){n(this,e),this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2},p=i("8Y7J"),b=i("VIrA"),r=i("TSSN"),s=i("SVse"),l=i("dJsq"),d=i("uzYf");function u(e,n){if(1&e&&(p.Ob(0,"div"),p.Ob(1,"p"),p.qc(2,"Gib dem Chaos keine Chance!"),p.Nb(),p.Ob(3,"p"),p.qc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),p.Ob(5,"code",6),p.qc(6,"skipLast"),p.Nb(),p.qc(7,"- und "),p.Ob(8,"code",6),p.qc(9,"skip"),p.Nb(),p.qc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),p.Ob(11,"code",6),p.qc(12,"merge"),p.Nb(),p.qc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),p.Nb(),p.Nb()),2&e){p.ac();var a=p.hc(15),c=p.hc(9),i=p.hc(21);p.Bb(5),p.fc("appTooltip",a),p.Bb(3),p.fc("appTooltip",c),p.Bb(3),p.fc("appTooltip",i)}}function f(e,n){if(1&e&&(p.Ob(0,"div"),p.Ob(1,"p"),p.qc(2,"Don't give chaos a chance!"),p.Nb(),p.Ob(3,"p"),p.qc(4,"You received two deliveries. Take only usable fruit with the "),p.Ob(5,"code",6),p.qc(6,"skipLast"),p.Nb(),p.qc(7," and "),p.Ob(8,"code",6),p.qc(9,"skip"),p.Nb(),p.qc(10," operator. Then replace the empty observable with the "),p.Ob(11,"code",6),p.qc(12,"merge"),p.Nb(),p.qc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),p.Nb(),p.Nb()),2&e){p.ac();var a=p.hc(15),c=p.hc(9),i=p.hc(21);p.Bb(5),p.fc("appTooltip",a),p.Bb(3),p.fc("appTooltip",c),p.Bb(3),p.fc("appTooltip",i)}}function h(e,n){if(1&e&&(p.Ob(0,"div"),p.Ob(1,"p"),p.qc(2,"\u4e0d\u8981\u628a\u6c34\u679c\u641e\u6df7\u4e71\u4e86\uff01"),p.Nb(),p.Ob(3,"p"),p.qc(4,"\u4f60\u6709\u4e24\u4e2a\u4f9b\u8d27\u5546\u3002\u4f7f\u7528 "),p.Ob(5,"code",6),p.qc(6,"skipLast"),p.Nb(),p.qc(7," \u548c "),p.Ob(8,"code",6),p.qc(9,"skip"),p.Nb(),p.qc(10," \u64cd\u4f5c\u7b26\uff0c\u53ea\u53d6\u53ef\u7528\u7684\u6c34\u679c\u3002\u7136\u540e\u7528 "),p.Ob(11,"code",6),p.qc(12,"merge"),p.Nb(),p.qc(13," \u64cd\u4f5c\u7b26\u66ff\u6362 empty observable\u3002\u6700\u540e\uff0c\u628a\u4e0d\u5e72\u51c0\u7684\u6c34\u679c\u6e05\u7406\u5e72\u51c0\uff0c\u518d\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002"),p.Nb(),p.Nb()),2&e){p.ac();var a=p.hc(15),c=p.hc(9),i=p.hc(21);p.Bb(5),p.fc("appTooltip",a),p.Bb(3),p.fc("appTooltip",c),p.Bb(3),p.fc("appTooltip",i)}}function g(e,n){if(1&e&&(p.Ob(0,"div"),p.Ob(1,"p"),p.qc(2,"\u041d\u0435 \u0434\u0430\u0439 \u0445\u0430\u043e\u0441\u0443 \u0448\u0430\u043d\u0441!"),p.Nb(),p.Ob(3,"p"),p.qc(4,"\u0412\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u043b\u0438 \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438. \u0412\u043e\u0437\u044c\u043c\u0438\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0441 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u043c "),p.Ob(5,"code",6),p.qc(6,"skipLast"),p.Nb(),p.qc(7," \u0438 "),p.Ob(8,"code",6),p.qc(9,"skip"),p.Nb(),p.qc(10,". \u0417\u0430\u0442\u0435\u043c \u0437\u0430\u043c\u0435\u043d\u0438\u0442\u0435 \u043f\u0443\u0441\u0442\u0443\u044e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e "),p.Ob(11,"code",6),p.qc(12,"merge"),p.Nb(),p.qc(13,". \u041f\u043e\u0434 \u043a\u043e\u043d\u0435\u0446 \u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u0440\u044f\u0437\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b \u0438 \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435 \u0438\u0445 \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440."),p.Nb(),p.Nb()),2&e){p.ac();var a=p.hc(15),c=p.hc(9),i=p.hc(21);p.Bb(5),p.fc("appTooltip",a),p.Bb(3),p.fc("appTooltip",c),p.Bb(3),p.fc("appTooltip",i)}}function q(e,n){if(1&e&&(p.Ob(0,"div"),p.Ob(1,"p"),p.qc(2,"No le des oportunidad al caos!"),p.Nb(),p.Ob(3,"p"),p.qc(4,"Recibiste dos entregas. Toma solo fruta utilizable con los operadores "),p.Ob(5,"code",6),p.qc(6,"skipLast"),p.Nb(),p.qc(7," y "),p.Ob(8,"code",6),p.qc(9,"skip"),p.Nb(),p.qc(10,". Luego reemplaza el observable EMPTY con la funci\xf3n "),p.Ob(11,"code",6),p.qc(12,"merge"),p.Nb(),p.qc(13,". Hacia el final, limpia las frutas sucias y col\xf3calas en la cinta transportadora."),p.Nb(),p.Nb()),2&e){p.ac();var a=p.hc(15),c=p.hc(9),i=p.hc(21);p.Bb(5),p.fc("appTooltip",a),p.Bb(3),p.fc("appTooltip",c),p.Bb(3),p.fc("appTooltip",i)}}var v,N,O,m=[{path:"",component:(v=function(){function a(e,c){n(this,a),this.exerciseService=e,this.translateService=c,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}var c,i,t;return c=a,(i=[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new o),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}])&&e(c.prototype,i),t&&e(c,t),a}(),v.\u0275fac=function(e){return new(e||v)(p.Lb(b.a),p.Lb(r.d))},v.\u0275cmp=p.Fb({type:v,selectors:[["app-skiplast-skip-merge"]],decls:26,vars:12,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(p.Ob(0,"h3"),p.qc(1),p.bc(2,"translate"),p.Nb(),p.pc(3,u,14,3,"div",0),p.pc(4,f,14,3,"div",0),p.pc(5,h,14,3,"div",0),p.pc(6,g,14,3,"div",0),p.pc(7,q,14,3,"div",0),p.Ob(8,"div",1,2),p.Ob(10,"pre"),p.qc(11,"        "),p.Mb(12,"code",3),p.qc(13,"\n    "),p.Nb(),p.Nb(),p.Ob(14,"div",1,4),p.Ob(16,"pre"),p.qc(17,"        "),p.Mb(18,"code",3),p.qc(19,"\n    "),p.Nb(),p.Nb(),p.Ob(20,"div",1,5),p.Ob(22,"pre"),p.qc(23,"        "),p.Mb(24,"code",3),p.qc(25,"\n    "),p.Nb(),p.Nb()),2&e&&(p.Bb(1),p.tc("",p.cc(2,10,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),p.Bb(2),p.fc("ngIf","de"===n.currentLanguage),p.Bb(1),p.fc("ngIf","en"===n.currentLanguage),p.Bb(1),p.fc("ngIf","zh_CN"===n.currentLanguage),p.Bb(1),p.fc("ngIf","ru"===n.currentLanguage),p.Bb(1),p.fc("ngIf","es"===n.currentLanguage),p.Bb(5),p.fc("highlight",n.skipCode),p.Bb(6),p.fc("highlight",n.skipLastCode),p.Bb(6),p.fc("highlight",n.mergeCode))},directives:[s.j,l.b,d.a],pipes:[r.c],styles:[""]}),v)}],k=((N=function e(){n(this,e)}).\u0275mod=p.Jb({type:N}),N.\u0275inj=p.Ib({factory:function(e){return new(e||N)},imports:[[t.d.forChild(m)],t.d]}),N),L=i("PCNd"),T=((O=function e(){n(this,e)}).\u0275mod=p.Jb({type:O}),O.\u0275inj=p.Ib({factory:function(e){return new(e||O)},imports:[[L.a,k]]}),O)}}])}();