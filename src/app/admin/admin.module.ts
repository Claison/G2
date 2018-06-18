
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroProdutoComponent } from './tela-cadastro-produto/tela-cadastro-produto.component';
import {SharedModule} from '../shared/shared.module';
import {LogonService} from './logon.service';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ProdutoService } from './produto.service';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AdminRoutingModule,
    SharedModule,
],
  declarations: [TelaInicialComponent,
                TelaLoginComponent,
                TelaCadastroProdutoComponent,
                AdminComponent,
                ListaProdutoComponent
  ],
    providers: [LogonService, ProdutoService]
})
export class AdminModule { }
