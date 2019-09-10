import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-new-wbg',
  templateUrl: './new-wbg.component.html',
  styleUrls: ['./new-wbg.component.css']
})
export class NewWbgComponent implements OnInit {

  constructor(private _wine: WineService) { }

  ngOnInit() {
  }

}
