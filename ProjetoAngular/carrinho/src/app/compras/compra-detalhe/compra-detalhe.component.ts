import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compra-detalhe',
  templateUrl: './compra-detalhe.component.html',
  styleUrls: ['./compra-detalhe.component.css']
})
export class CompraDetalheComponent implements OnInit {

  id: number = 0;
  
  constructor(private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];    
  }

}
