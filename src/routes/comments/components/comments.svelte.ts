interface Comment {
    text: string,
    count: number,
    id: number,
}


let comments = $state<Comment[]>([]);