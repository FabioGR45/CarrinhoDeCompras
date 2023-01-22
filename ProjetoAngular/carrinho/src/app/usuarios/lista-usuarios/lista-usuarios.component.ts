import { UsuariosService } from 'src/app/service/usuarios.service';
import Usuario from 'src/app/models/Usuario';
import { Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService, private router: Router){}

  ngOnInit(): void{
    var searchName = localStorage.getItem('busca');    
    this.usuarios = this.usuariosService.buscaPorNome(searchName ?? "") ?? this.usuarios;
  }

}
