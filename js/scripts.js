$(document).ready(function(){
  $("form#agecheck").submit(function(event){
    event.preventDefault();
    var inputtedAge = parseInt($("input#age").val());
    if (inputtedAge < 18) {
      $("#under18").show();
      $(".modal").modal("hide");
    }
    else if(inputtedAge >= 18){
      $("#over18").show();
      $(".modal").modal("hide");
    }
    else{
      $("#stopplayin").show();
      $(".modal").modal("hide");
    }
  });
  $("button#check").click(function(){
    $("#under18").hide();
    $("#over18").hide();
    $("#stopplayin").hide();
  });

});
