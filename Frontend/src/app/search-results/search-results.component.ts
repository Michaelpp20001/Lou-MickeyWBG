import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';
import { SearchService } from '../search.service';
import { AdminService } from '../admin.service';
import { HighlightPipe } from './../highlight.pipe'

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  constructor(
    private _wine: WineService, 
    private _search: SearchService,
    private _admin: AdminService
    ) { }

  ngOnInit() {
  }

}
