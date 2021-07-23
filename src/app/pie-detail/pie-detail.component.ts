import { Component, OnInit } from '@angular/core';
import { Pie } from '../pie';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PieService } from '../pie.service';


@Component({
  selector: 'app-pie-detail',
  templateUrl: './pie-detail.component.html',
  styleUrls: ['./pie-detail.component.css']
})
export class PieDetailComponent implements OnInit {
pie: Pie | undefined;

constructor(
  private route: ActivatedRoute,
  private pieService: PieService,
  private location: Location
) { }

ngOnInit(): void {
  this.getPie();
}

getPie(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.pieService.getPie(id)
    .subscribe(pie => this.pie = pie);
}

goBack(): void {
  this.location.back();
}

}