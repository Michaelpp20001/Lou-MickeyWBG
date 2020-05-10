import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _search: SearchService) { }

  tab = 1;

  ngOnInit() {
  }

  displayTab(tab) {
    this.tab = tab;
  }

}
