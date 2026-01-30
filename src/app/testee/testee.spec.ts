import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testee } from './testee';

describe('Testee', () => {
  let component: Testee;
  let fixture: ComponentFixture<Testee>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testee]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testee);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
