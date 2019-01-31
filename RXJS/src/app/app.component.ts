import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent, of,concat,Observable, noop, merge } from 'rxjs';
import { map } from 'rxjs/operators'
import { createHttpObservable } from './util/fetchData';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {


    this.lecture13();

  }
  lecture13(){

    const evt$ =fromEvent(document,'click');
    const interval1$ =interval(1000);
    const mapMe=evt$.pipe(map(evt=>{return interval1$.subscribe(console.log)}))
    mapMe..subscribe(console.log);
    
  }
  lecture12(){
    //merge is great to make long running actions in parallel

    const interval1$=interval(1000);
    const interval2$=interval1$.pipe(map(res=>res*10))
    const mergeIntervals$=merge(interval1$,interval2$).subscribe(console.log )

    console.log('anoterh example');
    
    let first$=of(1,2,3);
    const http$ = createHttpObservable('http://5b87d7bd35589600143c1474.mockapi.io/freelancers');
    let mergeMe = merge(http$,first$).subscribe(console.log )
  }
  lecture11(){
    let first$=of(1,2,3);
    let second$=of(4,5,6);
    let three$=of(7,8,9);
    let concat$=concat(first$,second$,three$).subscribe(console.log)

    console.log('another example');

    const http$ = createHttpObservable('http://5b87d7bd35589600143c1474.mockapi.io/freelancers');
    
    let concat2$ = concat(first$,timer(1000).pipe(map(res=>res+5)),first$,http$).subscribe(console.log);
  }
  lecture10() {

    const http$ = createHttpObservable('http://5b87d7bd35589600143c1474.mockapi.io/freelancers');
    http$.subscribe(val => console.log('val', val));

    const phones$ = http$.pipe(map(res => res.map(val => val.phone)));

    phones$.subscribe(res => console.log('phones', res), noop, () => console.log('phone complete'));


    const names$ = http$.pipe(map(res => res.map(val => val.name)));

    names$.subscribe(res => console.log('names', res), noop, () => console.log('names complete'));
  }
  lecture9() {

    const http$ = Observable.create(observer => {

      fetch('http://5b87d7bd35589600143c1474.mockapi.io/freelancers')
        .then(res => res.json()) //res.json() return a promise that we can chain again
        .then(bodyFromResJson => {

          console.log('bodyFromResJson', bodyFromResJson)
          observer.next(bodyFromResJson)
          observer.complete();
        }).catch(err => observer.error(err))
    })

    http$.subscribe(val => console.log('val', val)
    )




  }
  lecture8() {
    //the returned object from the subsribe have methos that stop it
    const interval$ = interval(1000);
    const subscription = interval$.subscribe(val => console.log('val', val))

    setTimeout(() => subscription.unsubscribe(), 4000);
  }

  lecture7() {
    const event$ = fromEvent(document, 'click');
    event$.subscribe(
      evt => console.log(evt)
      , err => console.log(err) //if err fired - the observable will stop to emit 
      //and will not fire completed
      , () => console.log('completed')

    )
  }

  lecture6() {
    const interval$ = interval(1000) //just decleration-defenition of stream template
    // not expression
    // it return instance of OBservable but not instance of the stream!!!
    //it will change after we will use the subscribe function
    console.log('interval', interval$);

    interval$.subscribe(val => console.log('stream A', val))
    interval$.subscribe(val => console.log('stream B', val))

    const timer$ = timer(3000, 1500); // just decleration-defenition of stream template
    timer$.subscribe(val => console.log('stream timer', val))

    const event$ = fromEvent(document, 'click');
    event$.subscribe(val => console.log('stream CLICK', val))
  }

  lecture4() {
    //nested stream
    document.addEventListener('click', (e) => {
      console.log(e)
      let counter = 0;
      setTimeout(() => {
        console.log('timeout');
        setInterval(() => {
          console.log('interval ', counter);
          counter++;

        }, 1000)
      }, 3000)


    })
  }

  lecture3() {
    //first lets talk about streams
    //not nested stream
    document.addEventListener('click', (e) => {
      console.log(e)




    })

    setTimeout(() => {
      console.log('timeout');

    }, 3000)

    let counter = 0;
    setInterval(() => {
      console.log('interval ', counter);
      counter++;

    }, 1000)
  }
}
