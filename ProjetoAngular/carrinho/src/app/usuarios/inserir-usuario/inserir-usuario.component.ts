import Usuario from 'src/app/models/Usuario';
import { UsuariosService } from './../../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css']
})
export class InserirUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario(0, "", "", "");
  id = new FormControl(0, [Validators.required]);  
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required]);
  senha = new FormControl('', [Validators.required]);

  getErrorMessage() {
      return 'You must enter a value';
  }

  constructor(private usuarioService: UsuariosService, 
              private router: ActivatedRoute,
              private linkRouter: Router){}

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    if(id) {
      this.usuario = this.usuarioService.buscaPorId(id)!;

      this.id.setValue(this.usuario.id);      
      this.nome.setValue(this.usuario.nome);
      this.email.setValue(this.usuario.email);
      this.senha.setValue(this.usuario.senha);
    }
  }

  insereUsuario = () => {
    
    this.usuario.id = this.id.value ?? 0;    
    this.usuario.nome = this.nome.value ?? "";
    this.usuario.senha = this.senha.value ?? "";
    this.usuario.email = this.email.value ?? "";

    this.usuarioService.insereUsuario(this.usuario)
    alert("Usuário adicionado com sucesso!");
    this.linkRouter.navigate(['/usuarios']);        

  }

}
