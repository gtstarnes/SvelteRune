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
function del(id: number) {
    comments = comments.filter(c => {
        return c.id !== id
    })
}

function getComments() {
    return comments
}

export {add, del, getComments}