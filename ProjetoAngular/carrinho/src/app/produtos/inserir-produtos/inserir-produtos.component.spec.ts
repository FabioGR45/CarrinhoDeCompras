import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirProdutosComponent } from './inserir-produtos.component';

describe('InserirProdutosComponent', () => {
  let component: InserirProdutosComponent;
  let fixture: ComponentFixture<InserirProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
