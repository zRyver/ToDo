
var tasksList = []
var count = 0
const newTask = document.getElementById('new-task')
const taskCont= document.getElementById('task-container')




function printTasks(){
    taskCont.innerHTML = ' '
    tasksList.forEach((element)=> taskCont.innerHTML+= `<input class='task' type'button' id='${element.id}' value='${element.value}' onclick="deleteTask(${element.id})">`
    )
}
function addTask(task){
    const foo = {
        id: count,
        value: task
    }
    count +=1
    tasksList.push(foo)
}



function deleteTask(id){
    const tmp = []
    tasksList.forEach((element) =>{
        if(element.id != id) tmp.push(element)
    })
    tasksList = tmp
    printTasks()
}

newTask.onkeydown = function(event){
    if(event.key == 'Enter') {
        addTask(newTask.value)
        newTask.value=''
        printTasks()
    }
}





