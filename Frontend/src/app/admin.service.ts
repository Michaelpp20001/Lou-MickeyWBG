import { Injectable } from '@angular/core';
import { TabService } from './tab.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private _tab: TabService,
  ) { }

  admin = "admin";
  password = "admin";

  loggedIn: boolean = false;

  logout() {
    this.loggedIn = false;
    this._tab.currentTab=1;
  }

}
