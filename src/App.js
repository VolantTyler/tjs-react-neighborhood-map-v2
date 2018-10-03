// resource: https://www.youtube.com/watch?v=W5LhLZqj76s&index=2&list=PLBDR9JgF-I5Qz6A2TjO2bslaltdxwWy8i

import React, { Component } from 'react';
import './App.css';

import axios from 'axios'
import Sidebar from './Sidebar'
import NavBar from './NavBar';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
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
        this.setState({
          venues: response.data.response.groups[0].items
        }, this.renderMap())
        console.log(response)
      })
      .catch(error => {
        console.log('Error: '+error)
      })
  }

  initMap = () => {
    //create map, with initial center and zoom
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.979670, lng: -74.119180},
      zoom: 15
    })

    //create a single infoWindow shared by all markers
    let infoWindow = new window.google.maps.InfoWindow({
      maxWidth: 200
    })

    this.state.venues.map(myVenue => {
      let contentString = 
          //new contentString
      // `${myVenue.venue.name}`
          // original contentString
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">'+myVenue.venue.name+'</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';


      //create markers for each location
      const marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng}, 
        map: map,
        title: myVenue.venue.name,
      })
      //each marker opens infoWindow, one open at a time
      marker.addListener('click', function() {
        infoWindow.setContent(contentString)
        infoWindow.open(map,marker)
      })
    })


  }



  render() {
    return (
      <main>
        {/* <NavBar /> */}
          <Sidebar 
            {...this.state}
          />
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
