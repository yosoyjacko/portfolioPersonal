import './../styles/Carrousel.scss'
import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import IMG1 from "./../img/video5.mp4"
import IMG2 from "./../img/video6.mp4"
import IMG3 from "./../img/video7.mp4"
import IMG4 from "./../img/borderSnake.mp4"
import IMG5 from "./../img/desenfoqueDeFondo.mp4"
import IMG6 from "./../img/Shinybutton.mp4"
import IMG7 from "./../img/videoCube3D.mp4"
import IMG8 from "./../img/video8.mp4"
import IMG9 from "./../img/video9.mp4"

let slides = [
  {
    key: 1,
    content: <video loop autoPlay muted><source src={IMG1} type="video/mp4" /></video>
  },
  {
    key: 2,
    content: <video loop autoPlay muted><source src={IMG2} type="video/mp4" /></video>
  },
  {
    key: 3,
    content: <video loop autoPlay muted><source src={IMG3} type="video/mp4" /></video>
  },
  {
    key: 4,
    content: <video loop autoPlay muted><source src={IMG4} type="video/mp4" /></video>
  },
  {
    key: 5,
    content: <video loop autoPlay muted><source src={IMG5} type="video/mp4" /></video>
  },
  {
    key: 6,
    content: <video loop autoPlay muted><source src={IMG6} type="video/mp4" /></video>
  },
  {
    key: 7,
    content: <video loop autoPlay muted><source src={IMG7} type="video/mp4" /></video>
  },
  {
    key: 8,
    content: <video loop autoPlay muted><source src={IMG8} type="video/mp4" /></video>
  },
  {
    key: 9,
    content: <video loop autoPlay muted><source src={IMG9} type="video/mp4" /></video>
  }
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  render() {
    return (
      <div
        className="div-none"
        style={{
          position: "relative",
          
          flexDirection: "column",
          justifyContent: "center",
          width: "34vw",
          height: "88vh",
        //   margin: "0 auto",
        
          float:'right',
         
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
