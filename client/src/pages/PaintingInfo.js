import React from "react";
import "../App.css";

class PaintingInfo extends React.Component {

  state={
    card: JSON.parse(localStorage.getItem("selectedPainting"))
 }
 
 render(){
   console.log(localStorage.getItem('selectedPainting'));
   console.log(JSON.stringify(this.state.card))
    return(
      <div>
         <img src={this.state.card.image}
              alt={this.state.card.name}
              className= "img-fluid img-thumbnail rounded"
         />
      </div>
    )
 }
}

export default PaintingInfo;