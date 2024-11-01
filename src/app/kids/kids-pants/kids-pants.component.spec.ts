import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsPantsComponent } from './kids-pants.component';

describe('KidsPantsComponent', () => {
  let component: KidsPantsComponent;
  let fixture: ComponentFixture<KidsPantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KidsPantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsPantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
