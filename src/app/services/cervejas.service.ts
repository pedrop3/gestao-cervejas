import { Injectable } from '@angular/core';
import { Cerveja } from '../models/cerveja';

@Injectable() 
export class CervejasService {

  constructor() { }
  listar(): Array<Cerveja> {
    let cervejas = new Array<Cerveja>();
    cervejas.push(this.createBeer(1, 'Johnny B. Good', 'American Pale Ale','Cervejaria JBG','Brasil'));
    cervejas.push(this.createBeer(2, 'Johnny B. Good', 'Blond Ale','Cervejaria JBG','Brasil'));
    return cervejas;
  }
  
  private createBeer(id: number,nome: string,estilo: string,fabricante:string,paisOrigem:string) : Cerveja{
    let cerveja:Cerveja = new Cerveja();
    cerveja.id= id;
    cerveja.nome = nome;
    cerveja.estilo=estilo;
    cerveja.fabricante= fabricante;
    cerveja.paisOrigem=paisOrigem;
    return cerveja;
  }

}
