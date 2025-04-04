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
function delTask(task:string){
    tasks = tasks.filter(t => {
        return t.task !== task
    })
}
function massSetStatus(){
    tasks.forEach(task => {
        return task.status = !task.status;
    })
}