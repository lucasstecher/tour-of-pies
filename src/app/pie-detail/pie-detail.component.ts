import { Component, OnInit, Input } from '@angular/core';
import { Pie } from '../pie';


@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.css']
})
export class PieDetailComponent implements OnInit {

@Input() pie?: Pie;

constructor() { }

ngOnInit(): void {
}

}
