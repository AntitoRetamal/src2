import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FourthPagePage } from './fourth-page.page';

describe('FourthPagePage', () => {
  let component: FourthPagePage;
  let fixture: ComponentFixture<FourthPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
