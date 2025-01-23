import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaJuegosComponent } from './carta-juegos.component';

describe('CartaJuegosComponent', () => {
  let component: CartaJuegosComponent;
  let fixture: ComponentFixture<CartaJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaJuegosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartaJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
