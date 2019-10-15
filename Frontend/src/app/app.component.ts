import { Component } from '@angular/core';
import { WineService } from './wine.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend Lou & Mickeys WBG';

  constructor(private _wine: WineService, private _search: SearchService) { }

  ngOnInit() {
    this._wine.getAllWbg();
  }

  onSearchWBG() {
    this._search.searchWBG();
  }
}
