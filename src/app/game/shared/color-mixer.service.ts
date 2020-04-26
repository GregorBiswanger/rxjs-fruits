import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorMixerService {
  mix(color1: string, color2: string): string {
    color1 = color1.replace('#', '');
    color2 = color2.replace('#', '');

    const color1Decimal = {
      red: parseInt(color1.slice(0, 2), 16),
      green: parseInt(color1.slice(2, 4), 16),
      blue: parseInt(color1.slice(4, 6), 16)
    };

    const color2Decimal = {
      red: parseInt(color2.slice(0, 2), 16),
      green: parseInt(color2.slice(2, 4), 16),
      blue: parseInt(color2.slice(4, 6), 16),
    };

    const color3Decimal = {
      red: Math.ceil((color1Decimal.red + color2Decimal.red) / 2),
      green: Math.ceil((color1Decimal.green + color2Decimal.green) / 2),
      blue: Math.ceil((color1Decimal.blue + color2Decimal.blue) / 2)
    };

    const color3Hex = {
      red: color3Decimal.red.toString(16).padStart(2, '0').toUpperCase(),
      green: color3Decimal.green.toString(16).padStart(2, '0').toUpperCase(),
      blue: color3Decimal.blue.toString(16).padStart(2, '0').toUpperCase()
    };

    return '#' + color3Hex.red + color3Hex.green + color3Hex.blue;
  }
}
