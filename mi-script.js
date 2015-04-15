$(document).ready(function(){
$(window).scroll(function(){
var prueba = $(this).scrollTop();
$("#katty").text(prueba);
if (prueba > 658) {
$(".navbar-default").addClass("navegacion");
}
else if (prueba < 658) {
$(".navbar-default").removeClass("navegacion");
}
});
});