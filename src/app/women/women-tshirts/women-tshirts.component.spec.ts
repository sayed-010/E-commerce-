import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenTshirtsComponent } from './women-tshirts.component';

describe('WomenTshirtsComponent', () => {
  let component: WomenTshirtsComponent;
  let fixture: ComponentFixture<WomenTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenTshirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomenTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
