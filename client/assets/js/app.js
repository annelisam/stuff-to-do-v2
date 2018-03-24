$(document).ready(function() {
  $('#searchEvents').click(async function(event) {
    event.preventDefault();
    try {
      const city = $('#landing-input').val().trim();
      const cityLocation = await getLatLng(city);
      localStorage.setItem('location', JSON.stringify(cityLocation));              
      console.log(cityLocation); 
      window.location.replace('/events?lat=' + cityLocation.lat + '&lng=' + cityLocation.lng);
    } catch(error) {
      if (error.message) {
        console.error(error.message);
      }
      console.error(error);
    }
  })
  
  function getLatLng(city) {
    return new Promise((resolve, reject) => {
      $.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyDsfnjM905ho9lC-EwFVAI8oOUivynhT9g`, (error, response, body) =>  {
        const location = {
          lat: body.responseJSON.results[0].geometry.location.lat,
          lng: body.responseJSON.results[0].geometry.location.lng,
        }
        resolve(location);
      })  
    })
  }
})

