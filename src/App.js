// resource: https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLBDR9JgF-I5Qz6A2TjO2bslaltdxwWy8i

import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

class App extends Component {

  componentDidMount() {
    this.getVenues()
    this.renderMap()
  }

  renderMap = () => {
    loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAVcvtwNGlsHF1Rqayx3Mbzneiz_4dUBzc&callback=initMap')
    window.initMap = this.initMap
  }

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?'
    const parameters = {
      client_id: 'M3LJTA2QWGOG2RY4DVF3LUW3MCQK2UKCHA3WJ0LWKPIDMX0M',
      client_secret: '30E5HRSYMOK2XHIROYC0CCOOCVWYSHK4HAEHNPAG5PPJJCUH',
      query: 'burger',
      near: 'Ridgewood, NJ',
      //ll: '44.3,37.2',
      v: '20181001'
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('Error: '+error)
      })
  }

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })
  }



  render() {
    return (
      <main>
        <div id="map"></div>

      </main>
    );
  }
}


function loadScript (url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default App;
