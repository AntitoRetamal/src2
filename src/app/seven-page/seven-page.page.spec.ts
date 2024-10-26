import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SevenPagePage } from './seven-page.page';

describe('SevenPagePage', () => {
  let component: SevenPagePage;
  let fixture: ComponentFixture<SevenPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
