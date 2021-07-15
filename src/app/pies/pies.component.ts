import { Component, OnInit } from '@angular/core';
import { Pie } from '../pie';

@Component({
  selector: 'app-pies',
  templateUrl: './pies.component.html',
  styleUrls: ['./pies.component.css']
})
export class PiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pie : Pie = {
    id: 1,
    name: 'Strawberry'
  }
}
