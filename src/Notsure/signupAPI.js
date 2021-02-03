import Login from '../Login/Login';
export function signupfarmer(userData) {
    return new Promise((resolve, reject) => {


        fetch(
            'http://farmer-oh-farmer.herokuapp.com/api/farmer/addFarmer', {

            method: 'POST',
            headers: {
                'Accpet': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                phone:this.state.phonenumber,
                email:this.state.email,
                password:this.state.password,
                address:this.state.address,
                pincode:this.state.pincode
            },
            )
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


