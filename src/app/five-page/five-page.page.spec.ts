import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FivePagePage } from './five-page.page';

describe('FivePagePage', () => {
  let component: FivePagePage;
  let fixture: ComponentFixture<FivePagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FivePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
