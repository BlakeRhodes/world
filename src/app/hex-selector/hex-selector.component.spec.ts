import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexSelectorComponent } from './hex-selector.component';

describe('HexSelectorComponent', () => {
  let component: HexSelectorComponent;
  let fixture: ComponentFixture<HexSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HexSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
