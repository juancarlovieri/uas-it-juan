// function run(event) {
//     if (this.hash !== "") {
//       event.preventDefault();
//       var hash = this.hash;
//       $("html, body").animate({ scrollTop: $(hash).offset().top }, 1000);
//     }
// }

// $(document).ready(function() {
//   var arr = getElementsByTagName("A");
//   for (var i = 0; i < arr.length; ++i) {
//     // arr[i].on("click", run);
//   }
//   // $("a").on("click", function(event) {
//   // });
// });
$(".slick-carousel").slick({
  infinite: true,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true
});