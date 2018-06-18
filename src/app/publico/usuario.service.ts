import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {
    API_URL = 'http://localhost:3000';
    user = null;
    constructor(private http: HttpClient) {
    }
    auth(login: string, senha: string): Observable<any[]> {
        const qs = 'login=' + login + '&senha=' + senha;
        return this.http.get<any[]>(this.API_URL + '/usuarios?' + qs);
    }

    getUsuarios(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/usuarios');
    }
    getUsuario(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/usuarios/' + id);
    }

    addUsuario(id: number, nome: string, login: string, senha: string): Observable<any> {
        const usuario = { id: id, nome: nome, login: login, senha: senha };
        return this.http.post(this.API_URL + '/usuarios', usuario);
    }

    set(user) {
        this.user = user;
    }

    get() {
        return this.user;
    }

    clear() {
        this.user = null;
    }

    logout() {
        this.clear();
    }

}