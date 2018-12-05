'use strict';

class Options {
     constructor(height, width, bg, fontSize, textAlign) {
          this.height = height + 'px';
          this.width = width + 'px';
          this.bg = bg;
          this.fontSize = fontSize + 'px';
          this.textAlign = textAlign;
     }
     createDiv(text = "Какой-то текст") {
          let div = document.createElement('div');
          document.body.appendChild(div);
          div.textContent = text;
          div.style.cssText = `height: ${this.height}; width: ${this.width}; 
                              background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}`;
     }
}

let cotainer = new Options(30, 200, "#9370DB", 16, 'center');

cotainer.createDiv("Другой текст");