interface Comment {
    text: string,
    likes: number,
    id: number
}

let comments = $state<Comment[]>([])

function add(c: string) {
    const newComment:Comment = {
        text: c,
        likes: 0,
        id: Math.random(),
    }
    comments = [...comments, newComment]
}

export {add, }