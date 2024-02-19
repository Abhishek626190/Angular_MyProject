import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  MyContact!:any
  ngOnInit(): void {
      this.MyContact={
        firstName:"",
        lastName:"",
        email:""
      }
  }

  OnSubmit()
  {
    console.log(this.MyContact)
  }

}
