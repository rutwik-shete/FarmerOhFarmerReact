import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBlock,
    CardTitle, CardSubtitle, Button, CardBody } from 'reactstrap'
import { View  } from './view';
class Loopimg extends Component {
    constructor(props){
        super(props)
    }
render(){  
    return(
    <div className="products">
  
  <div className="notok">
  
          {this.props.imgData.map((imgData) => (
              <Card className="allok">
            <CardImg src={require(`${imgData.src}`)}/>
            <CardText className="text">
                {imgData.rate}
                {imgData.price}

                </CardText>
           <button className="Button">Remove</button>
           
            </Card> 
           
          ))};
     
      
      </div>
      
       








 {/* { this.props.imgData.map((imgData,idx) => (
//        <div className="product" key={idx}>
//         <img src={require(`${imgData.src}`)}></img>
//         <h1>{imgData.rate}</h1>
//         <h2>{imgData.price}</h2>
//         <button>Remove</button>
        </div> */}
    {/* ))}; */}
   </div>
    );
}
    
}

export default Loopimg;