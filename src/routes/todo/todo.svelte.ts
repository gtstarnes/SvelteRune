/**
 * Rep: 3
 */

type Task = {
    task: string,
    status: boolean,
    edit: boolean,
}

let tasks: Task[] = [];

function getTasks(){
    return tasks;
}
function addTask(task:string){
    const newTask = {
        task: task,
        status: false,
        edit: false,
    }
    tasks = [...tasks, newTask]
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

export {getTasks, addTask, delTask, massDelete}
