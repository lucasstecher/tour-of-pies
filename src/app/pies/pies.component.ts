import { PieService } from './../pie.service';
import { Component, OnInit } from '@angular/core';
import { Pie } from '../pie';

@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit {

  constructor(private pieService: PieService ) { }

  getPies(): void {
    this.pies = this.pieService.getPies();
  }

  ngOnInit(): void {
    this.getPies();
  }

  pies : Pie[] = [];

  selectedPie?: Pie;
  onSelect(pie: Pie): void {
    this.selectedPie = pie;
  }
}
