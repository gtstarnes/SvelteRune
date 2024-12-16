interface Comment {
    text: string,
    author: string,
    likes: number,
    id: number
}

let comments = $state<Comment[]>([])