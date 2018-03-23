async function initMap() {
  const location = JSON.parse(localStorage.getItem('location'));  
  const allEvents = await getAllEvents(location);

  // const uluru = {lat: location.lat, lng: location.lng};
  const uluru = location;
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: uluru,
  });
  allEvents.forEach(eventData => {
    const eventLocation = new google.maps.LatLng(eventData.lat, eventData.lng); 
    const marker = new google.maps.Marker({
      position: eventLocation,
      eventInfo: eventData,
    })
    marker.addListener('click', function() {
      // create functionality for when user clicks on marker to open up the event details
      console.log(this);
    })
    marker.setMap(map);
  });
}

function getAllEvents(location) {
  return new Promise((resolve, reject) => {
    const lat = location.lat;
    const lng = location.lng;
    $.get('/api/events?lat=' + lat + '&lng=' + lng)    
    .then(events => {
      resolve(events);
    })
  })
}

$('.upVote').click(function(e) {
  e.preventDefault;
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
    }

    $.ajax({
      type: 'PUT',
      url: '/api/events',
      data: updatedData,
    })
    .done(function(data) {
      location.reload();
    })
  })
})
