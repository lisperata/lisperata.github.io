(this["webpackJsonppost-app"]=this["webpackJsonppost-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),o=(n(16),n(7)),c=n(6),s=n(2),u=n(3),m=n(1),d=n(5),b=n(4),f=(n(17),function(e){var t=e.liked,n=e.allPosts;return r.a.createElement("div",{className:"app-header d-flex"},r.a.createElement("h1",null,"Nataliia Kirinovich"),r.a.createElement("h2",null,n," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",t))}),p=(n(18),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(a.Component)),h=(n(19),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,l=e.props,i=l.filter,o=l.onFilterSelect,c=i===n?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{type:"button",className:"btn ".concat(c),key:n,onClick:function(){return o(n)}},a)}));return r.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component)),g=n(10),v=(n(20),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onToggleImportant,l=e.onToggleLiked,i="app-list-item d-flex justify-content-between";return e.important&&(i+=" important"),e.like&&(i+=" like"),r.a.createElement("div",{className:i},r.a.createElement("span",{className:"app-list-item-label",onClick:l},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),n}(a.Component)),k=(n(21),function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,l=e.onToggleLiked,i=t.map((function(e){var t=e.id,i=Object(g.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(v,Object.assign({},i,{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return l(t)}})))}));return r.a.createElement("ul",{className:"app-list list-group"},i)}),j=(n(22),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return r.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"\u041e \u0447\u0451\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(a.Component)),O=(n(23),function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(m.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(m.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(m.a)(a)),a.maxId=4,a}return Object(u.a)(n,[{key:"deleteItem",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e}));return{data:[].concat(Object(c.a)(n.slice(0,a)),Object(c.a)(n.slice(a+1)))}}))}},{key:"addItem",value:function(e){var t={label:e,important:!1,id:this.maxId++};this.setState((function(e){var n=e.data;return{data:[].concat(Object(c.a)(n),[t])}}))}},{key:"onToggleImportant",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],l=Object(o.a)(Object(o.a)({},r),{},{important:!r.important});return{data:[].concat(Object(c.a)(n.slice(0,a)),[l],Object(c.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],l=Object(o.a)(Object(o.a)({},r),{},{like:!r.like});return{data:[].concat(Object(c.a)(n.slice(0,a)),[l],Object(c.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter((function(e){return e.like})):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,l=t.filter((function(e){return e.like})).length,i=t.length,o=this.filterPost(this.searchPost(t,n),a);return r.a.createElement("div",{className:"app"},r.a.createElement(f,{liked:l,allPosts:i}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(p,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(h,{filter:a,onFilterSelect:this.onFilterSelect})),r.a.createElement(k,{posts:o,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),r.a.createElement(j,{onAdd:this.addItem}))}}]),n}(a.Component));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.cfc2e31e.chunk.js.map