(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{192:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a.n(n),s=a(8),o=a.n(s),i=(a(90),a(27)),l=a.n(i),d=a(50),j=a(28),h=(a(92),a(251)),u=a(250),b=a(242),v=a(249),O=a(235),x=a(238),m=a(240),f=a(241);var p=function(e){var t=Object(O.a)({root:{minWidth:250,textAlign:"center"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:6}})();return Object(c.jsx)("div",{children:Object(c.jsx)(x.a,{className:t.root,children:Object(c.jsxs)(m.a,{children:[Object(c.jsx)(f.a,{className:t.pos,color:"textSecondary",children:e.label}),Object(c.jsx)(f.a,{className:t.pos,variant:"h5",component:"h2",children:e.today+" today"}),Object(c.jsx)(f.a,{className:t.pos,color:"textSecondary",children:e.total+" total"})]})})})},y=a(79),g=a(244),C=a(248),N=a(247),w=a(243),k=a(245),S=a(246),R=a(193);var D=function(){var e=Object(n.useState)({}),t=Object(j.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)([]),i=Object(j.a)(o,2),x=i[0],m=i[1],f=Object(n.useState)("worldwide"),D=Object(j.a)(f,2),A=D[0],B=D[1],W=Object(n.useState)([]),E=Object(j.a)(W,2),F=E[0],I=E[1],T=r.a.useState(0),J=Object(j.a)(T,2),L=(J[0],J[1],r.a.useState(10)),P=Object(j.a)(L,2);P[0],P[1],Object(n.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}}));m(t);var a=e.map((function(e){return{name:e.country,active:e.active}}));I(a)}));case 2:return e.next=4,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){s(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var z=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(B(t.target.value),"worldwide"!==t.target.value){e.next=6;break}return e.next=4,fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){s(e)}));case 4:e.next=8;break;case 6:return e.next=8,H(t.target.value);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries/"+t).then((function(e){return e.json()})).then((function(e){console.log(e),s(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=Object(O.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:150},selectEmpty:{marginTop:e.spacing(2)},table:{minWidth:500},root:{width:"100%"},container:{maxHeight:300}}}))();return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"title-and-cards",children:[Object(c.jsx)("div",{className:"title",children:"COVID-19 TRACKER"}),Object(c.jsxs)("div",{className:"country-select",children:[Object(c.jsx)(h.a,{children:"Country"}),Object(c.jsx)(b.a,{variant:"outlined",className:K.formControl,children:Object(c.jsxs)(v.a,{value:A,onChange:z,label:"Country",children:[Object(c.jsx)(u.a,{value:"worldwide",children:"Worldwide"}),x.map((function(e){return Object(c.jsx)(u.a,{value:e.value,children:e.name})}))]})})]})]}),Object(c.jsxs)("div",{className:"cards",children:[Object(c.jsx)("div",{className:"total-cases card",children:Object(c.jsx)(p,{label:"Covid Cases",today:a.todayCases,total:a.cases})}),Object(c.jsx)("div",{className:"total-recovered card",children:Object(c.jsx)(p,{label:"Recovered",today:a.todayRecovered,total:a.recovered})}),Object(c.jsx)("div",{className:"total-deaths card",children:Object(c.jsx)(p,{label:"Deaths",today:a.todayDeaths,total:a.deaths})})]}),Object(c.jsxs)("div",{className:"charts-and-table",children:[Object(c.jsxs)("div",{className:"charts",children:[Object(c.jsx)("h2",{children:"Covid data chart"}),Object(c.jsx)(y.Bar,{data:{labels:["Cases","Cases today","Recovered","Recovered today","Deaths","Deaths today"],datasets:[{label:"Covid tracking",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[a.cases,a.todayCases,a.recovered,a.todayRecovered,a.deaths,a.todayDeaths]}]},width:500,height:200,options:{maintainAspectRatio:!1}})]}),Object(c.jsxs)("div",{className:"table",children:[Object(c.jsx)("h2",{children:"Active cases by country"}),Object(c.jsx)(R.a,{className:K.root,children:Object(c.jsx)(w.a,{className:K.container,children:Object(c.jsxs)(g.a,{className:K.table,"aria-label":"simple table",children:[Object(c.jsx)(k.a,{children:Object(c.jsxs)(S.a,{children:[Object(c.jsx)(N.a,{children:"Country"}),Object(c.jsx)(N.a,{align:"center",children:"Active cases"})]})}),Object(c.jsx)(C.a,{children:F.map((function(e){return Object(c.jsxs)(S.a,{children:[Object(c.jsx)(N.a,{component:"th",scope:"row",children:e.name}),Object(c.jsx)(N.a,{align:"center",children:e.active})]},e.name)}))})]})})})]})]})]})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,253)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(D,{})}),document.getElementById("root")),A()},90:function(e,t,a){},92:function(e,t,a){}},[[192,1,2]]]);
//# sourceMappingURL=main.a89784b4.chunk.js.map