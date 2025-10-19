# stopwatch-PAQ

Proyecto: Cronometros y cuentas regresivas multiples (StopWatch / CountDown)

Descripcion
---
Pequena aplicacion web para crear y gestionar multiples procesos de conteo simultaneos: cronometros (ascendentes) y temporizadores (descendentes). Cada proceso corre de forma independiente en su propia tarjeta y muestra horas, minutos, segundos y milisegundos.

Caracteristicas
---
- Crear instancias `StopWatch` y `CountDown` desde la pantalla principal.
- Cada instancia tiene:
  - Reloj principal (HH:MM:SS) y milisegundos (.mmm) en tamano reducido.
  - Inputs para definir tiempo (HH, MM, SS). Solo segundos enteros.
  - Botones: `Iniciar`, `Pausar`/`Reanudar`, `Resetear`.
  - Mensaje al finalizar: `Tarea concluida` (StopWatch) o `Tiempo Cumplido` (CountDown).
  - Reproduccion de un beep de alerta al finalizar (WebAudio API).
- Diseno responsive: en pantallas grandes se muestran varias tarjetas por fila usando CSS Grid.

Archivos principales
---
- `index.html` - Punto de entrada de la UI.
- `style.css` - Estilos en CSS puro.
- `script.js` - Logica para instanciar y controlar multiples procesos.
- `PROMPTS.MD` - Registro de prompts usados para generar el proyecto.
- `CHATBOT.MD` - Informacion sobre la interaccion con el chatbot (archivo vacio inicialmente).

Uso
---
1. Abrir `stopwatch-PAQ/index.html` en un navegador moderno.
2. Hacer clic en `StopWatch` o `CountDown` para crear una nueva tarjeta.
3. Introducir horas, minutos y segundos (valores enteros).
4. Pulsar `Iniciar`. Usar `Pausar` para detener temporalmente y `Resetear` para volver al estado inicial.

Notas tecnicas
---
- No se requiere servidor; archivos estaticos suficientes.
- El sonido de alerta usa la WebAudio API para evitar incluir archivos binarios.
- El muestreo de milisegundos se actualiza con `setInterval` a ~31ms para equilibrio entre suavidad y consumo.

Limitaciones y consideraciones
---
- No se usan notificaciones del navegador (segun indicacion del usuario).
- Los inputs aceptan solo enteros; no hay fracciones de segundo.

Contribuciones
---
Si quieres mejorar estilos, accesibilidad o anadir export/import de estados, edita los archivos en esta carpeta y crea un pull request.

Licencia
---
Codigo provisto como ejemplo para ejercicios. Reutilizalo segun las politicas del repositorio principal.
