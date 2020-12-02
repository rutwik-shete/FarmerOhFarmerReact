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
                      <Card className="Ordercard">      
                      <CardTitle className="Custname">
                       Name : {ord.name}  
                      </CardTitle>
                      <CardSubtitle>
                        Address : {ord.address}
                        </CardSubtitle>  
                      <CardText>
                        Phone no : {ord.phone}
                        </CardText>  
                      </Card> 

                
                
            
                 )) };





            </div>







            );
    
    }

}

export default Orderloop;