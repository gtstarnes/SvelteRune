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
function like(id: number){
   const comment = comments.find(c => {
    return c.id === id
   })
   if (!comment){
    return
   }
   comment.likes += 1
}

function getComments() {
    return comments
}

export {add, del, like, getComments}