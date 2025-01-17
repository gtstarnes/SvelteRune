
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
function toggleLogIn(){
    loggedIn = toggle(loggedIn)
}
function togglePortal(){
    portal = toggle(portal)
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
function checkSignUpErrors(username: string, password:string){
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
            return '';
    }
}
function checkLoginErrors(username: string, password:string){
    switch(true){
        case username === '' && password === '':
            return 'username and password are required'
        case username === '':
            return 'username is required'
        case !findUser(username):
            return 'user does not exist'
        case password === '':
            return 'password is required'
        case checkPassword(username, password):
            return 'password does not match'
        default:
            return '';
    }
}
function findUser(username:string){
    const found = users.some(user => {
        return user.username === username
    })
    return found
}
function checkPassword(username: string,password:string) {
    const found = users.find(user => {
        return user.username = username
    })
    if (found && password === found.password) {
        return false
    }
    return true
}

//EXPORTS
export {
    getUsers, getPortal, getLoggedIn, toggleLogIn, togglePortal, 
    addUser, deleteUser, checkSignUpErrors, checkLoginErrors, findUser
}

