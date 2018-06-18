import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarrinhoComponent} from './carrinho/carrinho.component';
import {PublicoComponent} from "./publico/publico.component";
import {LoginComponent} from "./login/login.component";
import {ProdutosInicioComponent} from "./produtos-inicio/produtos-inicio.component";

const routes: Routes = [
    {
        path: '', component: PublicoComponent, children: [
            {path: '', component: ProdutosInicioComponent},
            {path: 'produtos', component: ProdutosInicioComponent},
            {path: 'carrinho', component: CarrinhoComponent},

        ]},
    {
        path: 'publico', component: PublicoComponent, children: [
            {path: 'acessar', component: LoginComponent},
            {path: 'sair', component: PublicoComponent},
        ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicoRoutingModule { }
