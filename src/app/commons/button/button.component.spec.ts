import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let element: HTMLElement;
  let elementButton: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
    elementButton = element.querySelector('button');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Click on a checkbox should emit a change event', () =>{
    spyOn(component.clicked, 'emit');
    elementButton.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.clicked.emit).toHaveBeenCalled();
  });

});
