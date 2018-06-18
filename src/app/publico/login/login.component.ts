import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    usuario: string;
    login: string;
    senha: string;
    idURL = null;
    id = null;
    nomeC = null;
    loginC = null;
    senhaC=null;
    erro = null;
    cadastro_ok = false;
    cadastro_erro = false;

    constructor( private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.idURL = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.id) {
            this.usuarioService.getUsuario(this.idURL)
                .subscribe(usuario => {
                    this.id = usuario.id;
                    this.nomeC = usuario.nomeC;
                    this.loginC = usuario.loginC;
                    this.senhaC = usuario.senhaC;
                });
        }
    }

    entrar() {
        this.usuarioService.auth(this.usuario, this.senha)
            .subscribe(usuarios => {
                if (usuarios.length > 0) {
                    this.erro = null;
                    this.usuarioService.set(usuarios[0]);
                    this.router.navigate(['']);
                } else {
                    this.erro = 'Login ou senha incorretos';
                }
            });
    }
    salvar() {
        this.usuarioService.addUsuario(this.id, this.nomeC, this.loginC, this.senhaC)
                .subscribe(usuario => {
                        console.log(usuario);
                        this.cadastro_ok = true;
                        this.cadastro_erro = false;
                        this.id = null;
                        this.nomeC = null;
                        this.loginC = null;
                        this.senhaC = null;
                        this.router.navigate(['']);
                    },
                    erro => {
                        this.cadastro_ok = false;
                        this.cadastro_erro = true;
                    });
        }
    }
