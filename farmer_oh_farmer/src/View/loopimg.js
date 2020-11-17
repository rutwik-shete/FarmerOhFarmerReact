import React, {Component} from 'react';

class Loopimg extends Component {

render(){
    return this.props.imgData.map((imgData) => (
       <React.Fragment>
        <img src={require(`${imgData.src}`)}
        height="65px"></img>
        </React.Fragment>
    ));
}
}

export default Loopimg;