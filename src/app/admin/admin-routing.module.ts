import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {TelaLoginComponent} from './tela-login/tela-login.component';
import {TelaInicialComponent} from './tela-inicial/tela-inicial.component';
import {TelaCadastroProdutoComponent} from './tela-cadastro-produto/tela-cadastro-produto.component';
import {ListaProdutoComponent} from './lista-produto/lista-produto.component';

const routes: Routes = [
    {
        path: 'admin', component: AdminComponent, children: [
            {path: '', component: TelaLoginComponent},


        ]
    },
    {
        path: 'produto', component: TelaInicialComponent, children: [
            {path: 'cadastro', component: TelaCadastroProdutoComponent},
            {path: 'lista', component: ListaProdutoComponent},
            {path: 'inicial', component: TelaInicialComponent},
            {path: 'produtoc/:id/editar', component: TelaCadastroProdutoComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }


