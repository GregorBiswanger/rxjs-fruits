(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{S4iM:function(n,e,t){"use strict";t.r(e),t.d(e,"TakeModule",(function(){return f}));var a=t("PCNd"),i=t("tyNb");class s{constructor(){this.fruits=["banana","banana","banana","banana"],this.expectedFruits=["banana","banana"],this.code='const fruits = from([\n    "banana",\n    "banana",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));',this.minPositionLineNumber=7,this.positionColumnNumber=2}}var r=t("fXoL"),o=t("VIrA"),c=t("sYmb"),b=t("ofXK"),u=t("OtPg"),p=t("uzYf");function l(n,e){if(1&n&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"Das ist zu viel des Guten!"),r.Mb(),r.Nb(3,"p"),r.lc(4,"Verwende den "),r.Nb(5,"code",4),r.lc(6,"take"),r.Mb(),r.lc(7," Operator, um nur so viel Bananen auf das Flie\xdfband zu legen, wie es im Rezept vorgegeben ist. "),r.Nb(8,"a",5),r.lc(9,"(Mehr Infos zu take)"),r.Mb(),r.Mb(),r.Mb()),2&n){r.Yb();const n=r.dc(6);r.Ab(5),r.bc("appTooltip",n)}}function h(n,e){if(1&n&&(r.Nb(0,"div"),r.Nb(1,"p"),r.lc(2,"That is too much of a good thing!"),r.Mb(),r.Nb(3,"p"),r.lc(4,"Use the "),r.Nb(5,"code",4),r.lc(6,"take"),r.Mb(),r.lc(7," operator to put only as much bananas on the conveyor belt as is specified in the recipe. "),r.Nb(8,"a",5),r.lc(9,"(Learn more about take)"),r.Mb(),r.Mb(),r.Mb()),2&n){r.Yb();const n=r.dc(6);r.Ab(5),r.bc("appTooltip",n)}}const d=[{path:"",component:(()=>{class n{constructor(n,e){this.exerciseService=n,this.translateService=e,this.task="take",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new s),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(r.Kb(o.a),r.Kb(c.d))},n.\u0275cmp=r.Eb({type:n,selectors:[["app-take"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/take","target","_blank"]],template:function(n,e){1&n&&(r.Nb(0,"h3"),r.lc(1),r.Zb(2,"translate"),r.Mb(),r.kc(3,l,10,1,"div",0),r.kc(4,h,10,1,"div",0),r.Nb(5,"div",1,2),r.Nb(7,"pre"),r.lc(8,"        "),r.Lb(9,"code",3),r.lc(10,"\n    "),r.Mb(),r.Mb()),2&n&&(r.Ab(1),r.oc("",r.ac(2,5,"EXERCISES.EXERCISETITLE"),": ",e.task,""),r.Ab(2),r.bc("ngIf","de"===e.currentLanguage),r.Ab(1),r.bc("ngIf","en"===e.currentLanguage),r.Ab(5),r.bc("highlight",e.takeCode))},directives:[b.j,u.b,p.a],pipes:[c.c],styles:[""]}),n})()}];let g=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(e){return new(e||n)},imports:[[i.d.forChild(d)],i.d]}),n})(),f=(()=>{class n{}return n.\u0275mod=r.Ib({type:n}),n.\u0275inj=r.Hb({factory:function(e){return new(e||n)},imports:[[a.a,g]]}),n})()}}]);