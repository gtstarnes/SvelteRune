/**
 * Rep: 2
 */

interface Task {
    complete: boolean,
    text: '',
    edit: false,
}

let tasks = $state<Task[]>([])

function getTasks() {
    return tasks
}
function addTask(task:Task){
    tasks = [...tasks, task]
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