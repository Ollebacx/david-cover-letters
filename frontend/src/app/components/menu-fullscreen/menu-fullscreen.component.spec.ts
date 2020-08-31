import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFullscreenComponent } from './menu-fullscreen.component';

describe('MenuFullscreenComponent', () => {
  let component: MenuFullscreenComponent;
  let fixture: ComponentFixture<MenuFullscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFullscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
