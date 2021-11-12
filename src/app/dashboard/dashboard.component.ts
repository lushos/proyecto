import { Component, OnInit } from '@angular/core';
import { Charla, Comentario, dashboardService, Venta } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ventas:Venta[]=[];
  comentarios:Comentario[]=[];
  charlas:Charla[]=[];

  constructor(private _dashboardService: dashboardService) { 
    this.ventas=_dashboardService.getVentas();
    this.comentarios=_dashboardService.getComentarios();
    this.charlas=_dashboardService.getCharlas();
  }

  ngOnInit(): void {
  }

}
