import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-ration-stock-chart',
  templateUrl: './ration-stock-chart.component.html',
  styleUrls: ['./ration-stock-chart.component.css'],
})
export class RationStockChartComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area',
    },
    title: {
      text: 'Ration stock info',
      style: {
        fontWeight: 'bold',
        fontSize: '28px',
        textAlign: 'center',
      },
    },
    xAxis: {
      categories: [
        '100',
        '110',
        '120',
        '130',
        '140',
        '150',
        '160',
        '170',
        '180',
      ],
      tickmarkPlacement: 'on',
      title: {
        text: null,
      },
    },
    yAxis: {
      title: {
        text: 'Ration stock',
      },
    },
    tooltip: {
      split: true,
      valueSuffix: ' units',
    },
    plotOptions: {
      area: {
        stacking: 'normal',
        lineColor: '#666666',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#666666',
        },
      },
    },
    series: [
      {
        type: 'area',
        name: 'Doge ration stock',
        data: [10000, 12000, 18000, 24000, 20000, 16000, 14000, 10000, 8000],
      },
      {
        type: 'area',
        name: 'Evil cat stock',
        data: [6000, 8000, 12000, 20000, 26000, 24000, 22000, 18000, 16000],
      },
    ] as Highcharts.SeriesOptionsType[],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            chart: {
              height: '100%',
            },
            title: {
              style: {
                fontSize: '16px',
              },
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
            yAxis: {
              labels: {
                style: {
                  fontSize: '10px',
                },
              },
            },
            legend: {
              itemStyle: {
                fontSize: '10px',
              },
            },
          },
        },
      ],
    },
  };
}
