const todoElm = document.querySelector("#todo");
const addBtn =  document.querySelector("#add");
const todoDataElm =  document.querySelector("#todoData");
let todolist = []
let todovalue = "";
addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    todovalue = todoElm.value;
    todoElm.value = "";
    if ( todovalue) {
        todolist.push(todovalue);
        creatUI();
    } else{
        alert("please add todo")
    }
});
function creatUI(){
    let li = document.createElement("li");
    li.innerHTML =  todovalue;
    todoDataElm.appendChild(li)
}
