import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteFromComponent } from './carte-from.component';

describe('CarteFromComponent', () => {
  let component: CarteFromComponent;
  let fixture: ComponentFixture<CarteFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarteFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
