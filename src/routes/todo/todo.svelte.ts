/**
 * Rep: 2
 */

interface Task {
    complete: boolean,
    text: '',
    edit: false,
}

let tasks = $state<Task[]>([])