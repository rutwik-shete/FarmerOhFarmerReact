export function signupfarmer(userData) {
    return new Promise ( (resolve, reject) => {


    fetch(
        'http://farmer-oh-farmer.herokuapp.com/api/farmer/addFarmer', {

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


     