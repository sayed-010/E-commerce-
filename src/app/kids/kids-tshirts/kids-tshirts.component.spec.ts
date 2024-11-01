import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsTshirtsComponent } from './kids-tshirts.component';

describe('KidsTshirtsComponent', () => {
  let component: KidsTshirtsComponent;
  let fixture: ComponentFixture<KidsTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsTshirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
