import { Component,ViewChild, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ChartComponent,
  ApexXAxis,
  ApexTitleSubtitle
  
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  title: ApexTitleSubtitle; 
};

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  chartOptions: any;

  constructor() {
    this.chartOptions = {
     series: [50],
     chart: { 
       height: 350,
       type: "radialBar"
     },
     
     plotOptions: {
       radialBar: {
         hollow: {
           size: "70%"
         }
       }
     },
     labels: ["Lesson Progressed"]
   };
 }



}
