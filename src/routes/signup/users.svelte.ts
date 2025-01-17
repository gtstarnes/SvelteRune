
/**
 * REP: I
 */

type User = {
    name: string,
    username: string,
    password: string,
}


let users = $state<User[]>([])
