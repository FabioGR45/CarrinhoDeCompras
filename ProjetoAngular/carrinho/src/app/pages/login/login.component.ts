import { UsuariosService } from './../../service/usuarios.service';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private UsuariosService: UsuariosService, 
              private formBuilder: FormBuilder) {

              }

  loginForm = this.formBuilder.group({
    email: '',
    senha: ''
  });

  onSubmit(){
    this.UsuariosService.login(
      this.loginForm.value.email ?? '',
      this.loginForm.value.senha ?? '',
    );
  }

}
