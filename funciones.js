$(document).ready(Inicio);

function Inicio() {
	var cancion = $("#audio")[0]; //selecciono la canción del html
	console.log(cancion);

	// funcion que silencia la canción
	var mute = $("#mute").click(function(){
		if(cancion.muted == false) {
			cancion.muted = true;
			console.log("he silenciado la canción")
		} else {
			cancion.muted = false;
			console.log("he vuelto a poner la canción")
		}
	});

	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
	
	
}

