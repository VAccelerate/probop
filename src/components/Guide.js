import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class Guide extends Component {
  render() {
    return (
      <div>
        <Carousel showThumbs={false} dynamicHeight={false} >
          <div>
            <img src="http://placekitten.com/300/500" />
            <p className="legend">WELCOME!</p>
          </div>
          <div>
            <img src="http://placekitten.com/350/600" />
            <p className="legend">How to use the BOPSASS app</p>
          </div>
          <div>
            <img src="http://placekitten.com/360/600" />
            <p className="legend">Legend 3</p>
          </div>
          <div>
            <img src="http://placekitten.com/350/600" />
            <p className="legend">Legend 4</p>
          </div>
        </Carousel>
        <Button color="warning" >
          <Link to="/profile">
            <h3>Get Started</h3>
          </Link>
        </Button>
      </div>
   )
  }
}

export default Guide
