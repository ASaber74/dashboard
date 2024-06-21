import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-daily-usage-chart',
  templateUrl: './daily-usage-chart.component.html',
  styleUrls: ['./daily-usage-chart.component.css']
})
export class DailyUsageChartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Daily Usage',
      style: {
        fontWeight: 'bold', fontSize: '28px', textAlign: 'center',
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        },
        minSize:'10%',
        size: '70%',
        
      }
    },
    series: [{
      type: 'pie',
      name: 'Usage',
      data: [
        { name: 'Swim pool', y: 45.0, color: '#00FF00' }, 
        { name: 'Closet', y: 26.8, color: '#5B2C6F' }, 
        { name: 'Front yard', y: 12.8, color: '#00BFFF' }, 
        { name: 'Barking', y: 8.5, color: '#FF4500' }, 
        { name: 'Like a boss', y: 6.9, color: '#FF8C00' }
      ]
    }]
  };
}
