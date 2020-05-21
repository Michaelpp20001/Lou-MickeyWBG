import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { TabService } from '../tab.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private _admin: AdminService,
    private router: Router,
    private _tab: TabService
    ) {}

    loginError: boolean = false

  onSubmit(form: NgForm) {
    if(form.value.admin == this._admin.admin &&
      form.value.password == this._admin.password) {
      this._admin.loggedIn = true;
      this.router.navigate(['/wbgList']);
      form.reset();
      this._tab.currentTab = 1;
    } else {
      this.loginError = true;
      form.reset();
    }
  }

  ngOnInit() {
  }

}
