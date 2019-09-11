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

  onUpload() {
    this._wine.newWine.labelImage = sessionStorage.getItem("base64Image");
    this._wine.upload();
  }

  ngOnInit() {
  }

}
