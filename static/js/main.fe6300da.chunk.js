(this["webpackJsonpfr-2"]=this["webpackJsonpfr-2"]||[]).push([[0],{41:function(t,e,o){},42:function(t,e,o){},53:function(t,e,o){},55:function(t,e,o){},56:function(t,e,o){},57:function(t,e,o){"use strict";o.r(e);var n=o(14),s=o.n(n),a=o(32),i=o.n(a),c=(o(41),o(5)),r=o(6),l=o(9),d=o(10),u=(o(42),o(33)),h=o.n(u),j=o(7),p=o(31),b=(o(52),o(22)),g=o(16),f=o(2),m=o(58),O=(o(53),o(8)),v=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).handleChange=function(t){n.setState(Object(f.a)({},t.target.name,t.target.value))},n.handleSubmit=function(t){t.preventDefault(),n.props.createTodo(Object(b.a)(Object(b.a)({},n.state),{},{id:Object(m.a)(),isCompleted:!1})),n.setState({task:""})},n.state={task:""},n}return Object(r.a)(o,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:"NewTodo",onSubmit:this.handleSubmit,children:[Object(O.jsx)("input",{type:"text",name:"task",id:"task",value:this.state.task,onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",children:"add todo"})]})}}]),o}(n.Component),C=(o(55),function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(t){var n;return Object(c.a)(this,o),(n=e.call(this,t)).handleRemove=function(t){n.props.remove(n.props.id)},n.toggleEdit=function(t){n.setState({isEditing:!n.state.isEditing})},n.handleChange=function(t){n.setState(Object(f.a)({},t.target.name,t.target.value))},n.handleUpdate=function(t){t.preventDefault(),n.props.update(n.props.id,n.state.task),n.setState({isEditing:!1})},n.handleToggle=function(t){n.props.toggleCompletion(n.props.id)},n.state={isEditing:!1,task:n.props.task},n}return Object(r.a)(o,[{key:"render",value:function(){return this.state.isEditing?Object(O.jsx)("div",{className:"Todo",children:Object(O.jsxs)("form",{className:"Todo-edit",onSubmit:this.handleUpdate,children:[Object(O.jsx)("input",{type:"text",placeholder:"edit Todo",value:this.state.task,name:"task",onChange:this.handleChange}),Object(O.jsx)("button",{type:"submit",children:"Todo"})]})}):Object(O.jsxs)("div",{className:"Todo",children:[Object(O.jsx)("div",{className:"div-todo-task",children:Object(O.jsx)("li",{onClick:this.handleToggle,className:this.props.isCompleted?"Todo-Task completed":"Todo-Task",children:this.props.task})}),Object(O.jsxs)("div",{className:"Todo-buttons",children:[Object(O.jsx)("button",{onClick:this.handleToggle,className:"editbuttons",children:"Done"}),Object(O.jsx)("button",{onClick:this.toggleEdit,className:"editbuttons",children:"Edit"}),Object(O.jsx)("button",{onClick:this.handleRemove,className:"editbuttons",children:"Delete"})]})]})}}]),o}(n.Component)),k=(o(56),function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(t){var n;if(Object(c.a)(this,o),(n=e.call(this,t)).str="",n.create=function(t){n.setState({todos:[].concat(Object(g.a)(n.state.todos),[t])},(function(){return n.toLocal()}))},n.remove=function(t){n.setState({todos:n.state.todos.filter((function(e){return e.id!==t}))},(function(){return n.toLocal()}))},n.removeall=function(){n.setState({todos:[]}),localStorage.setItem("todos","")},n.update=function(t,e){n.setState({todos:n.state.todos.map((function(o){return o.id===t?Object(b.a)(Object(b.a)({},o),{},{task:e}):(n.toLocal(),o)}))},(function(){return n.toLocal()}))},n.toggleCompletion=function(t){n.setState({todos:n.state.todos.map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),{},{isCompleted:!e.isCompleted}):e}))},(function(){return n.toLocal()}))},localStorage.getItem("todos")){n.str=localStorage.getItem("todos");var s=n.str.split("_##_");console.log(s);for(var a=[],i=!1,r=1;r<s.length-1;r+=3)i="true"===s[r+2],a.push({task:s[r],id:s[r+1],isCompleted:i});n.state={todos:a}}else n.state={todos:[]};return console.log("todos:"),console.log(localStorage.getItem("todos")),n}return Object(r.a)(o,[{key:"toLocal",value:function(){var t=this;this.str="",this.state.todos.forEach((function(e){t.str=t.str+"_##_"+e.task+"_##_"+e.id+"_##_"+e.isCompleted})),localStorage.setItem("todos",this.str),console.log("todos:"),console.log(localStorage.getItem("todos"))}},{key:"render",value:function(){var t=this;return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsxs)("h1",{children:["TODO LIST ! ",Object(O.jsx)("br",{})," ",Object(O.jsx)("button",{className:"delete_all_button",onClick:this.removeall,children:" delete all "})]}),Object(O.jsx)("ul",{children:this.state.todos.map((function(e){return Object(O.jsx)(C,{task:e.task,id:e.id,remove:t.remove,update:t.update,isCompleted:e.isCompleted,toggleCompletion:t.toggleCompletion},e.id)}))}),Object(O.jsx)(v,{createTodo:this.create})]})}}]),o}(n.Component));j.a.initializeApp({apiKey:"AIzaSyDH0wlLijau6UafxoiRV_wOQqex6w662rU",authDomain:"fr-2-f5e02.firebaseapp.com",projectId:"fr-2-f5e02",storageBucket:"fr-2-f5e02.appspot.com",messagingSenderId:"790807060993",appId:"1:790807060993:web:3d410e57a82dddeb939600"});var x=function(t){Object(l.a)(o,t);var e=Object(d.a)(o);function o(){var t;Object(c.a)(this,o);for(var n=arguments.length,s=new Array(n),a=0;a<n;a++)s[a]=arguments[a];return(t=e.call.apply(e,[this].concat(s))).state={isSignedIn:!1},t.uiConfig={signInFlow:"popup",signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID,p.auth.AnonymousAuthProvider.PROVIDER_ID],callbacks:{signInSuccess:function(){return!1}}},t.componentDidMount=function(){j.a.auth().onAuthStateChanged((function(e){t.setState({isSignedIn:!!e}),console.log("user",e)}))},t.singOutfromapp=function(){localStorage.setItem("todos",""),j.a.auth().signOut()},t}return Object(r.a)(o,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:this.state.isSignedIn?Object(O.jsxs)("span",{children:[Object(O.jsxs)("div",{className:"singin_div",children:[Object(O.jsx)("div",{children:"You are already sign in"}),Object(O.jsx)("button",{onClick:this.singOutfromapp,className:"signout_btn",children:"Sign out"})]}),Object(O.jsx)(k,{})]}):Object(O.jsx)(h.a,{uiConfig:this.uiConfig,firebaseAuth:j.a.auth()})})}}]),o}(n.Component),S=x,I=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,59)).then((function(e){var o=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;o(t),n(t),s(t),a(t),i(t)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),I()}},[[57,1,2]]]);
//# sourceMappingURL=main.fe6300da.chunk.js.map