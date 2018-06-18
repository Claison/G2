import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";
import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {
    usuario = null;

    constructor(private usuarioService: UsuarioService, private router: Router) {
    }

    ngOnInit() {
        this.usuario = this.usuarioService.get();
        if (!this.usuario) {
            // this.router.navigate(['']);
        }
    }

    sair() {
        this.usuarioService.logout();
        this.router.navigate(['/publico']);
    }

}
