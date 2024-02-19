import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {
employee:any[]=[]
  constructor() {
    this.employee=[{eid:101,ename:"ABhi",salary:50000},
  {
    eid:102,ename:"Abhishek",salary:60000
  },
{
  eid:103,ename:"Abhinash",salary:40000
}]
  
   }

   getEmployee(){
    return this.employee
   }
}
