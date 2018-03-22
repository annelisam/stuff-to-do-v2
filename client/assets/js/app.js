$('.input').keypress(async function (e) {
  if(e.which == 13) {
    try {
      const city = $('.cityName').val().trim();
      const cityLocaion = await getLatLng(city);
      console.log(cityLocaion);
      localStorage.setItem('location', JSON.stringify(cityLocaion));
      window.location.replace('/events');
    } catch(error) {
      if (error.message) {
        console.error(error.message);
      }
      console.error(error);
    }
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
