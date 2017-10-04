import React, { Component } from 'react'
import { Button } from 'reactstrap'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

class Guide extends Component {
  render () {
    return (
      <div>
        <Carousel showThumbs={false} >
          <div>
            <img src='http://placekitten.com/360/500' />
            <p className='legend'>WELCOME!</p>
          </div>
          <div>
            <img src='http://placekitten.com/350/600' />
            <p className='legend'>How to use the BOPSASS app</p>
          </div>
          <div>
            <img src='http://placekitten.com/360/600' />
            <p className='legend'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
          <div>
            <img src='http://placekitten.com/350/600' />
            <p className='legend'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </Carousel>
        <Button color='warning' >
          <Link to='/profile'>
            <h3>Get Started</h3>
          </Link>
        </Button>
      </div>
    )
  }
}

export default Guide
