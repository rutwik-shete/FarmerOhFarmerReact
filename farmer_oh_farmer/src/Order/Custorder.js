import React, {Component} from 'react';
import '..Custorder.css';

function Custorder(){
    state = {
        Customer : [
            {
                product:"Tomato",
                qty:"2KG",
                cost:"240"
            },
            {
                product:"Onion",
                qty:"2KG",
                cost:"300"
            },
            {
                product:"Carrot",
                qty:"2KG",
                cost:"150"
            },
            {
                product:"Garlic",
                qty:"2KG",
                cost:"50"
            }
        ],
    }
    return(
        <div className="Orderfromcust">

        </div>
    );
}
export default Custorder;