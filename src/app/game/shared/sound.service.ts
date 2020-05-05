import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  conveyorBeltSound = new Audio();
  conveyorBeltSoundGapless = new Audio();
  smashFruitSound = new Audio();
  pouringLiquidSound = new Audio();

  playConveyorBeltSound() {
    this.conveyorBeltSound.loop = true;
    this.conveyorBeltSound.volume = 0.1;
    this.conveyorBeltSound.src = '/assets/sounds/conveyor-belt.mp3';

    this.conveyorBeltSoundGapless.loop = true;
    this.conveyorBeltSoundGapless.volume = 0.1;
    this.conveyorBeltSoundGapless.src = '/assets/sounds/conveyor-belt.mp3';

    let currentPlayer = 'a';

    // workaround for gapless loop
    function loopIt(that) {
      let player = null;

      if (currentPlayer === 'a') {
        player = that.conveyorBeltSound;
        currentPlayer = 'b';
      } else {
        player = that.conveyorBeltSoundGapless;
        currentPlayer = 'a';
      }

      player.play();
    }

    setTimeout(() => loopIt(this), 9000);
    loopIt(this);
  }

  playSmashFruitSound() {
    this.smashFruitSound.volume = 0.1;
    this.smashFruitSound.src = '/assets/sounds/smash-fruit.mp3';
    this.smashFruitSound.play();
  }

  playPouringLiquidSound() {
    this.pouringLiquidSound.volume = 0.1;
    this.pouringLiquidSound.src = '/assets/sounds/pouring-liquid.mp3';
    this.pouringLiquidSound.play();
  }

  stopAll() {
    this.conveyorBeltSound.pause();
    this.conveyorBeltSoundGapless.pause();
    this.smashFruitSound.pause();
    this.pouringLiquidSound.pause();
  }
}
