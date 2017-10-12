/* global localStorage */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './Guide.css'

class Guide extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }
  render () {
    return (
      <div className='guide'>
        <Carousel showThumbs={false} showArrows={false} showStatus={false} emulateTouch >
          <div>
            <img alt='' src='p1.png' />
          </div>
          <div>
            <img alt='' src='p2.png' />
          </div>
          <div>
            <img alt='' src='p3.png' />
          </div>
          <div>
            <img alt='' src='p4.png' />
          </div>
        </Carousel>
        { JSON.parse(localStorage.getItem('firstRun'))
        ? <Link to='/profile'>
          <Button className='button' block>Get Started</Button>
        </Link>
        : <div className='emptyDiv' />
        }
      </div>
    )
  }
}

export default Guide
