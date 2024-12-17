interface Comment {
    text: string,
    count: number,
    id: number,
}


let comments = $state<Comment[]>([]);

const add = (c: string) => {
    const newComment = {
        text: c,
        count: 0,
        id: Math.random(),
    }
    comments = [...comments, newComment]
}

function getComments() {
    return comments
}


export { getComments, add, }