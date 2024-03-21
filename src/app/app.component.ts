import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { NgClassComponent } from './ng-class/ng-class.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ForComponent, IfComponent, SwitchComponent, NgClassComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-angular-directives';
}
