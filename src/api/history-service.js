import AsyncStorage from "@react-native-community/async-storage";

const getHistoryRoute =  "https://smartcollar.azurewebsites.net/api/notification/user/"
const saveNotificationRoute =  "https://smartcollar.azurewebsites.net/api/notification/updatenotification"
let jsonHeader = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
};

export async function GetUserHistory(){

    let token = await AsyncStorage.getItem('token');
    return fetch(getHistoryRoute + token , {
        method: 'GET',
        headers: jsonHeader
    })
    .then(response => {
        if(response.status == 200)
            return response.json();
    })
}

export async function SaveNotification(body){
    return fetch(saveNotificationRoute, {
        method: 'POST',
        headers: jsonHeader,
        body: JSON.stringify(body)
    })
    .then(response => {
        console.log(response)
        if(response.status == 200)
            return response;
    })
}