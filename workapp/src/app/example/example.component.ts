import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { details } from '../models/details.models';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  odata: details;
  @Input() incomingdata;
  @Output() out:EventEmitter<details>= new EventEmitter<details>();

 
  a="";
  b="";


  constructor() { }

  ngOnInit(): void {
    this.odata.firstName = this.incomingdata.first;
    this.odata.lastName = this.incomingdata.second;
   
   
  }
  clickMe(){
    alert(this.a);
    this.out.emit(this.odata);
   
   
  }

}
