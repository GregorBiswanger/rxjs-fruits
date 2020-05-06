import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  conveyorBeltSound = new Audio();
  conveyorBeltSoundGapless = new Audio();
  smashFruitSound = new Audio();
  pouringLiquidSound = new Audio();
  playerGapless = null;
  timeoutGapless = null;
  volume = 0.1;
  isMute = false;
  imagePath = '/assets/images/sound-low.png';

  playConveyorBeltSound() {
    if (this.isMute) {
      return;
    }

    this.conveyorBeltSound.loop = true;
    this.conveyorBeltSound.volume = this.volume;
    this.conveyorBeltSound.src = '/assets/sounds/conveyor-belt.mp3';

    this.conveyorBeltSoundGapless.loop = true;
    this.conveyorBeltSoundGapless.volume = this.volume;
    this.conveyorBeltSoundGapless.src = '/assets/sounds/conveyor-belt.mp3';

    let currentPlayer = 'a';

    // workaround for gapless loop
    function loopIt(that) {
      if (!that.isMute) {
        if (currentPlayer === 'a') {
          that.playerGapless = that.conveyorBeltSound;
          currentPlayer = 'b';
        } else {
          that.playerGapless = that.conveyorBeltSoundGapless;
          currentPlayer = 'a';
        }

        that.playerGapless.play();
      }
    }

    this.timeoutGapless = setTimeout(() => loopIt(this), 9000);
    loopIt(this);
  }

  playSmashFruitSound(isRunActive: boolean) {
    if (this.isMute) {
      return;
    }

    if (isRunActive) {
      this.smashFruitSound.volume = this.volume;
      this.smashFruitSound.src = '/assets/sounds/smash-fruit.mp3';
      this.smashFruitSound.play();
    }
  }

  playPouringLiquidSound(isRunActive: boolean) {
    if (this.isMute) {
      return;
    }

    this.pouringLiquidSound.volume = this.volume;
    this.pouringLiquidSound.src = '/assets/sounds/pouring-liquid.mp3';
    this.pouringLiquidSound.play();
  }

  stopAll() {
    this.conveyorBeltSound.pause();
    this.conveyorBeltSoundGapless.pause();
    this.smashFruitSound.pause();
    this.pouringLiquidSound.pause();

    if (this.playerGapless) {
      this.playerGapless.pause();
      clearTimeout(this.timeoutGapless);
    }
  }

  changeSound(isRunActive: boolean): SoundSettings {
    if (this.isMute) {
      this.imagePath = '/assets/images/sound-low.png';
      this.isMute = false;
      this.volume = 0.1;

      if (isRunActive) {
        this.playConveyorBeltSound();
      }
    } else if (this.volume === 0.1) {
      this.imagePath = '/assets/images/sound-high.png';
      this.volume = 0.5;

      if (isRunActive) {
        this.playConveyorBeltSound();
      }
    } else if (this.volume === 0.5) {
      this.imagePath = '/assets/images/sound-off.png';
      this.isMute = true;
      this.stopAll();
    }

    this.conveyorBeltSound.volume = this.volume;
    this.conveyorBeltSoundGapless.volume = this.volume;

    if (this.playerGapless) {
      this.playerGapless.volume = this.volume;
    }

    return {
      imagePath: this.imagePath,
      isMute: this.isMute,
      volume: this.volume
    };
  }
}

export interface SoundSettings {
  volume: number;
  isMute: boolean;
  imagePath: string;
}
