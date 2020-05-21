import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  constructor() { }

  currentTab = 1;
}
