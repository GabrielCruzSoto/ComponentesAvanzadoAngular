import { Producto } from './../interfaces/producto';
import { Component, OnInit } from '@angular/core';
import { TiendaModel } from '../models/tienda.model';

@Component({
  selector: 'app-con-estado',
  templateUrl: './con-estado.component.html',
  styleUrls: ['./con-estado.component.css']
})
export class ConEstadoComponent implements OnInit {

  modeloTienda: TiendaModel = new TiendaModel();
  carroCompras: Array<Producto> = [];
 
  constructor() { }

  ngOnInit(): void {
  }

}
