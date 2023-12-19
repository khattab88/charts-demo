import { Component, Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-ngx-charts',
  templateUrl: './ngx-charts.component.html',
  styleUrl: './ngx-charts.component.scss'
})
export class NgxChartsComponent {
  @Input('data') data: any[] = [];
  @Input('pageSize') pageSize: number = 0;
  @Input('pageIndex') pageIndex: number = 0;
  
  results: any[] = [];
  view: any = [1100, 600];
  colorScheme: any = {
    domain: ['#E1EBDE','#C4D3C0', '#A9B7A6', '#739A69']
  };
  // colorScheme = "#54D534";
  colorSchemeType: any = "linear"; 

  // options
  gradient = true;
  showLegend = false;
  showDataLabel = true;
  showXAxis = true;
  showYAxis = true;
  barPadding = 30;
  wrapTicks = false;

  showXAxisLabel = false;
  xAxisLabel = 'المحاكم';
  showYAxisLabel = false;
  yAxisLabel = 'عدد الدعاوى';
  rotateXAxisTicks = true;
  trimXAxisTicks = false;
  
  ngOnInit() {
    this.results = this.data;
  }

  onSelect(e: any){
    console.log(e);
    alert(`id: ${e.extra.id}\nname: ${e.name}\nvalue: ${e.value}`);
  }
}
