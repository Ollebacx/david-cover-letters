import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsectionComponent } from './textsection.component';

describe('TextsectionComponent', () => {
  let component: TextsectionComponent;
  let fixture: ComponentFixture<TextsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
