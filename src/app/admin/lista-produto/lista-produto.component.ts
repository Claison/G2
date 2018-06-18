import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

    excluir_ok = false;
    excluir_erro = false;
    produtos = [];
    categorias=[];

    constructor(private produtoService: ProdutoService) {
    }

    ngOnInit() {
        this.atualizarLista();
    }

    excluir(produto) {
        if (confirm('Tem certeza que deseja excluir o produto ' + produto.nome + '?')) {
            this.produtoService.deleteProduto(produto.id)
                .subscribe(ok => {
                    this.excluir_ok = true;
                    this.excluir_erro = false;
                    this.atualizarLista();
                }, erro => {
                    this.excluir_ok = false;
                    this.excluir_erro = true;
                });
        }
    }

    atualizarLista() {
        this.produtoService.getProdutos()
            .subscribe(produtos => this.produtos = produtos);
    }
}
