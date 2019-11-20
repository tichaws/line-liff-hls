import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineLiffComponent } from './line-liff.component';

describe('LineLiffComponent', () => {
  let component: LineLiffComponent;
  let fixture: ComponentFixture<LineLiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineLiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineLiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
