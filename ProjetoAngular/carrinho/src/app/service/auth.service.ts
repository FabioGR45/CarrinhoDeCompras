import { UsuariosService } from './usuarios.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = localStorage.getItem("token") ?? '';

  constructor(private usuarioService: UsuariosService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot){

    var storedResponse = localStorage.getItem('token');
    
    const validado = this.usuarioService.validaLogin(storedResponse ?? '0');

    if(validado){
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}

