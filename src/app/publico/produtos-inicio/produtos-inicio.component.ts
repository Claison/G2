import { Component, OnInit } from '@angular/core';
import {ProdutoService} from "../../admin/produto.service";

@Component({
  selector: 'app-produtos-inicio',
  templateUrl: './produtos-inicio.component.html',
  styleUrls: ['./produtos-inicio.component.css']
})
export class ProdutosInicioComponent implements OnInit {
  categorias = []
  produtos = [];
  filtroPorCategoria = null;

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
      this.atualizarLista();
  }
    atualizarLista() {
        this.produtoService.getProdutos(this.filtroPorCategoria)
            .subscribe(produtos => this.produtos = produtos);
        this.produtoService.getCategorias()
            .subscribe(categorias => this.categorias = categorias);
    }
    // removerFiltroPorCategoria() {
    //     this.filtroPorCategoria = null;
    //     this.atualizarLista();
    // }

    filtrarPorCategoria(categoria: number) {
        this.filtroPorCategoria = categoria;
        this.atualizarLista();
    }
}
