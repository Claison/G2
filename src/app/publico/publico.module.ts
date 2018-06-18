import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicoRoutingModule } from './publico-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { AcessarComponent } from './acessar/acessar.component';
import { LoginComponent } from './login/login.component';
import { PublicoComponent } from './publico/publico.component';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {AdminRoutingModule} from "../admin/admin-routing.module";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProdutosInicioComponent } from './produtos-inicio/produtos-inicio.component';

@NgModule({
  imports: [
    CommonModule,
    PublicoRoutingModule,
      FormsModule,
      HttpClientModule,
      NgbModule,
      AdminRoutingModule,
      SharedModule
  ],
  declarations: [
                CarrinhoComponent,
                 AcessarComponent,
                 LoginComponent,
                 PublicoComponent,
                 ProdutosInicioComponent],
  providers: []
})
export class PublicoModule { }
