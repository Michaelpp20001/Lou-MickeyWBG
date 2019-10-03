import { Component, OnInit } from '@angular/core';
import { WineService } from '../wine.service';

@Component({
  selector: 'app-update-wbg',
  templateUrl: './update-wbg.component.html',
  styleUrls: ['./update-wbg.component.css']
})
export class UpdateWbgComponent implements OnInit {

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

  onUpdateWine() {
    this._wine.updateWine();
  }

  ngOnInit() {
  }

}
