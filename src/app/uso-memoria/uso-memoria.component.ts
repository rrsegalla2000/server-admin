import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { UsoMemoriaService } from './uso-memoria.service';
import * as _ from 'lodash'



@Component({
  selector: 'app-uso-memoria',
  templateUrl: './uso-memoria.component.html',
  styleUrls: ['./uso-memoria.component.css']
})
export class UsoMemoriaComponent implements AfterViewInit {

  @ViewChild('chart') el: ElementRef;

  constructor(private usoMemoriaService: UsoMemoriaService) { }

  ngAfterViewInit() {
    this.basicChart();

  }

  basicChart() {
    const element = this.el.nativeElement;

    const data = [
      {
          'opacity': 1,
          'autocolorscale': false,
          'autobiny': true,
          'autobinx': true,
          'cmin': 2,
          'colorscale': [
              [
                  0,
                  'rgb(5,10,172)'
              ],
              [
                  0.35,
                  'rgb(40,60,190)'
              ],
              [
                  0.5,
                  'rgb(70,100,245)'
              ],
              [
                  0.6,
                  'rgb(90,120,245)'
              ],
              [
                  0.7,
                  'rgb(106,137,247)'
              ],
              [
                  1,
                  'rgb(220,220,220)'
              ]
          ],
          'cauto': true,
          'mode': 'lines',
          'xbins': {
              'start': -0.5,
              'end': 26.5,
              'size': 1
          },
          'y': [
              '0.53',
              '0.84',
              '0.94',
              '1.03',
              '1.15',
              '1.3',
              '1.45',
              '1.5',
              '1.6',
              '1.7',
              '1.8',
              '1.87',
              '1.9',
              '1.92',
              '1.94',
              '1.95',
              '1.99',
              '2',
              '1.97',
              '1.9',
              '1.87',
              '5',
              '2',
              '4',
              '3',
              '1.97',
              '2'
          ],
          'x': [
              '02/01/97',
              '02/01/98',
              '02/01/99',
              '02/01/00',
              '02/01/01',
              '02/01/02',
              '02/01/03',
              '02/01/04',
              '02/01/05',
              '02/01/06',
              '02/01/07',
              '02/01/08',
              '02/01/09',
              '02/01/10',
              '02/01/11',
              '02/01/12',
              '02/01/13',
              '02/01/14',
              '02/01/15',
              '02/01/16',
              '02/01/17',
              '02/01/18',
              '02/01/19',
              '02/01/20',
              '02/01/21',
              '02/01/22',
              '02/01/23'
          ],
          'line': {
              'color': 'rgb(31, 154, 242)',
              'width': 2,
              'shape': 'spline'
          },
          'cmax': 5,
          'type': 'timeseries',
          'name': 'B'
      }
  ]

    const style = {
      xaxis: {
        gridcolor: '#63d2ff12',
        gridwidth: 2,
        rangeslider: {range: ['02/01/97', '02/01/23']},
      },
      showlegend: true,
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      margin: { t: 30 , b: 50, l: 30, r: 30  },
      yaxis: {
        type: 'linear',
        gridcolor: '#63d2ff12',
        gridwidth: 2,
      }

    };

    Plotly.plot(element, data, style,{displayModeBar: false});
  }
}
