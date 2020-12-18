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
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>  
              
                {this.props.ord.map((ord) => (
                          <Card className="Ordercard">  
                      <CardTitle className="Custname">
                       Name : {ord.name}  
                      </CardTitle>
                      <CardSubtitle className="Add">
                        Address : {ord.address}
                        </CardSubtitle>  
                      <CardText className="Phn">
                        Phone no : {ord.phone}
                        </CardText>  
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
                       <CardBody className="Tablebody">
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
                       </CardBody>
            
                       <button color="Red" className="Status">
                        {ord.status} 
                      </button>
                      </Card>
                            
                 )) };
{/* 
                   <div className="Details">
                      {this.props.cst.map((cst) => (
                        <h4>{cst.product}</h4>
                        
                        ))  }; */}
                
                       </div>
                  
                      //  </div>

                  

            );
    
    }

}

export default Orderloop;