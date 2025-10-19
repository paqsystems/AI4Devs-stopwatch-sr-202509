# stopwatch-PAQ

Proyecto: Cron�metros y cuentas regresivas m�ltiples (StopWatch / CountDown)

Descripci�n
---
Peque�a aplicaci�n web para crear y gestionar m�ltiples procesos de conteo simult�neos: cron�metros (ascendentes) y temporizadores (descendentes). Cada proceso corre de forma independiente en su propia tarjeta y muestra horas, minutos, segundos y milisegundos.

Caracter�sticas
---
- Crear instancias `StopWatch` y `CountDown` desde la pantalla principal.
- Cada instancia tiene:
  - Reloj principal (HH:MM:SS) y milisegundos (.mmm) en tama�o reducido.
  - Inputs para definir tiempo (HH, MM, SS). Solo segundos enteros.
  - Botones: `Iniciar`, `Pausar`/`Reanudar`, `Resetear`.
  - Mensaje al finalizar: `Tarea concluida` (StopWatch) o `Tiempo Cumplido` (CountDown).
  - Reproducci�n de un beep de alerta al finalizar (WebAudio API).
- Dise�o responsive: en pantallas grandes se muestran varias tarjetas por fila usando CSS Grid.

Archivos principales
---
- `index.html` - Punto de entrada de la UI.
- `style.css` - Estilos en CSS puro.
- `script.js` - L�gica para instanciar y controlar m�ltiples procesos.
- `PROMPTS.MD` - Registro de prompts usados para generar el proyecto.
- `CHATBOT.MD` - Informaci�n sobre la interacci�n con el chatbot (archivo vac�o inicialmente).

Uso
---
1. Abrir `stopwatch-PAQ/index.html` en un navegador moderno.
2. Hacer clic en `StopWatch` o `CountDown` para crear una nueva tarjeta.
3. Introducir horas, minutos y segundos (valores enteros).
4. Pulsar `Iniciar`. Usar `Pausar` para detener temporalmente y `Resetear` para volver al estado inicial.

Notas t�cnicas
---
- No se requiere servidor; archivos est�ticos suficientes.
- El sonido de alerta usa la WebAudio API para evitar incluir archivos binarios.
- El muestreo de milisegundos se actualiza con `setInterval` a ~31ms para equilibrio entre suavidad y consumo.

Limitaciones y consideraciones
---
- No se usan notificaciones del navegador (seg�n indicaci�n del usuario).
- Los inputs aceptan solo enteros; no hay fracciones de segundo.

Contribuciones
---
Si quieres mejorar estilos, accesibilidad o a�adir export/import de estados, edita los archivos en esta carpeta y crea un pull request.

Licencia
---
C�digo provisto como ejemplo para ejercicios. Reutil�zalo seg�n las pol�ticas del repositorio principal.
