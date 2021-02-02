export function  AddProductapi(productdata) {
    return new Promise((resolve, reject) => {


        fetch(
            ' http://farmer-oh-farmer.herokuapp.com/api/farmer/addProduct', {

            method: 'POST',
            headers: {
                'Accpet': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(productdata)
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

    
