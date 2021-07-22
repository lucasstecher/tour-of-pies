import { Component, OnInit } from '@angular/core';
import { Pie } from '../pie';
import { PieService } from '../pie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pies: Pie[] = [];

  constructor(private pieService: PieService) { }

  ngOnInit(): void {
    this.getPies();
  }

  getPies(): void {
    this.pieService.getPies()
      .subscribe(pies => this.pies = pies.slice(1, 5));
  }
}
