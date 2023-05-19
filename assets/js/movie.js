import dibujarGraficos from "./graficos.js";
import dibujarTarjetas from "./tarjetas.js";



const cargarPeliculas = async(pagina, opcion) => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=192e0b9821564f26f52949758ea3c473&language=es-MX&page=${pagina}`);
	
		console.log(respuesta);

		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
			if(opcion === "tarjetas")
			{
				dibujarTarjetas(datos)
			}
			else{

				dibujarGraficos(datos)
			}
			
		} else if(respuesta.status === 401){
			console.log('Pusiste la llave mal');
		} else if(respuesta.status === 404){
			console.log('La pelicula que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos que paso');
		}

	} catch(error){
		console.log(error);
	}

}

export default cargarPeliculas