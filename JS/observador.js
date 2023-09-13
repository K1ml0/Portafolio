const contacto = document.getElementById('contacto');
const avilidades = document.getElementById("avilidades");
const portafolio = document.getElementById("portafolio");
const experiencia = document.getElementById("ex");
const uno = document.getElementById('uno');
const dos = document.getElementById('dos');
const tres = document.getElementById('tres');
const cuatro = document.getElementById('btcuatro');



const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {

        if(entrada.isIntersecting){
           efecto()
		   cuatro.style.color="rgb(16, 179, 248)"

         
        } else {
			cuatro.style.color="white"
	
            
        }
		
	});
}

const cargar2 = (entradas2, observador) => {
	entradas2.forEach((entrada2) => {

        if(entrada2.isIntersecting){
		   uno.style.color="rgb(16, 179, 248)"
         
        } else {
           uno.style.color="white";
	
            
        }
		
	});
}
const cargar3 = (entradas3, observador) => {
	entradas3.forEach((entrada3) => {

        if(entrada3.isIntersecting){
		   dos.style.color="rgb(16, 179, 248)"
		   
         
        } else {
           dos.style.color="white";
	
            
        }
		
	});
}
const cargar4 = (entradas4, observador) => {
	entradas4.forEach((entrada4) => {

        if(entrada4.isIntersecting){
		   tres.style.color="rgb(16, 179, 248)"
		   
         
        } else {
           tres.style.color="white";
	
            
        }
		
	});
}



const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '500px 0px 200px 500px',
	threshold: 1.0
});
const observador2 = new IntersectionObserver(cargar2, {
	root: null,
	rootMargin: '1000px 200px 5000px 200px',
	threshold: 1.0,
});
const observador3 = new IntersectionObserver(cargar3, {
	root: null,
	rootMargin: '500px 500px 500px 200px',
	threshold: 1.0
});
const observador4 = new IntersectionObserver(cargar4, {
	root: null,
	rootMargin: '500px 500px 1000px 500px',
	threshold: 1.0
});



observador.observe(contacto);
observador2.observe(portafolio);
observador3.observe(avilidades);
observador4.observe(experiencia);






