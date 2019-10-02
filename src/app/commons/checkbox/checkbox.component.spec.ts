import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let element: HTMLElement;
  let elementCheckbox: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
    elementCheckbox = element.querySelector('input');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click on a checkbox should emit a change event', () =>{
    spyOn(component.changed, 'emit');
    elementCheckbox.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.changed.emit).toHaveBeenCalled();
  });
});
