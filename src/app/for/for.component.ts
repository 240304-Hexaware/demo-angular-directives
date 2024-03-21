import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  characters = [
    {firstName: "Kyle", lastName: "Plummer", age: 38},
    {firstName: "Luke", lastName: "Skywalker", age: 40},
    {firstName: "Harry", lastName: "Potter", age: 18},
    {firstName: "Herules", lastName: "No Last Name", age: 6000}
  ];
}
