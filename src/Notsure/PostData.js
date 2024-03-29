import * as Constants from "../Constants";

export function PostData(userData) {
    return new Promise((resolve, reject) => {


        fetch(
            Constants.LOGIN_API, {

            method: 'POST',
            headers: {
                'Accpet': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            })
    });

}


