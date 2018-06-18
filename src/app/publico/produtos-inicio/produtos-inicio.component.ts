import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../admin/produto.service";

@Component({
  selector: 'app-produtos-inicio',
  templateUrl: './produtos-inicio.component.html',
  styleUrls: ['./produtos-inicio.component.css']
})
export class ProdutosInicioComponent implements OnInit {
  categorias = []
  produtosTodos = null;
  produtosCarrinho = [];
  filtroPorCategoria = null;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
      this.atualizaCarrinho();
      this.atualizarLista();
  }
    atualizarLista() {
        this.produtoService.getProdutos(this.filtroPorCategoria)
            .subscribe(produtos => this.produtosTodos = produtos);
        this.produtoService.getCategorias()
            .subscribe(categorias => this.categorias = categorias);
    }
    removerFiltroPorCategoria() {
        this.filtroPorCategoria = null;
        this.atualizarLista();
    }

    filtrarPorCategoria(categoria: number) {
        this.filtroPorCategoria = categoria;
        this.atualizarLista();
    }
    addCarrinho(produto) {
        this.atualizaCarrinho();
        this.produtosCarrinho.push(produto);
        this.setCarrinho(this.produtosCarrinho);
        alert('Produto Adicionado ao carrinho!');
    }

    atualizaCarrinho() {
        this.produtosCarrinho = this.getCarrinho();
    }

    setCarrinho(produtos) {
        localStorage.setItem('produtosCarrinho', JSON.stringify({produtos}));
    }

    getCarrinho() {
        const localStorageCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho'));
        if (localStorageCarrinho == null) {
            return [];
        } else {
            return localStorageCarrinho.produtos;
        }
    }
}
