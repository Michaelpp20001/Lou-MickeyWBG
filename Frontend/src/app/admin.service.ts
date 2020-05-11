import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  admin = "admin";
  password = "admin";

  loggedIn: boolean = false;

  logout() {
    this.loggedIn = false;
  }

}
