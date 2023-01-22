import { Injectable } from '@angular/core';
import Produto from 'src/app/models/Produto';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  produtos: Set<Produto> = new Set<Produto>();

  constructor() { }

  carregaProdutos = () => this.produtos;

}
