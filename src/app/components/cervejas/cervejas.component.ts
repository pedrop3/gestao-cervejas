import { Component, OnInit } from '@angular/core';
import {Cerveja} from './../../models/cerveja'

@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.css']
})
export class CervejasComponent implements OnInit {

  cervejas: Array<Cerveja>;
  constructor() { }

  ngOnInit() {
    this.cervejas = new Array<Cerveja>();
    this.cervejas.push(this.createBeer(1, 'Johnny B. Good', 'American Pale Ale','Cervejaria JBG','Brasil'));
    this.cervejas.push(this.createBeer(1, 'Johnny B. Good', 'Blond Ale','Cervejaria JBG','Brasil'));
}

  private createBeer(id: number,nome: string,estilo: string,fabricante:string,paisOrigem:string){
    let cerveja:Cerveja = new Cerveja();
    cerveja.id= id;
    cerveja.nome = nome;
    cerveja.estilo=estilo;
    cerveja.fabricante= fabricante;
    cerveja.paisOrigem=paisOrigem;
    return cerveja;
  }

}
