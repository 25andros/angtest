import { Component } from '@angular/core';
import { Observable, interval, of,from, map, filter, Subscription, Subject, takeUntil} from 'rxjs';


@Component({
  selector: 'app-ahvals',
  templateUrl: './ahvals.component.html',
  styleUrls: ['./ahvals.component.scss']
})
export class AhvalsComponent {

  //method #1 for instaniation of observable, VIA constructor
  myFirstObservable = new Observable((injector)=>{

    console.log('observeable starts');

    setTimeout(()=>{injector.next("1")},1000)
    setTimeout(()=>{injector.next("2")},2000)
    setTimeout(()=>{injector.next("4")},5000)
    setTimeout(()=>{injector.error(new Error("Down as planned")) },4000)
    setTimeout(()=>{injector.complete()},4000)
    /*
      injector.next("1");
    injector.next("2");
    injector.next("4");
    */
  }); // constructor

  //method #2 for instaniation of observable, VIA create
  mySecondObservable = Observable.create((injector?:any)=>{
    //myFirstObservable = Observable.create((injector:any)=>{

    setTimeout(()=>{injector.next("A")},1500)
    setTimeout(()=>{injector.next("B")},2500)
    setTimeout(()=>{injector.next("C")},3500)
    setTimeout(()=>{injector.complete()},4000)
    });



    arayUNO = [5,6,7,8];
    arayDUO= [12,13,14,15];
    arayTRE= [`a`,`b`,`c`];

    myThirdahval = of(this.arayUNO,this.arayTRE);

      //------------------------------------------------

    myFourthahval = from(this.arayDUO);

    fourAhvalMOD=  this.myFourthahval.pipe(
      map((x)=>{
        return  x*5
      }
         ));
    fourAhvalMOD2=  this.fourAhvalMOD.pipe(
      filter((x)=>{
        return x>=69
      })
    );

    fourAhvalMOD3 = this.myFourthahval.pipe(
      map((x)=>{return x*5}),
      filter((x)=>{return x>=69}),
    );

      //this is a clean ahval that sends an iterable as shown from the prior sequence of code
    AhvalMOD4= from(this.arayDUO).pipe(
      map((x)=>{return x*5}),
      filter((x)=>{return x>=69}),
    );

      //------------------------------------------------

      countFx$ =  interval(1500);
      private ngUnsubscribe = new Subject<void>();


    ngOnInit(){

      /*

        this.myFirstObservable.subscribe(
          //next handling
          (val)=> {
            console.log(val);

          },

          //error handling
          (errorSTR)=>{
            alert(errorSTR.message);
            console.log(`An error has been thrown. Enjoy!`);
          },

          //completion handling
          ()=>{
            alert(`Observable has been finish`);
          }
      );


      */

      //------------------------------------------------

      /*
        this.mySecondObservable.subscribe(
          //next handling
          (val:any)=> {
            console.log(val);

          },

          //error handling
          (errorSTR:any)=>{
            alert(errorSTR.message);
            console.log(`An error has been thrown. Enjoy!`);
          },

          //completion handling
          ()=>{
            alert(`Observable has been finish`);
          }
      );


    }
    */

      //------------------------------------------------

      /*
        this.myThirdahval.subscribe(
          (val)=> {
            console.log(val);
          },
          (errorSTR)=>{
            alert(errorSTR.message);
            console.log(`An error has been thrown. Enjoy!`);
          },
          ()=>{
            console.log("done!");
            alert(`Observable has been finish`);
          }
      );
      */

      //------------------------------------------------

      this.AhvalMOD4.subscribe(
        (val)=> {
          console.log(val);
        },
        (errorSTR)=>{
          alert(errorSTR.message);
          console.log(`An error has been thrown. Enjoy!`);
        },
        ()=>{
          console.log("done!");
          alert(`Observable has been finish`);
        }
      );

      //------------------------------------------------
  }

      //------------------------------------------------


      subscribe(){
        console.log("out");

        this.countFx$
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(
          (x)=>{
            console.log(x);
          },
        );
      }

      unsubscribe(){
        console.log("out");

        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
      }



}
