import AsyncStorage from "@react-native-community/async-storage";

const getHistoryRoute =  "https://smartcollar.azurewebsites.net/api/notification/user/"
let jsonHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export async function GetUserHistory(){

    let token = await AsyncStorage.getItem('token');
    console.log(token);
    return fetch(getHistoryRoute + token , {
        method: 'GET',
        headers: jsonHeader
    })
    .then(response => {
        console.log(response);
        if(response.status == 200)
            return response.json();
    })
}