
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

