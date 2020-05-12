import { Component } from '@angular/core';
import { WineService } from './wine.service';
import { AdminService } from './admin.service';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend Lou & Mickeys WBG';

  constructor(
    private _wine: WineService,
    private _search: SearchService,
    private router: Router
    ) { }

  ngOnInit() {
    this._wine.getAllWbg();
    this.router.navigate(['wbgList']);
  }

  onSearchWBG() {
    this._search.searchWBG();
  }

}
