$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      1240: {
        items: 2,
      },
    },
  });

//   $(".menu ul li a").click(function () {
//     $("#nav_id").addClass('hide');
//     console.log("ssssss");
//   });


$("#check").click(function () {
  $("#nav_id").css("left","-31px" );
  $("#nav_id").css("background-color","rgba(0,0,0,0.5)" );
  $("#nav_id").css("width","100%" );

  $("#check").click(function () {
    $("#nav_id").css("left","-31px" );
    $("#nav_id").css("background-color","none" );
    $("#nav_id").css("width","100%" );

// $(".menu ul li a").click(function () {
//   $("#nav_id").css("left","-110%");
//   $("#nav_id").css("background-color","none" );
//   // $("#nav_id").css("width","100%" );
// });



});