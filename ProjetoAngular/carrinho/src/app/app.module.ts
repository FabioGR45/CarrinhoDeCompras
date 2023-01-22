import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComprasComponent } from './compras/compras.component';
import { CompraDetalheComponent } from './compras/compra-detalhe/compra-detalhe.component';
import { ProdutoDetalheComponent } from './produtos/produto-detalhe/produto-detalhe.component';
import { UsuarioDetalheComponent } from './usuarios/usuario-detalhe/usuario-detalhe.component';
import { LoginComponent } from './pages/login/login.component';
import { InserirUsuarioComponent } from './usuarios/inserir-usuario/inserir-usuario.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { InserirProdutosComponent } from './produtos/inserir-produtos/inserir-produtos.component';
import { ListaCarrinhoComponent } from './carrinho/lista-carrinho/lista-carrinho.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutosComponent,
    UsuariosComponent,
    ComprasComponent,
    CompraDetalheComponent,
    ProdutoDetalheComponent,
    UsuarioDetalheComponent,
    LoginComponent,
    InserirUsuarioComponent,
    CadastroComponent,
    ListaUsuariosComponent,
    InserirProdutosComponent,
    ListaCarrinhoComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
