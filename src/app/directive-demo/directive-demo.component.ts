import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './directive-demo.component.html',
  styleUrl: './directive-demo.component.css',
})
export class DirectiveDEmoComponent {
  movies: any[] = [];
  student: any[] = [];
  age:any
  num1:any
  num2:any
  num3:any
  num:any

  color:any
  constructor() {
    this.movies = [
      {
        title: 'jawan',
        directorName: 'Bhushan',
        ticketPrice: 400,
        releaseDate: '20-10-2023',
      },
      {
        title: 'RRR',
        directorName: 'Wajid',
        ticketPrice: 500,
        releaseDate: '30-10-2022',
      },
      {
        title: 'Dream Girl',
        directorName: 'Sajid',
        ticketPrice: 400,
        releaseDate: '30-12-2022',
      },
      {
        title: 'MS Dhoni',
        directorName: 'Karan',
        ticketPrice: 500,
        releaseDate: '30-8-2022',
      },
    ];

    this.student = [
      {
        sid: 101,
        sname: 'Abhi',
        marks: 65,
      },
      { sid: 102, sname: 'Vivek', marks: 85 },
      { sid: 103, sname: 'Priya', marks: 75 },
    ];
  }

  ei:any
  enam:any
  city:any

  e:any
  n:any
  c:any

  getDataEmp():any
  {
    this.e=this.ei
    this.n=this.enam
    this.c=this.city

    console.log(this.e)
  }

}


