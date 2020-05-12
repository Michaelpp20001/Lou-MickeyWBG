import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {

  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit() {
            // we added this so that when the backdrop is clicked the modal is closed.
            this.el.nativeElement.addEventListener('click', ()=> {
              this.close()
          })
  }

  close() {
    this.el.nativeElement.classList.remove('sshow')
    this.el.nativeElement.classList.add('hhidden')
}

}
