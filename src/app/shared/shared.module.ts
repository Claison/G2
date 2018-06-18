import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {AuthService} from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [],
    providers: [AuthService]
})
export class SharedModule { }
