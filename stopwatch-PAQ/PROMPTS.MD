- **Prompt inicial con justificación** - 	
         confieso que esta presentación es el cuarto desarrollo de Prompts que realicé.	los tres iniciales con Cursor, el cuarto con Vs2022 y Github Copilot
         siempre destaqué el rol que buscaba del chatbot.
         la tarea la fui haciendo cada vez más específica, aclarando el paso a paso a desarrollar.
		 siempre me pareció interesante agregar un ejemplo que clarifique.
- **Resultados parciales** 	
         en las tres primeras versiones, los resultados fueron fatales, y cada prompt se alejaba del objetivo que buscaba.
         en este ultimo desarrollo, desconozco si por el prompt o por la herramienta, el resultado fue óptimo. solo tuve que agregar un segundo prompt para ajustar detalles
- **Refinamientos aplicados**
         solo tuve que aplicar refinamientos estéticos y de funcionalidad menor, que detallé en el tercer prompt.
- **Prompt final**  
         
	Realizar los siguientes ajustes.
	1) el título principal quedó mal acentuado la "o" de cronómetro. adjunto imagen
	2) Centralizar los dos botones "StopWatch" y "CountDown", y colocarles diferentes colores a cada uno para distinguirlos.
	3) Al generar un nuevo "card" ubicarlo a la derecha de los existentes, en lugar de la izquierda.
	3) Botón Pausar. que al presionarlo, cambie el texto del botón por "Reanudar". cuando se vuelva a presionar para reanudar, vuelva a colocar el texto "Pausar"
	4) al presionar el botón "Resetear", que también coloque en cero las variables "horas", "minutos", "segundos"

- **Breve explicación** 
    Solo tuve que aplicar breves ajustes a lo que inicialmente ya desarrolló conforme a lo que deseaba.

--- PROMPT #1

#Rol
Te consulto como Programador Web senior con amplio manejo de html, javascript y los más modernos lenguajes y técnicas de programación web.

#Contexto
Necesitamos desarrollar una página de conteos ascendente (cronómetro) y descendente (temporizador)

#Tarea

- presentar dos botones para seleccionar acción : StopWatch  y CountDown
- el botón stopwatch debe generar un nuevo proceso para poder seleccionar un tiempo (hora, minutos, segundos) y que corra un reloj hasta llegar a ese valor
- el botón Countdown debe generar un nuevo proceso para poder seleccionar un tiempo (hora, minutos, segundos) y que corra un reloj iniciando en ese valor y descienda hasta llegar a cero.
- cada proceso es independiente y se pueden ejecutar concurrentemente. es decir, se pueden presionar los dos botones iniciales en cualquier y generar nuevos procesos.
- definición de cada proceso :
	a) debe contar con : 
		un reloj (que muestre el avance del tiempo), 
		una variable para ingresar el tiempo, 
		un botón para iniciar el conteo (ascendente o descendente)
		un botón que permita pausar y reanudar el conteo 
		un botón que permita resetear todos los valores (reloj y variable)
	b) el reloj se debe destacar del resto de los datos, y mostrar también los milisegundos, en formato más pequeño
	c) Debe estar titulado con la operación (stopwatch o countdown)
	d) Al finalizar cada proceso debe reproducir un sonido de alerta y mostrar el mensaje "Tarea concluida" en el caso del StopWatch, y "Tiempo Cumplido" en el caso del CountDown
- los procesos se deben mostrar en secciones, donde en una pantalla de PC se puedan ver 4 o 5 procesos por fila
- el diseño debe ser responsive

#Ejemplo
se inicializa la pantalla sólo con los dos botones "stopwatch" y "countdown"
se presiona stopwatch, aparece una seccion con el reloj en cero, las variables horas, minutos y segundos y los botones Iniciar, pausar y resetear.
el usuario elige un tiempo y presiona Iniciar.
comienzo el conteo del reloj.
mientras esto sucede, el usuario presiona el botón "CountDown".
aparece una nueva sección, con el mismo aspecto del anterior, 
ahora se ven dos relojes con el resto de las variables y botones.
mientras el reloj inicial sigue corriendo, el usuario carga el tiempo en la segunda sección y presiona "iniciar".
ahora se ven dos relojes activos, uno aumentando y el otro disminuyendo el horario.

#Otras consideraciones
Muestrame paso a paso cómo lo vas a programar.
Preguntame cualquier duda que te surja para el desarrollo


---------- PROMPT #2 (respuesta a una pregunta del chatbot))


1) no tengo ninguna preferencia por el beep. 2) no hace falta que incluyas la notificación del navegador. 3) Sólo entero de segundos.

---------- PROMPT #3 (ajustes finales)


Realizar los siguientes ajustes.
1) el título principal quedó mal acentuado la "o" de cronómetro. adjunto imagen
2) Centralizar los dos botones "StopWatch" y "CountDown", y colocarles diferentes colores a cada uno para distinguirlos.
3) Al generar un nuevo "card" ubicarlo a la derecha de los existentes, en lugar de la izquierda.
3) Botón Pausar. que al presionarlo, cambie el texto del botón por "Reanudar". cuando se vuelva a presionar para reanudar, vuelva a colocar el texto "Pausar"
4) al presionar el botón "Resetear", que también coloque en cero las variables "horas", "minutos", "segundos"
