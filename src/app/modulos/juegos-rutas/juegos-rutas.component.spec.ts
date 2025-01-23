import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosRutasComponent } from './juegos-rutas.component';

describe('JuegosRutasComponent', () => {
  let component: JuegosRutasComponent;
  let fixture: ComponentFixture<JuegosRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosRutasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegosRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
