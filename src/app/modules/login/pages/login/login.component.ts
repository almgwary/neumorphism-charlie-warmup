import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modules/shared/models/user';
import { ApiService } from 'src/app/modules/shared/services/api.service';
import { SharedDataService } from 'src/app/modules/shared/services/shared-data/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private sharedData: SharedDataService) { }

  ngOnInit() {
  }

  login(user: User) {
    this.api.login(user.email, user.password)
      .subscribe(
        (data: User) => {
          this.sharedData.user.next(data);
          this.router.navigate(['/dashboard']);
        },
        (error: any) => {
          console.error(error);
        },
      );
  }

}
