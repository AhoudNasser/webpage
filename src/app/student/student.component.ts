import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  isHighlighted = true; 

Mark: number=0;

  students = [
    { number : 1, name: 'Ahoud', email: 'Ahoud@gmail.com', Mark: 55 },
    { number : 2,name: 'Amal', email: 'Amal@gmail.com', Mark: 30 },
    { number : 3,name: 'Qabas', email: 'Qabas@gmail.com', Mark: 50 },
    // Add more student data as needed
  ];

  getMarkColor(Mark: number): string {
    return Mark < 50 ? 'red-text' : 'green-text';
  }

  getPassFailStatus(Mark: number): string {
    return Mark >= 50 ? 'PASS' : 'FAIL';
}
getStyle(): any {
  // Your custom logic to determine the style object
  // For example, let's apply a blue background color and white text color:
  return {
    'background-color': '#D3D3D3',
    // 'color': 'white',
    'padding': '10px',
    'text-align': 'center',
  };
}

  
}
