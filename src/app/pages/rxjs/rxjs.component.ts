import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

  intervalSubs: Subscription;
  constructor() {

    /* this.returnaObservable().pipe(
      retry(1)
    )
      .subscribe(
        valor => console.log('Subs: ', valor),
        err => console.warn(err),
        () => console.info('Obs terminado')); */
    // this.intervalSubs = this.retornaIntervalo().subscribe(console.log);
  }

  ngOnDestroy(): void {
    // this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100).pipe(
      //take(10),
      map(valor => ++valor),
      filter(valor => (valor % 2 === 0 ? true : false))
    );
  }

  returnaObservable(): Observable<number> {
    let i = -1;
    const obs$ = new Observable<number>(observer => {
      const intervalo = setInterval(() => {
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) {
          i = 0;
          observer.error('i llegó al valor de 2');
        }
      }, 1000);
    });

    return obs$;
  }

}
