import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  tab = 0;

  admin = "admin";
  password = "admin";

  loggedIn: boolean = false;

  logout() {
    this.loggedIn = false;
    this.tab=1;
  }

}
