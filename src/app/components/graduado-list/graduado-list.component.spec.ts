import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraduadoListComponent } from './graduado-list.component';

describe('GraduadoListComponent', () => {
  let component: GraduadoListComponent;
  let fixture: ComponentFixture<GraduadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraduadoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraduadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
