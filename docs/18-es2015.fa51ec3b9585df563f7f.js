(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{S4iM:function(n,e,t){"use strict";t.r(e),t.d(e,"TakeModule",function(){return v});var a=t("PCNd"),c=t("iInd");class i{constructor(){this.fruits=["banana","banana","banana","banana"],this.expectedFruits=["banana","banana"],this.code='const fruits = from([\n    "banana",\n    "banana",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));',this.minPositionLineNumber=7,this.positionColumnNumber=2}}var o=t("8Y7J"),r=t("VIrA"),s=t("TSSN"),b=t("SVse"),p=t("dJsq"),u=t("uzYf");function d(n,e){if(1&n&&(o.Ob(0,"div"),o.Ob(1,"p"),o.qc(2,"Das ist zu viel des Guten!"),o.Nb(),o.Ob(3,"p"),o.qc(4,"Verwende den "),o.Ob(5,"code",4),o.qc(6,"take"),o.Nb(),o.qc(7," Operator, um nur so viel Bananen auf das Flie\xdfband zu legen, wie es im Rezept vorgegeben ist. "),o.Ob(8,"a",5),o.qc(9,"(Mehr Infos zu take)"),o.Nb(),o.Nb(),o.Nb()),2&n){o.ac();const n=o.hc(9);o.Bb(5),o.fc("appTooltip",n)}}function f(n,e){if(1&n&&(o.Ob(0,"div"),o.Ob(1,"p"),o.qc(2,"That is too much of a good thing!"),o.Nb(),o.Ob(3,"p"),o.qc(4,"Use the "),o.Ob(5,"code",4),o.qc(6,"take"),o.Nb(),o.qc(7," operator to put only as much bananas on the conveyor belt as is specified in the recipe. "),o.Ob(8,"a",5),o.qc(9,"(Learn more about take)"),o.Nb(),o.Nb(),o.Nb()),2&n){o.ac();const n=o.hc(9);o.Bb(5),o.fc("appTooltip",n)}}function h(n,e){if(1&n&&(o.Ob(0,"div"),o.Ob(1,"p"),o.qc(2,"\u8fd8\u4e0d\u9519\uff01"),o.Nb(),o.Ob(3,"p"),o.qc(4,"\u4f7f\u7528 "),o.Ob(5,"code",4),o.qc(6,"take"),o.Nb(),o.qc(7," \u64cd\u4f5c\u7b26\u5c06\u98df\u8c31\u4e2d\u6307\u5b9a\u7684\u9999\u8549\u653e\u5230\u4f20\u9001\u5e26\u4e0a\u3002 "),o.Ob(8,"a",5),o.qc(9,"\uff08\u4e86\u89e3\u5173\u4e8e take \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),o.Nb(),o.Nb(),o.Nb()),2&n){o.ac();const n=o.hc(9);o.Bb(5),o.fc("appTooltip",n)}}function l(n,e){if(1&n&&(o.Ob(0,"div"),o.Ob(1,"p"),o.qc(2,"\u042d\u0442\u043e \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u043c\u043d\u043e\u0433\u043e \u0445\u043e\u0440\u043e\u0448\u0435\u0433\u043e!"),o.Nb(),o.Ob(3,"p"),o.qc(4,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "),o.Ob(5,"code",4),o.qc(6,"take"),o.Nb(),o.qc(7,", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u043d\u0430 \u043a\u043e\u043d\u0432\u0435\u0439\u0435\u0440 \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u043d\u0430\u043d\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0432 \u0440\u0435\u0446\u0435\u043f\u0442\u0435. "),o.Ob(8,"a",5),o.qc(9,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e take)"),o.Nb(),o.Nb(),o.Nb()),2&n){o.ac();const n=o.hc(9);o.Bb(5),o.fc("appTooltip",n)}}function g(n,e){if(1&n&&(o.Ob(0,"div"),o.Ob(1,"p"),o.qc(2,"Eso es demasiado!"),o.Nb(),o.Ob(3,"p"),o.qc(4,"Usa el operador "),o.Ob(5,"code",4),o.qc(6,"take"),o.Nb(),o.qc(7," para colocar en la cinta transportadora \xfanicamente la cantidad de bananas especificadas en la receta. "),o.Ob(8,"a",5),o.qc(9,"(Aprende m\xe1s sobre take)"),o.Nb(),o.Nb(),o.Nb()),2&n){o.ac();const n=o.hc(9);o.Bb(5),o.fc("appTooltip",n)}}const N=[{path:"",component:(()=>{class n{constructor(n,e){this.exerciseService=n,this.translateService=e,this.task="take",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new i),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(o.Lb(r.a),o.Lb(s.d))},n.\u0275cmp=o.Fb({type:n,selectors:[["app-take"]],decls:14,vars:10,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/take","target","_blank"]],template:function(n,e){1&n&&(o.Ob(0,"h3"),o.qc(1),o.bc(2,"translate"),o.Nb(),o.pc(3,d,10,1,"div",0),o.pc(4,f,10,1,"div",0),o.pc(5,h,10,1,"div",0),o.pc(6,l,10,1,"div",0),o.pc(7,g,10,1,"div",0),o.Ob(8,"div",1,2),o.Ob(10,"pre"),o.qc(11,"        "),o.Mb(12,"code",3),o.qc(13,"\n    "),o.Nb(),o.Nb()),2&n&&(o.Bb(1),o.tc("",o.cc(2,8,"EXERCISES.EXERCISETITLE"),": ",e.task,""),o.Bb(2),o.fc("ngIf","de"===e.currentLanguage),o.Bb(1),o.fc("ngIf","en"===e.currentLanguage),o.Bb(1),o.fc("ngIf","zh_CN"===e.currentLanguage),o.Bb(1),o.fc("ngIf","ru"===e.currentLanguage),o.Bb(1),o.fc("ngIf","es"===e.currentLanguage),o.Bb(5),o.fc("highlight",e.takeCode))},directives:[b.j,p.b,u.a],pipes:[s.c],styles:[""]}),n})()}];let O=(()=>{class n{}return n.\u0275mod=o.Jb({type:n}),n.\u0275inj=o.Ib({factory:function(e){return new(e||n)},imports:[[c.d.forChild(N)],c.d]}),n})(),v=(()=>{class n{}return n.\u0275mod=o.Jb({type:n}),n.\u0275inj=o.Ib({factory:function(e){return new(e||n)},imports:[[a.a,O]]}),n})()}}]);