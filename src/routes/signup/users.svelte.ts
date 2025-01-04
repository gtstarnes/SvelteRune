
interface User {
    username: string,
    name: string,
    password: string,
}

const initial:User[] = [
    {
        username: 'AzzClappa',
        name: "cacasdcsac",
        password: '1234',
    },
    {
        username: 'DixiEnormous',
        name: "cacasdcsac",
        password: '4321',
    },
    {
        username: 'BobDucca',
        name: "cacasdcsac",
        password: 'password',
    },
]

let userList = $state<User[]>(initial)

function getUsers() {
    return userList;
}
function addUser(user:User){
    userList = [...userList, user]
}
function checkUsers(username:string){
    const found = userList.find(user => {
        return user.username === username
    })
    return found
}

