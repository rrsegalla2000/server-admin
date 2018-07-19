import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-requesicoes',
  templateUrl: './requesicoes.component.html',
  styleUrls: ['./requesicoes.component.css']
})
export class RequesicoesComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('chart') el: ElementRef;

  ngAfterViewInit() {
    this.basicChart();
  }

  basicChart() {
    const element = this.el.nativeElement;
    const trace1 = {
      x: [1, 2, 3, 4],
      y: [0, 2, 3, 5],
      fill: 'tozeroy',
      type: 'scatter'
    };

    const trace2 = {
      x: [1, 2, 3, 4],
      y: [3, 5, 1, 7],
      fill: 'tonexty',
      type: 'scatter'
    };

    const data = [trace1, trace2];

    const style = {
      xaxis: {
        gridcolor: '#63d2ff12',
        gridwidth: 2
      },
      showlegend: true,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      yaxis: {
        type: 'linear',
        gridcolor: '#63d2ff12',
        gridwidth: 2,
      },
      height: 350,
      margin: { t: 30 , b: 30, l: 30, r: 100  }
    };

    Plotly.plot(element, data, style,{displayModeBar: false});
  }

}
