import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DmoveService {

  constructor() { }

  /*
  dataPipe = new EventEmitter<any>();

  dataSend(data:any){
    this.dataPipe.emit(data);
  }
  */


 dataPipe =  new Subject<any>();

  dataSend(data:any){
    this.dataPipe.next(data);
  }


}
