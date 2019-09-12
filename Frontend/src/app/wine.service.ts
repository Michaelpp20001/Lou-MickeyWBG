import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/wbgs";

  allWbg: any;

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

    this.http.post(this.baseUrl, this.newWine)
    .subscribe(response => {
      console.log(response);
      sessionStorage.clear();
      this.getAllWbg();
    });
  }

  getAllWbg() {
    //get all Wbg and store to all Wbg variable

    this.http.get(this.baseUrl)
    .subscribe(response => {
      console.log("All WBG", response);
      this.allWbg = response;
    });
  }
}
