import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  chart = [];
  chart_memory = "uso-memoria";
  chart_process = "processamento";
  chart_requests = "requisicoes"

  chart_memory_name = "Uso de Memória";
  chart_process_name = "Processamento";
  chart_requests_name = "Quantidades média de Requisições"


  constructor() {}

}
