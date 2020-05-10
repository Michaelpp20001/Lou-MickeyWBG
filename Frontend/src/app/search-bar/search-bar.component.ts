import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private _search: SearchService) { }

  ngOnInit() {
  }
  
  onSearchWBG() {
    this._search.searchWBG();
  }

}
