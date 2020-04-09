(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{lrJ0:function(e,n,t){"use strict";t.r(n),t.d(n,"FilterMapTakeModule",(function(){return f}));var i=t("tyNb");class c{constructor(){this.fruits=["old-banana","apple","dirty-banana","apple"],this.expectedFruits=["apple","banana"],this.code='const fruits = from([\n    "old-banana",\n    "apple",\n    "dirty-banana",\n    "apple"]);\n\nfruits.pipe(\n\t\n).subscribe({\n    next: fruit => toConveyorBelt(fruit)\n});\n',this.minPositionLineNumber=7,this.positionColumnNumber=2}}var a=t("fXoL"),o=t("VIrA"),r=t("sYmb"),s=t("ofXK"),b=t("OtPg"),p=t("uzYf");function l(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.mc(2,"Was f\xfcr ein Chaos!"),a.Mb(),a.Nb(3,"p"),a.mc(4,"Du m\xf6chtest einfach nur einen Apfel und eine Banane. Die Lieferung beinhaltet allerdings auch altes und schmutziges Obst. Verwende jetzt alle bisher gelernten Operatoren "),a.Nb(5,"code",6),a.mc(6,"filter"),a.Mb(),a.mc(7,", "),a.Nb(8,"code",6),a.mc(9,"map"),a.Mb(),a.mc(10," und "),a.Nb(11,"code",6),a.mc(12,"take"),a.Mb(),a.mc(13," nacheinander in der Pipe-Funktion."),a.Mb(),a.Mb()),2&e){a.Zb();const e=a.ec(6),n=a.ec(12),t=a.ec(18);a.Ab(5),a.cc("appTooltip",e),a.Ab(3),a.cc("appTooltip",n),a.Ab(3),a.cc("appTooltip",t)}}function u(e,n){if(1&e&&(a.Nb(0,"div"),a.Nb(1,"p"),a.mc(2,"What a mess!"),a.Mb(),a.Nb(3,"p"),a.mc(4,"You just want an apple and a banana. However, the delivery also includes old and dirty fruit. Now use all previously learned operators "),a.Nb(5,"code",6),a.mc(6,"filter"),a.Mb(),a.mc(7,", "),a.Nb(8,"code",6),a.mc(9,"map"),a.Mb(),a.mc(10," and "),a.Nb(11,"code",6),a.mc(12,"take"),a.Mb(),a.mc(13," one after the other in the pipe function."),a.Mb(),a.Mb()),2&e){a.Zb();const e=a.ec(6),n=a.ec(12),t=a.ec(18);a.Ab(5),a.cc("appTooltip",e),a.Ab(3),a.cc("appTooltip",n),a.Ab(3),a.cc("appTooltip",t)}}const d=[{path:"",component:(()=>{class e{constructor(e,n){this.exerciseService=e,this.translateService=n,this.exerciseTitle="filter-map-take",this.filterCode="\nconst source = from([1, 2, 3, 4, 5]);\nsource.pipe(\n  filter(data => data === 3)\n).subscribe({\n  next: data => console.log(data)\n});\n\n// Logs:\n// 3\n  ",this.mapCode="\nconst source = from([1, 2, 3, 4, 5]);\nsource.pipe(\n  map(data => 'My Number is ' + data)\n).subscribe({\n  next: data => console.log(data)\n});\n\n// Logs:\n// My Number is 1\n// My Number is 2\n// My Number is 3\n// My Number is 4\n// My Number is 5\n    ",this.takeCode="\nconst intervalCount = interval(1000);\nintervalCount.pipe(\n  take(5)\n).subscribe({\n  next: x => console.log(x)\n});\n\n// Logs:\n// 0\n// 1\n// 2\n// 3\n// 4\n      ",this.currentLanguage=""}ngOnInit(){this.exerciseService.newExercise(new c),this.currentLanguage=this.translateService.currentLang,this.onLangChangeSubscription=this.translateService.onLangChange.subscribe({next:()=>{this.currentLanguage=this.translateService.currentLang}})}ngOnDestroy(){this.onLangChangeSubscription.unsubscribe()}}return e.\u0275fac=function(n){return new(n||e)(a.Kb(o.a),a.Kb(r.d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-filter-map-take"]],decls:23,vars:9,consts:[[4,"ngIf"],[1,"tooltip","codeTooltip"],["filterCodeTooltip",""],[3,"highlight"],["mapCodeTooltip",""],["takeCodeTooltip",""],[1,"help",3,"appTooltip"]],template:function(e,n){1&e&&(a.Nb(0,"h3"),a.mc(1),a.ac(2,"translate"),a.Mb(),a.lc(3,l,14,3,"div",0),a.lc(4,u,14,3,"div",0),a.Nb(5,"div",1,2),a.Nb(7,"pre"),a.mc(8,"        "),a.Lb(9,"code",3),a.mc(10,"\n    "),a.Mb(),a.Mb(),a.Nb(11,"div",1,4),a.Nb(13,"pre"),a.mc(14,"        "),a.Lb(15,"code",3),a.mc(16,"\n    "),a.Mb(),a.Mb(),a.Nb(17,"div",1,5),a.Nb(19,"pre"),a.mc(20,"        "),a.Lb(21,"code",3),a.mc(22,"\n    "),a.Mb(),a.Mb()),2&e&&(a.Ab(1),a.pc("",a.bc(2,7,"EXERCISES.EXERCISETITLE"),": ",n.exerciseTitle,""),a.Ab(2),a.cc("ngIf","de"===n.currentLanguage),a.Ab(1),a.cc("ngIf","en"===n.currentLanguage),a.Ab(5),a.cc("highlight",n.filterCode),a.Ab(6),a.cc("highlight",n.mapCode),a.Ab(6),a.cc("highlight",n.takeCode))},directives:[s.j,b.b,p.a],pipes:[r.c],styles:[""]}),e})()}];let m=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[i.b.forChild(d)],i.b]}),e})();var h=t("PCNd");let f=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(n){return new(n||e)},imports:[[h.a,m]]}),e})()}}]);