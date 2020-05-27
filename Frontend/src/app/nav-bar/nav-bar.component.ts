import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { AdminService } from '../admin.service';
import { WineService } from '../wine.service'; 
import { TabService } from '../tab.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private _search: SearchService, 
    private _admin: AdminService,
    private _wine: WineService,
    private _tab: TabService
    ) { }

  tab = 1;

  ngOnInit() {
  }

  displayTab(tab: number) {
    this.tab = tab;
  }

  clearInputs() {
    this._wine.selectedFile.labelImage = "";
    this._wine.newWine = {
        id: "",
        category: "",
        name: "",
        producer: "",
        grape: "",
        country: "",
        region: "",
        subRegion: "",
        apperance: "",
        nose: "",
        palate: "",
        abv: "",
        wineMakingNotes: "",
        foodPairings: "",
        notes: "",
        labelImage: "",
        keywords: [],
    }
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
