import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-publico',
  templateUrl: './publico.component.html',
  styleUrls: ['./publico.component.css']
})
export class PublicoComponent implements OnInit {
    usuario = null;

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.usuario = this.authService.get();
        if (!this.usuario) {
            // this.router.navigate(['']);
        }
    }

    sair() {
        this.authService.logout();
        this.router.navigate(['/publico/sairS']);
    }

}
