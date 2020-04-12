// tslint:disable: no-string-literal max-line-length no-trailing-whitespace no-console
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  constructor() {
    this.setupConsoleImage();
  }

  setupConsoleImage() {
    console['image'] = (url, scale) => {
      scale = scale || 1;
      const image = new Image();

      image.onload = () => {
        function getBox(width, height) {
          return {
            string: '+',
            style: `font-size: 1px; padding: 0 ${Math.floor(width / 2)}px; line-height: ${height}px;`
          };
        }

        const dim = getBox(image.width * scale, image.height * scale);
        console.log(`%c${dim.string}`, `${dim.style}background: url(${url}); background-size: ${image.width * scale}px ${image.height * scale}px; color: transparent;`);
      };

      image.src = url;
    };
  }

  showRandomErrorImage() {
    const randomNumber = Math.floor(Math.random() * 15);

    if (randomNumber < 8) {
      console['image'](`${window.location.origin}/assets/images/exceptions/${randomNumber}.jpg`);
    } else if (randomNumber > 7) {
      console['image'](`${window.location.origin}/assets/images/exceptions/${randomNumber}.gif`);
    }
  }

  showWelcomeMessage() {
    console.clear();
    const welcomeText = `
 _____            _  _____        __            _ _       
|  __ \\          | |/ ____|      / _|          (_) |      
| |__) |__  __   | | (___ ______| |_ _ __ _   _ _| |_ ___ 
|  _  / \\ \\/ /   | |\\___ \\______|  _| '__| | | | | __/ __|
| | \\ \\  >  < |__| |____) |     | | | |  | |_| | | |_\\__ \\
|_|  \\_\\/_/\\_\\____/|_____/      |_| |_|   \\__,_|_|\\__|___/

Debug your pipe with the tap-operator:

fruits.pipe(
  tap(fruit => console.log('before: ' + fruit)),
  ...
  tap(fruit => console.log('after: ' + fruit))
)
    `;

    if (console.info) {
      console.info(welcomeText);
    } else {
      console.log(welcomeText);
    }
  }
}
