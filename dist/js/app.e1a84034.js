(function(e){function t(t){for(var l,r,i=t[0],a=t[1],u=t[2],f=0,s=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],l=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(l=!1)}l&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var l={},o={app:0},c=[];function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var l=n("7a23"),o={id:"app"},c={class:"todoapp"},r={class:"header"},i=Object(l["e"])("h1",null,"update-todos",-1),a={class:"main"},u=Object(l["e"])("label",{for:"toggle-all"},"Mark all as complete",-1),d={class:"todo-list"},f={class:"view"},s={class:"footer"},p={class:"todo-count"},b={class:"filters"};function v(e,t,n,v,O,j){return Object(l["h"])(),Object(l["d"])("div",o,[Object(l["e"])("section",c,[Object(l["e"])("header",r,[i,Object(l["p"])(Object(l["e"])("input",{class:"new-todo",autocomplete:"off",placeholder:"What needs to be done?","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.newTodoRef=t}),onKeyup:t[2]||(t[2]=Object(l["q"])((function(){return e.addTodo.apply(e,arguments)}),["enter"]))},null,544),[[l["m"],e.newTodoRef]])]),Object(l["p"])(Object(l["e"])("section",a,[Object(l["p"])(Object(l["e"])("input",{id:"toggle-all",class:"toggle-all",type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.allDoneRef=t})},null,512),[[l["l"],e.allDoneRef]]),u,Object(l["e"])("ul",d,[(Object(l["h"])(!0),Object(l["d"])(l["a"],null,Object(l["j"])(e.filteredTodosRef,(function(t){return Object(l["h"])(),Object(l["d"])("li",{class:["todo",{completed:t.completed,editing:t===e.editingTodoRef}],key:t.id},[Object(l["e"])("div",f,[Object(l["p"])(Object(l["e"])("input",{class:"toggle",type:"checkbox","onUpdate:modelValue":function(e){return t.completed=e}},null,8,["onUpdate:modelValue"]),[[l["l"],t.completed]]),Object(l["e"])("label",{onDblclick:function(n){return e.editTodo(t)}},Object(l["k"])(t.title),41,["onDblclick"]),Object(l["e"])("button",{class:"destroy",onClick:function(n){return e.remove(t)}},null,8,["onClick"])]),Object(l["p"])(Object(l["e"])("input",{class:"edit",type:"text","onUpdate:modelValue":function(e){return t.title=e},onBlur:function(n){return e.doneEdit(t)},onKeyup:[Object(l["q"])((function(n){return e.doneEdit(t)}),["enter"]),Object(l["q"])((function(n){return e.cancelEdit(t)}),["escape"])]},null,40,["onUpdate:modelValue","onBlur","onKeyup"]),[[l["m"],t.title]])],2)})),128))])],512),[[l["n"],v.todosRef.length>0]]),Object(l["p"])(Object(l["e"])("footer",s,[Object(l["e"])("span",p,[Object(l["e"])("strong",null,Object(l["k"])(e.remainingRef),1),Object(l["e"])("span",null,"item"+Object(l["k"])(1===e.remainingRef?"":"s")+" left",1)]),Object(l["e"])("ul",b,[Object(l["e"])("li",null,[Object(l["e"])("a",{href:"#/all",class:{selected:"all"===e.visibilityRef}},"All",2)]),Object(l["e"])("li",null,[Object(l["e"])("a",{href:"#/active",class:{selected:"active"===e.visibilityRef}},"Active",2)]),Object(l["e"])("li",null,[Object(l["e"])("a",{href:"#/completed",class:{selected:"completed"===e.visibilityRef}},"Completed",2)])]),Object(l["p"])(Object(l["e"])("button",{class:"clear-completed",onClick:t[4]||(t[4]=function(){return e.removeCompleted.apply(e,arguments)})}," Clear completed ",512),[[l["n"],e.completedRef>0]])],512),[[l["n"],v.todosRef.length>0]])])])}var O=n("5530"),j=(n("4de4"),n("d3b7"),n("25f0"),"todomvc");function m(){return Date.now()+Math.random().toString(16).substr(2,4)}function h(){var e=localStorage.getItem(j);return e?JSON.parse(e):[]}function g(e){localStorage.setItem(j,JSON.stringify(e))}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";if("all"===t)return e;if("active"===t)return e.filter((function(e){return!e.completed}));if("completed"===t)return e.filter((function(e){return e.completed}));throw new Error("invalid visibility value")}function R(){var e=Object(l["i"])(h());return window.todosRef=e.value,Object(l["o"])((function(){g(e.value)})),{todosRef:e}}n("498a");function w(e){var t=Object(l["i"])(""),n=function(){var n=t.value&&t.value.trim();if(n){var l={id:m(),title:n,completed:!1};e.value.push(l),t.value=""}};return{newTodoRef:t,addTodo:n}}n("caad"),n("ac1f"),n("5319");var k=["all","active","completed"];function T(e){var t=Object(l["i"])("all"),n=function(){var e=location.hash.replace(/#\/?/,"");k.includes(e)?t.value=e:(location.hash="",t.value="all")};Object(l["f"])((function(){window.addEventListener("hashchange",n)})),Object(l["g"])((function(){window.removeEventListener("hashchange",n)}));var o=Object(l["b"])((function(){return y(e.value,t.value)})),c=Object(l["b"])((function(){return y(e.value,"active").length})),r=Object(l["b"])((function(){return y(e.value,"completed").length}));return{visibilityRef:t,filteredTodosRef:o,remainingRef:c,completedRef:r}}n("4160"),n("c975"),n("a434"),n("159b");function x(e,t){var n=Object(l["i"])(null),o=null,c=function(e){o=e.title,n.value=e},r=function(e){n.value=null;var l=e.title.trim();if(l)e.title=l;else{var o=t.value.indexOf(e);o>=0&&t.value.splice(o,1)}},i=function(e){n.value=null,e.title=o},a=Object(l["b"])({get:function(){return 0===e.value.filter((function(e){return!e.completed})).length},set:function(t){e.value.forEach((function(e){e.completed=t}))}});return{editingTodoRef:n,editTodo:c,doneEdit:r,cancelEdit:i,allDoneRef:a}}function S(e){var t=function(t){e.value.splice(e.value.indexOf(t),1)},n=function(){e.value=e.value.filter((function(e){return!e.completed}))};return{remove:t,removeCompleted:n}}var E={setup:function(){var e=R(),t=e.todosRef,n=T(t),l=n.filteredTodosRef;return Object(O["a"])(Object(O["a"])(Object(O["a"])(Object(O["a"])({todosRef:t},w(t)),T(t)),x(l,t)),S(t))}};E.render=v;var C=E;n("d940");Object(l["c"])(C).mount("#app")},d940:function(e,t,n){}});
//# sourceMappingURL=app.e1a84034.js.map