import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackPatternComponent } from './attack-pattern.component';

describe('AttackPatternComponent', () => {
  let component: AttackPatternComponent;
  let fixture: ComponentFixture<AttackPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttackPatternComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttackPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
