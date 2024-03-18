(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&d(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function d(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const v=`
<section class="todoapp">
    <header class="header">
        <h1>Tareas</h1>
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>
    </header>
    
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <!-- These are here just to show the structure of the list items -->
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->
            <!-- <li class="completed" data-id="abc">
                <div class="view">
                    <input class="toggle" type="checkbox" checked>
                    <label>Probar JavaScript</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            </li> -->
            <!-- <li>
                <div class="view">
                    <input class="toggle" type="checkbox">
                    <label>Comprar un unicornio</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Rule the web">
            </li> -->
        </ul>
    </section>

    <!-- This footer should hidden by default and shown when there are todos -->
    <footer class="footer">
        <!-- This should be "0 items left" by default -->
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="filter" class="selected" href="#/">Todos</a>
            </li>
            <li>
                <a class="filter" href="#/active">Pendientes</a>
            </li>
            <li>
                <a class="filter" href="#/completed">Completados</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed">Borrar completados</button>
    </footer>
</section>


<footer class="info">
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    <!-- Change this out with your name and url ↓ -->
    <p>Creado por <a href="http://todomvc.com">ti</a></p>
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>
</footer>`;let y;const L=new Uint8Array(16);function S(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(L)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function C(e,t=0){return s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function P(e,t,i){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const d=e.random||(e.rng||S)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=d[o];return t}return C(d)}class A{constructor(t){this.id=P(),this.description=t,this.done=!1,this.createdAt=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},l={todos:[],filter:a.All},I=()=>{w(),console.log("InitStore ")},w=()=>{if(!localStorage.getItem("state"))return;const{todos:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));l.todos=e,l.filter=t},g=()=>{localStorage.setItem("state",JSON.stringify(l))},k=e=>{switch(e){case a.All:return[...l.todos];case a.Completed:return l.todos.filter(t=>t.done);case a.Pending:return l.todos.filter(t=>!t.done);default:throw new Error(`Option ${e} is no valid.`)}},U=e=>{if(!e)throw new Error("Description is required.");l.todos.push(new A(e)),g()},x=e=>{l.todos=l.todos.map(t=>(t.id===e&&(t.done=!t.done),t)),g()},D=e=>{l.todos=l.todos.filter(t=>t.id!==e),g()},O=()=>{l.todos=l.todos.filter(e=>!e.done),g()},q=(e=a.All)=>{l.filter=e,g()},F=()=>l.filter,c={initStore:I,loadStore:w,getTodos:k,addTodo:U,toggleTodo:x,deleteTodo:D,deleteCompleted:O,setFilter:q,getCurrentFilter:F},M=e=>{if(!e)throw new Error("A TODO object is required.");const{done:t,description:i,id:d}=e,o=`
        <div class="view">
            <input class="toggle" type="checkbox" ${t?"checked":""}>
            <label>${i}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    
`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",d),e.done&&n.classList.add("completed"),n};let b;const N=e=>{if(b||(b=document.querySelector(e)),!b)throw new Error(`Element ${e} not found.`);b.innerHTML=c.getTodos(a.Pending).length};let h;const H=(e,t=[])=>{if(!h&&(h=document.querySelector(e),!h))throw new Error(`Element ${e} not found.`);h.innerHTML="",t.forEach(i=>{h.append(M(i))})},m={clearCompletedButton:".clear-completed",TodoList:".todo-list",NewTodoInput:"#new-todo-input",TodoFilters:".filter",PendingCountLabel:"#pending-count"},V=e=>{const t=r=>{const u=c.getTodos(c.getCurrentFilter());H(m.TodoList,u),i()},i=()=>{N(m.PendingCountLabel)};(()=>{const r=document.createElement("div");r.innerHTML=v,document.querySelector(e).append(r),t()})();const d=document.querySelector(m.NewTodoInput),o=document.querySelector(m.TodoList),n=document.querySelector(m.clearCompletedButton),p=document.querySelectorAll(m.TodoFilters);d.addEventListener("keyup",r=>{r.keyCode===13&&r.target.value.trim().length!==0&&(c.addTodo(r.target.value),t(),r.target.value="")}),o.addEventListener("click",r=>{const u=r.target.closest("[data-id]");c.toggleTodo(u.getAttribute("data-id")),t()}),o.addEventListener("click",r=>{const u=r.target.className==="destroy",f=r.target.closest("[data-id]");!f||!u||(c.deleteTodo(f.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{c.deleteCompleted(),t()}),p.forEach(r=>{r.addEventListener("click",u=>{switch(p.forEach(f=>f.classList.remove("selected")),u.target.classList.add("selected"),u.target.text){case"Todos":c.setFilter(a.All);break;case"Pendientes":c.setFilter(a.Pending);break;case"Completados":c.setFilter(a.Completed);break}t()})})};c.initStore();V("#app");
