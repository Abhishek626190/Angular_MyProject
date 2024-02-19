import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './attribute-demo.component.html',
  styleUrl: './attribute-demo.component.css'
})
export class AttributeDemoComponent {
// ngClass
  isbold:boolean=true
  isitalic:boolean=true
  istextCol:boolean=false

   ChangeFun()
   {
    let ApplyCss={boldClass:this.isbold,italicClass:this.isitalic,textColor:this.istextCol}
    return ApplyCss
   }

  //  ngStyle
  color:string='red'
  fontSize:number=50

  applyStyle()
  {
    let style={
      'color':this.color,
      "font-weight":this.isbold?'bold':'normal',
      'font-size.px':this.fontSize
    }
    return  style
  }

  name:string="Abhishek Rai" 


}
