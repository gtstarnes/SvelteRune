/**
 * Rep: 2
 */

interface Task {
    complete: boolean,
    text: string,
    edit: boolean,
}

//STORE VARIABLE
let tasks = $state<Task[]>([])


//FUNCTIONS
function getTasks() {
    return tasks
}
function addTask(task:string){
    const newTask = {
        text: task,
        complete: false,
        edit: false,
    }
    tasks = [...tasks, newTask]
}
function deleteTask(task:string){
    tasks = tasks.filter(t => {
        return t.text !== task
    })
}
function massDelete(){
    tasks = tasks.filter(task => {
        return task.complete !== true
    })
}
function checkTasks(task:string){
    const found = tasks.some(t => {
        return t.text === task
    })

    return found
}


export {getTasks, addTask, deleteTask, massDelete, checkTasks}