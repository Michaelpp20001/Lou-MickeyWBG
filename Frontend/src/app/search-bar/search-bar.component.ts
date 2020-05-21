import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { TabService } from '../tab.service'; 

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(
    private _search: SearchService,
    private _tab: TabService
    ) { }
}
