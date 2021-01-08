import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap'
import Order from './Order';
import './Orderloop.css';

class Orderloop extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
            <div className="Outer">
              {this.props.ord.map((ord) => (
                   
                   <div className="Extend">
                    <div className="Upper"> 
                     <span id="Name">
                  <p> Name : {ord.name}  </p>
                   </span>
                   <span id="Address">
                   <p> Address : {ord.address}</p>
                    </span>
                    <span id="Number">
                    Phone no : {ord.phone}
                    </span>
                    </div>
                    <span id="Table">
                       <table>
                        <tr>
                          <th>Name</th>
                          <th>QTY</th>
                          <th>Price</th>
                        </tr>
                        <tr>
                      <td>{ord.product}</td>
                      <td>{ord.qty}</td>
                      <td>{ord.cost}</td>
                        </tr>
                       <tr>
                      <td>{ord.product2}</td>
                      <td>{ord.qty2}</td>
                      <td>{ord.cost2}</td>
                         </tr> 
                         <tr>
                      <td>{ord.product3}</td>
                      <td>{ord.qty3}</td>
                      <td>{ord.cost3}</td>
                         </tr>
                         <tr>
                      <td>{ord.product4}</td>
                      <td>{ord.qty4}</td>
                      <td>{ord.cost4}</td>
                         </tr>
                         <tr>
                           <td>Total :</td>
                           <td></td>
                           <td>840</td>
                         </tr>
                       </table>
                       </span>
                       <button color="Red" className="Status">
                         {ord.status} 
                     </button>
                    </div>

                    )) };
               
                 </div>
                     
                  
            

                  

            );
    
    }

}

export default Orderloop;

 {/* {this.props.ord.map((ord) => (
                   
                       Name : {ord.name}  
                  
                        Address : {ord.address}
                    
                        Phone no : {ord.phone} */}
                    
                      {/* <div className="Columns">
                        <h1>Name</h1>
                        <h2>QTY</h2>
                        <h3>Price</h3>
                        </div>
                        <div className="Details">
                        <h1>{ord.product}</h1>
                        <h2> {ord.product2}</h2>               
                        <h3> {ord.product3}</h3>
                        <h4>{ord.product4}</h4>       
                      
                      <div className="Qty">
                     <h1>{ord.qty}</h1>
                     <h2>{ord.qty2}</h2>
                     <h3>{ord.qty3}</h3>
                     <h4>{ord.qty4}</h4>
                      </div>
                      </div>
                       */}
                       
                      {/* <span id="Table">
                       <table>
                        <tr>
                          <th>Name</th>
                          <th>QTY</th>
                          <th>Price</th>
                        </tr>
                        <tr>
                      <td>{ord.product}</td>
                      <td>{ord.qty}</td>
                      <td>{ord.cost}</td>
                        </tr>
                       <tr>
                      <td>{ord.product2}</td>
                      <td>{ord.qty2}</td>
                      <td>{ord.cost2}</td>
                         </tr> 
                         <tr>
                      <td>{ord.product3}</td>
                      <td>{ord.qty3}</td>
                      <td>{ord.cost3}</td>
                         </tr>
                         <tr>
                      <td>{ord.product4}</td>
                      <td>{ord.qty4}</td>
                      <td>{ord.cost4}</td>
                         </tr>
                         <tr>
                           <td>Total :</td>
                           <td></td>
                           <td>840</td>
                         </tr>
                       </table>
                       </span> */}
                       
            
                      {/* //  <button color="Red" className="Status">
                      //   {ord.status} 
                      // </button>
               
                            
                //  )) }; */}
{/* 
                   <div className="Details">
                      {this.props.cst.map((cst) => (
                        <h4>{cst.product}</h4>
                        
                        ))  }; */}