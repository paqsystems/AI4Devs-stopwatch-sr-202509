# stopwatch-PAQ

Proyecto: Cronómetros y cuentas regresivas múltiples (StopWatch / CountDown)

Descripción
---
Pequeña aplicación web para crear y gestionar múltiples procesos de conteo simultáneos: cronómetros (ascendentes) y temporizadores (descendentes). Cada proceso corre de forma independiente en su propia tarjeta y muestra horas, minutos, segundos y milisegundos.

Características
---
- Crear instancias `StopWatch` y `CountDown` desde la pantalla principal.
- Cada instancia tiene:
  - Reloj principal (HH:MM:SS) y milisegundos (.mmm) en tamaño reducido.
  - Inputs para definir tiempo (HH, MM, SS). Solo segundos enteros.
  - Botones: `Iniciar`, `Pausar`/`Reanudar`, `Resetear`.
  - Mensaje al finalizar: `Tarea concluida` (StopWatch) o `Tiempo Cumplido` (CountDown).
  - Reproducción de un beep de alerta al finalizar (WebAudio API).
- Diseño responsive: en pantallas grandes se muestran varias tarjetas por fila usando CSS Grid.

Archivos principales
---
- `index.html` - Punto de entrada de la UI.
- `style.css` - Estilos en CSS puro.
- `script.js` - Lógica para instanciar y controlar múltiples procesos.
- `PROMPTS.MD` - Registro de prompts usados para generar el proyecto.
- `CHATBOT.MD` - Información sobre la interacción con el chatbot (archivo vacío inicialmente).

Uso
---
1. Abrir `stopwatch-PAQ/index.html` en un navegador moderno.
2. Hacer clic en `StopWatch` o `CountDown` para crear una nueva tarjeta.
3. Introducir horas, minutos y segundos (valores enteros).
4. Pulsar `Iniciar`. Usar `Pausar` para detener temporalmente y `Resetear` para volver al estado inicial.

Notas técnicas
---
- No se requiere servidor; archivos estáticos suficientes.
- El sonido de alerta usa la WebAudio API para evitar incluir archivos binarios.
- El muestreo de milisegundos se actualiza con `setInterval` a ~31ms para equilibrio entre suavidad y consumo.

Limitaciones y consideraciones
---
- No se usan notificaciones del navegador (según indicación del usuario).
- Los inputs aceptan solo enteros; no hay fracciones de segundo.

Contribuciones
---
Si quieres mejorar estilos, accesibilidad o añadir export/import de estados, edita los archivos en esta carpeta y crea un pull request.

Licencia
---
Código provisto como ejemplo para ejercicios. Reutilízalo según las políticas del repositorio principal.
