import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pie } from './pie';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb(){
    const pies = [
      { id: 11, name: 'Chicken' },
      { id: 12, name: 'Apple' },
      { id: 13, name: 'Chocolate' },
      { id: 14, name: 'Grape' },
      { id: 15, name: 'Banana' },
      { id: 16, name: 'Meat' },
      { id: 17, name: 'Blueberry' },
      { id: 18, name: 'Pumpkin' },
      { id: 19, name: 'Sweet Potato' },
      { id: 20, name: 'Coconut Cream' }
    ];
    return {pies};
  }

  genId(pies: Pie[]): number {
    return pies.length > 0 ? Math.max(...pies.map(pie => pie.id)) +1 : 11;
  }

  constructor() { }
}
