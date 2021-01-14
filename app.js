const todos = document.getElementById("todos")
const textBox = document.getElementById("todo-text")
const addBtn = document.getElementById("add-btn")
const refreshBtn = document.getElementById("refresh-btn")
const clearBtn = document.getElementById("clear")

var todosArr

if(!localStorage.getItem("todos"))
    todosArr = []
else
{
    todosArr=JSON.parse(localStorage.getItem("todos"))
    renderTodo()
}
    

// localStorage.setItem("hii",JSON.stringify([{item:"10"}]))
addBtn.addEventListener("click",(e)=>{
    let todoObj = createTodo()
    
    todosArr.push(todoObj)
    // renderTodo()
    // console.log(todosArr);
    localStorage.setItem("todos",JSON.stringify(todosArr))
    console.log(JSON.parse(localStorage.getItem("todos")));
    textBox.value=""
})

clearBtn.addEventListener("click",(e)=>{
    todosArr=[]
    renderTodo()
})
refreshBtn.addEventListener("click",(e)=>{
    // console.log("called");
    renderTodo()
})

function createTodo(item)
{
    if(true)
    {
        const li = document.createElement("li")
        // console.log(li);
        const btn = document.createElement("button")
        const checkbox = document.createElement("input")
        const title = document.createElement("label")
        const key = item?item.key:Date.now()
        checkbox.setAttribute("type","checkbox")
        
        btn.textContent="X"

        // console.log(key);
        btn.addEventListener("click",()=>{
            // console.log("deleted",li);
            console.clear()
            todosArr = todosArr.filter(function(element) {
                // console.log(element.key,key);
                return element.key!=key
            })
            // console.log(todosArr);
            renderTodo()
        })
        
        checkbox.addEventListener("change",()=>{
            thisObj.isChecked=!thisObj.isChecked
            // console.log(thisObj.isChecked);
            renderTodo()
        })

        title.textContent = item?item.title:textBox.value
        checkbox.checked = item?item.isChecked:false

        var thisObj = item ? item : {
            key,
            title:title.textContent,
            isChecked:checkbox.checked
        }

        li.append(btn,checkbox,title)
        // console.log(li);
        todos.append(li)

        return thisObj 
    }
}



function renderTodo()
{
    todos.innerHTML = ""
    // console.log("removed all");
    
    todosArr.forEach((item)=>{
        createTodo(item)
        // todosArr.push(todoObj)
        // console.log(item.isChecked);
    })
    localStorage.setItem("todos",JSON.stringify(todosArr))
}