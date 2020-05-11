import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  admin: string = "admin";
  password: string = "admin";
  loggedIn: boolean = false;
}
