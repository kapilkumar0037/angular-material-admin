import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors, Label } from 'ng2-charts';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  barColors: Colors[] = [{ backgroundColor: 'red', hoverBackgroundColor: 'green' }, { backgroundColor: 'blue', hoverBackgroundColor: 'yellow' }];

  @Input() barChartData!: ChartDataSets[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }
  ngAfterViewInit() {

  }
}
