import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
HC_more(Highcharts);

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.css'],
})
export class PerformanceChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      polar: true,
      type: 'area',
    },
    title: {
      text: 'Performance Evaluation',
      style: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
      },
      
    },
    xAxis: {
      categories: [
        'Taming',
        'Accessory',
        'Development',
        'Grooming',
        'Awareness',
        'Ration',
      ],
      tickmarkPlacement: 'on',
      lineWidth: 0,
    },
    yAxis: {
      gridLineInterpolation: 'polygon',
      lineWidth: 0,
      min: 0,
    },
    tooltip: {
      shared: true,
      pointFormat:
        '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
    },
    series: [
      {
        name: 'Allocated resources',
        data: [45000, 39000, 60000, 63000, 58000, 93000],
        pointPlacement: 'on',
        type: 'area',
        color: '#434348',
      },
      {
        name: 'Spent resources',
        data: [83000, 49000, 42000, 35000, 60000, 90000],
        pointPlacement: 'on',
        type: 'area',
        color: '#FF404E',
      },
    ],
  };
}
