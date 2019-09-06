import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:3000/wbgs";

  wine: any = {
      name: "",
      producer: "",
      grapes: "",
      country: "",
      region: "",
      subRegion: "",
      sight: "",
      nose: "",
      palate: "",
      abv: 0,
      winemakingNotes: "",
      foodPairings: "",
      notes: "",
  };

}
