$(document).ready(function () {
  $('#addEventSaveButton').on('click', function (event) {
    event.preventDefault();

    let eventName = $('#addEventName').val().trim();
    let eventHost = $('#addEventHost').val().trim();

    let eventDate = $('#addEventDate').val().trim();
    let eventStartTime = $('#addEventStartTime').val().trim();
    let eventDateTime = `${eventDate} ${eventStartTime}`;
    // let momentEventDateTime = moment(eventDateTime).format("ddd MMM DD YYYY HH:mm:ss");
    let momentEventDateTime = moment(eventDateTime).format("YYYY-MM-DD HH:mm:ss");

    let eventStreetAddress = $('#addEventStreetAddress').val().trim();
    let eventCity = $('#addEventCity').val().trim();
    let eventState = $('#addEventState').val().trim();
    let eventZip = $('#addEventZipCode').val().trim();
    let eventInfo = $('#addEventDescription').val().trim();
    let eventPhotoUrl = $('#addEventPhoto').val().trim();

    let eventFullDescription = {
      name: eventName,
      description: eventInfo,
      urlPhoto: eventPhotoUrl,
      dateTime: momentEventDateTime,
      address: eventStreetAddress,
      city: eventCity,
      state: eventState,
      zipCode: eventZip,
      UserId: 1,
    };
    console.log(`the full description to post: ${JSON.stringify(eventFullDescription, null, 2)}`);
    $.ajax('/api/events', {
      type: 'POST',
      data: eventFullDescription
    }).then(
      function () {
        console.log(`posted new event: ${JSON.stringify(eventFullDescription, null, 2)}`);
        location.reload();
      }
    );
  });

  $('.editEventButton').on('click', function (event) {
    let eventId = $(this).data('eventId');
    
    let eventDescriptionEdits = {
      name: eventName,
      description: eventInfo,
      urlPhoto: eventPhotoUrl,
      dateTime: momentEventDateTime,
      address: eventStreetAddress,
      city: eventCity,
      state: eventState,
      zipCode: eventZip,
      UserId: 1,
    };
    $.ajax('/api/events/' + eventId, {
      type: 'PUT',
      data: eventDescriptionEdits
    }).then(
      function () {
        console.log(`updated event details: ${eventDescriptionEdits}`);
        location.reload();
      }
    );
  });

  $('.deleteEventButton').on('click', function (event) {
    let eventId = $(this).data('eventId');
    $.ajax('/api/events/' + eventId, {
      type: 'DELETE',
    }).then(
      function () {
        console.log(`deleted event id#: ${eventId}`);
        location.reload();
      }
    );
  });
});
