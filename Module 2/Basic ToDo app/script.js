let task=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("ul");

btn.addEventListener("click", function(){
    let todo=document.createElement("li")
    todo.innerText=task.value;
    list.append(todo);
})