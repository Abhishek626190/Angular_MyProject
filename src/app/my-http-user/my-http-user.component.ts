import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyFirstServiceService } from '../my-first-service.service';

@Component({
  selector: 'app-my-http-user',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[MyFirstServiceService],
  templateUrl: './my-http-user.component.html',
  styleUrl: './my-http-user.component.css'
})
export class MyHttpUserComponent implements OnInit {
  user:any
  constructor(public MyClient:MyFirstServiceService)
  {

  }
  ngOnInit(): void {
      this.MyClient.getData().subscribe((e:any)=>this.user=e.data)
      console.log(this.user)
  }

}
