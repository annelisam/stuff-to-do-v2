// when clicking event submit button,
// grab the user input event data & make call to our backend
// create new = post
// edit existing = patch
// delete existing = delete

// be sure to add some event.preventDefault(); lines on any submit button types later
$(document).ready(function () {
  // stuff to do when submit event button clicked
  // grab these data values to pass into object to be posted to database w/ AJAX POST call
  $('#addEventSaveButton').on('click', function (event) {
    event.preventDefault();

    let eventName = $('#addEventName').val();
    console.log(`eventName: ${eventName}`);
    let eventHost = $('#addEventHost').val();
    console.log(`eventHost: ${eventHost}`);
    let eventDate = $('#addEventDate').val();
    console.log(`eventDate: ${eventDate}`);
    let eventStreetAddress = $('#addEventStreetAddress').val();
    console.log(`eventStreetAddress: ${eventStreetAddress}`);
    let eventCity = $('#addEventCity').val();
    console.log(`eventCity: ${eventCity}`);
    let eventState = $('#addEventState').val();
    console.log(`eventState: ${eventState}`);
    let eventZip = $('#addEventZipCode').val();
    console.log(`eventZip: ${eventZip}`);
    let eventInfo = $('#addEventDescription').val();
    console.log(`eventInfo: ${eventInfo}`);
    let eventPhotoUrl = $('#addEventPhoto').val();
    console.log(`eventPhotoUrl: ${eventPhotoUrl}`);

    let eventFullDescription = {
      name: eventName,
      description: eventInfo,
      urlPhoto: eventPhotoUrl,
      dateTime: eventDate,
      address: eventStreetAddress,
      city: eventCity,
      state: eventState,
      zipCode: eventZip,
      UserId: 1,
    };
    console.log(`the full description to post: ${JSON.stringify(eventFullDescription, null, 2)}`);
    // post the eventInfo to create new event
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

  // stuff to do when edit event button clicked
  // make a GET to pull the existing event data & populate the user input pop-up.
  // then make a PUT w/ whatever the unchanged existing data & updated data are.
  $('.editEventButton').on('click', function (event) {
    let eventId = $(this).data('eventId');
    // other lets to hold event info
    // put those here later
    let eventDescriptionEdits = {
      // make an object w/ the edited data
    };
    // patch the event info to just edit parts of the event's details
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

  // stuff to do when delete event button clicked
  $('.deleteEventButton').on('click', function (event) {
    let eventId = $(this).data('eventId');
    // send delete request
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
