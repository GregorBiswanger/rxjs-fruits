function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{KdnK:function(e,n,i){"use strict";i.r(n),i.d(n,"SkipModule",(function(){return M}));var t=i("iInd"),c=function e(){_classCallCheck(this,e),this.fruits=["apple","apple","banana","apple"],this.expectedFruits=["banana","apple"],this.code='const fruits = from([\n    "apple",\n    "apple",\n    "banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=7,this.positionColumnNumber=2},r=i("8Y7J"),o=i("VIrA"),a=i("TSSN"),s=i("SVse"),p=i("dJsq"),b=i("uzYf");function u(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"Auf die ersten zwei Fr\xfcchte k\xf6nnen wir verzichten."),r.Mb(),r.Nb(3,"p"),r.oc(4,"Der "),r.Nb(5,"code",4),r.oc(6,"skip"),r.Mb(),r.oc(7,"-Operator erm\xf6glicht uns das \xdcberspringen unn\xf6tiger Fr\xfcchte. "),r.Nb(8,"a",5),r.oc(9,"(Mehr Infos zu skip)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var i=r.gc(8);r.zb(5),r.ec("appTooltip",i)}}function l(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"We can do without the first two fruits. The "),r.Nb(3,"code",4),r.oc(4,"skip"),r.Mb(),r.oc(5," operator enables us to skip unnecessary fruit. "),r.Nb(6,"a",5),r.oc(7,"(Learn more about skip)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var i=r.gc(8);r.zb(3),r.ec("appTooltip",i)}}function f(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"\u6211\u4eec\u4e0d\u9700\u8981\u524d\u4e24\u4e2a\u6c34\u679c\u3002 "),r.Nb(3,"code",4),r.oc(4,"skip"),r.Mb(),r.oc(5," \u64cd\u4f5c\u7b26\u80fd\u591f\u8df3\u8fc7\u4e0d\u5fc5\u8981\u7684\u6c34\u679c\u3002 "),r.Nb(6,"a",5),r.oc(7,"\uff08\u4e86\u89e3\u5173\u4e8e skip \u64cd\u4f5c\u7b26\u7684\u66f4\u591a\u4fe1\u606f\uff09"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var i=r.gc(8);r.zb(3),r.ec("appTooltip",i)}}function h(e,n){if(1&e&&(r.Nb(0,"div"),r.Nb(1,"p"),r.oc(2,"\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u043e\u0439\u0442\u0438\u0441\u044c \u0431\u0435\u0437 \u043f\u0435\u0440\u0432\u044b\u0445 \u0434\u0432\u0443\u0445 \u043f\u043b\u043e\u0434\u043e\u0432. \u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 "),r.Nb(3,"code",4),r.oc(4,"skip"),r.Mb(),r.oc(5," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u0430\u043c \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0443\u043a\u0442\u044b. "),r.Nb(6,"a",5),r.oc(7,"(\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e skip)"),r.Mb(),r.Mb(),r.Mb()),2&e){r.Zb();var i=r.gc(8);r.zb(3),r.ec("appTooltip",i)}}var d,g,v,k=[{path:"",component:(d=function(){function e(n,i){_classCallCheck(this,e),this.exerciseService=n,this.translateService=i,this.exerciseTitle="skip",this.skipCode="\n  of(1, 2, 3, 4).pipe(\n    skip(1)\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),d.\u0275fac=function(e){return new(e||d)(r.Kb(o.a),r.Kb(a.d))},d.\u0275cmp=r.Eb({type:d,selectors:[["app-skip"]],decls:13,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/skip","target","_blank"]],template:function(e,n){1&e&&(r.Nb(0,"h3"),r.oc(1),r.ac(2,"translate"),r.Mb(),r.nc(3,u,10,1,"div",0),r.nc(4,l,8,1,"div",0),r.nc(5,f,8,1,"div",0),r.nc(6,h,8,1,"div",0),r.Nb(7,"div",1,2),r.Nb(9,"pre"),r.oc(10,"        "),r.Lb(11,"code",3),r.oc(12,"\n    "),r.Mb(),r.Mb()),2&e&&(r.zb(1),r.rc("",r.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),r.zb(2),r.ec("ngIf","de"===n.currentLanguage),r.zb(1),r.ec("ngIf","en"===n.currentLanguage),r.zb(1),r.ec("ngIf","zh_CN"===n.currentLanguage),r.zb(1),r.ec("ngIf","ru"===n.currentLanguage),r.zb(5),r.ec("highlight",n.skipCode))},directives:[s.j,p.b,b.a],pipes:[a.c],styles:[""]}),d)}],C=((g=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:g}),g.\u0275inj=r.Hb({factory:function(e){return new(e||g)},imports:[[t.d.forChild(k)],t.d]}),g),N=i("PCNd"),M=((v=function e(){_classCallCheck(this,e)}).\u0275mod=r.Ib({type:v}),v.\u0275inj=r.Hb({factory:function(e){return new(e||v)},imports:[[N.a,C]]}),v)}}]);