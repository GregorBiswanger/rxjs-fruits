(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{LCGD:function(e,n,t){"use strict";t.r(n),t.d(n,"MergeModule",(function(){return v}));var a=t("iInd");class o{constructor(){this.fruits=["apple","apple","old-apple","apple","old-apple","banana","old-banana","old-banana","banana","banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code='const apples = from([\n    "apple",\n    "apple",\n    "old-apple",\n    "apple",\n    "old-apple"]);\n\nconst bananas = from([\n    "banana",\n    "old-banana",\n    "old-banana",\n    "banana",\n    "banana"]);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=14,this.positionColumnNumber=1}}var r=t("8Y7J"),i=t("VIrA"),c=t("TSSN"),s=t("SVse"),b=t("dJsq"),p=t("uzYf");function u(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"Jetzt m\xfcssen wir zwei Lieferungen Zusammenfassen."),r.Mb(),r.Nb(3,"p"),r.oc(4,"Unser Fr\xfcchte Lieferant musste uns die Fr\xfcchte separat liefern. Die "),r.Nb(5,"code",4),r.oc(6,"merge"),r.Mb(),r.oc(7,"-Funktion kann unterschiedliche Observables zu einem Observable vereinen. Anschlie\xdfend k\xf6nnen wir dann mit der Pipe-Funktion, nur frische Fr\xfcchte auf das Flie\xdfband legen. "),r.Nb(8,"a",5),r.oc(9,"(Mehr Infos zu merge)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();const e=r.gc(8);r.zb(5),r.ec("appTooltip",e)}}function l(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"Now we have to combine two deliveries."),r.Mb(),r.Nb(3,"p"),r.oc(4,"Our fruit supplier had to deliver the fruit to us separately. The "),r.Nb(5,"code",4),r.oc(6,"merge"),r.Mb(),r.oc(7," function can combine different observables into one observable. Then we can use the pipe function to put only fresh fruit on the conveyor belt. "),r.Nb(8,"a",5),r.oc(9,"(Learn more about merge)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();const e=r.gc(8);r.zb(5),r.ec("appTooltip",e)}}function d(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u5408\u5e76\u4e24\u4e2a\u4f9b\u5e94\u5546\u3002"),r.Mb(),r.Nb(3,"p"),r.oc(4,"\u6c34\u679c\u4f9b\u5e94\u5546\u5fc5\u987b\u5355\u72ec\u9001\u8d27\u7ed9\u6211\u4eec\u3002 "),r.Nb(5,"code",4),r.oc(6,"merge"),r.Mb(),r.oc(7," \u64cd\u4f5c\u7b26\u53ef\u4ee5\u5c06\u4e0d\u540c\u7684 observable \u5408\u5e76\u4e3a\u4e00\u4e2a observable \u3002\u7136\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 pipe \u51fd\u6570\u53ea\u628a\u65b0\u9c9c\u7684\u6c34\u679c\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002 "),r.Nb(8,"a",5),r.oc(9,"\uff08\u4e86\u89e3\u5173\u4e8e merge \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();const e=r.gc(8);r.zb(5),r.ec("appTooltip",e)}}function g(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"\u0422\u0435\u043f\u0435\u0440\u044c \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0438\u0442\u044c \u0434\u0432\u0435 \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438."),r.Mb(),r.Nb(3,"p"),r.oc(4,"\u041d\u0430\u0448 \u043f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a \u0444\u0440\u0443\u043a\u0442\u043e\u0432 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u043b \u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u043c \u0444\u0440\u0443\u043a\u0442\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e. \u0424\u0443\u043d\u043a\u0446\u0438\u044f "),r.Nb(5,"code",4),r.oc(6,"merge"),r.Mb(),r.oc(7," \u043c\u043e\u0436\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0440\u0430\u0437\u043d\u044b\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u044b\u0435 \u0432 \u043e\u0434\u043d\u0443 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0435\u043c\u0443\u044e. \u0417\u0430\u0442\u0435\u043c \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \xab\u0442\u0440\u0443\u0431\u0430\xbb, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0432\u0435\u0436\u0438\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),r.Nb(8,"a",5),r.oc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e merge)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();const e=r.gc(8);r.zb(5),r.ec("appTooltip",e)}}const h=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="merge",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new o),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(r.Kb(i.a),r.Kb(c.d))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-merge"]],decls:13,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/index/function/merge","target","_blank"]],template:function(e,n){1&e&&(r.Nb(0,"h3"),r.oc(1),r.ac(2,"translate"),r.Mb(),r.nc(3,u,10,1,"div",0),r.nc(4,l,10,1,"div",0),r.nc(5,d,10,1,"div",0),r.nc(6,g,10,1,"div",0),r.Nb(7,"div",1,2),r.Nb(9,"pre"),r.oc(10,"        "),r.Lb(11,"code",3),r.oc(12,"\n    "),r.Mb(),r.Mb()),2&e&&(r.zb(1),r.rc("",r.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),r.zb(2),r.ec("ngIf","de"===n.currentLanguage),r.zb(1),r.ec("ngIf","en"===n.currentLanguage),r.zb(1),r.ec("ngIf","zh_CN"===n.currentLanguage),r.zb(1),r.ec("ngIf","ru"===n.currentLanguage),r.zb(5),r.ec("highlight",n.mergeCode))},directives:[s.j,b.b,p.a],pipes:[c.c],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[a.d.forChild(h)],a.d]}),e})();var m=t("PCNd");let v=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(n){return new(n||e)},imports:[[m.a,f]]}),e})()}}]);