import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-white-wine',
  templateUrl: './white-wine.component.html',
  styleUrls: ['./white-wine.component.css']
})
export class WhiteWineComponent implements OnInit {

  constructor(private _wine: WineService) { }

  ngOnInit() {
  }

}
