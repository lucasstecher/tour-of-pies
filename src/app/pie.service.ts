import { Injectable } from '@angular/core';
import { Pie } from './pie';
import { PIES } from './mock-pies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PieService {

  getPies(): Observable<Pie[]> {
    const pies = of(PIES);
    return pies;
  }

  constructor() { }
}
