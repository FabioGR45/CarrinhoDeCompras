import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarrinhoComponent } from './lista-carrinho.component';

describe('ListaCarrinhoComponent', () => {
  let component: ListaCarrinhoComponent;
  let fixture: ComponentFixture<ListaCarrinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCarrinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCarrinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
