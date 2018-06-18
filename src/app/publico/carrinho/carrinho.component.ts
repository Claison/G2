import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
    produtosCarrinho = null;
    qtProduto = null;

    constructor() {
    }

    ngOnInit() {
        this.atualizaProdutosCarrinho();
    }

    getCarrinho() {
        const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
        if (localStorageCarrinho == null) {
            return [];
        } else {
            return localStorageCarrinho.produtos;
        }
    }

    atualizaProdutosCarrinho() {
        this.produtosCarrinho = this.getCarrinho();
    }

    excluir(produto) {

            if (confirm("Realmente deseja excluir o produto " + produto.nome + "?")) {
                this.produtosCarrinho.splice(this.produtosCarrinho.indexOf(produto), 1)
                localStorage.setItem("produtosCarrinho", JSON.stringify(this.produtosCarrinho));


            }
        }
    }

