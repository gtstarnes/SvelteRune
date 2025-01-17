
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
let portalType = $state(false);
