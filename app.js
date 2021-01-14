const todos = document.getElementById("todos")
const textBox = document.getElementById("todo-text")
const addBtn = document.getElementById("add-btn")
const refreshBtn = document.getElementById("refresh-btn")
const clearBtn = document.getElementById("clear")


let todosArr = []
// localStorage.setItem("hii",JSON.stringify([{item:"10"}]))
addBtn.addEventListener("click",(e)=>{
    let li = createTodo(textBox.value,false)
    todosArr.push(li)
    console.log(todosArr);
    localStorage.setItem("todos",JSON.stringify(todosArr[0]))
    console.log(JSON.parse(localStorage.getItem("todos")));
    textBox.value=""
})

clearBtn.addEventListener("click",(e)=>{
    todosArr=[]
    renderTodo()
})
refreshBtn.addEventListener("click",(e)=>{
    console.log("called");
    renderTodo()
})

function createTodo(label,checked)
{
    if(label || textBox.value)
    {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        const checkbox = document.createElement("input")
        const title = document.createElement("label")
        
        checkbox.setAttribute("type","checkbox")
        
        btn.textContent="X"

        btn.addEventListener("click",()=>{
            // console.log("deleted",li);
            console.clear()
            todosArr = todosArr.filter(function(element) {
                console.log(element,li);
                console.log(element!=li);
                return element!=li
            })
            // console.log(todosArr);
            renderTodo()
        })
        
        title.textContent = label
        checkbox.checked = checked

        li.append(btn,checkbox,title)
        todos.append(li)

        return li
    }
}



function renderTodo()
{
    todos.innerHTML = ""
    console.log("removed all");

    todosArr.forEach((item)=>{
        todos.append(item)
        console.log(item.children[1].checked);
    })
}