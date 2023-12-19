import { Component } from '@angular/core';

import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrl: './high-charts.component.scss'
})
export class HighChartsComponent {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts, it's Highcharts

  optFromInputString: any = 
  {
    "title": {
      "text": "HighCharts"
    },
    "colors": ["#544fc5"],
    "series": [{
      "type": "column",
      "data": [11,2,3],
    }]
  };

  optFromInput: Highcharts.Options = this.optFromInputString;
  updateFromInput: boolean = false;
}
