function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{zcjo:function(e,n,t){"use strict";t.r(n),t.d(n,"SkipTakeMapModule",(function(){return k}));var i=t("tyNb"),a=function e(){_classCallCheck(this,e),this.fruits=["dirty-apple","apple","dirty-banana","dirty-banana","apple"],this.expectedFruits=["banana"],this.code='const fruits = from([\n    "dirty-apple",\n    "apple",\n    "dirty-banana",\n    "dirty-banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=8,this.positionColumnNumber=2},c=t("fXoL"),r=t("VIrA"),o=t("sYmb"),s=t("ofXK"),b=t("OtPg"),l=t("uzYf");function p(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"Eine \xfcberm\xe4\xdfige Lieferung!"),c.Mb(),c.Nb(3,"p"),c.lc(4,"Du m\xf6chtest einfach nur eine Banane. Die Lieferung beinhaltet allerdings zu viel unn\xf6tige Fr\xfcchte. Verwende jetzt alle bisher gelernten Operatoren "),c.Nb(5,"code",6),c.lc(6,"skip"),c.Mb(),c.lc(7,", "),c.Nb(8,"code",6),c.lc(9,"take"),c.Mb(),c.lc(10," und "),c.Nb(11,"code",6),c.lc(12,"map"),c.Mb(),c.lc(13," nacheinander in der Pipe-Funktion."),c.Mb(),c.Mb()),2&e){c.Yb();var t=c.dc(6),i=c.dc(12),a=c.dc(18);c.Ab(5),c.bc("appTooltip",t),c.Ab(3),c.bc("appTooltip",i),c.Ab(3),c.bc("appTooltip",a)}}function u(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.lc(2,"An excessive delivery!"),c.Mb(),c.Nb(3,"p"),c.lc(4,"You just want a banana. However, the delivery contains too much unnecessary fruit. Now use all operators that have been learned so far "),c.Nb(5,"code",6),c.lc(6,"skip"),c.Mb(),c.lc(7,", "),c.Nb(8,"code",6),c.lc(9,"take"),c.Mb(),c.lc(10," and "),c.Nb(11,"code",6),c.lc(12,"map"),c.Mb(),c.lc(13," one after the other in the pipe function."),c.Mb(),c.Mb()),2&e){c.Yb();var t=c.dc(6),i=c.dc(12),a=c.dc(18);c.Ab(5),c.bc("appTooltip",t),c.Ab(3),c.bc("appTooltip",i),c.Ab(3),c.bc("appTooltip",a)}}var d,h,f,g=[{path:"",component:(d=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.exerciseTitle="skip-take-map",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.takeCode="\n  const intervalCount = interval(1000);\n  intervalCount.pipe(\n    take(5)\n  ).subscribe(x => console.log(x));\n\n  // Logs:\n  // 0\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.mapCode="\n  const source = from([1, 2, 3, 4, 5]);\n  source.pipe(\n    map(data => 'My Number is ' + data)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // My Number is 1\n  // My Number is 2\n  // My Number is 3\n  // My Number is 4\n  // My Number is 5\n    ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),d.\u0275fac=function(e){return new(e||d)(c.Kb(r.a),c.Kb(o.d))},d.\u0275cmp=c.Eb({type:d,selectors:[["app-skip-take-map"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["skipTooltip",""],[3,"highlight"],["takeTooltip",""],["mapTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(c.Nb(0,"h3"),c.lc(1),c.Zb(2,"translate"),c.Mb(),c.kc(3,p,14,3,"div",0),c.kc(4,u,14,3,"div",0),c.Nb(5,"div",1,2),c.Nb(7,"pre"),c.lc(8,"        "),c.Lb(9,"code",3),c.lc(10,"\n    "),c.Mb(),c.Mb(),c.Nb(11,"div",1,4),c.Nb(13,"pre"),c.lc(14,"        "),c.Lb(15,"code",3),c.lc(16,"\n    "),c.Mb(),c.Mb(),c.Nb(17,"div",1,5),c.Nb(19,"pre"),c.lc(20,"        "),c.Lb(21,"code",3),c.lc(22,"\n    "),c.Mb(),c.Mb()),2&e&&(c.Ab(1),c.oc("",c.ac(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),c.Ab(2),c.bc("ngIf","de"===n.currentLanguage),c.Ab(1),c.bc("ngIf","en"===n.currentLanguage),c.Ab(5),c.bc("highlight",n.skipCode),c.Ab(6),c.bc("highlight",n.takeCode),c.Ab(6),c.bc("highlight",n.mapCode))},directives:[s.j,b.b,l.a],pipes:[o.c],styles:[""]}),d)}],v=((h=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:h}),h.\u0275inj=c.Hb({factory:function(e){return new(e||h)},imports:[[i.b.forChild(g)],i.b]}),h),m=t("PCNd"),k=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:f}),f.\u0275inj=c.Hb({factory:function(e){return new(e||f)},imports:[[m.a,v]]}),f)}}]);