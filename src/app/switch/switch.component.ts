import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  choice: string = "";

  characters = [
    {firstName: "Kyle", lastName: "Plummer", age: 38},
    {firstName: "Luke", lastName: "Skywalker", age: 40},
    {firstName: "Harry", lastName: "Potter", age: 18},
    {firstName: "Herules", lastName: "No Last Name", age: 6000}
  ];
  
  updateChoice(event: any) {
    this.choice = event?.target.value
  }
}
