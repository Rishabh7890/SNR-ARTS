import React from "react";

class PaintingInfo extends React.Component {

  state={
    card: localStorage.getItem("selectedPainting")
 }
 
 render(){
    return(
      <div>
         <img src={this.state.card.image}
              alt={this.state.card.name}
              className="img-fluid"
         />
      </div>
    )
 }
}

export default PaintingInfo;