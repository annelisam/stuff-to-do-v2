async function initMap() {
  const location = JSON.parse(localStorage.getItem('location')); 
  const allEvents = await getAllEvents(location);
  const uluru = location;
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru,
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "elementType": "labels.icon",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#f5f5f5"
          }
        ]
      },
      {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#bdbdbd"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#ffffff"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#757575"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#dadada"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#616161"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      },
      {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#e5e5e5"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#eeeeee"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#c9c9c9"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9e9e9e"
          }
        ]
      }
    ]
  });
  allEvents.forEach(eventData => {
    const eventLocation = new google.maps.LatLng(eventData.lat, eventData.lng);
    const marker = new google.maps.Marker({
      position: eventLocation,
      eventInfo: eventData,
    });
    marker.addListener('click', function () {
      console.log(this);
    });
    marker.setMap(map);
  });
}

function getAllEvents(location) {
  return new Promise((resolve, reject) => {
    if (location !== null) {
      const lat = location.lat;
      const lng = location.lng;
      $.get('/api/events?lat=' + lat + '&lng=' + lng)    
      .then(events => {
        resolve(events);
      });
    } else {
      const lat = 34.065266;
      const lng = -118.250068;
      $.get('/api/events?lat=' + lat + '&lng=' + lng)    
      .then(events => {
        resolve(events);
      });
    }
  });
}

$('.upVote').click(function(e) {
  e.preventDefault();
  const theEvent = $(this)[0].attributes[2].value;
  $.get('/api/events/' + theEvent, (data) => {
    const searchedEvent = data[0];
    const updatedData = {
      address: searchedEvent.address,
      city: searchedEvent.city,
      dateTime: searchedEvent.dateTime,
      description: searchedEvent.description,
      id: searchedEvent.id,
      lat: searchedEvent.lat,
      lng: searchedEvent.lng,
      name: searchedEvent.name,
      state: searchedEvent.state,
      upVotes: searchedEvent.upVotes + 1,
      urlPhoto: searchedEvent.urlPhoto,
      zipCode: searchedEvent.zipCode,
    };

    $.ajax({
      type: 'PUT',
      url: '/api/events',
      data: updatedData,
    })
    .done(function(data) {
      location.reload();
    });
  });
});
