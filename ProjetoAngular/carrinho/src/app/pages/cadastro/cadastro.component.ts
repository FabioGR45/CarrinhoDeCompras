import { UsuariosService } from './../../service/usuarios.service';
import { Component } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private usuarioService: UsuariosService, 
              private formBuilder: FormBuilder) { }

  cadastroForm = this.formBuilder.group({
    id: 0,
    nome: '',
    email: '',
    senha: ''
  });

  onSubmit(){

    const usuario = new Usuario(
      this.cadastroForm.value.id ?? 0,      
      this.cadastroForm.value.nome ?? '',
      this.cadastroForm.value.email ?? '',
      this.cadastroForm.value.senha ?? ''
    );



    this.usuarioService.adicionaUsuario(usuario);
  }

}
