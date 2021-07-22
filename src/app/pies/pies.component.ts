import { Component, OnInit } from '@angular/core';

import { Pie } from '../pie';
import { PieService } from './../pie.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit {
    pies : Pie[] = [];

  constructor(private pieService: PieService) { }

  ngOnInit(): void {
    this.getPies();
  }

  getPies(): void {
    this.pieService.getPies()
      .subscribe(pies => this.pies = pies);
  }
}
