// function autoHeight() {
//     $('#content').css('min-height', 0);
//     $('#content').css('min-height', (
//         $(document).height() - $('#header').height() - $('#footer').height() - 40
//     ));
// }
// var initialLoad = true;
// // onDocumentReady function bind
// $(document).ready(function() {
//     autoHeight();
// });

// // onResize bind of the function
// $(window).resize(function() {
//     autoHeight();
// });
function adjustFooterMarginTop(){
      // var height = $(this).height() - $("#header").height() + $("#footer").height() - 35;
      var height = $(document).height() - ( $('#header').height() + $('#content').height() ) - $('#footer').height() - 50;
      // console.log(height);
      // $('#content').height(height);
      // $('#footer').height(height - 200);
      $('#footer').css('margin-top', height); // <-- set here
}
$(document).ready(function(){
    adjustFooterMarginTop();
});
$(window).resize(function(){
    adjustFooterMarginTop();
});
$(window).load(function(){
    $(window).resize();
});


// function footerAlign() {
//   $('#footer').css('display', 'block');
//   $('#footer').css('height', 'auto');
//   var footerHeight = $('#footer').outerHeight();
//   $('.wrapper').css('padding-bottom', footerHeight);
//   $('#footer').css('height', footerHeight);
// }


// $(document).ready(function(){
//   footerAlign();
// });

// $( window ).resize(function() {
//   footerAlign();
// });
