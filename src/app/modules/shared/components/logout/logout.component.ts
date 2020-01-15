import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data/shared-data.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private sharedData: SharedDataService) { }

  ngOnInit() {
  }

  logout($event) {
    this.sharedData.logout();
  }

}
