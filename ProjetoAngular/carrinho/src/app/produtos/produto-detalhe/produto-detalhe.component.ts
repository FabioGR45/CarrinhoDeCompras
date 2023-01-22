import { ProdutosService } from './../../service/produtos.service';
import  Produto  from 'src/app/models/Produto';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent {

  id: number = 0;
  produto: Produto = new Produto(0, "", 0, 0);

  constructor(private produtoService: ProdutosService, private route : ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];    
    const produto = this.produtoService.buscaPorId(id);

    this.produto = produto ?? this.produto;  

  }

}
