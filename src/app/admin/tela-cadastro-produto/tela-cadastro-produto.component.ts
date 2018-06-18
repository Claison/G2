import { Component, OnInit } from '@angular/core';
import {ProdutoService} from '../produto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tela-cadastro-produto',
  templateUrl: './tela-cadastro-produto.component.html',
  styleUrls: ['./tela-cadastro-produto.component.css']
})
export class TelaCadastroProdutoComponent implements OnInit {
    id = null;
    nome = null;
    preco = null;
    categoria = null;
    url = null;
    cadastro_ok = false;
    cadastro_erro = false;
    atualizar_ok = false;
    atualizar_erro = false;
    categorias=[];

    constructor(private produtoService: ProdutoService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.atualizarLista();
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.id) {
            this.produtoService.getProduto(this.id)
                .subscribe(produto => {
                    this.nome = produto.nome;
                    this.preco = produto.preco;
                    this.url = produto.url;
                    this.categoria = produto.categoria;
                });
        }
    }

    salvar() {
        if (this.id) {
            this.produtoService.updateProduto(this.id,this.nome, this.preco, this.url, this.categoria)
                .subscribe(produto => {
                        this.atualizar_ok = true;
                        this.atualizar_erro = false;
                    },
                    erro => {
                        this.atualizar_ok = false;
                        this.atualizar_erro = true;
                    });
        } else {
            this.produtoService.addProduto(this.nome, this.preco, this.url, parseInt(this.categoria))
                .subscribe(produto => {
                        console.log(produto);
                        this.cadastro_ok = true;
                        this.cadastro_erro = false;
                        this.nome = null;
                        this.preco = null;
                        this.url = null;
                        this.categoria = null;
                    },
                    erro => {
                        this.cadastro_ok = false;
                        this.cadastro_erro = true;
                    });
        }
    }
    atualizarLista() {
        this.produtoService.getCategorias()
            .subscribe(categorias => this.categorias = categorias);
    }
}