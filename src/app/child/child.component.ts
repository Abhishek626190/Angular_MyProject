import { Component ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() MyInputData:string=""

  @Output() MyOutPut:EventEmitter<string>=new EventEmitter()

  outputMsg="I am your Baccha"

  sendData()
  {
    this.MyOutPut.emit(this.outputMsg)
  }
}
