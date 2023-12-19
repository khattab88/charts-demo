import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ChartModule} from 'primeng/chart';
import { PaginatorModule } from 'primeng/paginator';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import {PageEvent, MatPaginatorModule} from '@angular/material/paginator';
import {JsonPipe} from '@angular/common';


import { HighChartsComponent } from './charts/high-charts/high-charts.component';
import { NgxChartsComponent } from './charts/ngx-charts/ngx-charts.component';
import { PrimengChartsComponent } from './charts/primeng-charts/primeng-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    HighChartsComponent,
    NgxChartsComponent,
    PrimengChartsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HighchartsChartModule,
    NgxChartsModule,
    ChartModule,
    NgbModule,
    NgbPaginationModule,
    MatPaginatorModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
