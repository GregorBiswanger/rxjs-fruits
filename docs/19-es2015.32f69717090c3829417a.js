(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"7rQJ":function(e,n,t){"use strict";t.r(n),t.d(n,"SkiplastSkipMergeModule",(function(){return g}));var a=t("tyNb");class i{constructor(){this.fruits=["apple","dirty-apple","apple","old-apple","apple","old-banana","old-banana","dirty-banana","dirty-banana","dirty-banana"],this.expectedFruits=["apple","apple","apple","banana","banana","banana"],this.code="const apples = from(['apple', 'dirty-apple', 'apple', 'old-apple', 'apple']);\nconst bananas = from(['old-banana', 'old-banana', 'dirty-banana', 'dirty-banana', 'dirty-banana']);\n\nconst freshApples = apples.pipe(\n\t\n);\n\nconst freshBananas = bananas.pipe(\n\t\n);\n\nEMPTY.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n",this.minPositionLineNumber=4,this.positionColumnNumber=2}}var c=t("fXoL"),s=t("VIrA"),o=t("sYmb"),r=t("ofXK"),p=t("OtPg"),b=t("uzYf");function l(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.mc(2,"Gib dem Chaos keine Chance!"),c.Mb(),c.Nb(3,"p"),c.mc(4,"Du hast zwei Lieferungen bekommen. Entnehme nur verwendbare Fr\xfcchte mit dem "),c.Nb(5,"code",6),c.mc(6,"skipLast"),c.Mb(),c.mc(7,"- und "),c.Nb(8,"code",6),c.mc(9,"skip"),c.Mb(),c.mc(10,"-Operator. Ersetze dann das leere (Empty) Observable mit der "),c.Nb(11,"code",6),c.mc(12,"merge"),c.Mb(),c.mc(13,"-Funktion. Gegen Ende bereinige die dreckigen (dirty) Fr\xfcchte und lege sie auf das Flie\xdfband."),c.Mb(),c.Mb()),2&e){c.Zb();const e=c.ec(12),n=c.ec(6),t=c.ec(18);c.Ab(5),c.cc("appTooltip",e),c.Ab(3),c.cc("appTooltip",n),c.Ab(3),c.cc("appTooltip",t)}}function d(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.mc(2,"Don't give chaos a chance!"),c.Mb(),c.Nb(3,"p"),c.mc(4,"You received two deliveries. Take only usable fruit with the "),c.Nb(5,"code",6),c.mc(6,"skipLast"),c.Mb(),c.mc(7," and "),c.Nb(8,"code",6),c.mc(9,"skip"),c.Mb(),c.mc(10," operator. Then replace the empty observable with the "),c.Nb(11,"code",6),c.mc(12,"merge"),c.Mb(),c.mc(13," function. Towards the end, clean up the dirty fruits and place them on the conveyor belt."),c.Mb(),c.Mb()),2&e){c.Zb();const e=c.ec(12),n=c.ec(6),t=c.ec(18);c.Ab(5),c.cc("appTooltip",e),c.Ab(3),c.cc("appTooltip",n),c.Ab(3),c.cc("appTooltip",t)}}const u=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="skipLast, skip & merge",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.skipLastCode="\n  of(1, 2, 3, 4).pipe(\n    skipLast(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  ",this.mergeCode="\n  const first = of(1, 2, 3)\n  const second = of(4, 5, 6);\n\n  merge(first, second).subscribe({\n    next: data => console.log(data)\n  });\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  // 5\n  // 6\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new i),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(c.Kb(s.a),c.Kb(o.d))},e.\u0275cmp=c.Eb({type:e,selectors:[["app-skiplast-skip-merge"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["skipLastTooltip",""],["mergeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(c.Nb(0,"h3"),c.mc(1),c.ac(2,"translate"),c.Mb(),c.lc(3,l,14,3,"div",0),c.lc(4,d,14,3,"div",0),c.Nb(5,"div",1,2),c.Nb(7,"pre"),c.mc(8,"        "),c.Lb(9,"code",3),c.mc(10,"\n    "),c.Mb(),c.Mb(),c.Nb(11,"div",1,4),c.Nb(13,"pre"),c.mc(14,"        "),c.Lb(15,"code",3),c.mc(16,"\n    "),c.Mb(),c.Mb(),c.Nb(17,"div",1,5),c.Nb(19,"pre"),c.mc(20,"        "),c.Lb(21,"code",3),c.mc(22,"\n    "),c.Mb(),c.Mb()),2&e&&(c.Ab(1),c.pc("",c.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Ab(2),c.cc("ngIf","de"===n.currentLanguage),c.Ab(1),c.cc("ngIf","en"===n.currentLanguage),c.Ab(5),c.cc("highlight",n.skipCode),c.Ab(6),c.cc("highlight",n.skipLastCode),c.Ab(6),c.cc("highlight",n.mergeCode))},directives:[r.j,p.b,b.a],pipes:[o.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(n){return new(n||e)},imports:[[a.b.forChild(u)],a.b]}),e})();var m=t("PCNd");let g=(()=>{class e{}return e.\u0275mod=c.Ib({type:e}),e.\u0275inj=c.Hb({factory:function(n){return new(n||e)},imports:[[m.a,h]]}),e})()}}]);