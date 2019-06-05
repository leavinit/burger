$(function() {
  
  $("#eaten button").toggleClass("btn-primary").css("color","white");  
  $(".change-devoured").on("click", function(event) {

      //builds a put request by getting the id and next devoured state from the data attrs
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");
      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
          
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0 
        //$("[name=devoured]:checked").val().trim()
      };
      if($("#burger").val().trim() !== ""){  
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      }else{//ENDIF
        alert("Please enter a burger name!")
      }
    });
    //handle the reset button.  moves all the burgers to uneaten
    $("#resetBtn").on("click", function(event){
      // alert('working');
      $("#eaten button").trigger("click");
  
    });
    //
  });
  