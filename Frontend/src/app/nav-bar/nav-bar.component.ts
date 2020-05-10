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
    console.log(this.tab);
  }

  toggleClass() {
    console.log(this.tab);
  }

}
