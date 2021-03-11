import { Component, OnInit } from '@angular/core';
import { BarChart } from 'src/app/modules/common/charts/models/chart.models';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
  chartData!: Array<BarChart>;
  constructor() { }

  ngOnInit(): void {
    // this.chartData = [
    //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    // ]
    this.generateData(7);
  }

  generateData(len: number) {
    let ChartD: BarChart[] = [];
    for (let j = 0; j < 2; j++) {
      let dataD: BarChart = { data: [], label: '' };
      dataD.label = 'Series' + j;
      for (let i = 0; i < len; i++) {
        dataD.data?.push(Math.floor(Math.random() * 100));
      }
      ChartD.push(dataD);
    }

    this.chartData = ChartD;
  }

}
