import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  colunasExibidas: string[] = ["Id", "Nome", "Ver", "Editar", "Remover"]

  busca = new FormControl('');

  constructor(private usuariosService: UsuariosService, private router: Router){}

  ngOnInit(): void{
    this.usuarios = Array.from(this.usuariosService.carregaUsuarios());
  }

  removerUsuario(usuario: Usuario): void{

    alert("Usuário removido com sucesso!");
    this.usuariosService.removeUsuario(usuario);
    this.router.navigate(['/home']);        
  }

  buscaUsuarios() {
    const nome = this.busca.value;
    this.usuarios = this.usuariosService.buscaPorNome(nome ?? "") ?? this.usuarios;
    console.log("Usuarios encontrados:", this.usuarios);
    localStorage.setItem('busca', nome ?? '');                       
    this.router.navigate(['/usuarios/lista-usuarios']);    
  }

  logoff(){

    localStorage.setItem('token', '0');                       
    this.router.navigate(['/login']);      
  
    }

}
