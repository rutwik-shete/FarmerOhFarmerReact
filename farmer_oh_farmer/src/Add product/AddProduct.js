import React, {Component} from 'react';

import './AddProduct.css';
import {Link}  from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dropdown from 'react-dropdown';
import DropdownButton from 'react-dropdown';









class AddProduct extends Component{

constructor()
{
    super();
    this.state={
        data:'',
    }
}
handle(event)
{
    this.setState({
        data:event.target.value
    })
}


    render(){
        return(
            <div className="bgimage">  
                <div id = "header2">
                    <span id="header-text-4">Farmer</span>
                    <span id="header-text-5">Oh</span>
                    <span id="header-text-6">Farmer</span>
                        <div id = "header3">
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
                        <div classname="MinOrderQuantext">
                            <span id="minordertext">Minimum Order Quantity :</span>
                        </div>
                        <div classname="text">
                        <input type="text" onChange={this.handle.bind(this)}/>
                        </div>
            </div>
            </div>
        
        
        );
    }
    }
    export default AddProduct;