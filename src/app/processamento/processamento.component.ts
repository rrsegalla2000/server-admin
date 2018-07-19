import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'app-processamento',
  templateUrl: './processamento.component.html',
  styleUrls: ['./processamento.component.css']
})
export class ProcessamentoComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('chart') el: ElementRef;

  ngAfterViewInit() {
    this.basicChart();

  }

  basicChart() {
    const element = this.el.nativeElement;

    const data = [
        {
            "sort": true,
            "pull": 0,
            "textfont": {
                "family": "Raleway",
                "size": 14,
                "color": "#fff"
            },
            "labelssrc": "GabrielRodriguesSegalla:3:fb4f48",
            "labels": [
                "Residential",
                "Non-Residential",
                "Utility",
                "teste"
            ],
            "direction": "clockwise",
            "values": [
                19,
                26,
                55,
                77,
            ],
            "textposition": "inside",
            "hoverinfo": "label+value+text+percent",
            "marker": {
                "line": {
                    "width": 0
                },
            },
            "textinfo": "label+percent",
            "hole": 0.50,
            "type": "pie",
            "valuessrc": "GabrielRodriguesSegalla:3:531090"
        }
    ];

    const style = {
      legend: {
          "bordercolor": "rgb(255, 255, 255)",
          "traceorder": "normal",
          "orientation": "v",
          "font": {
              "family": "Raleway",
              "size": 14,
              "color": "#fff"
          }
      },
      showlegend: true,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      height: 350,
      margin: { t: 30 , b: 50, l: 30, r: 100  }
    };

    Plotly.plot(element, data, style,{displayModeBar: false});
  }

}
