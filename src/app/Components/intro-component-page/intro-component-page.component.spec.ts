import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroComponentPageComponent } from './intro-component-page.component';

describe('IntroComponentPageComponent', () => {
  let component: IntroComponentPageComponent;
  let fixture: ComponentFixture<IntroComponentPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroComponentPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntroComponentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
