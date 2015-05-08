$(document).ready(function(){

var source   = $("#some-template").tml();
// debugger
var template = Handlebars.compile(source);
var data = $.getJSON("https://gist.githubusercontent.com/bobbywilson0/8c1ecf7db294ecdc176a/raw/a4b4946a0d789c5e8666843d695ac7427723be1b/data.json",
function(data){
  var that = data.data
  // debugger
  $("#content-placeholder").append(template(that));
});

})


// debugger

// { users: [
//   {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
//   {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
//   {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
//   ]};
