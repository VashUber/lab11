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
    $("#tuda").remove();
  });
  $("#chto").click(function(){
    alert($("#lo").css("color"));
    $("#lo").css("color", "blue");
  });
  $("#text54").click(function(){
    console.log($(".maska").text());
  });
  $("#hide").click(function(){
    $(".img1").toggle();
  });
  $(".block").mouseover(function(){
    let dimensions = "";
    dimensions+= "Width: " + $(".block").width() + "px Height: " + $(".block").height() + "px";
    $(".block").html(dimensions);
  });
  $("#tabs").tabs();
  $(".circle").draggable();
  $(".blo").droppable({
    drop: function(){
      $(this)
      .html("Попав");
    }
  });
})
