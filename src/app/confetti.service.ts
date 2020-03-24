import { Injectable } from '@angular/core';

// tslint:disable: max-line-length no-bitwise no-string-literal one-variable-per-declaration prefer-for-of
@Injectable({
  providedIn: 'root'
})
export class ConfettiService {
  supportsAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window['mozRequestAnimationFrame'] || window['oRequestAnimationFrame'] || window['msRequestAnimationFrame'];
  colors = ['rgba(30,144,255,', 'rgba(107,142,35,', 'rgba(255,215,0,', 'rgba(255,192,203,', 'rgba(106,90,205,', 'rgba(173,216,230,', 'rgba(238,130,238,', 'rgba(152,251,152,', 'rgba(70,130,180,', 'rgba(244,164,96,', 'rgba(210,105,30,', 'rgba(220,20,60,'];
  streamingConfetti = false;
  animationTimer = null;
  pause = false;
  lastFrameTime = Date.now();
  particles = [];
  waveAngle = 0;
  context = null;
  confetti = {
    maxCount: 150,		  // set max confetti count
    speed: 2,			      // set the particle animation speed
    frameInterval: 15,	// the confetti animation frame interval in milliseconds
    alpha: 1.0,			    // the alpha opacity of the confetti (between 0 and 1, where 1 is opaque and 0 is invisible)
    gradient: false	    // whether to use gradients for the confetti particles
  };

  resetParticle(particle, width, height) {
    particle.color = this.colors[(Math.random() * this.colors.length) | 0] + (this.confetti.alpha + ')');
    particle.color2 = this.colors[(Math.random() * this.colors.length) | 0] + (this.confetti.alpha + ')');
    particle.x = Math.random() * width;
    particle.y = Math.random() * height - height;
    particle.diameter = Math.random() * 10 + 5;
    particle.tilt = Math.random() * 10 - 10;
    particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
    particle.tiltAngle = Math.random() * Math.PI;
    return particle;
  }

  toggleConfettiPause() {
    if (this.pause) {
      this.resumeConfetti();
    } else {
      this.pauseConfetti();
    }
  }

  isConfettiPaused() {
    return this.pause;
  }

  pauseConfetti() {
    this.pause = true;
  }

  resumeConfetti() {
    this.pause = false;
    this.runAnimation();
  }

  runAnimation() {
    if (this.pause) {
      return;
    } else if (this.particles.length === 0) {
      this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      this.animationTimer = null;
    } else {
      const now = Date.now();
      const delta = now - this.lastFrameTime;
      if (!this.supportsAnimationFrame || delta > this.confetti.frameInterval) {
        this.context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        this.updateParticles();
        this.drawParticles(this.context);
        this.lastFrameTime = now - (delta % this.confetti.frameInterval);
      }
      this.animationTimer = requestAnimationFrame(this.runAnimation.bind(this));
    }
  }

  start(timeout?: number, min?: number, max?: number) {
    const width = window.innerWidth;
    const height = window.innerHeight;
    window.requestAnimationFrame = (() => {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window['mozRequestAnimationFrame'] ||
        window['oRequestAnimationFrame'] ||
        window['msRequestAnimationFrame'] ||
        function(callback) {
          return window.setTimeout(callback, this.confetti.frameInterval);
        };
    })();

    let canvas = document.getElementById('confetti-canvas') as HTMLCanvasElement;
    if (canvas === null) {
      canvas = document.createElement('canvas') as HTMLCanvasElement;
      canvas.setAttribute('id', 'confetti-canvas');
      canvas.setAttribute('style', 'display:block;z-index:999999;pointer-events:none;position:fixed;top:0');
      document.body.prepend(canvas);
      canvas.width = width;
      canvas.height = height;
      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }, true);

      this.context = canvas.getContext('2d');
    } else if (this.context === null) {
      this.context = canvas.getContext('2d');
    }
    let count = this.confetti.maxCount;
    if (min) {
      if (max) {
        if (min === max) {
          count = this.particles.length + max;
        } else {
          if (min > max) {
            const temp = min;
            min = max;
            max = temp;
          }
          count = this.particles.length + ((Math.random() * (max - min) + min) | 0);
        }
      } else {
        count = this.particles.length + min;
      }
    } else if (max) {
      count = this.particles.length + max;
    }
    while (this.particles.length < count) {
      this.particles.push(this.resetParticle({}, width, height));
    }
    this.streamingConfetti = true;
    this.pause = false;
    this.runAnimation();
    if (timeout) {
      window.setTimeout(this.stop, timeout);
    }
  }

  stop() {
    this.streamingConfetti = false;
  }

  removeConfetti() {
    stop();
    this.pause = false;
    this.particles = [];
  }

  toggle() {
    if (this.streamingConfetti) {
      this.stop();
    } else {
      this.start();
    }
  }

  isConfettiRunning() {
    return this.streamingConfetti;
  }

  drawParticles(context) {
    let particle;
    let x, y, x2, y2;

    for (let i = 0; i < this.particles.length; i++) {
      particle = this.particles[i];
      context.beginPath();
      context.lineWidth = particle.diameter;
      x2 = particle.x + particle.tilt;
      x = x2 + particle.diameter / 2;
      y2 = particle.y + particle.tilt + particle.diameter / 2;
      if (this.confetti.gradient) {
        const gradient = context.createLinearGradient(x, particle.y, x2, y2);
        gradient.addColorStop('0', particle.color);
        gradient.addColorStop('1.0', particle.color2);
        context.strokeStyle = gradient;
      } else {
        context.strokeStyle = particle.color;
      }
      context.moveTo(x, particle.y);
      context.lineTo(x2, y2);
      context.stroke();
    }
  }

  updateParticles() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    let particle;
    this.waveAngle += 0.01;
    for (let i = 0; i < this.particles.length; i++) {
      particle = this.particles[i];
      if (!this.streamingConfetti && particle.y < -15) {
        particle.y = height + 100;
      } else {
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.x += Math.sin(this.waveAngle) - 0.5;
        particle.y += (Math.cos(this.waveAngle) + particle.diameter + this.confetti.speed) * 0.5;
        particle.tilt = Math.sin(particle.tiltAngle) * 15;
      }
      if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
        if (this.streamingConfetti && this.particles.length <= this.confetti.maxCount) {
          this.resetParticle(particle, width, height);
        } else {
          this.particles.splice(i, 1);
          i--;
        }
      }
    }
  }
}
