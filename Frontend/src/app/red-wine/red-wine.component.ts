import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-red-wine',
  templateUrl: './red-wine.component.html',
  styleUrls: ['./red-wine.component.css']
})
export class RedWineComponent implements OnInit {

  constructor(
    private _wine: WineService,
    private _admin: AdminService
    ) { }

  ngOnInit() {
  }

}
