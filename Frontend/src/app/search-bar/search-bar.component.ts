import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private _search: SearchService) { }

  @Output() tabEvent = new EventEmitter();
  
  onSearchWBG() {
    this._search.searchWBG();
  }

  changeTabEvent() {
    const tab = 0;
    this.tabEvent.emit(tab);
  }

}
