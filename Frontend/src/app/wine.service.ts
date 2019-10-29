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
  newWine = {
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
    this.keywords = arr.filter(word => !this.filterWords.includes(word))
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

      console.log("New Wine", response);

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

  winePreLoad() {
    //retrieving label image base64 from session storage and 
    //setting to new wine label image for upload
    let wine = this.newWine;
    wine.labelImage = sessionStorage.getItem("base64Image");
    //taking all inputs from new wbg/upadate wine component and creating a keywords array
    this.keywords = `${this.keywords} ${wine.category} ${wine.name} ${wine.producer} ${wine.grape} ${wine.country} ${wine.region} ${wine.subRegion} ${wine.apperance} ${wine.nose} ${wine.palate} ${wine.abv} ${wine.wineMakingNotes} ${wine.foodPairings} ${wine.notes}`.toLowerCase()
    this.newWine.keywords = this.stringToArray(this.keywords)

    console.log("filtered keywords array", this.newWine.keywords)

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
