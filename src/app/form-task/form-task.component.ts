import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './form-task.component.html',
  styleUrl: './form-task.component.css'
})
export class FormTaskComponent implements OnInit {
  MyContact!:contact
  ngOnInit(): void {
      this.MyContact={
        userName:"",
        email:"",
        gender:'',
        password:""
      }
  }

  OnSubmit()
  {
    console.log(this.MyContact)
  }
}
export class contact
{
  userName!:string
  email!:string
  gender!:string 
  password!:string
 }
