Descripción:

Este proyecto consistió en la creación de una página web inspirada en el diseño de YouTube utilizando HTML y CSS entre otras herramientas; El objetivo fué replicar la estructura visual básica y animaciones de ser posible.

Herramientas utilizadas:

- Editor de código (Visual Studio Code)
- Navegador web (Chrome)
- Lenguaje HTML y CSS
- Copilot IA
- Videos ilustrativos, otras páginas webs para extraer imágenes e iconos.
 

Estructura:

YouTube

index.html
styles.css
script.js
readme.txt

Pasos de la Creación:


1. Archivo HTML:
   - Con el editor de código se crea un archivo llamado "index.html".
   - Escribir la estructura básica de HTML:
     html
     <!DOCTYPE html>
     <html lang="es">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>YouTube</title>
       <link rel="stylesheet" href="styles.css">
     </head>

     <body>
       - Aqui va el contenido
     </body>
     </html>
     

2. Diseño de la barra de navegación:
   - Dentro del <body>, se agrego un <header> con el botón de menu, el logo, barra de búsqueda, botón de búsqueda, botón de micrófono, settings, y botón de inicio de session del usuario.
   - se usaron etiquetas como <div class>, <input>, <button> y <img>.
	-y en el apartado de styles.ccs se le fueron agregando las características a cada uno para adaptarlo a nuestra página lo mas parecido a la original.
con la opción de Inspeccionar en la pagina orinal se fueron copiando algunos atributos.

3. en la parte inferior de nuestro header se agrego un <div class="Selectores"> la cual contiene un <div class="scroll-box"> donde se le fue colocando los anteriormente mencionados selectores usando <button class= para ir creando nuestra lista entre ellos estan (All, Music, PlayList, entre otros). 

4. Creación de la barra lateral izquierda o Menu:
   - se uso un <section class="main-content"> para dividir la pagina en 2 partes esta vez usando un 20% de vh, se creó un <div class="scroll-left"> y un <div class="menu"> para ir agregando nuestra lista de secciones con sus respectivas imágenes y botones tales como "Home", "Shorts", "Subscriptions" entre otros.
   
5. En el área de contenido:
   - Se uso un <main> y se creo un <div class="video-grid">. y la otra parte de la sección class con un 80%vh para que no choque con nuestro Menu del lado izquierdo. para mostrar los videos estos a su vez tienen un <div class="video-card"> el cual contiene un h3 y unos P para mostrar la información del video como es el título y la info de quien lo proporciona.

     Ejemplo:
        <section class="right">
   	<div class="video-grid">
    		<div class="video-card">
    		<video src="/videos/#UFC308 Pelea Completa Topuria vs Volkanovski - ufcespanol (720p, h264).mp4" controls></video>
       		<div class="video-info">
            		<h3>UFC308 Pelea Completa: Topuria vs Volkanovski</h3>
            		<p>ufcespanol</p>
            		<p>2.78M subscribers</p>
        	</div>
    	</div>
	</section>

6. Estilizamos con CSS:
   - Creando un archivo llamado styles.css.
   - se usaron selectores para dar estilo a cada sección: colores, tamaños, márgenes, fuentes.

   - Ejemplo:
  
    .header{
    	position: fixed;
    	display: flex;
    	align-items: center;
    	justify-content: space-between;
    	padding: 0px 10px;
    	height: 115px;
    	z-index: 1000;
    	width: 99%;
    	background-color: rgba(255, 255, 255, 0.90);
    	backdrop-filter: blur(35px);
    	flex-wrap: wrap;
     }

	 Esta configuración nos da en la parte superior de la página un apartado color blanco con un 0.90 de transparencia y para el efecto borroso se aplicó un filtro blur con 35px. la posición del header es estática en la pagina web por lo cual siempre se mantendrá visible aunque bajemos y todos sus elementos están posicionados de manera central y justificados con espacios entre ellos, y el display flex que nos ubica los elementos de forma horizontal. 

Otro ejemplo pueden ser los botones:

.subscriptions-button {
width: 100%;
height: 40px;
text-decoration: none;
display: flex;
background-color: white;
border: none;
cursor: pointer;
font-size: 14px;
}
.subscriptions-button:hover {
background-color: rgba(218, 218, 218, 0.911);
border-radius: 10px;
}	

se les configuró el tamaño deseado, posiciones y color. se le aplicó un hover el cual nos da el efecto de que al pasar el clic por encima del botón cambia de color de fondo. 

y así sucesivamente se fue ajustando los estilos y estructura según fue necesario.

