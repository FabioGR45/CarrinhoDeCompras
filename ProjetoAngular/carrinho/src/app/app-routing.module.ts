import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InserirProdutosComponent } from './produtos/inserir-produtos/inserir-produtos.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { InserirUsuarioComponent } from './usuarios/inserir-usuario/inserir-usuario.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { ProdutosComponent } from 'src/app/produtos/produtos.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { UsuariosComponent } from 'src/app/usuarios/usuarios.component';
import { UsuarioDetalheComponent } from './usuarios/usuario-detalhe/usuario-detalhe.component';
import { ComprasComponent } from './compras/compras.component';
import { CompraDetalheComponent } from './compras/compra-detalhe/compra-detalhe.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/service/auth.service';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { ListaCarrinhoComponent } from 'src/app/carrinho/lista-carrinho/lista-carrinho.component';

const routes: Routes = [


  {
    path: 'login',
    component: LoginComponent,     
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthService]   
  },
  {
    path: 'produtos',
    component: ProdutosComponent,
    canActivate: [AuthService],    
  },
  {
    path: 'inserir-produto',
    component: InserirProdutosComponent,
    canActivate: [AuthService],
  },
  {
    path: 'produto-detalhe/:id', 
    component: ProdutoDetalheComponent,
    canActivate: [AuthService]       
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'lista-usuarios',
        component: ListaUsuariosComponent,
        canActivate: [AuthService],
      },
    ]
  },
  {
    path: 'usuario-detalhe/:id',
    component: UsuarioDetalheComponent,
    canActivate: [AuthService]       
  },
  {
    path: 'usuario/novo',
    component: InserirUsuarioComponent,
    canActivate: [AuthService]       
  },
  {
    path: 'usuario/editar/:id',
    component: InserirUsuarioComponent,
    canActivate: [AuthService]       
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
    children: [{path: 'lista-carrinho', component: ListaCarrinhoComponent}],
    canActivate: [AuthService]       
  },
  {
    path: 'compras',
    component: ComprasComponent,
    children: [{path: 'compra-detalhe/:id', component: CarrinhoComponent}],
    canActivate: [AuthService]       
  },
  {
    path: '**',
    component: HomeComponent,     
    canActivate: [AuthService]       
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
