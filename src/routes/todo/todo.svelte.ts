/**
 * Rep: 3
 */

type Task = {
    task: string,
    status: boolean,
    edit: boolean,
}

let tasks: Task[] = $state([]);

function getTasks(){
    return tasks;
}
function addTask(task:string){
    const newTask = {
        task: task,
        status: false,
        edit: false,
    }
    console.log(newTask)
    tasks = [...tasks, newTask]
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
function massDelete(){
    tasks = tasks.filter(t => {
        return t.status !== true;
    })
}
function massSelect(){
    tasks.forEach(t => {
        return t.status = !t.status
    })
}

export {getTasks, addTask, delTask, massDelete, findTask, massSelect}