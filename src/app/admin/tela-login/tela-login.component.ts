import { Component, OnInit } from '@angular/core';
import {LogonService} from '../logon.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth.service';


@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

    usuario: string;
    senha: string;
    erro = null;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    entrar() {
        this.authService.auth(this.usuario, this.senha)
            .subscribe(usuarios => {
                if (usuarios.length > 0) {
                    this.erro = null;
                    this.authService.set(usuarios[0]);
                    this.router.navigate(['produto/lista']);
                } else {
                    this.erro = 'Login ou senha incorretos';
                }
            });
    }
}
