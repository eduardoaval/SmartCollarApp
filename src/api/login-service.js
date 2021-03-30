const loginRoute =  "https://smartcollar.azurewebsites.net/api/account/login"
const createUserRoute =  "https://smartcollar.azurewebsites.net/api/account/register"
let jsonHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export async function LoginUser(user, password){
    let body = {
        user: user,
        password: password
    }

    console.log(body)

    return fetch(loginRoute, {
        method: 'POST',
        headers: jsonHeader,
        body: JSON.stringify(body)
    })
    .then(response => {
        if(response.status == 200)
            return response.json();
    })
}

export async function CreateUser(name, user, password){
    let body = {
        name,
        user,
        password
    }
    return fetch(createUserRoute, {
        method: 'POST',
        headers: jsonHeader,
        body: JSON.stringify(body)
    })
    .then(response => {
        console.log(response)
        if(response.status == 200)
            return response.json();
    })
}