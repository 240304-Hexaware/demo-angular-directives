import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
  characters = [
    {firstName: "Kyle", lastName: "Plummer", age: 38},
    {firstName: "Luke", lastName: "Skywalker", age: 40},
    {firstName: "Harry", lastName: "Potter", age: 18},
    {firstName: "Herules", lastName: "No Last Name", age: 6000}
  ];
}
