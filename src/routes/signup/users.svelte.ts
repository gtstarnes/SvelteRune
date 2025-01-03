interface User {
    username: string,
    name: string
    password: string,
}

const initial = [
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

const users = $state<User[]>(initial);

function getUsers() {
    return users
}


export {users, getUsers}