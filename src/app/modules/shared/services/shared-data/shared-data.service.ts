import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { USER_LOCAL_STORAGE_KEY } from '../../models/constants';




@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  user: BehaviorSubject<User> = new BehaviorSubject<User>(this.getUserFromLocalStorage());

  constructor(private router: Router) {

    this.user.subscribe(
      user => {
        this.setUserInLocalStorage(user);
      }
    );
  }

  isUserExist(): boolean {
    const user = this.user.getValue();
    const isUserExist = !!user && !!user.email ;
    return isUserExist;
  }


  logout() {
    localStorage.clear();
    this.user.next(undefined);
    this.router.navigate(['/login']);
  }

  setUserInLocalStorage(user: User) {
    if ( !user) {
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    } else {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
    }

  }

  getUserFromLocalStorage(): User {
    let user = null;
    try {
        const text = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
        if (text && text !== '') {
            user = JSON.parse(text);
        }
    } catch (e) {
      console.error(e);
    }
    return user;
  }

}
