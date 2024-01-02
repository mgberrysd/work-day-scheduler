// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  var saveButton = $('.saveBtn');
  var hours = [$('#hour-9'), $('#hour-10'), $('#hour-11'), $('#hour-12'), $('#hour-13'), $('#hour-14'), $('#hour-15'), $('#hour-16'), $('#hour-17')];

  console.log(hours[0].children().eq(1).val());
  function save() {
    for (i = 0; i < hours.length; i++) {
      localStorage.setItem("hour index: " + JSON.stringify(i), JSON.stringify(hours[i].children().eq(1).val().trim()));

    }
  };
  var saved;

      // saved = localStorage.getItem("hour index: " + "0");
      // console.log(saved);
      //         hours[0].children().eq(1).text(JSON.parse(saved));


  function load() {
    for (i = 0; i < hours.length; i++) {
      saved = localStorage.getItem("hour index: " + i);
      if (saved !== null) {
        hours[i].children().eq(1).text(JSON.parse(saved));

      }
    }
  };
  load();
  saveButton.on("click", save);
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // make array of hours for 
  // get current hour
  // enter conditional logic for hour
  // if < 9 set all booxes as future
  // if > 17 set all boxes as past
  // else
  var currentHour = dayjs().hour();
  var hourIndxex = currentHour - 9;

  function setTime() {
    for (i = 0; i < hours.length; i++) {
      if (i > hourIndxex) {
        hours[i].addClass('future');
      }
      if (i === hourIndxex) {
        hours[i].addClass('present');
      }
      if (i < hourIndxex) {
        hours[i].addClass('past');
      }
    }
  };

  setTime();
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd MMMM DD, YYYY'));

});
