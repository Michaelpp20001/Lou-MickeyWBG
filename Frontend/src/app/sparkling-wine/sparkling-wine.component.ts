import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-sparkling-wine',
  templateUrl: './sparkling-wine.component.html',
  styleUrls: ['./sparkling-wine.component.css']
})
export class SparklingWineComponent implements OnInit {

  constructor(private _wine: WineService) { }

  ngOnInit() {
  }

}
