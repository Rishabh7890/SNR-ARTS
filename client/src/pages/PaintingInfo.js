import React from "react";
import "../App.css";

class PaintingInfo extends React.Component {

  state={
    card: localStorage.getItem("selectedPainting")
 }
 
 render(){
    return(
      <div>
         <img src={this.state.card.image}
              alt="image"
              className= "img-fluid img-thumbnail rounded indvCard bg-dark"
         />
      </div>
    )
 }
}

export default PaintingInfo;