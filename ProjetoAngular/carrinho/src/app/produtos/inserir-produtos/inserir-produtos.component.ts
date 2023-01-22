import { ProdutosService } from './../../service/produtos.service';
import  Produto from 'src/app/models/Produto';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-inserir-produtos',
  templateUrl: './inserir-produtos.component.html',
  styleUrls: ['./inserir-produtos.component.css']
})
export class InserirProdutosComponent  implements OnInit {

  produto: Produto = new Produto(0, "", 0, 0);
  id = new FormControl(0, [Validators.required]);  
  nome = new FormControl('', [Validators.required]);
  preco = new FormControl(0, [Validators.required]);
  quantidade = new FormControl(0, [Validators.required]);

  getErrorMessage() {
    return 'You must enter a value';
  }

constructor(private produtoService: ProdutosService, 
            private router: ActivatedRoute,
            private linkRouter: Router){}

ngOnInit(): void {
  let id = this.router.snapshot.params['id'];
  if(id) {
    this.produto = this.produtoService.buscaPorId(id)!;

    this.id.setValue(this.produto.id);    
    this.nome.setValue(this.produto.nome);
    this.preco.setValue(this.produto.preco);
    this.quantidade.setValue(this.produto.quantidade);
  }
}

insereProduto = () => {
    
  this.produto.id = this.id.value ?? 0;
  this.produto.nome = this.nome.value ?? "";
  this.produto.preco = this.preco.value ?? 0;
  this.produto.quantidade = this.quantidade.value ?? 0;

  this.produtoService.insereProduto(this.produto)
  console.log(this.produto);
  alert("Produto adicionado com sucesso!");
  this.linkRouter.navigate(['/produtos']);  

}

}
