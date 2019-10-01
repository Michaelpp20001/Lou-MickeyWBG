import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient, private router: Router) { }

  baseUrl: string = "http://localhost:3000/wbgs";

  selectedFile: any = {
    labelImage: "",
  };

  allWbg: any;

  sparklingWine: any = [];

  whiteWine: any = [];

  redWine: any = [];

  keywords: any = [];

  filterWords: any = ["the", "a", "an", "and"];

  searchTerm: string = "";

  finalizedSearchTerm: string = "";

  searchResults: any = [];

  noSearchResults: any = "";

  newWine: any = {
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
  };

  filterKeywords(arr) {
    let result = arr.filter(word => !this.filterWords.includes(word))
    this.keywords = result
  }

  stringToArray(str) {
    return str.trim().split(" ")
  }

  uploadNewWine() {
    //post a new wine to the backend
    //and clear out remaining inputs in view and storage methods

    this.http.post(this.baseUrl, this.newWine)
    .subscribe(response => {
      console.log(response);
      sessionStorage.clear();
      this.clearWbgInputs();
      this.getAllWbg();
    });
  }

  getAllWbg() {
    //get all Wbg and store to all Wbg variable/update arrays

    this.http.get(this.baseUrl)
    .subscribe(response => {

      console.log("All WBG", response);

      this.allWbg = response;
      for (let i = 0; i < this.allWbg.length; i++) {

        console.log("category", this.allWbg[i].category)

        if (this.allWbg[i].category === "sparkling") {
          this.sparklingWine.push(this.allWbg[i]);
        } else if (this.allWbg[i].category === "red") {
          this.redWine.push(this.allWbg[i]);
        } else {
          this.whiteWine.push(this.allWbg[i]);
        }
      };
    });
  }

  searchWBG() {
    this.searchTerm = this.searchTerm.toLowerCase();
    //filtering search term through the backend "keywords" array
    this.http.get(this.baseUrl + "?filter[where][keywords]=" + this.searchTerm)
    .subscribe((response => {

      console.log(response)

      this.searchResults = response
      if(this.searchResults[0]) {
        this.finalizedSearchTerm = this.searchTerm
        this.searchTerm = ""
        this.noSearchResults = ""
        this.router.navigateByUrl('/searchResults')
      } else {
        this.finalizedSearchTerm = this.searchTerm
        this.searchTerm = ""
        this.noSearchResults = "No search results!"
        this.router.navigateByUrl('/wbgList')
      }
    }))
  }

  clearSearch() {
    this.noSearchResults = "";
  }

  clearWbgInputs() {
    this.sparklingWine = [];
    this.whiteWine = [];
    this.redWine = [];
    this.selectedFile.labelImage = "";
    this.newWine = {
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
  };
  }
}
