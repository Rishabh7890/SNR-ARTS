import React from "react";
import "../App.css";
import cardInfo from "../paintings.json";

class PaintingInfo extends React.Component {

  state={
    card: localStorage.getItem('selectedPainting')
 }
 
 render(){
   console.log(card);
    return(
      <div>
         <img src={require(this.state.card.image)}
              alt="image"
              // className= "img-fluid img-thumbnail rounded bg-dark"
         />
      </div>
    )
 }
}

export default PaintingInfo;