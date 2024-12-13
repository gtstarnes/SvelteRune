interface User {
    username: string,
    name: string,
    password: string,
    id: number,
}

const users = $state<User[]>([]);


export {users}