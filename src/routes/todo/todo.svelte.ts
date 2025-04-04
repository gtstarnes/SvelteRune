type Task = {
    task: string,
    status: boolean,
    edit: boolean,
}

let tasks = $state<Task[]>([])

function getTasks(){
    return tasks;
}
function addTask(task:string){
    tasks = [... tasks, {
        task: task,
        status: false,
        edit: false
    }]
}
function findTask(task:string){
    return tasks.some(t => {
        return t.task === task
    })
}
function delTask(task:string){
    tasks = tasks.filter(t => {
        return t.task !== task
    })
}
function massDelTask(){
    tasks = tasks.filter(t => {
        return t.status === true
    })
}
function massSetStatus(){
    tasks.forEach(task => {
        return task.status = !task.status;
    })
}