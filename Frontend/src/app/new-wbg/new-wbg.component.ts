import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-new-wbg',
  templateUrl: './new-wbg.component.html',
  styleUrls: ['./new-wbg.component.css']
})
export class NewWbgComponent implements OnInit {

  constructor(private _wine: WineService) { }

  onFileSelected(event) {
    //Upload a new label image from file on PC and convert to base64, 
    //also save to session storage for later retrieval

    console.log(event);

    let file = event.target.files[0];
    let reader = new FileReader();
    sessionStorage.clear();
    reader.onload = function() {

      console.log('Result of selected image to Base64 Conversion', reader.result)

      let convertedBase64Image = reader.result.toString();
      sessionStorage.setItem("base64Image", convertedBase64Image);
    };
    reader.readAsDataURL(file);
  }

  previewImage() {
    this._wine.selectedFile.labelImage = sessionStorage.getItem("base64Image");
  }

  onUploadNewWine() {
    //retrieving label image base64 from session storage and 
    //setting to new wine label image for upload
    let wine = this._wine.newWine;
    let space = " ";
    wine.labelImage = sessionStorage.getItem("base64Image");
    //taking all inputs from new wbg component and creating a keywords array
    this._wine.keywords = this._wine.keywords + space +
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
    this._wine.keywords = this._wine.keywords.toLowerCase()

    console.log("to lower case pre array", this._wine.keywords)
    
    this._wine.keywords = this._wine.stringToArray(this._wine.keywords)
    this._wine.filterKeywords(this._wine.keywords)

    console.log("filtered keywords array", this._wine.keywords)

    this._wine.newWine.keywords = this._wine.keywords
    this._wine.uploadNewWine();
  }

  ngOnInit() {
  }

}
