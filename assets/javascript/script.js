// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  // Code for a Listener function activated by clicking the save button
  // for a given hour.
  $('.saveBtn').on('click', function () {
    // Function used to fetch the values of the hour block which had its save button
    // clicked using the jQuery siblings() and parent() methods.
    console.log('clicked');
    var apptValue = $(this).siblings('.description').val();
    var apptTime = $(this).parent().attr('id');

    // Saves the value and time variables created above to localStorage.
    localStorage.setItem(apptTime, apptValue);

    // Display a Notification indicating that an appointment
    // was saved to localStorage by adding the 'show' class to the "section"
    // element with the class "notification".
    $('.notification').addClass('show');

    // Timeout function that after 5 seconds, removes 'show' from the "section"
    // element with the class "notification"
    setTimeout(function () {
      $('.notification').removeClass('show');
    }, 5000);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  
  function timeClassDeterminer() {
    // A variables that fetches the current day and hour 
    // using the dayjs() method.
    var currentHour = dayjs().hour();

    // A function that loop over all of time blocks by using 
    // the jQuery each() method over each element with the class
    // "time-block".
    $('.time-block').each(function () {
      var hourBlock = parseInt($(this).attr('id').split('-')[1]);

      // A conditional statement that compares the current hour
      // to the hour of the selected time block and adds the appropriate
      // class to the time block upon resoltuion.
      
      // Past is added if the hour block is less than the current hour,
      // Present is added if the hour block is equal to the current hour,
      // and Future is added by default in any other case.
      if (hourBlock < currentHour) {
        $(this).addClass('past');
        
      } else if (hourBlock === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }
  // Function call to the timeClassDeterminer() function in
  // the listener function for the save button.
  timeClassDeterminer();
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

    // A series of fetch requests that attempt to
    // load any saved data from localStorage the user might have
    // stored for each hour block using the .val method and getItem
    // from localStorage.
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  // TODO: Add code to display the current date in the header of the page.

  // Gives the p tag with the id "currentDay" text in the form
  // of the current day via the dayjs() method.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
