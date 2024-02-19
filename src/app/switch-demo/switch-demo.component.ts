import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-demo',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './switch-demo.component.html',
  styleUrl: './switch-demo.component.css'
})
export class SwitchDemoComponent {
  number:any='';
    
      Enroll(){
        console.log(this.number);
       return this.number;
      }

}
