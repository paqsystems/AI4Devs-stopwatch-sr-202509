/* Logic for multiple stopwatch / countdown timers */
(function(){
  const container = document.getElementById('process-container');
  const btnStop = document.getElementById('btn-stopwatch');
  const btnCount = document.getElementById('btn-countdown');
  let idCounter = 1;

  btnStop.addEventListener('click', ()=>createProcess('stopwatch'))
  btnCount.addEventListener('click', ()=>createProcess('countdown'))

  function createProcess(type){
    const id = idCounter++;
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.id = id;
    card.innerHTML = `
      <div class="card-header">
        <div class="card-title">${type === 'stopwatch' ? 'StopWatch' : 'CountDown'}</div>
        <div>#${id}</div>
      </div>
      <div class="time-display">
        <div class="time-main" id="time-${id}">00:00:00</div>
        <div class="time-ms" id="ms-${id}">.000</div>
      </div>
      <div class="inputs">
        <label>HH <input type="number" min="0" value="0" id="h-${id}"></label>
        <label>MM <input type="number" min="0" value="0" id="m-${id}"></label>
        <label>SS <input type="number" min="0" value="0" id="s-${id}"></label>
      </div>
      <div class="controls-row">
        <button class="btn" id="start-${id}">Iniciar</button>
        <button class="btn" id="pause-${id}">Pausar</button>
        <button class="btn" id="reset-${id}">Resetear</button>
      </div>
      <div class="status" id="status-${id}"></div>
    `;

    container.appendChild(card);

    const process = new TimerProcess({id,type,card});
    // wire buttons
    document.getElementById(`start-${id}`).addEventListener('click', ()=>{
      const h = parseInt(document.getElementById(`h-${id}`).value||0,10);
      const m = parseInt(document.getElementById(`m-${id}`).value||0,10);
      const s = parseInt(document.getElementById(`s-${id}`).value||0,10);
      const totalSec = h*3600 + m*60 + s;
      process.setTargetSeconds(totalSec);
      process.start();
    });
    const pauseBtn = document.getElementById(`pause-${id}`);
    pauseBtn.addEventListener('click', ()=>{
      process.togglePause();
      pauseBtn.textContent = process.paused ? 'Reanudar' : 'Pausar';
    });
    document.getElementById(`reset-${id}`).addEventListener('click', ()=>{
      process.reset();
      document.getElementById(`h-${id}`).value = 0;
      document.getElementById(`m-${id}`).value = 0;
      document.getElementById(`s-${id}`).value = 0;
      pauseBtn.textContent = 'Pausar';
    });
  }

  // TimerProcess class
  function TimerProcess({id,type,card}){
    this.id = id;
    this.type = type; // 'stopwatch'|'countdown'
    this.card = card;
    this.targetSeconds = 0; // integer seconds
    this.running = false;
    this.paused = false;
    this.interval = null;
    this.startTs = 0; // timestamp when started
    this.accumulated = 0; // ms accumulated when paused

    this.timeEl = card.querySelector(`#time-${id}`);
    this.msEl = card.querySelector(`#ms-${id}`);
    this.statusEl = card.querySelector(`#status-${id}`);
  }

  TimerProcess.prototype.setTargetSeconds = function(sec){
    this.targetSeconds = Math.max(0,Math.floor(sec||0));
    // reset display appropriately
    if(this.type === 'countdown'){
      this.updateDisplay(this.targetSeconds*1000);
    } else {
      this.updateDisplay(0);
    }
  }

  TimerProcess.prototype.start = function(){
    if(this.running) return;
    this.running = true;
    this.paused = false;
    this.startTs = performance.now();
    this.accumulated = 0;
    const self = this;
    this.interval = setInterval(()=>{
      const now = performance.now();
      const elapsed = now - self.startTs + self.accumulated; // ms
      if(self.type === 'stopwatch'){
        const targetMs = self.targetSeconds * 1000;
        if(targetMs>0 && elapsed >= targetMs){
          self.updateDisplay(targetMs);
          self.finish();
        } else {
          self.updateDisplay(elapsed);
        }
      } else {
        const remaining = Math.max(0, self.targetSeconds*1000 - elapsed);
        if(remaining <= 0){
          self.updateDisplay(0);
          self.finish();
        } else {
          self.updateDisplay(remaining);
        }
      }
    }, 31);
  }

  TimerProcess.prototype.togglePause = function(){
    if(!this.running) return;
    if(!this.paused){
      // pause
      clearInterval(this.interval);
      this.interval = null;
      const now = performance.now();
      this.accumulated += now - this.startTs;
      this.paused = true;
      this.statusEl.textContent = 'Pausado';
    } else {
      // resume
      this.startTs = performance.now();
      this.paused = false;
      this.statusEl.textContent = '';
      const self = this;
      this.interval = setInterval(()=>{
        const now = performance.now();
        const elapsed = now - self.startTs + self.accumulated; // ms
        if(self.type === 'stopwatch'){
          const targetMs = self.targetSeconds * 1000;
          if(targetMs>0 && elapsed >= targetMs){
            self.updateDisplay(targetMs);
            self.finish();
          } else {
            self.updateDisplay(elapsed);
          }
        } else {
          const remaining = Math.max(0, self.targetSeconds*1000 - elapsed);
          if(remaining <= 0){
            self.updateDisplay(0);
            self.finish();
          } else {
            self.updateDisplay(remaining);
          }
        }
      },31);
    }
  }

  TimerProcess.prototype.reset = function(){
    clearInterval(this.interval);
    this.interval = null;
    this.running = false;
    this.paused = false;
    this.startTs = 0;
    this.accumulated = 0;
    this.statusEl.textContent = '';
    if(this.type === 'countdown') this.updateDisplay(this.targetSeconds*1000);
    else this.updateDisplay(0);
  }

  TimerProcess.prototype.finish = function(){
    clearInterval(this.interval);
    this.interval = null;
    this.running = false;
    this.paused = false;
    if(this.type === 'stopwatch') this.statusEl.textContent = 'Tarea concluida';
    else this.statusEl.textContent = 'Tiempo Cumplido';
    playBeep();
  }

  TimerProcess.prototype.updateDisplay = function(ms){
    const totalMs = Math.max(0, Math.floor(ms));
    const hours = Math.floor(totalMs / 3600000);
    const minutes = Math.floor((totalMs % 3600000) / 60000);
    const seconds = Math.floor((totalMs % 60000) / 1000);
    const millis = totalMs % 1000;
    this.timeEl.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    this.msEl.textContent = `.${String(millis).padStart(3,'0')}`;
  }

  function pad(n){return String(n).padStart(2,'0')}

  // Simple beep using WebAudio
  function playBeep(){
    try{
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);g.connect(ctx.destination);
      o.type = 'sine';o.frequency.value = 880;
      g.gain.value = 0.1;
      o.start();
      setTimeout(()=>{o.stop();ctx.close();},400);
    }catch(e){console.warn('Audio not available',e)}
  }

})();