
$("#contact-create").on('click', function(){
  $.ajax({
    url: '/contacts/',
    method: 'POST',
    data: {
      contact: {
        name: $("#contact-name").val(),
        email: $("#contact-email").val(),
        pet_name: ($("#contact-pet_name").val())
      }
    }
  }).done(function(data){
    console.log("Created Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#contact-update").on('click', function(){
  $.ajax({
    url: '/contacts/' + $("#contact-id").val(),
    method: 'PATCH',
    data: {
      contact: {
        name: $("#contact-name").val(),
        email: $("#contact-email").val(),
        pet_name: ($("#contact-pet_name").val())
      }
    }
  }).done(function(data){
    console.log("Updated Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#contact-destroy").on('click', function(){
  $.ajax({
    url: '/contacts/' + $("#contact").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

//Person
$("#location-create").on('click', function(){
  $.ajax({
    url: '/locations/',
    method: 'POST',
    dataType: 'json',
    data: {
      location: {
        number: Number($("#location-number").val()),
        street: $("#location-street").val(),
        city: $("#location-city").val()
      }
    }
  }).done(function(data){
    console.log("Created Location!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#location-update").on('click', function(){
  $.ajax({
    url: '/locations/' + $("#locaiton-id").val(),
    method: 'PATCH',
    data: {
      location: {
        number: number($("#pet-name").val()),
        street: $("#location-street").val(),
        city: $("#location-city").val()
      }
    }
  }).done(function(data){
    console.log("Updated Location!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#location-destroy").on('click', function(){
  $.ajax({
    url: '/locations/' + $("#location-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted located!");
  }).fail(function(data){
    console.error(data);
  });
});


$("#pet-create").on('click', function(){
  $.ajax({
    url: '/pets/',
    method: 'POST',
    data: {
      pet: {
        name: $("#pet-name").val(),
        species: $("#pet-species").val(),
        color: $("#color").val()
      }
    }
  }).done(function(data){
    console.log("Created Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#pet-update").on('click', function(){
  $.ajax({
    url: '/pets/' + $("#pet-id").val(),
    method: 'PATCH',
    data: {
      pet: {
        name: $("#pet-name").val(),
        species: $("species").val(),
        color: $("#color").val()
      }
    }
  }).done(function(data){
    console.log("Updated Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#pet-destroy").on('click', function(){
  $.ajax({
    url: '/pets/' + $("#pet-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

//User
$("#user-create").on('click', function(){
  $.ajax({
    url: '/users',
    method: 'POST',
    data: {
      user: {
        email: $("#user-email").val(),
        username: $("#user-username").val(),
        token: $("#user-token").val(),
        password_digest: $("#user-password-digest").val()
      }
    }
  }).done(function(data){
    console.log("Created User!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#user-update").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'PATCH',
    data: {
      user: {
        email: $("#user-email").val(),
        username: $("#user-username").val(),
        token: $("#user-token").val(),
        password_digest: $("#user-password-digest").val()
      }
    }
  }).done(function(data){
    console.log("Updated User!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#user-destroy").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted User!");
  }).fail(function(data){
    console.error(data);
  });
});

