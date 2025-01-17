
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

}
function togglePortal(){

}
function addUser(user:User){

}
function deleteUser(username:string){

}
function checkErrors(){

}
function checkDuplicates(username:string){

}

//EXPORTS
export {
    getUsers, getPortal, getLoggedIn,
    toggleLogIn, togglePortal, addUser,
    deleteUser, checkErrors, checkDuplicates
}

