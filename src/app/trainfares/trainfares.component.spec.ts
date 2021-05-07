import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainfaresComponent } from './trainfares.component';

describe('TrainfaresComponent', () => {
  let component: TrainfaresComponent;
  let fixture: ComponentFixture<TrainfaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainfaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainfaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
