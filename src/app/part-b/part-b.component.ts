import { Component } from '@angular/core';
import { DmoveService } from '../services/dmove.service';

@Component({
  selector: 'app-part-b',
  templateUrl: './part-b.component.html',
  styleUrls: ['./part-b.component.scss']
})
export class PartBComponent {

constructor(private dataMove:DmoveService){}

  anyValue:any = `charlie`;



  ngOnInit(){

    this.dataMove.dataPipe.subscribe((x)=>{
      this.anyValue= x;
    });


  }

}
