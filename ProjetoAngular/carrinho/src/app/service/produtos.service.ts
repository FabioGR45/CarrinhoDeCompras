import Produto from 'src/app/models/Produto';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: Set<Produto> = new Set<Produto>();

  constructor() { }

  carregaProdutos = () => this.produtos;

  buscaPorId = (id: number) => Array.from(this.produtos).find(u => u.id == id);

  insereProduto = (produto: Produto) => this.produtos.add(produto);

}
