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

  filterWords: any = ["the", "a", "an", "and", ",", ":", ";"];

  searchTerm: any;

  PositiveSearchTerm: any;

  NegativeSearchTerm: any;

  searchResults: any = [];

  noSearchResults: string = "";

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
    return str.replace(/([,.])/g,"").trim().split(" ");
  }

  uploadNewWine() {
    //post a new wine to the backend
    //and clear out remaining inputs in view and storage methods
    this.winePreLoad();
    this.http.post(this.baseUrl, this.newWine)
    .subscribe(response => {
      console.log(response);
      sessionStorage.clear();
      this.clearWbgInputs();
      this.getAllWbg();
      this.router.navigateByUrl('/wbgList')
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
    this.searchResults = [];
    this.searchTerm = this.searchTerm.toLowerCase();
    this.searchTerm = this.stringToArray(this.searchTerm)

    console.log("string to array search term", this.searchTerm)

    for (let i = 0; i < this.searchTerm.length; i++) {

    //filtering search term through the backend "keywords" array
    this.http.get(this.baseUrl + "?filter[where][keywords]=" + this.searchTerm[i])
    .subscribe((response => {

      console.log("search results for", this.searchTerm[i], response)

      //setting search response to search results and navigating to either component view
      //seperate page for search results or staying on wbg list
      this.searchResults = response
      if(this.searchResults[0]) {
        this.PositiveSearchTerm = this.searchTerm[i]
        
        console.log("positive result", this.PositiveSearchTerm)

        this.clearSearch()
        this.router.navigateByUrl('/searchResults')
      } else {
        this.NegativeSearchTerm = this.searchTerm[i]

        console.log("negative result", this.NegativeSearchTerm)

        this.noSearchResults = "No search results!"
        this.router.navigateByUrl('/wbgList')
      }
    }))
  }
  }

  winePreLoad() {
    //retrieving label image base64 from session storage and 
    //setting to new wine label image for upload
    let wine = this.newWine;
    let space = " ";
    wine.labelImage = sessionStorage.getItem("base64Image");
    //taking all inputs from new wbg/upadate wine component and creating a keywords array
    this.keywords = this.keywords + space +
    wine.category + space +
    wine.name + space +
    wine.producer + space +
    wine.grape + space +
    wine.country + space +
    wine.region + space +
    wine.subRegion + space +
    wine.apperance + space +
    wine.nose + space +
    wine.palate + space +
    wine.abv + space +
    wine.wineMakingNotes + space +
    wine.foodPairings + space +
    wine.notes + space;
    this.keywords = this.keywords.toLowerCase()

    console.log("to lower case pre array", this.keywords)
    
    this.keywords = this.stringToArray(this.keywords)
    this.filterKeywords(this.keywords)

    console.log("filtered keywords array", this.keywords)

    this.newWine.keywords = this.keywords
  }

  selectWine(wine) {

    console.log("Selected wine for update", wine)

    this.newWine = wine
    this.router.navigateByUrl('/updateWbg');
  }

  updateWine() {
    this.winePreLoad();
    this.http.put(this.baseUrl + "/" + this.newWine.id, this.newWine)
    .subscribe(update => {
      console.log("Update Success!");
      sessionStorage.clear();
      this.clearWbgInputs();
      this.getAllWbg();
      this.router.navigateByUrl('/wbgList')
    });
  }

  clearSearch() {
    this.noSearchResults = "";
  }

  clearWbgInputs() {
    this.keywords = [];
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
