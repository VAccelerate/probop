import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Guide.css'

class Guide extends Component {
  render () {
    return (
      <div className='guide'>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} emulateTouch >
          <div>
            <img alt='' src='images/p1.png' />
          </div>
          <div>
            <img alt='' src='images/p2.png' />
          </div>
          <div>
            <img alt='' src='images/p3.png' />
          </div>
          <div>
            <img alt='' src='images/p4.png' />
          </div>
          <div>
            <img alt='' src='images/p5.png' />
          </div>
        </Carousel>
        <Link to='/profile'>
          <Button className='button' block>Get Started</Button>
        </Link>
      </div>
    )
  }
}

export default Guide
