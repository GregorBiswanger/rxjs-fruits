function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"7Qxo":function(e,n,t){"use strict";t.r(n),t.d(n,"MapModule",(function(){return y}));var i=t("PCNd"),r=t("tyNb"),a=function e(){_classCallCheck(this,e),this.expectedFruits=["apple","apple","banana","banana"],this.code='const fruits = from([\n    "dirty-apple",\n    "apple",\n    "dirty-banana",\n    "banana"]);\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});',this.minPositionLineNumber=6,this.positionColumnNumber=2},c=t("fXoL"),s=t("VIrA"),o=t("sYmb"),b=t("ofXK"),u=t("OtPg"),p=t("uzYf");function l(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.mc(2,"In dieser Lieferung sind einige Fr\xfcchte schmutzig."),c.Mb(),c.Nb(3,"p"),c.mc(4,"Der "),c.Nb(5,"code",4),c.mc(6,"map"),c.Mb(),c.mc(7," Operator erm\xf6glicht hier das ver\xe4ndern von Daten. Wasche die Fr\xfcchte, indem du den Schmutz von dreckigen Fr\xfcchten entfernst. "),c.Nb(8,"a",5),c.mc(9,"(Mehr Infos zu map)"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.ec(6);c.Ab(5),c.cc("appTooltip",t)}}function h(e,n){if(1&e&&(c.Nb(0,"div"),c.Nb(1,"p"),c.mc(2,"Some fruits are dirty in this delivery."),c.Mb(),c.Nb(3,"p"),c.mc(4,"The "),c.Nb(5,"code",4),c.mc(6,"map"),c.Mb(),c.mc(7," operator enables data to be changed here. Wash the fruits by removing the dirt from dirty fruits. "),c.Nb(8,"a",5),c.mc(9,"(Learn more about map)"),c.Mb(),c.Mb(),c.Mb()),2&e){c.Zb();var t=c.ec(6);c.Ab(5),c.cc("appTooltip",t)}}var f,m,d,g=[{path:"",component:(f=function(){function e(n,t){_classCallCheck(this,e),this.exerciseService=n,this.translateService=t,this.task="map",this.mapCode="\nconst source = from([1, 2, 3, 4, 5]);\nsource.pipe(\n  map(data => 'My Number is ' + data)\n).subscribe({\n  next: data => console.log(data)\n});\n\n// Logs:\n// My Number is 1\n// My Number is 2\n// My Number is 3\n// My Number is 4\n// My Number is 5\n  ",this.currentLanguage=""}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.exerciseService.newExercise(new a),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:function(){e.currentLanguage=e.translateService.currentLang}})}},{key:"ngOnDestroy",value:function(){this.onLangChangeSubscription.unsubscribe()}}]),e}(),f.\u0275fac=function(e){return new(e||f)(c.Kb(s.a),c.Kb(o.d))},f.\u0275cmp=c.Eb({type:f,selectors:[["app-map"]],decls:11,vars:7,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/map","target","_blank"]],template:function(e,n){1&e&&(c.Nb(0,"h3"),c.mc(1),c.ac(2,"translate"),c.Mb(),c.lc(3,l,10,1,"div",0),c.lc(4,h,10,1,"div",0),c.Nb(5,"div",1,2),c.Nb(7,"pre"),c.mc(8,"        "),c.Lb(9,"code",3),c.mc(10,"\n    "),c.Mb(),c.Mb()),2&e&&(c.Ab(1),c.pc("",c.bc(2,5,"EXERCISES.EXERCISETITLE"),": ",n.task,""),c.Ab(2),c.cc("ngIf","de"===n.currentLanguage),c.Ab(1),c.cc("ngIf","en"===n.currentLanguage),c.Ab(5),c.cc("highlight",n.mapCode))},directives:[b.j,u.b,p.a],pipes:[o.c],styles:[""]}),f)}],v=((d=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:d}),d.\u0275inj=c.Hb({factory:function(e){return new(e||d)},imports:[[r.b.forChild(g)],r.b]}),d),y=((m=function e(){_classCallCheck(this,e)}).\u0275mod=c.Ib({type:m}),m.\u0275inj=c.Hb({factory:function(e){return new(e||m)},imports:[[i.a,v]]}),m)}}]);