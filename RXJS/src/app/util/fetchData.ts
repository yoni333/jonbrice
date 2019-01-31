import { Observable } from "rxjs";

export function createHttpObservable(url:string):Observable<any>{
  return  Observable.create(observer => {

        fetch(url)
          .then(res => res.json()) //res.json() return a promise that we can chain again
          .then(bodyFromResJson => {
  
            console.log('bodyFromResJson',bodyFromResJson)
            observer.next(bodyFromResJson)
            observer.complete();
          }).catch(err => observer.error(err))
      })
  
}