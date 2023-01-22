import { Injectable } from '@angular/core';
import Usuario from 'src/app/models/Usuario';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

 usuarios: Set<Usuario> = new Set<Usuario>();

 constructor(private router: Router) { }

 carregaUsuarios = () => this.usuarios;

 buscaPorId = (id: number) => Array.from(this.usuarios).find(u => u.id == id);

 buscaPorNome = (nome: string) => Array.from(this.usuarios).filter(u => u.nome.toUpperCase().includes(nome.toUpperCase())); 

 insereUsuario = (usuario: Usuario) => this.usuarios.add(usuario);

 removeUsuario = (usuario: Usuario) => {
   let usuarios = Array.from(this.usuarios).filter(u => u.id != usuario.id);
   this.usuarios = new Set<Usuario>(usuarios);
   this.usuarios = new Set<Usuario>(usuarios.splice(usuarios.indexOf(usuario), 1));
 }

//----------------CADASTRO---------------------
  adicionaUsuario(usuario: Usuario) {
    // var json = JSON.stringify(usuario)
    // localStorage.setItem(usuario.nome, json);

    localStorage.setItem('name', usuario.email);
    localStorage.setItem('pw', usuario.senha);
    console.log("Usuario adicionado!!!");    
  }


//------------------LOGIN----------------------
  login(email: string, senha: string){

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');



    if(email == storedName && senha == storedPw){
      alert("Logou!");
      console.log("Logou!")
      localStorage.setItem('token', '1');                       
      this.router.navigate(['/home']);      
    } else {
      alert("Email ou senha incorreto - digite novamente!!");
      console.log("Erro!")     
      localStorage.setItem('token', '0');                 
      window.location.reload();
    }


  }

  validaLogin(token: string){

    if(token == '1'){
    return true;
    } else {
      return false;
    }
   
  }
}
