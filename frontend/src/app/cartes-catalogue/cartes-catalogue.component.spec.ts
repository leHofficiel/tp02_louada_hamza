import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartesCatalogueComponent } from './cartes-catalogue.component';

describe('CartesCatalogueComponent', () => {
  let component: CartesCatalogueComponent;
  let fixture: ComponentFixture<CartesCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartesCatalogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartesCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
