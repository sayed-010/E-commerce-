import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenShirtsComponent } from './MenShirts.component';

describe('MenShirtsComponent', () => {
  let component: MenShirtsComponent;
  let fixture: ComponentFixture<MenShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenShirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
