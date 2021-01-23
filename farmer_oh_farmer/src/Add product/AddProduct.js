
import React, { Component } from 'react';
import './AddProduct.css';
import {Redirect} from 'react-router-dom';
import {AddProductapi} from '../Notsure/AddProductapi';

    const firststate = {
        data: [],
        unit:[
        {
            id:"Kg",
            name:"Kilogram"
        },
        {
            id:"Gm",
            name:"Gram"
        },
        {
            id:"Ltr",
            name:"Litres"
        },
        ],
        from:'',
       selectedUnit:'',
        selectedMeasure:'',
        redirect: false,
        Qtyerror:'',
        Rateerror:'',
        Measurement:'',
        Rate:''
    }
class AddProduct extends Component {
    constructor() {
        super();
      
        
        this.state = firststate;
        this.setUnit = this.setUnit.bind(this);
        this.setMeasure = this.setMeasure.bind(this);
        this.submit = this.submit.bind(this);
      
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

    //     onchange(from){
    //         // let from="";
    //         this.setState({[from.target.name]: from.target.value});
    //         // this.setState({[from.target.name]: from.target.value});
    //         console.log(this.state);
    //    }
       
    //    notso(str){
    //        console.log('Hi');
    //        this.setState({[str.target.name]: str.target.value});
    //        console.log(this.str);

    setUnit = async(event) => {
       await this.setState({ selectedUnit: event.target.value });
        // console.log(this.state.assign);
        console.log(this.state.selectedUnit );
        
      };
    
      setMeasure(e){
        this.setState({selectedMeasure: e.target.value});
        console.log(this.state.selectedMeasure);
      }

    //   Verified(){
    //     let Qtyerror="";
    //     let Rateerror="";
    //     if(!this.state.Qty){
    //         Qtyerror = "Enter minimum qyantity"
    //     }
    //     if(!this.state.Rate){
    //         Rateerror = "Enter rate per quantity"
    //     }
    //     if (Qtyerror || Rateerror ) {
    //         this.setState({Qtyerror , Rateerror });
    //         return false;
    //       } 
    //       return true;

    //   };

      submit(){
        // const isVerify = this.Verified();

        // if(isVerify){
      
        //   this.setState(firststate);
          AddProductapi(this.state).then((result) => {
          let responseJson = result;
      
              if(responseJson['status']==="Success" ){
            
            sessionStorage.setItem('productdata', responseJson);
            // this.setState({redirect: true});
          }
        
      
          else{
            console.log(' Failed');
         
          }
      
        })
        
      }
    

//       onchange(e){
//         this.setState({[e.target.name]: e.target.value});
//         console.log(this.state);
//    }
    
    render() {
        // const data = this.state.data;
        // console.warn(data);
        // const data=this.state.data;
        // console.warn(resp);
        // if(this.state.redirect){
        //     return(<Redirect to={'/Homepage'} />);
        //    }
      
        return (
         
            

                <div className="Box">
                    <form>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <select className="custom-select mr-sm-2 trial">
                                    <option value hidden>Choose Product</option>

                                    {
                                        this.state.data.map((Data) => (
                                            <option key={Data.id}>{Data.name}</option>
                                        ))};
                                </select>
                            </div>
                        </div>
                        <div className="form-row align-items-center">
                            <div className="col-auto my-1">
                                <select className="custom-select mr-sm-2" onChange={this.setUnit} >
                                    <option value hidden >Unit</option>
                                    {
                                        this.state.unit.map((Units) => (
                                            <option key={Units.id} value={Units.id} >{Units.name}</option>

                                        ))};
                                    
                                    {/* <option value="grape">Kilograms</option>
                                    <option value="gape">Grams</option>
                                    <option value="mango">Other</option> */}
                                </select>
                            </div>
                        </div>

                        <div className="form-group Sample" >
                            <input type="text" className="form-control" name="Qty" placeholder="Minimum Order Qty" onChange={this.setMeasure} />
                        </div>
                        <div className="Error">{this.state.Qtyerror}</div>

                        <div className="form-group Sample">
                            <input type="text" className="form-control" name="Rate" placeholder={"Rate Per "+this.state.selectedMeasure+this.state.selectedUnit} onChange={this.onchange} ></input>
                        </div>
                        <div className="Error">{this.state.Rateerror}</div>
                    </form>
                    <div className="flexBox Lol">
                        <div className="Aadd">
                            <button className="btn btn-primary" onClick={this.submit}>Submit</button>
                        </div>
                        <div className="Vieww">
                            <button className="btn btn-primary">Add More...</button>
                        </div>
                    </div>
                </div>
          



        );
    }
}
export default AddProduct;