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

      console.log('RESULT of JPEG to Base64 Conversion', reader.result)

      let convertedBase64Image = reader.result.toString();
      sessionStorage.setItem("base64Image", convertedBase64Image);
    };
    reader.readAsDataURL(file);
    
  }

  onUploadNewWine() {
    this._wine.newWine.labelImage = sessionStorage.getItem("base64Image");
    //retrieving label image base64 from session storage and 
    //setting to new wine label image for upload
    
    this._wine.uploadNewWine();
  }

  ngOnInit() {
  }

}
