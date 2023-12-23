import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalhesCompraPage } from './detalhes-compra.page';

describe('DetalhesCompraPage', () => {
  let component: DetalhesCompraPage;
  let fixture: ComponentFixture<DetalhesCompraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetalhesCompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
