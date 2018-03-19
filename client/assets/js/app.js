$('.search').click(async () => {
  try {
    const city = $('.cityName').val().trim();
    const cityLocaion = getLatLng(city);
    const allEvents = await getAllEvents();
    initmap(allEvents, cityLocaion);
  } catch(error) {
    if (error.message) {
      console.error(error.message);
    }
    console.error(error);
  }
})

function getAllEvents() {
  $.ajax('/api/events', {
    type: 'GET',
  }).then(events => {
    return events;
  })
}

const events = [
  {
    name: 'event1',
    lat: 30.199920,
    lng: 110.480850,
  },
  {
    name: 'event2',
    lat: 34.199920,
    lng: 118.480850,
  },
  {
    name: 'event3',
    lat: 36.199920,
    lng: 118.480850,
  },
  {
    name: 'event4',
    lat: 37.199920,
    lng: 120.480850,
  }
]

function initMap(events, location) {
  var uluru = location;
  var map = new google.maps.Map($('#map'), {
    zoom: 4,
    center: uluru
  });

  events.forEach(eventData => {
    new google.maps.Marker({
      position: {lat: eventData.lon, lng: eventData.lng},
      map: map,
    })
  });
}

function getLatLng(city) {

}

initMap(events, {lat: 34.195615, lng: 118.480406});
