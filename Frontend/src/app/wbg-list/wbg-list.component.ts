import { Component, OnInit } from '@angular/core';
import { WineService } from "../wine.service";
import { AdminService } from "../admin.service";

@Component({
  selector: 'app-wbg-list',
  templateUrl: './wbg-list.component.html',
  styleUrls: ['./wbg-list.component.css']
})
export class WbgListComponent implements OnInit {

  constructor(private _wine: WineService, private _admin: AdminService) { }

  ngOnInit() {
  }

}
