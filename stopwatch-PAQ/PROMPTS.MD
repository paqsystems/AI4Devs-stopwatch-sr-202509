- **Prompt inicial con justificacion** - 	
         confieso que esta presentacion es el cuarto desarrollo de Prompts que realice. los tres iniciales con Cursor, el cuarto con Vs2022 y Github Copilot
         siempre destaque el rol que buscaba del chatbot.
         la tarea la fui haciendo cada vez mas especifica, aclarando el paso a paso a desarrollar.
		 siempre me parecio interesante agregar un ejemplo que clarifique.
- **Resultados parciales** 	
         en las tres primeras versiones, los resultados fueron fatales, y cada prompt se alejaba del objetivo que buscaba.
         en este ultimo desarrollo, desconozco si por el prompt o por la herramienta, el resultado fue optimo. solo tuve que agregar un segundo prompt para ajustar detalles
- **Refinamientos aplicados**
         solo tuve que aplicar refinamientos esteticos y de funcionalidad menor, que detalle en el tercer prompt.
- **Prompt final**  
         
	Realizar los siguientes ajustes.
	1) el titulo principal quedo mal acentuado la "o" de cronometro. adjunto imagen
	2) Centralizar los dos botones "StopWatch" y "CountDown", y colocarles diferentes colores a cada uno para distinguirlos.
	3) Al generar un nuevo "card" ubicarlo a la derecha de los existentes, en lugar de la izquierda.
	3) Boton Pausar. que al presionarlo, cambie el texto del boton por "Reanudar". cuando se vuelva a presionar para reanudar, vuelva a colocar el texto "Pausar"
	4) al presionar el boton "Resetear", que tambien coloque en cero las variables "horas", "minutos", "segundos"

- **Breve explicacion** 
    Solo tuve que aplicar breves ajustes a lo que inicialmente ya desarrollo conforme a lo que deseaba.

--- PROMPT #1

#Rol
Te consulto como Programador Web senior con amplio manejo de html, javascript y los mas modernos lenguajes y tecnicas de programacion web.

#Contexto
Necesitamos desarrollar una pagina de conteos ascendente (cronometro) y descendente (temporizador)

#Tarea

- presentar dos botones para seleccionar accion : StopWatch  y CountDown
- el boton stopwatch debe generar un nuevo proceso para poder seleccionar un tiempo (hora, minutos, segundos) y que corra un reloj hasta llegar a ese valor
- el boton Countdown debe generar un nuevo proceso para poder seleccionar un tiempo (hora, minutos, segundos) y que corra un reloj iniciando en ese valor y descienda hasta llegar a cero.
- cada proceso es independiente y se pueden ejecutar concurrentemente. es decir, se pueden presionar los dos botones iniciales en cualquier y generar nuevos procesos.
- definicion de cada proceso :
	a) debe contar con : 
		un reloj (que muestre el avance del tiempo), 
		una variable para ingresar el tiempo, 
		un boton para iniciar el conteo (ascendente o descendente)
		un boton que permita pausar y reanudar el conteo 
		un boton que permita resetear todos los valores (reloj y variable)
	b) el reloj se debe destacar del resto de los datos, y mostrar tambien los milisegundos, en formato mas pequeno
	c) Debe estar titulado con la operacion (stopwatch o countdown)
	d) Al finalizar cada proceso debe reproducir un sonido de alerta y mostrar el mensaje "Tarea concluida" en el caso del StopWatch, y "Tiempo Cumplido" en el caso del CountDown
- los procesos se deben mostrar en secciones, donde en una pantalla de PC se puedan ver 4 o 5 procesos por fila
- el diseno debe ser responsive

#Ejemplo
se inicializa la pantalla solo con los dos botones "stopwatch" y "countdown"
se presiona stopwatch, aparece una seccion con el reloj en cero, las variables horas, minutos y segundos y los botones Iniciar, pausar y resetear.
el usuario elige un tiempo y presiona Iniciar.
comienzo el conteo del reloj.
mientras esto sucede, el usuario presiona el boton "CountDown".
aparece una nueva seccion, con el mismo aspecto del anterior, 
ahora se ven dos relojes con el resto de las variables y botones.
mientras el reloj inicial sigue corriendo, el usuario carga el tiempo en la segunda seccion y presiona "iniciar".
ahora se ven dos relojes activos, uno aumentando y el otro disminuyendo el horario.

#Otras consideraciones
Muestrame paso a paso como lo vas a programar.
Preguntame cualquier duda que te surja para el desarrollo


---------- PROMPT #2 (respuesta a una pregunta del chatbot))


1) no tengo ninguna preferencia por el beep. 2) no hace falta que incluyas la notificacion del navegador. 3) Solo entero de segundos.

---------- PROMPT #3 (ajustes finales)


Realizar los siguientes ajustes.
1) el titulo principal quedo mal acentuado la "o" de cronometro. adjunto imagen
2) Centralizar los dos botones "StopWatch" y "CountDown", y colocarles diferentes colores a cada uno para distinguirlos.
3) Al generar un nuevo "card" ubicarlo a la derecha de los existentes, en lugar de la izquierda.
3) Boton Pausar. que al presionarlo, cambie el texto del boton por "Reanudar". cuando se vuelva a presionar para reanudar, vuelva a colocar el texto "Pausar"
4) al presionar el boton "Resetear", que tambien coloque en cero las variables "horas", "minutos", "segundos"
