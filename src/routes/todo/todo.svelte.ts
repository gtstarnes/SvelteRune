type Task = {
    task: string,
    status: boolean,
    edit: boolean,
}

let tasks = $state<Task[]>([])
let error = $state<string>("")

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
function checkError(task:string){
    let err = true;
    switch (true){
        case task === '':
            error = 'tasks cannot be empty'
            break;
        case task.length > 20:
            error = 'tasks cannot be longer than 20 characters'
            break;
        case findTask(task):
            error = "task already exists"
            break;
        default:
            error = ''
            err = false
    }

    return err
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