'use strict';

app.models.calView = (function() {

   return {};
})();

console.log("in index.js for calView")


$(document).ready(function() { 
  
  console.log("before calendar call")  
  $('#calendar').fullCalendar({});
  console.log("after calendar call");

});