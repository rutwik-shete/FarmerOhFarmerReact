import React, {Component} from 'react';
import './Orderloop.css';

class Orderloop extends Component{
 
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

 