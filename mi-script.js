/*$(document).ready(function(){
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
});*/
$(document).ready(main);
 
var contador = 1;
 
function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
 
	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}