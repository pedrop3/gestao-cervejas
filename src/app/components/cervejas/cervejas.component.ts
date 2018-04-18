import { Component, OnInit } from '@angular/core';
import {Cerveja} from './../../models/cerveja'
import { CervejasService } from './../../services/cervejas.service'
@Component({
  selector: 'app-cervejas',
  templateUrl: './cervejas.component.html',
  styleUrls: ['./cervejas.component.css']
})
export class CervejasComponent implements OnInit {

  cervejas: Array<Cerveja>;
  constructor(public cervejasService: CervejasService) { }

  ngOnInit() {
    this.cervejas = this.cervejasService.listar();
}


}
