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


export {getTasks, addTask}