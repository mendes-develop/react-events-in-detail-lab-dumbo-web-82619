// Code CoordinatesButton Component Here
import React, { Component} from 'react'


export default class CoordinatesButton extends Component {


  findXY = (event) => {
    let eventData = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(eventData)
  }

  render(){
    return (
      <button onClick={ event => this.findXY(event) }>Coordinates Button</button>
    )
  }
}


// this.props.onReceiveCoordinates(event)
