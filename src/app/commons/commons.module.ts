import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [CheckboxComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [CheckboxComponent]
})
export class CommonsModule { }
