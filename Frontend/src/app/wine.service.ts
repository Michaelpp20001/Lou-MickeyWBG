import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/wbgs";

  selectedFile: any = {
    labelImage: "",
  };

  allWbg: any;

  sparklingWine = [];

  whiteWine = [];

  redWine= [];

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
  };

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
  };
  }
}
