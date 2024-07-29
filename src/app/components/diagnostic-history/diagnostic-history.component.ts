import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-diagnostic-history',
  templateUrl: './diagnostic-history.component.html',
  styleUrls: ['./diagnostic-history.component.css']
})
export class DiagnosticHistoryComponent {
  canvas: any;
  ctx: any;
  chart: any;

  @ViewChild('mychart') mychart: any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.chart = new Chart(this.ctx, {
      type: 'line',
      data: {
        labels: ['Oct, 2023', 'Nov, 2023', 'Dec, 2023', 'Jan, 2024', 'Feb, 2024', 'Mar, 2024'],
        datasets: [
          {
            label: 'Sales: Company A',
            data: [125, 173, 111, 128, 119, 160],
            backgroundColor: [
              'rgba(230, 111, 210, 1)',
            ],
            borderColor: [
              'rgba(230, 111, 210, 1)',
            ],
            borderWidth: 2,
            tension: 0.4,
            pointBorderColor: 'white',
            pointBorderWidth: 1,
            pointRadius: 7,
            pointHoverRadius: 8
          },
          {
            label: 'Sales: Company A',
            data: [103, 103, 91, 86, 73, 78],
            backgroundColor: [
              'rgba(140, 111, 230, 1)',
            ],
            borderColor: [
              'rgba(140, 111, 230, 1)',
            ],
            borderWidth: 2,
            tension: 0.3,
            pointBorderColor: 'white',
            pointBorderWidth: 1,
            pointRadius: 7,
            pointHoverRadius: 8
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false // Hide the legend
          }
        },
        scales: {
          y: {
            type: 'linear',
            min: 60,
            max: 180,
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    })
  }


}
