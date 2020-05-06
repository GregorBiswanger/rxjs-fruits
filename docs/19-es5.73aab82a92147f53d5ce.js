function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,t){"use strict";t.r(n),t.d(n,"SkiplastSkipMergeModule",(function(){return v}));var i=t("iInd"),a=function e(){_classCallCheck(this,e),this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2},c=t("8Y7J"),s=t("VIrA"),o=t("TSSN"),r=t("SVse"),p=t("dJsq"),b=t("uzYf");function l(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Gib dem Chaos keine Chance!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),c.Pb(5,"code",6),c.qc(6,"skipLast"),c.Ob(),c.qc(7,"- und "),c.Pb(8,"code",6),c.qc(9,"skip"),c.Ob(),c.qc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),c.Pb(11,"code",6),c.qc(12,"merge"),c.Ob(),c.qc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(12),i=c.ic(6),a=c.ic(18);c.Bb(5),c.gc("appTooltip",t),c.Bb(3),c.gc("appTooltip",i),c.Bb(3),c.gc("appTooltip",a)}}function d(e,n){if(1&e&&(c.Pb(0,"div"),c.Pb(1,"p"),c.qc(2,"Don't give chaos a chance!"),c.Ob(),c.Pb(3,"p"),c.qc(4,"You received two deliveries. Take only usable fruit with the "),c.Pb(5,"code",6),c.qc(6,"skipLast"),c.Ob(),c.qc(7," and "),c.Pb(8,"code",6),c.qc(9,"skip"),c.Ob(),c.qc(10," operator. Then replace the empty observable with the "),c.Pb(11,"code",6),c.qc(12,"merge"),c.Ob(),c.qc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),c.Ob(),c.Ob()),2&e){c.bc();var t=c.ic(12),i=c.ic(6),a=c.ic(18);c.Bb(5),c.gc("appTooltip",t),c.Bb(3),c.gc("appTooltip",i),c.Bb(3),c.gc("appTooltip",a)}}var u,h,g,f=[{path:"",component:(u=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),u.\u0275fac=function(e){return new(e||u)(c.Mb(s.a),c.Mb(o.d))},u.\u0275cmp=c.Gb({type:u,selectors:[["app-skiplast-skip-merge"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(c.Pb(0,"h3"),c.qc(1),c.cc(2,"translate"),c.Ob(),c.pc(3,l,14,3,"div",0),c.pc(4,d,14,3,"div",0),c.Pb(5,"div",1,2),c.Pb(7,"pre"),c.qc(8,"        "),c.Nb(9,"code",3),c.qc(10,"\n    "),c.Ob(),c.Ob(),c.Pb(11,"div",1,4),c.Pb(13,"pre"),c.qc(14,"        "),c.Nb(15,"code",3),c.qc(16,"\n    "),c.Ob(),c.Ob(),c.Pb(17,"div",1,5),c.Pb(19,"pre"),c.qc(20,"        "),c.Nb(21,"code",3),c.qc(22,"\n    "),c.Ob(),c.Ob()),2&e&&(c.Bb(1),c.tc("",c.dc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Bb(2),c.gc("ngIf","de"===n.currentLanguage),c.Bb(1),c.gc("ngIf","en"===n.currentLanguage),c.Bb(5),c.gc("highlight",n.skipCode),c.Bb(6),c.gc("highlight",n.skipLastCode),c.Bb(6),c.gc("highlight",n.mergeCode))},directives:[r.j,p.b,b.a],pipes:[o.c],styles:[""]}),u)}],k=((h=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:h}),h.\u0275inj=c.Jb({factory:function(e){return new(e||h)},imports:[[i.d.forChild(f)],i.d]}),h),m=t("PCNd"),v=((g=function e(){_classCallCheck(this,e)}).\u0275mod=c.Kb({type:g}),g.\u0275inj=c.Jb({factory:function(e){return new(e||g)},imports:[[m.a,k]]}),g)}}]);