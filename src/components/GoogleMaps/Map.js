import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import GoogleApi from './GoogleApi'
import GoogleApiComponent from './GoogleApiComponent'
import scriptCache from './scriptCache'

const API_KEY = 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'

this.scriptCache = scriptCache({
  google: 'https://api.google.com/some/script.js'
})

GoogleApi({
  apiKey: API_KEY
})

export class Container extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <Map google={this.props.google} />
      </div>
    )
  }
}
  
export default GoogleApiComponent({
apiKey: API_KEY
})(Container)

export class Map extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap()
        }
      }
    
    loadMap() {
      if (this.props && this.props.google) {
        const {google} = this.props
        const maps = google.maps
        const mapRef = this.refs.map
        const node = ReactDOM.findDOMNode(mapRef)

        let zoom = 14;
        let lat = 37.774929;
        let lng = -122.419416;
        const center = new maps.LatLng(lat, lng);
        const mapConfig = Object.assign({}, {
          center: center,
          zoom: zoom
        })
        this.map = new maps.Map(node, mapConfig)
      }
    }

    render() {
      return (
        <div ref='map'>
          Loading map...
        </div>
      )
    }
}