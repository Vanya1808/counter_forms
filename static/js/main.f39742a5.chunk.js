(this.webpackJsonpcounter_forms=this.webpackJsonpcounter_forms||[]).push([[0],[,,function(e,t,n){e.exports={title:"Counter_title__3fTsB",counterWrapper:"Counter_counterWrapper__L_bo6",incrementBtn:"Counter_incrementBtn__1s5PL",decrementBtn:"Counter_decrementBtn__2O8yk",counter:"Counter_counter__3fq7V"}},function(e,t,n){e.exports={cardWrapper:"Card_cardWrapper__135y7",cardImage:"Card_cardImage__3cxR0",cardTitle:"Card_cardTitle__3G1kk",cardDesk:"Card_cardDesk__2fWpU"}},,,,,,,function(e){e.exports=JSON.parse('[{"id":"1","count":0,"step":1,"min":1,"max":5,"img":"https://images.pexels.com/photos/2661790/pexels-photo-2661790.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","title":"Strawberry","price":"50","desk":"Sweet strawberry"},{"id":"2","count":2,"step":2,"min":2,"max":20,"img":"https://images.pexels.com/photos/2254063/pexels-photo-2254063.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","title":"Blackberry","price":"100","desk":"Sweet bleckberry"},{"id":"3","count":2,"step":1,"min":2,"max":40,"img":"https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","title":"Pepper ","price":"75","desk":"Green pepper"},{"id":"4","count":10,"step":1,"min":10,"max":50,"img":"https://images.pexels.com/photos/2288692/pexels-photo-2288692.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260","title":"Melon","price":"125","desk":"Just melon..."}]')},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n.n(c),a=n(9),o=n.n(a),i=(n(16),n(17),n(4)),p=n(5),m=n(7),u=n(6),l=n(3),d=n.n(l),j=n(2),h=n.n(j),b=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={count:e.props.count,step:e.props.step,min:e.props.min,max:e.props.max},e.handleDecrement=function(){var t=e.state,n=t.count,r=t.step,c=t.min;n>c&&e.setState((function(){return{count:n-r}}))},e.handleIncrement=function(){var t=e.state,n=t.count,r=t.step,c=t.max;n<c&&e.setState((function(){return{count:n+r}}))},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:h.a.title,children:"Counter"}),Object(r.jsxs)("div",{className:h.a.counterWrapper,children:[Object(r.jsx)("button",{className:h.a.decrementBtn,onClick:this.handleDecrement,children:"-"}),Object(r.jsx)("p",{className:h.a.counter,children:this.state.count}),Object(r.jsx)("button",{className:h.a.incrementBtn,onClick:this.handleIncrement,children:"+"})]})]})}}]),n}(c.Component),x=n(10),_=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:x.map((function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)("div",{className:d.a.cardWrapper,children:[Object(r.jsx)("img",{className:d.a.cardImage,src:e.img,alt:e.title}),Object(r.jsx)("h3",{className:d.a.cardTitle,children:e.title}),Object(r.jsx)("p",{className:d.a.cardDesk,children:e.desk}),Object(r.jsxs)("p",{children:["Price:",Object(r.jsx)("span",{children:e.price})]}),Object(r.jsx)(b,{count:e.count,step:e.step,min:e.min,max:e.max})]})},e.id)}))})}}]),n}(c.Component);var O=function(){return Object(r.jsx)("div",{className:"appWrapper",children:Object(r.jsx)(_,{})})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.f39742a5.chunk.js.map