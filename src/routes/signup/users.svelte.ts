interface User {
    username: string,
    password: string,
}

const initial = [
    {
        username: 'AzzClappa',
        password: '1234',
    },
    {
        username: 'DixiEnormous',
        password: '4321',
    },
    {
        username: 'BobDucca',
        password: 'password',
    },
]

const users = $state<User[]>(initial);


export {users}