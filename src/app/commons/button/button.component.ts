import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Output()
  clicked: EventEmitter<void>;
  constructor() {
    this.clicked = new EventEmitter();
   }


  handleClick(event: any) {
    event.stopPropagation();
    this.clicked.emit();
  }

}
