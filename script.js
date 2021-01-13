jQuery(function(){
  $("i").hide();
  $("strong").mouseover(function(){
    $("i").fadeIn(800);
  });
  $("strong").mouseout(function(){
    $("i").fadeOut(800);
  });
  $(".bt").click(function(){
    alert("Понятно: " + $(".answer").val());
  });
  $("#аниме").mouseover(function(){
    $(".anim").animate({right: '250px'});
  });
  $(".p2").hide();
  $(".showing").click(function(){
    $(".p2").slideDown(5000);
  });
  $("#ban").click(function(){
    $(".sho").removeClass("sho");
  });
  $("#pena").click(function(){
    $("#tuda").remove()
  })
  $("#chto").click(function(){
    alert($("#lo").css("color"))
    $("#lo").css("color", "blue")
  })
})
