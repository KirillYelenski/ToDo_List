document.addEventListener("DOMContentLoaded",(function(){let e=document.getElementById("todo-app"),t=function(e){let t=document.createElement("h2");return t.innerHTML="Список дел",t}(),n=function(){let e=document.createElement("form"),t=document.createElement("input"),n=document.createElement("div"),d=document.createElement("button");return e.classList.add("input-group","mb-3"),t.classList.add("form-control"),t.placeholder="Введите название нового дела",n.classList.add("input-group-append"),d.classList.add("btn","btn-primary"),d.textContent="Добавить дело",n.append(d),e.append(t),e.append(n),{form:e,input:t,button:d}}(),d=function(){let e=document.createElement("ul");return e.classList.add("list-group"),e}();e.append(t),e.append(n.form),e.append(d)}));