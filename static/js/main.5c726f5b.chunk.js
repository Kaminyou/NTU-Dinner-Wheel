(this["webpackJsonpaetherai-lunch"]=this["webpackJsonpaetherai-lunch"]||[]).push([[0],{22:function(t){t.exports=JSON.parse('{"SPREADSHEET_ID":"1JBg4qa6kiJcExqgJ5cDT8uylpQMO35BysL6n5233HLg","SHEET_NAME":"restaurant","UP_DURATION":100,"DOWN_DURATION":500,"COLOR_PALETTE":["#ff9900","#b36b00","#ffe6bf","#ffcc80","#00b366","#007d48","#bfffe4","#80ffc9","#400099","#2d006b","#dabfff","#b580ff"]}')},59:function(t,e,n){},60:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(4),o=n.n(c),r=(n(59),n(60),n(10)),l=n(48),s=n.n(l),u=n(52),h=n(107),f=n(112),d=n(109),b=n(111),g=n(5);function j(t){var e=t.restaurantListList,n=t.setListName,i=t.currentListName,c=Object(u.a)({palette:{primary:{main:"#49513C"}}}),o=Object(a.useState)(null),l=Object(r.a)(o,2),s=l[0],j=l[1],O=Boolean(s),v=function(t,e){j(null),n(t)};return Object(g.jsxs)(h.a,{theme:c,children:[Object(g.jsx)(f.a,{id:"basic-button",color:"primary",variant:"contained",onClick:function(t){j(t.currentTarget)},style:{textTransform:"none"},children:i}),Object(g.jsx)(d.a,{id:"basic-menu",anchorEl:s,open:O,onClose:v,MenuListProps:{"aria-labelledby":"basic-button"},children:e.map((function(t){return Object(g.jsx)(b.a,{onClick:function(e){return v(t)},children:t})}))})]})}var O=function(t){var e=t.segments,n=t.segColors,i=t.winningSegment,c=t.onFinished,o=t.primaryColor,l=void 0===o?"black":o,s=t.contrastColor,u=void 0===s?"white":s,h=t.buttonText,f=void 0===h?"Spin":h,d=t.isOnlyOnce,b=void 0===d||d,j=t.size,O=void 0===j?290:j,v=t.upDuration,m=void 0===v?100:v,p=t.downDuration,x=void 0===p?500:p,E=t.fontFamily,T=void 0===E?"proxima-nova":E,S="",y=!1,P=Object(a.useState)(!1),I=Object(r.a)(P,2),M=I[0],A=I[1],L=0,D=e.length,k=0,w=0,C=null,N=Math.PI/"".concat(e.length),B=e.length*m,_=e.length*x,R=0,F=0,U=300,W=300;Object(a.useEffect)((function(){return J(),setTimeout((function(){window.scrollTo(0,1)}),0),function(){document.getElementById("canvas").removeEventListener("click",q)}}),[e]);var J=function(){S="",y=!1,A(!1),L=0,D=e.length,C=null,N=Math.PI/"".concat(e.length),B=e.length*m,_=e.length*x,R=0,F=0,H(),Q()},H=function(){var t=document.getElementById("canvas");console.log(navigator),-1!==navigator.userAgent.indexOf("MSIE")&&((t=document.createElement("canvas")).setAttribute("width",1e3),t.setAttribute("height",600),t.setAttribute("id","canvas"),document.getElementById("wheel").appendChild(t)),t.addEventListener("click",q,!1),C=t.getContext("2d")},q=function(){y=!0,0===L&&(R=(new Date).getTime(),N=Math.PI/e.length,F=0,L=setInterval(z,D))},z=function(){F++,Q();var t=(new Date).getTime()-R,n=0,a=!1;for(t<B?(n=t/B,w=N*Math.sin(n*Math.PI/2)):(i&&S===i&&F>e.length?(n=t/B,w=N*Math.sin(n*Math.PI/2+Math.PI/2),n=1):(n=t/_,w=N*Math.sin(n*Math.PI/2+Math.PI/2)),n>=1&&(a=!0)),k+=w;k>=2*Math.PI;)k-=2*Math.PI;a&&(A(!0),c(S),clearInterval(L),L=0,w=0)},Q=function(){X(),K(),V()},G=function(t,a,i){var c=C,o=e[t];c.save(),c.beginPath(),c.moveTo(U,W),c.arc(U,W,O,a,i,!1),c.lineTo(U,W),c.closePath(),c.fillStyle=n[t],c.fill(),c.stroke(),c.save(),c.translate(U,W),c.rotate((a+i)/2),c.fillStyle=u,c.font="bold 1em "+T,c.fillText(o.substr(0,21),O/2+20,0),c.restore()},K=function(){var t=C,n=k,a=e.length,i=2*Math.PI;t.lineWidth=1,t.strokeStyle=l,t.textBaseline="middle",t.textAlign="center",t.font="1em "+T;for(var c=1;c<=a;c++){var o=i*(c/a)+k;G(c-1,n,o),n=o}t.beginPath(),t.arc(U,W,50,0,i,!1),t.closePath(),t.fillStyle=l,t.lineWidth=10,t.strokeStyle=u,t.fill(),t.font="bold 1em "+T,t.fillStyle=u,t.textAlign="center",t.fillText(f,U,303),t.stroke(),t.beginPath(),t.arc(U,W,O,0,i,!1),t.closePath(),t.lineWidth=10,t.strokeStyle=l,t.stroke()},V=function(){var t=C;t.lineWidth=1,t.strokeStyle=u,t.fileStyle=u,t.beginPath(),t.moveTo(320,250),t.lineTo(280,250),t.lineTo(U,230),t.closePath(),t.fill();var n=k+Math.PI/2,a=e.length-Math.floor(n/(2*Math.PI)*e.length)-1;a<0&&(a+=e.length),t.textAlign="center",t.textBaseline="middle",t.fillStyle=l,t.font="bold 1.5em "+T,S=e[a],y&&t.fillText(S,310,W+O+50)},X=function(){C.clearRect(0,0,1e3,800)};return Object(g.jsx)("div",{id:"wheel",children:Object(g.jsx)("canvas",{id:"canvas",width:"600",height:"600",style:{pointerEvents:M&&b?"none":"auto"}})})},v=n(22);var m=function(){var t=Object(a.useState)(!0),e=Object(r.a)(t,2),n=e[0],i=e[1],c=Object(a.useState)(""),o=Object(r.a)(c,2),l=o[0],u=o[1],h=Object(a.useState)([]),f=Object(r.a)(h,2),d=f[0],b=f[1],m=Object(a.useState)([]),p=Object(r.a)(m,2),x=p[0],E=p[1],T=Object(a.useState)([]),S=Object(r.a)(T,2),y=S[0],P=S[1],I=Object(a.useState)([]),M=Object(r.a)(I,2),A=M[0],L=M[1],D=v.COLOR_PALETTE,k=function(){var t=[];x.length>0&&b(Object.keys(x[0])),x.forEach((function(e){l in e&&""!==e[l]&&t.push(e[l])})),P(t);var e=Math.ceil(t.length/D.length);L(function(t,e){return Array.from({length:e},(function(){return t})).flat()}(D,e))};return Object(a.useEffect)((function(){s.a.get("https://opensheet.vercel.app/".concat(v.SPREADSHEET_ID,"/").concat(v.SHEET_NAME)).then((function(t){E(t.data),u(Object.keys(t.data[0])[0])})).catch((function(t){i(!1),console.error(t)}))}),[]),Object(a.useEffect)((function(){P([]),k()}),[x,l]),y.length>0?Object(g.jsxs)("div",{className:"wheelwrapper",children:[Object(g.jsx)(j,{restaurantListList:d,setListName:u,currentListName:l}),Object(g.jsx)(O,{segments:y,segColors:A,onFinished:function(t){return function(t){console.log(t)}(t)},primaryColor:"black",contrastColor:"white",buttonText:"Spin",isOnlyOnce:!1,size:200,upDuration:v.UP_DURATION,downDuration:v.DOWN_DURATION,fontFamily:"Arial"})]}):n?Object(g.jsx)("p",{children:"Loading ..."}):Object(g.jsx)("p",{children:"Error!"})};var p=function(){return Object(g.jsx)("div",{className:"App",children:Object(g.jsxs)("header",{className:"App-header",children:[Object(g.jsx)("h1",{children:"NTU Wheel of Dinner"}),Object(g.jsx)(m,{})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(p,{})}),document.getElementById("root")),x()}},[[83,1,2]]]);
//# sourceMappingURL=main.5c726f5b.chunk.js.map