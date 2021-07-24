import { Injectable } from '@angular/core';
import { Pie } from './pie';
import { PIES } from './mock-pies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PieService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private piesUrl = 'api/heroes';

  private log(message: string) {
    this.messageService.add(`PieService: ${message}`)
  }

  getPies(): Observable<Pie[]> {
    return this.http.get<Pie[]>(this.piesUrl);
  }

  getPie(id: number): Observable<Pie> {
    const pie = PIES.find(h => h.id === id)!;
    this.messageService.add(`PieService: fetched pie id=${id}`);
    return of(pie);
  }
}
