import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WordCountPipe } from '../word-count.pipe';
import { CalculatePowerPipe } from '../calculate-power.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule,WordCountPipe,CalculatePowerPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css'
})
export class PipeDemoComponent {
  name:string="Abhishek rai"
  msg:string="I love my INDIA"

  amt:number=500
  d=new Date()

  base:number=2
  expo:number=5
}
