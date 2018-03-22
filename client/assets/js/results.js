async function initMap() {
  const allEvents = await getAllEvents(); 
  const location = JSON.parse(localStorage.getItem('location'));

  // const uluru = {lat: location.lat, lng: location.lng};
  const uluru = {lat: 34.200432, lng: -118.478111};
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

function getAllEvents() {
  return new Promise((resolve, reject) => {
    $.ajax('/api/events', {
      type: 'GET',
    }).then(events => {
      // console.log(events);
      resolve(events);
    })
  })
}
