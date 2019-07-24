$( document ).ready(function() {
    // An array of actions, new actions will be pushed into this array;
    var actions = ["NBA", "Lakers", "NFL", "Patriots", "Rams", "guitar", "drawing", "painting", "gaming", "war robots","world of warcraft"];
    // Creating Functions & Methods
  // Function that displays all gif buttons
  function displayGifButtons(){
    $("#gifButtonsView").empty(); // erasing anything in this div id so that it doesnt duplicate the results
    for (var i = 0; i < actions.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("action");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", actions[i]);
        gifButton.text(actions[i]);
        $("#gifButtonsView").append(gifButton);
    }
}
// Function to add a new action button
function addNewButton(){
    $("#addGif").on("click", function(){
    var action = $("#action-input").val().trim();
    if (action == ""){
      return false; // added so user cannot add a blank button
    }
    actions.push(action);
  
      displayGifButtons();
      return false;
      });
    }
    // Function to remove last action button
      // Doesnt work properly yet removes all of the added buttons
      // rather than just the last
  function removeLastButton(){
    $("removeGif").on("click", function(){
    actions.pop(action);
    displayGifButtons();
    return false;
    });
}
    });