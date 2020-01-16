import { Component, OnInit } from '@angular/core';
import { isNumber } from 'lodash';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data/shared-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data;
  constructor(private sharedData: SharedDataService) { }


  ngOnInit() {
    console.log(isNumber(1));
  }

}
