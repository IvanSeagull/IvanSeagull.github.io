$("#sendmail").on("click", function(){
  var email = $("#email").val().trim();
  var name = $("#name").val().trim();
  var phone = $("#phone").val().trim();
  var message = $("#message").val().trim();

  if(email == ""){
    $("#errorMess").text('Vvedite email');
    return false;
  }

  else if(name == ""){
    $("#errorMess").text('Vvedite name');
    return false;
  }
  else if(phone == ""){
    $("#errorMess").text('Vvedite phone');
    return false;
  }

  else if(message.length < 5){
    $("#errorMess").text('Vvedite message');
    return false;
  }

  $("#errorMess").text("");
  $.ajax({
    url:'ajax/mail.php',
    type: 'POST',
    cache: false,
    data: {'name': name, 'email': email, 'phone': phone, 'message': message  },
    dataType: 'html',
    beforeSend: function(){
      alert('beforeSend');
      $("#sendmail").prop("disabled", true);
    },
    success: function(data){
      alert(response.d);
      alert(data);
      $("#sendmail").prop("disabled", false);
    }, error: function(data){
    alert(response.d);
      $("#sendmail").prop("disabled", false);
    }
  });



});
