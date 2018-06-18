import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ProdutoService {
    API_URL = 'http://localhost:3000';

    constructor(private http: HttpClient) {
    }

    getProdutos(id?: number): Observable<any[]> {
        if (id){
            return this.http.get<any[]>(this.API_URL + '/produtos?categoria='+id);
        }
        return this.http.get<any[]>(this.API_URL + '/produtos');
    }
    getCategorias(): Observable<any[]> {
        return this.http.get<any[]>(this.API_URL + '/categorias');
    }
    todosProdutos() {
        return this.http.get(this.API_URL + '/produtos');
    }

    getProduto(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/produtos/' + id );
    }

    addProduto(nome: string,  preco: string, url: string, categoria: number): Observable<any> {
        const produto = {nome: nome, preco: preco, url: url, categoria: categoria };
        return this.http.post(this.API_URL + '/produtos', produto);
    }

    updateProduto(id: number, nome: string, preco: string, url: string, categoria: number): Observable<any> {
        const produto = {nome: nome, preco: preco, url: url, categoria: categoria};
        return this.http.patch(this.API_URL + '/produtos/' + id, produto);
    }

    deleteProduto(id: number) {
        return this.http.delete(this.API_URL + '/produtos/' + id);
    }
}
