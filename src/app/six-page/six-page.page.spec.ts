import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SixPagePage } from './six-page.page';

describe('SixPagePage', () => {
  let component: SixPagePage;
  let fixture: ComponentFixture<SixPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
