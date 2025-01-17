
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
function checkErrors(){

}
function checkDuplicates(username:string){

}

//EXPORTS
export {
    getUsers, getPortal, getLoggedIn,
    toggle, addUser,
    deleteUser, checkErrors, checkDuplicates
}

