type Task = {
    task: string,
    status: boolean,
    edit: boolean,
}

const tasks = $state<Task[]>([])