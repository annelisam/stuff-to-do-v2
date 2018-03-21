// when clicking event submit button,
// grab the user input event data & make call to our backend
// create new = post
// edit existing = patch
// delete existing = delete

// be sure to add some event.preventDefault(); lines on any submit button types later
$(function() {
  // stuff to do when submit event button clicked
  // grab these data values to pass into object to be posted to database w/ AJAX POST call
  $('.submitEventButton').on('click', function(event) {
    // let eventId = $(this).data('eventId'); id will be auto-incremented(?)
    let eventName = $(this).data('eventName');
    let eventInfo = $(this).data('eventInfo');
    let eventPhoto = $(this).data('eventPhoto');
    let eventDate = $(this).data('eventDate');
    let eventUpVotes = $(this).data('eventUpVotes');
    let eventAddress = $(this).data('eventAddress');
    let eventCity = $(this).data('eventCity');
    let eventState = $(this).data('eventState');
    let eventZip = $(this).data('eventZip');
    let eventCreatedAt = $(this).data('eventCreatedAt');
    let eventUpdatedAt = $(this).data('eventUpdatedAt');
    let eventCreator = $(this).data('eventCreator');

    let eventFullDescription = {
      // id: eventId, id will be auto-incremented(?)
      name: eventName,
      description: eventInfo,
      urlPhoto: eventPhoto,
      date: eventDate,
      upVotes: eventUpVotes,
      address: eventAddress,
      city: eventCity,
      state: eventState,
      zipCode: eventZip,
      createdAt: eventCreatedAt,
      updatedAt: eventUpdatedAt,
      UserId: eventCreator,
    };
    // post the eventInfo to create new event
    $.ajax('/api/events', {
      type: 'POST',
      data: eventFullDescription
    }).then(
      function() {
        console.log(`posted new event: ${eventFullDescription}`);
        location.reload();
      }
    );
  });
  
  // stuff to do when edit event button clicked
  $('.editEventButton').on('click', function(event) {
    // have all possible variables & then put in some kind of (if !eventDetail) {don't include in the object passed to patch route?}
    let eventId = $(this).data('eventId');
    // other lets to hold event info
    // put those here later
    let eventDescriptionEdits = {
      // make an object w/ the details to edit.
      // maybe make it an empty object, then use if(!particularEventDetail) {don't include} else {make that key:value pair};
    };
    // patch the event info to just edit parts of the event's details
    $.ajax('/api/events/' + eventId, {
      type: 'PATCH',
      data: eventDescriptionEdits
    }).then(
      function() {
        console.log(`updated event details: ${eventDescriptionEdits}`);
        location.reload();
      }
    );
  });

  // stuff to do when delete event button clicked
  $('.deleteEventButton').on('click', function(event) {
    let eventId = $(this).data('eventId');
    // send delete request
    $.ajax('/api/events/' + eventId, {
      type: 'DELETE',
    }).then(
      function() {
        console.log(`deleted event id#: ${eventId}`);
        location.reload();
      }
    );
  });
});
