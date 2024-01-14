import React from "react";
import Carousel_Card from "./Carousel_Card";
import BookSession from "./BookSession";
const Carousel = ()=>{
    return(
        <div className="main-Carousel container-fluid">
        
      
        <div className="Carousel-head">
        <h4 className="text-center">Discover the top Students and Alumni</h4>
        </div>
        <br></br>
    
        <Carousel_Card/>
        <div>
        <img src = "./Images/Ellipse 93.png" style={{width:"390px",height:"400px",position:"absolute",top:"40rem",left:"-5rem",zIndex: "-1"}}/>
        <BookSession/>
        <img src = "./Images/Ellipse 94.png" style={{width:"399px",height:"400px",position:"absolute",top:"62rem",left:"48rem",zIndex: "-1"}}/>
        </div>
       
       
        </div>
    )
}

export default Carousel;
