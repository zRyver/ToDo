var tasksList = []
var count = 0
const newTask = document.getElementById('new-task')
const taskCont= document.getElementById('task-container')
const container = document.getElementById('container')

const Checkstorage = () =>{
    const storageCount = JSON.parse(localStorage.getItem('count'))
    const storageList = JSON.parse(localStorage.getItem('tasksList'))
    if(storageCount && storageList) {
        count = storageCount
        tasksList = storageList
        printTasks()
    }

}

Checkstorage()


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
    localStorage.setItem('count',JSON.stringify(count))
    localStorage.setItem('tasksList',JSON.stringify(tasksList))
}



function deleteTask(id){
    const tmp = []
    tasksList.forEach((element) =>{
        if(element.id != id) tmp.push(element)
    })
    tasksList = tmp
    localStorage.setItem('tasksList',JSON.stringify(tasksList))
    printTasks()
}

newTask.onkeydown = function(event){
    if(event.key == 'Enter') {
        addTask(newTask.value)
        newTask.value=''
        printTasks()
    }
}








