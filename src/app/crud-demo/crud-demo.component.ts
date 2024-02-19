import { Component, OnInit } from '@angular/core';
import { CrudServiceService } from '../crud-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  providers:[CrudServiceService],
  templateUrl: './crud-demo.component.html',
  styleUrl: './crud-demo.component.css'
})
export class CrudDemoComponent implements OnInit{
  employee:any

  constructor(public MyService:CrudServiceService)
  {

  }
  ngOnInit(): void {
      this.getEmployeeDetails()
  }
  getEmployeeDetails()
  {
    this.employee=this.MyService.getEmployee()
  }

}
