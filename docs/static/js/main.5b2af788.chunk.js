(this.webpackJsonppresupuesto=this.webpackJsonppresupuesto||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),c=(a(14),a(8)),o=a(1),u=function(e){var t=e.mensaje;return r.a.createElement("p",{className:"alert alert-danger error"},t)},m=function(e){var t=e.guardarPresupuesto,a=e.guardarRestante,l=e.setMostrar,s=Object(n.useState)(0),c=Object(o.a)(s,2),m=c[0],i=c[1],p=Object(n.useState)(!1),E=Object(o.a)(p,2),d=E[0],b=E[1];return r.a.createElement(n.Fragment,null,r.a.createElement("h2",null,"Coloca tu presupuesto"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m<1||isNaN(m)?b(!0):(b(!1),t(m),a(m),l(!1))}},d?r.a.createElement(u,{mensaje:"El presupuesto es incorrecto"}):null,r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"500000",onChange:function(e){i(parseInt(e.target.value))}}),r.a.createElement("button",{type:"submit",className:"button-primary u-full-width"},"Definir presupuesto")))},i=a(7),p=a.n(i),E=function(e){var t=e.setGasto,a=e.setCrearGasto,l=Object(n.useState)(""),s=Object(o.a)(l,2),c=s[0],m=s[1],i=Object(n.useState)(0),E=Object(o.a)(i,2),d=E[0],b=E[1],v=Object(n.useState)(!1),f=Object(o.a)(v,2),g=f[0],h=f[1];return r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),d<1||isNaN(d)||""===c.trim())h(!0);else{h(!1);var n={nombre:c,valor:d,id:p.a.generate()};t(n),a(!0),m(""),b(0)}}},r.a.createElement("h2",null,"Agrega tus gastos aqu\xed:"),g?r.a.createElement(u,{mensaje:"Revisa los valores ingresados"}):null,r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Nombre gasto:"),r.a.createElement("input",{type:"text",className:"u-full-width",placeholder:"Almuerzo",value:c,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"campo"},r.a.createElement("label",null,"Valor gasto:"),r.a.createElement("input",{type:"number",className:"u-full-width",placeholder:"10000",value:d,onChange:function(e){return b(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"button-primary u-full-width"},"Agregar gasto"))},d=function(e){var t=e.gasto;return r.a.createElement("li",null,r.a.createElement("p",null,t.nombre,r.a.createElement("span",{className:"gasto"},t.valor)))},b=function(e){var t=e.gastos;return r.a.createElement("div",{className:"gastos-realizados"},r.a.createElement("h2",null,"Lista de tus gastos"),t.map((function(e){return r.a.createElement(d,{key:e.id,gasto:e})})))},v=function(e,t){return e/4>t?"alert alert-danger":e/2>t?"alert alert-warning":"alert alert-success"},f=function(e){var t=e.presupuesto,a=e.restante;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement("div",{className:"alert alert-primary"},"Presupuesto: $",t)),r.a.createElement("div",{className:"one-half column"},r.a.createElement("div",{className:v(t,a)},"Restante: $",a))))};var g=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(0),u=Object(o.a)(s,2),i=u[0],p=u[1],d=Object(n.useState)(!0),v=Object(o.a)(d,2),g=v[0],h=v[1],j=Object(n.useState)([]),N=Object(o.a)(j,2),O=N[0],w=N[1],S=Object(n.useState)({}),y=Object(o.a)(S,2),C=y[0],k=y[1],G=Object(n.useState)(!1),R=Object(o.a)(G,2),A=R[0],D=R[1];return Object(n.useEffect)((function(){A&&(w([].concat(Object(c.a)(O),[C])),p(i-C.valor),D(!1))}),[C,O,A,i]),r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"Gasto Semanal"),r.a.createElement("div",{className:"contenido-principal contenido"},g?r.a.createElement(m,{guardarPresupuesto:l,guardarRestante:p,setMostrar:h}):r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-half column"},r.a.createElement(E,{setGasto:k,setCrearGasto:D})),r.a.createElement("div",{className:"one-half column"},r.a.createElement(b,{gastos:O}),r.a.createElement(f,{presupuesto:a,restante:i}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(23)}},[[9,1,2]]]);
//# sourceMappingURL=main.5b2af788.chunk.js.map