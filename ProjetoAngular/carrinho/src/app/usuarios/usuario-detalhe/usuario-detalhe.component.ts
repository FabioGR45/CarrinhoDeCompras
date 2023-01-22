import Usuario from 'src/app/models/Usuario';
import { UsuariosService } from './../../service/usuarios.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css']
})
export class UsuarioDetalheComponent {

  usuario: Usuario = new Usuario(0, "", "", "");

  constructor(private usuarioService: UsuariosService, private route : ActivatedRoute){}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];    
    const usuario = this.usuarioService.buscaPorId(id);

    this.usuario = usuario ?? this.usuario;  

  }

}
