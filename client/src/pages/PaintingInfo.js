import React from "react";
import "../App.css";

class PaintingInfo extends React.Component {

  state={
    cardInfo: localStorage.getItem('selectedPainting')
 }
 
 render(){
    return(
      <div>
         <img src={this.state.cardInfo.image}
              alt={this.state.cardInfo.name}
              className= "img-fluid img-thumbnail rounded bg-dark"
         />
      </div>
    )
 }
}

export default PaintingInfo;