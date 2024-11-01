import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsShirtsComponent } from './kids-shirts.component';

describe('KidsShirtsComponent', () => {
  let component: KidsShirtsComponent;
  let fixture: ComponentFixture<KidsShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsShirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
