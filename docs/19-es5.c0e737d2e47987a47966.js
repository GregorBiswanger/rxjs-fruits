function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,t){"use strict";t.r(n),t.d(n,"SkiplastSkipMergeModule",(function(){return v}));var a=t("tyNb"),i=function e(){_classCallCheck(this,e),this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2},c=t("fXoL"),o=t("VIrA"),s=t("sYmb"),r=t("ofXK"),p=t("OtPg"),b=t("uzYf");function l(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"Gib dem Chaos keine Chance!"),c.Mb(),c.Nb(3,"p"),c.lc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),c.Nb(5,"code",6),c.lc(6,"skipLast"),c.Mb(),c.lc(7,"- und "),c.Nb(8,"code",6),c.lc(9,"skip"),c.Mb(),c.lc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),c.Nb(11,"code",6),c.lc(12,"merge"),c.Mb(),c.lc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),c.Mb(),c.Mb()),2&e){c.Yb();var t=c.dc(12),a=c.dc(6),i=c.dc(18);c.Ab(5),c.bc("appTooltip",t),c.Ab(3),c.bc("appTooltip",a),c.Ab(3),c.bc("appTooltip",i)}}function d(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"Don't give chaos a chance!"),c.Mb(),c.Nb(3,"p"),c.lc(4,"You received two deliveries. Take only usable fruit with the "),c.Nb(5,"code",6),c.lc(6,"skipLast"),c.Mb(),c.lc(7," and "),c.Nb(8,"code",6),c.lc(9,"skip"),c.Mb(),c.lc(10," operator. Then replace the empty observable with the "),c.Nb(11,"code",6),c.lc(12,"merge"),c.Mb(),c.lc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),c.Mb(),c.Mb()),2&e){c.Yb();var t=c.dc(12),a=c.dc(6),i=c.dc(18);c.Ab(5),c.bc("appTooltip",t),c.Ab(3),c.bc("appTooltip",a),c.Ab(3),c.bc("appTooltip",i)}}var u,h,f,g=[{path:"",component:(u=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new i),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),u.\u0275fac=function(e){return new(e||u)(c.Kb(o.a),c.Kb(s.d))},u.\u0275cmp=c.Eb({type:u,selectors:[["app-skiplast-skip-merge"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(c.Nb(0,"h3"),c.lc(1),c.Zb(2,"translate"),c.Mb(),c.kc(3,l,14,3,"div",0),c.kc(4,d,14,3,"div",0),c.Nb(5,"div",1,2),c.Nb(7,"pre"),c.lc(8,"        "),c.Lb(9,"code",3),c.lc(10,"\n    "),c.Mb(),c.Mb(),c.Nb(11,"div",1,4),c.Nb(13,"pre"),c.lc(14,"        "),c.Lb(15,"code",3),c.lc(16,"\n    "),c.Mb(),c.Mb(),c.Nb(17,"div",1,5),c.Nb(19,"pre"),c.lc(20,"        "),c.Lb(21,"code",3),c.lc(22,"\n    "),c.Mb(),c.Mb()),2&e&&(c.Ab(1),c.oc("",c.ac(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Ab(2),c.bc("ngIf","de"===n.currentLanguage),c.Ab(1),c.bc("ngIf","en"===n.currentLanguage),c.Ab(5),c.bc("highlight",n.skipCode),c.Ab(6),c.bc("highlight",n.skipLastCode),c.Ab(6),c.bc("highlight",n.mergeCode))},directives:[r.j,p.b,b.a],pipes:[s.c],styles:[""]}),u)}],k=((h=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:h}),h.\u0275inj=c.Hb({factory:function(e){return new(e||h)},imports:[[a.b.forChild(g)],a.b]}),h),m=t("PCNd"),v=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:f}),f.\u0275inj=c.Hb({factory:function(e){return new(e||f)},imports:[[m.a,k]]}),f)}}]);