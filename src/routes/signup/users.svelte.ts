interface User {
    username: string,
    name: string,
    password: string,
}

const users = $state<User[]>([]);


export {users}