function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{S4iM:function(e,n,t){"use strict";t.r(n),t.d(n,"TakeModule",(function(){return C}));var a=t("PCNd"),i=t("tyNb"),r=function e(){_classCallCheck(this,e),this.fruits=["banana","banana","banana","banana"],this.expectedFruits=["banana","banana"],this.code='const fruits = from([\n    "banana",\n    "banana",\n    "banana",\n    "banana"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));',this.minPositionLineNumber=7,this.positionColumnNumber=2},o=t("fXoL"),c=t("VIrA"),s=t("sYmb"),b=t("ofXK"),u=t("OtPg"),l=t("uzYf");function p(e,n){if(1&e&&(o.Nb(0,"div"),o.Nb(1,"p"),o.lc(2,"Das ist zu viel des Guten!"),o.Mb(),o.Nb(3,"p"),o.lc(4,"Verwende den "),o.Nb(5,"code",4),o.lc(6,"take"),o.Mb(),o.lc(7," Operator, um nur so viel Bananen auf das Flie\xdfband zu legen, wie es im Rezept vorgegeben ist. "),o.Nb(8,"a",5),o.lc(9,"(Mehr Infos zu take)"),o.Mb(),o.Mb(),o.Mb()),2&e){o.Yb();var t=o.dc(6);o.Ab(5),o.bc("appTooltip",t)}}function h(e,n){if(1&e&&(o.Nb(0,"div"),o.Nb(1,"p"),o.lc(2,"That is too much of a good thing!"),o.Mb(),o.Nb(3,"p"),o.lc(4,"Use the "),o.Nb(5,"code",4),o.lc(6,"take"),o.Mb(),o.lc(7," operator to put only as much bananas on the conveyor belt as is specified in the recipe. "),o.Nb(8,"a",5),o.lc(9,"(Learn more about take)"),o.Mb(),o.Mb(),o.Mb()),2&e){o.Yb();var t=o.dc(6);o.Ab(5),o.bc("appTooltip",t)}}var f,d,g,v=[{path:"",component:(f=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.task="take",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(o.Kb(c.a),o.Kb(s.d))},f.\u0275cmp=o.Eb({type:f,selectors:[["app-take"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/take","target","_blank"]],template:function(e,n){1&e&&(o.Nb(0,"h3"),o.lc(1),o.Zb(2,"translate"),o.Mb(),o.kc(3,p,10,1,"div",0),o.kc(4,h,10,1,"div",0),o.Nb(5,"div",1,2),o.Nb(7,"pre"),o.lc(8,"        "),o.Lb(9,"code",3),o.lc(10,"\n    "),o.Mb(),o.Mb()),2&e&&(o.Ab(1),o.oc("",o.ac(2,5,"EXERCISES.EXERCISETITLE"),": ",n.task,""),o.Ab(2),o.bc("ngIf","de"===n.currentLanguage),o.Ab(1),o.bc("ngIf","en"===n.currentLanguage),o.Ab(5),o.bc("highlight",n.takeCode))},directives:[b.j,u.b,l.a],pipes:[s.c],styles:[""]}),f)}],k=((g=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:g}),g.\u0275inj=o.Hb({factory:function(e){return new(e||g)},imports:[[i.d.forChild(v)],i.d]}),g),C=((d=function e(){_classCallCheck(this,e)}).\u0275mod=o.Ib({type:d}),d.\u0275inj=o.Hb({factory:function(e){return new(e||d)},imports:[[a.a,k]]}),d)}}]);