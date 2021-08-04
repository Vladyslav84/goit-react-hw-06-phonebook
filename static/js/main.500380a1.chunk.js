(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={filter:"Filter_filter__l3_Ce"}},2:function(t,e,n){t.exports={form:"ContactForm_form__2I3JH",formItem:"ContactForm_formItem__3Mrsr",btn:"ContactForm_btn__3G0AP",number:"ContactForm_number__1MVkn"}},23:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),s=(n(23),n(16)),i=n(10),l=n(12),u=n(13),b=n(17),m=n(15),d=n(9),j=n(2),f=n.n(j),h=n(28),p=n(0);var O=function(){var t=Object(a.useState)(""),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),o=Object(d.a)(r,2),s=o[0],i=o[1],l=function(t){var e=t.target,n=e.name,a=e.value;switch(n){case"name":c(a);break;case"number":i(a);break;default:return}},u=Object(h.a)(),b=Object(h.a)();return Object(p.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),console.log(n,s),n},className:f.a.form,children:[Object(p.jsx)("span",{children:"Name"}),Object(p.jsx)("label",{className:f.a.formItem,children:Object(p.jsx)("input",{autoComplete:"off",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:l,value:n,id:b})}),Object(p.jsx)("span",{className:f.a.number,children:"Number"}),Object(p.jsx)("label",{className:f.a.formItem,children:Object(p.jsx)("input",{autoComplete:"off",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:l,value:s,id:u})}),Object(p.jsx)("button",{type:"submit",className:f.a.btn,children:"Add contact"})]})},_=n(14),x=n.n(_),v=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:x.a.title,children:"Find contacts by name"}),Object(p.jsx)("label",{children:Object(p.jsx)("input",{type:"text",value:e,onChange:n})})]})},C=n(5),g=n.n(C),N=n(6),y=n.n(N),S=function(t){var e=t.contactsArr,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:g.a.contactList,children:e.map((function(t){return Object(p.jsxs)("li",{className:g.a.contactitem,children:[Object(p.jsxs)("span",{children:[t.name," ",t.number]}),Object(p.jsx)("button",{type:"button",className:g.a.btn,onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})};S.prototype={name:y.a.string.isRequired,number:y.a.string.isRequired,id:y.a.string.isRequired};var L=S,k=n(7),A=n.n(k),I=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filtered:""},t.formSubmithandler=function(e){if(console.log(e),t.state.contacts.some((function(t){return t.name===e.name})))alert("".concat(e.name," is already in contacts"));else{var n=Object(i.a)(Object(i.a)({},e),{},{id:Object(h.a)()});t.setState((function(t){return{contacts:[n].concat(Object(s.a)(t.contacts))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filt\u0435redValue=function(e){t.setState({filtered:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(t){this.state.contacts!==t.contacts&&localStorage.setItem("contactsList",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contactsList"));t&&this.setState({contacts:t})}},{key:"render",value:function(){var t=this.state.filtered.toLocaleLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t)}));return Object(p.jsxs)("div",{className:A.a.container,children:[Object(p.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(p.jsx)(O,{onSubmit:this.formSubmithandler}),Object(p.jsx)("h2",{className:A.a.title,children:"Contacts"}),Object(p.jsx)(v,{value:this.state.filtered,onChange:this.filt\u0435redValue}),Object(p.jsx)(L,{contactsArr:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={contactList:"ContactList_contactList__z51HV",btn:"ContactList_btn__ILbBY",contactitem:"ContactList_contactitem__1_iTh"}},7:function(t,e,n){t.exports={container:"App_container__3KJYo",title:"App_title__1Vph1"}}},[[27,1,2]]]);
//# sourceMappingURL=main.500380a1.chunk.js.map