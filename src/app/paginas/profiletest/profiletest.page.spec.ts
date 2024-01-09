import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfiletestPage } from './profiletest.page';

describe('ProfiletestPage', () => {
  let component: ProfiletestPage;
  let fixture: ComponentFixture<ProfiletestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfiletestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
