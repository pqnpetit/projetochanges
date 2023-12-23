import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditlojaPage } from './editloja.page';

describe('EditlojaPage', () => {
  let component: EditlojaPage;
  let fixture: ComponentFixture<EditlojaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditlojaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
