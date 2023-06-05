import { Component } from '@angular/core';
import { DmoveService } from '../services/dmove.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.scss']
})
export class PartAComponent {

  constructor(private dataMove:DmoveService,
              private fb:FormBuilder
             ){  }

  //Form Builder
  inputsValues = this.fb.group({
    alphaIn: [2500],
  } );

  //getter
  timevalue(){
    return this.inputsValues.value.alphaIn;
  }

  roundTimeValue=()=>{
    return this.inputsValues.value.alphaIn;
  }

  doTheMove(){
    this.dataMove.dataSend(this.timevalue());
  }

}

