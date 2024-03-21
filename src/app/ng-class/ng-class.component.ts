import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: true,
  imports: [NgClass],
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  style: string = "";
  styleObj = {redText: false, blueBackground: false, italix:false};


  style1() {
    this.style = "class1";
  }

  style2() {
    this.style = "class2";
  }

  toggleRedText() {
    if(this.styleObj.redText == true) {
      this.styleObj.redText = false;
    } else {
      this.styleObj.redText = true;
    };
  }

  toggleBlueBackground() {
    if(this.styleObj.blueBackground == true) {
      this.styleObj.blueBackground = false;
    } else {
      this.styleObj.blueBackground = true;
    };
  }

  toggleItalix() {
    if(this.styleObj.italix == true) {
      this.styleObj.italix = false;
    } else {
      this.styleObj.italix = true;
    };
  }


}
