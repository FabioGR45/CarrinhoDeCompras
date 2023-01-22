import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from 'src/app/service/carrinho.service';
import Produto from 'src/app/models/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit{

  colunasExibidas: string[] = ["Id", "Nome", "Ver", "Editar", "Remover"]

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutosService){}

  ngOnInit(): void{

    this.produtos = Array.from(this.produtoService.carregaProdutos());

  }


}
