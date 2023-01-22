import { Router } from '@angular/router';
import { ProdutosService } from './../service/produtos.service';
import { Component, OnInit } from '@angular/core';
import Produto from 'src/app/models/Produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService, private router: Router){}

  ngOnInit(): void{

    this.produtos = Array.from(this.produtosService.carregaProdutos());

  }

  logoff(){

    localStorage.setItem('token', '0');                       
    this.router.navigate(['/login']);      
  
    }

}
