import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'console';
import { catchError, filter, from, interval, map, mergeAll, mergeMap, Observable, of, retry, take } from 'rxjs';

@Component({
  selector: 'app-observables',
  imports: [CommonModule],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css',
})
export class ObservablesComponent {
  data: any[] = [];

  observable: Observable<number> = new Observable((observer) => {
    setTimeout(() => {
      observer.next(20);
    }, 1000);
    setTimeout(() => {
      observer.next(30);
    }, 2000);
    setTimeout(() => {
      observer.error(new Error('Something went wrong'));
    }, 3500);
    setTimeout(() => observer.complete(), 5500);
    setTimeout(() => {
      observer.next(40);
    }, 3000);
    setTimeout(() => {
      observer.next(60);
    }, 4000);
    setTimeout(() => {
      observer.next(80);
    }, 5000);
  });

  getData1() {
    this.data = [];
    this.observable.subscribe({
      next: (data) => {
        this.data.push(data);
      },
      error: (error) => {
        alert(error.message);
      },
      complete: () => {
        alert('Data emission completed');
      },
    });
  }

  getData2() {
    this.data = [];
    from('Hello').subscribe({
      next: (n) => this.data.push(n),
    });
  }

  getData4() {
    this.data = [];
    of(34, 'Hello', [56, 45]).subscribe({
      next: (n) => this.data.push(n),
    });
  }

  getData5() {
    const subscription = interval(1000)
      .pipe(take(4))
      .subscribe({
        next: (n) => this.data.push(n),
      });

    setTimeout(() => {
      subscription.unsubscribe();
    }, 10000);
  }

  getData6() {
    from([12, 56, 89, 91, 100, 45, 100, 90])
      .pipe(
        filter((n) => n % 2 == 0),
        take(2),
      )
      .subscribe({
        next: (value) => this.data.push(value),
      });
  }

  getData7() {
    interval(1000)
      .pipe(
        map((n) => n + 1),
        take(10),
      )
      .subscribe({
        next: (value) => this.data.push(value),
      });
  }

  getData8() {
    from([23, 67, 78, 100, 3])
      .pipe(
        mergeMap((n) => of(n)),
       
      )
      .subscribe({
        next: (value) =>{ 
          console.log(value);
          this.data.push(value)
        },
      });
  }

  getData9()
  {
     interval(500)
     .pipe(
      map(n=>{
          if(n==3)
            throw new Error("Something went wrong")
         return n
      }),
      retry(2),
      catchError((error)=>{
        console.log(error.message);
        return of(12,56,78,45)
      })
     ).subscribe({
      next:(value)=>this.data.push(value)
     })
  }
}
