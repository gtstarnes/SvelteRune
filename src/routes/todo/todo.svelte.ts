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


export {getTasks, addTask, deleteTask}