
/**
 * REP: I
 */

type User = {
    name: string,
    username: string,
    password: string,
}

// VARAIBLES
let users = $state<User[]>([]);
let loggedIn = $state(false);
let portal = $state(false);


//FUNCTIONS
function getUsers() {
    return users;
}
function getLoggedIn() {
    return loggedIn
}
function getPortal() {
    return portal
}
function toggle(state:boolean){
    return state = !state;
}
function addUser(user:User){
    users = [...users, user]
}
function deleteUser(username:string){
    users = users.filter(user => {
        return user.username !== username;
    })
}
function checkErrors(details: User){
    const {username, password} = details
    switch(true){
        case username === '' && password === '':
            return 'username and password are required'
        case username === '':
            return 'username is required'
        case password === '':
            return 'password is required'
        case findUser(username):
            return 'user already exists'
        default:
            throw new Error('idk man')
    }
}
function findUser(username:string){
    const found = users.some(user => {
        return user.username === username
    })
    return found
}

//EXPORTS
export {
    getUsers, getPortal, getLoggedIn, toggle, 
    addUser, deleteUser, checkErrors, findUser
}

