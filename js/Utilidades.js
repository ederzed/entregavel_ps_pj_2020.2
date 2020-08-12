(function ($) {
                $(function () {
					
					
		
                    $('.sidenav').sidenav();
                    $('.slider').slider({
                        full_width: true,
                        height: 520,
                        interval: 10000,
                        indicators: true
                    });
					$( "p" ).click(function() {
					 $('#Atualizavel').html("<tr><td><div class='preloader-wrapper big active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div></td><td><div class='preloader-wrapper big active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div></td><td><div class='preloader-wrapper big active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div></td><td><div class='preloader-wrapper big active'><div class='spinner-layer spinner-yellow-only'><div class='circle-clipper left'><div class='circle'></div></div><div class='gap-patch'><div class='circle'></div></div><div class='circle-clipper right'><div class='circle'></div></div></div></div></td></tr>");
					  setTimeout(function() { 
						var xhr = new XMLHttpRequest();
						xhr.open('GET', 'https://api.polijunior.com.br/notas/');
						xhr.addEventListener('load', function() {
							var array = JSON.parse(this.response);
							var tabela = "";
							array.forEach(function(nota){
								var nota_p3 = (((nota.media_pretendida*(nota.peso_p1+nota.peso_p2+nota.peso_p3)) - (nota.peso_p1*nota.nota_p1) - (nota.peso_p2*nota.nota_p2) )/nota.peso_p3).toFixed(1);
								if(nota_p3 > 10)
									nota_p3 = "<span class='red-text'>IMPOSSÍVEL</span>"
								if(nota_p3 <= 0)
									nota_p3 = "<span class='green-text'>APROVADO</span>"
								tabela += "<tr><td>"+ nota.materia +"</td><td>"+ nota.nota_p1 +"</td><td>"+ nota.nota_p2 +"</td><td><b>"+ nota_p3 +"</b></td></tr>"
							})
							$('#Atualizavel').html(tabela);
						})
					
						xhr.send();
					
					  }, 2000);
					});
					$( "#btn0" ).click(function() {
						$('#nusp').focus();
						$('html, body').animate({
							scrollTop: $('#nusp').offset().top
						}, 2000);
					});
					$( "#btn1" ).click(function() {
						$('#nusp').focus();
						$('html, body').animate({
							scrollTop: $('#nusp').offset().top
						}, 2000);
					});
					$( "#btn2" ).click(function() {
						$('#nusp').focus();
						$('html, body').animate({
							scrollTop: $('#nusp').offset().top
						}, 2000);
					});
					$( "#btn3" ).click(function() {
						$('#nusp').focus();
						$('html, body').animate({
							scrollTop: $('#nusp').offset().top
						}, 2000);
					});
					$( "#btn4" ).click(function() {
						$('#nusp').focus();
						$('html, body').animate({
							scrollTop: $('#nusp').offset().top
						}, 2000);
					});
                }); 
				
 })(jQuery); 
