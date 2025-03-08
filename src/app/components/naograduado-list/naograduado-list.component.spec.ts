import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaograduadoListComponent } from './naograduado-list.component';

describe('NaograduadoListComponent', () => {
  let component: NaograduadoListComponent;
  let fixture: ComponentFixture<NaograduadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaograduadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaograduadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
