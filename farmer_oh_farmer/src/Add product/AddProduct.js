
import React, { Component } from 'react';
import './AddProduct.css';


class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            unit:[
            {
                id:"Kilogram",
                name:"Kg"
            },
            {
                id:"Gram",
                name:"Gm"
            },
            {
                id:"Litres",
                name:"ltr"
            },
            ],
            from:'',
            str:'',
            placeholder:"Saeching from something"
            
        };
        this.onchange = this.onchange.bind(this);
        this.notso = this.notso.bind(this);
      
    }

    componentDidMount() {
        let url = "http://farmer-oh-farmer.herokuapp.com/api/product/getProductData";
        fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            }

        }).then((result) => {
            result.json().then((resp) => {
              
                this.setState({ data: resp['result'] });
               const data = this.state.data;
                console.log({ data });
            })
        })
    }

        onchange(from){
            // let from="";
            this.setState({[from.target.name]: from.target.value});
            // this.setState({[from.target.name]: from.target.value});
            console.log(this.state);
       }
       
       notso(placeholder){
           this.setState({[placeholder.targe.name]:placeholder.target.value });
           console.log(this.placeholder);
          
       }
    
    
    render() {
        // const data = this.state.data;
        // console.warn(data);
        // const data=this.state.data;
        // console.warn(resp);
      
        return (
            <div className="bgimage">
                <div id="header2">
                    <span id="header-text-4">Farmer</span>
                    <span id="header-text-5">Oh</span>
                    <span id="header-text-6">Farmer</span>
                    <div id="header3">
                        <span id="nextpage">View products</span>
                        <span id="signout">Logout</span>

                    </div>
                </div>
                <div className="Box">
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <select className="custom-select mr-sm-2 trial">
                                    <option value hidden>Choose Product</option>

                                    {
                                        this.state.data.map((Data) => (
                                            <option value={Data.id}>{Data.name}</option>
                                        ))};
                                </select>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <select className="custom-select mr-sm-2">
                                    <option value hidden >Unit</option>
                                    {
                                        this.state.unit.map((Units) => (
                                            <option value={Units.id}>{Units.name}</option>

                                        ))};
                                    
                                    {/* <option value="grape">Kilograms</option>
                                    <option value="gape">Grams</option>
                                    <option value="mango">Other</option> */}
                                </select>
                            </div>
                        </div>

                        <div className="form-group Sample" >
                            <input type="text" className="form-control" id="Notyou" placeholder="Minimum Order Qty" onChange={this.onchange} />
                        </div>

                        <div className="form-group Sample">
                            <input type="text" className="form-control" id="const" placeholder="" ></input>
                        </div>
                    </form>
                    <div className="flexBox Lol">
                        <div className="Aadd">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        <div className="Vieww">
                            <button className="btn btn-primary">Add More...</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}
export default AddProduct;