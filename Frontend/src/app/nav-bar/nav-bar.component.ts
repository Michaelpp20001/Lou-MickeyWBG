import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _search: SearchService, private _admin: AdminService) { }

  tab = 1;

  ngOnInit() {
  }

  displayTab(tab) {
    this.tab = tab;
  }

  showDialog(){
    let modal_t  = document.getElementById('modal_1')
    modal_t.classList.remove('hhidden')
    modal_t.classList.add('sshow');
  }
  closeDialog() {
      let modal_t  = document.getElementById('modal_1')
      modal_t.classList.remove('sshow')
      modal_t.classList.add('hhidden');
  }

}
