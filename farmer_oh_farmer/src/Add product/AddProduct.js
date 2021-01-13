import React, { Component } from 'react';

import './AddProduct.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import DropdownButton from 'react-dropdown';









class AddProduct extends Component {



    render() {
        return (
            <div className="bgimage">
                <div id="header2">
                    <span id="header-text-4">Farmer</span>
                    <span id="header-text-5">Oh</span>
                    <span id="header-text-6">Farmer</span>
                <div id="header3">
                    <div className="logout">
                        <button>Logout</button>
                    </div> 
                </div>
                   
                </div>
                
                <div>
                    <img src={require("../Homepage/Login/logos/logout.png")} className="logo" />
                </div>
                <div className="Box">
                    <select className="chooseproduct">
                        <option selected hidden>Choose Product</option>
                        <option value="grape">Vegetables</option>
                        <option value="gape">Fruits</option>
                        <option value="mango">Other</option>
                    </select>
                    <select className="unit">
                        <option selected hidden>Unit</option>
                        <option value="grape">Kilograms</option>
                        <option value="gape">Grams</option>
                        <option value="mango">Other</option>
                    </select>
                    <div className="minordertext">
                        <label>Minimum Order Quantity :</label>
                    </div>
                    <div className="minorderbox">
                        <input type="text" placeholder="Enter Here" size="20" />
                    </div>
                    <div className="ratepertext">
                        <label>Rate Per 250gm :</label>
                    </div>
                    <div className="rateperbox">
                        <input type="text" placeholder="Enter Here" size="20" />
                    </div>
                    <div className="viewadd">
                        <button>Add More</button>
                        <button>View Product</button>
                    </div>
                </div>
            </div>


        );
    }
}
export default AddProduct;