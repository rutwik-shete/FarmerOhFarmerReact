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

    <div className="Open">

          {this.props.imgData.map((imgData) => (
              <div className="Container"> 
                <img src={require(`${imgData.src}`)}></img>
                <span id="Quantity">
                {imgData.rate}
                {imgData.price}
                </span>
              <button type="button" className="Sub">
                Remove
                </button>  
                </div>
          ))};
          {/* {this.props.imgData.map((imgData) => (
              <Card className="allok">
            <CardImg src={require(`${imgData.src}`)}/>
            <CardText className="text">
                {imgData.rate}
                {imgData.price}

                </CardText>
           <button className="Button">Remove</button>

            </Card> 

          ))}; */}

  
           {/* {this.props.imgData.map((imgData) => (
              <div className="Container"> 
                <img src={require(`${imgData.src}`)}></img>

           </div>
          ))};
        */}
      
     
      </div>
      
       








    )
  
}

    
}

export default Loopimg;