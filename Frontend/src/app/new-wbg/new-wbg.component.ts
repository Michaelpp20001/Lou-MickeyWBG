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
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
    };
    reader.readAsDataURL(file);
  }

  onUpload() {

    this._wine.upload();
  }

  ngOnInit() {
  }

}
