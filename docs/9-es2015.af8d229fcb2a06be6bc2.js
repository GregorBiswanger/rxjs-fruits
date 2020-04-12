(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Vwex:function(e,t,n){"use strict";n.r(t),n.d(t,"DistinctModule",(function(){return g}));var i=n("tyNb");class r{constructor(){this.fruits=["apple","apple","banana","apple"],this.expectedFruits=["apple","banana"],this.code='const fruits = from([\n    "apple",\n    "apple",\n    "banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe(fruit => toConveyorBelt(fruit));\n',this.minPositionLineNumber=7,this.positionColumnNumber=2,this.recipeDescription=""}}var s=n("fXoL"),c=n("VIrA"),o=n("sYmb"),a=n("ofXK"),b=n("uzYf"),p=n("OtPg");function u(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"p"),s.lc(2,"Oh Nein! Wir bekommen mehr Fr\xfcchte geliefert als auf dem Rezept vorgegeben sind."),s.Mb(),s.Nb(3,"p"),s.lc(4,"Der pipe-Operator erm\xf6glicht uns, unterschiedliche RxJS-Operatoren nacheinander auszuf\xfchren um unsere Fr\xfcchte so zu erhalten, wie wir sie brauchen."),s.Mb(),s.Nb(5,"p"),s.lc(6,"In unserem Fall hilft uns der "),s.Nb(7,"code",1),s.lc(8,"distinct"),s.Mb(),s.lc(9,"-Operator. Er verhindert, dass in unserem Datenstrom doppelte Fr\xfcchte geliefert werden. "),s.Nb(10,"a",2),s.lc(11,"(Mehr Infos zu distinct)"),s.Mb(),s.Mb(),s.Nb(12,"div",3,4),s.Nb(14,"pre"),s.lc(15,"            "),s.Lb(16,"code",5),s.lc(17,"\n       "),s.Mb(),s.Mb(),s.Mb()),2&e){const e=s.dc(13),t=s.Yb();s.Ab(7),s.bc("appTooltip",e),s.Ab(9),s.bc("highlight",t.distinctCode)}}function l(e,t){if(1&e&&(s.Nb(0,"div"),s.Nb(1,"p"),s.lc(2,"Oh no! We get more fruit than the recipe says."),s.Mb(),s.Nb(3,"p"),s.lc(4,"The pipe operator enables us to execute different RxJS operators one after the other in order to get our fruits as we need them."),s.Mb(),s.Nb(5,"p"),s.lc(6,"In our case, the "),s.Nb(7,"code",1),s.lc(8,"distinct"),s.Mb(),s.lc(9," operator helps us. It prevents duplicate fruits from being delivered in our data stream. "),s.Nb(10,"a",2),s.lc(11,"(Learn more about distinct)"),s.Mb(),s.Mb(),s.Nb(12,"div",3,4),s.Nb(14,"pre"),s.lc(15,"            "),s.Lb(16,"code",5),s.lc(17,"\n       "),s.Mb(),s.Mb(),s.Mb()),2&e){const e=s.dc(13),t=s.Yb();s.Ab(7),s.bc("appTooltip",e),s.Ab(9),s.bc("highlight",t.distinctCode)}}const d=[{path:"",component:(()=>{class e{constructor(e,t){this.exerciseService=e,this.translateService=t,this.exerciseTitle="distinct",this.distinctCode="\n  of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1).pipe(\n    distinct()\n  ).subscribe(data => console.log(data));\n\n  // Logs:\n  // 1\n  // 2\n  // 3\n  // 4\n  ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new r),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(s.Kb(c.a),s.Kb(o.d))},e.\u0275cmp=s.Eb({type:e,selectors:[["app-distinct"]],decls:5,vars:6,consts:[[4,"ngIf"],[1,"help",3,"appTooltip"],["href","https://rxjs.dev/api/operators/distinct","target","_blank"],[1,"tooltip","codeTooltip"],["tooltip",""],[3,"highlight"]],template:function(e,t){1&e&&(s.Nb(0,"h3"),s.lc(1),s.Zb(2,"translate"),s.Mb(),s.kc(3,u,18,2,"div",0),s.kc(4,l,18,2,"div",0)),2&e&&(s.Ab(1),s.oc("",s.ac(2,4,"EXERCISES.EXERCISETITLE"),": ",t.exerciseTitle,""),s.Ab(2),s.bc("ngIf","de"===t.currentLanguage),s.Ab(1),s.bc("ngIf","en"===t.currentLanguage))},directives:[a.j,b.a,p.b],pipes:[o.c],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(d)],i.d]}),e})();var f=n("PCNd");let g=(()=>{class e{}return e.\u0275mod=s.Ib({type:e}),e.\u0275inj=s.Hb({factory:function(t){return new(t||e)},imports:[[f.a,h]]}),e})()}}]);