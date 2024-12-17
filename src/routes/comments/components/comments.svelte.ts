interface Comment {
    text: string,
    count: number,
    id: number,
}
type Like = 'up' | 'down'


let comments = $state<Comment[]>([]);

const add = (c: string) => {
    const newComment = {
        text: c,
        count: 0,
        id: Math.random(),
    }
    comments = [...comments, newComment]
}

const like = (id: number, action: Like) => {
    const comment = comments.find(c => {
        return c.id === id;
    })

    if (!comment) {
        return
    }

    switch(action){
        case 'up':
            return comment.count += 1
        case 'down':
            return comment.count -= 1
        default:
            throw new Error('There was an error')
    }
}

function getComments() {
    return comments
}


export { getComments, add, like, }