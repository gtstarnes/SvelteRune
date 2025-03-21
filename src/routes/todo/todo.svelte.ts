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
function addTask(task:Task){
    tasks = [...tasks, task]
}
function delTask(task:string){
    tasks = tasks.filter(t => {
        return t.task !== task
    })
}
