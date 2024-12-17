interface Comment {
    text: string,
    count: number,
    id: number,
}
type Vote = 'up' | 'down'


let comments = $state<Comment[]>([]);

const add = (c: string) => {
    const newComment = {
        text: c,
        count: 0,
        id: Math.random(),
    }
    comments = [...comments, newComment]
}

const vote = (id: number, action: Vote) => {
    
}

function getComments() {
    return comments
}


export { getComments, add, }