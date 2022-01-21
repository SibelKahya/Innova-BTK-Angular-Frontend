import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandAddComponentComponent } from './brand-add-component.component';

describe('BrandAddComponentComponent', () => {
  let component: BrandAddComponentComponent;
  let fixture: ComponentFixture<BrandAddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandAddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandAddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
