$( document ).ready(function() {

  function sendtest(){
    $.ajax({
      url:'/test',
      method : 'POST',
      data : {"test":'OK!'},
      dataType : 'JSON',
      success : function(data){
        console.log(data);
      },
      error : function(error){
        console.log(error);
      }
    });
  }

  setInterval(function () {
    sendtest();
  }, 4000);


});
