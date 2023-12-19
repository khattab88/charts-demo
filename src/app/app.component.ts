import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { data } from './data';
import { data2 } from './generated';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  results: any;
  selectedChart = 'primeng';

  pagination: any = {
    length: 0,
    pageSize: 15,
    disabled: false,
    showFirstLastButtons: true,
    showPageSizeOptions: [],
    hidePageSize: false,
    pageIndex: 0,
    pageEvent: {}
  };

  ngOnInit(){
    if(environment.dataSource == "dev"){
      this.results = data;
      this.pagination.length = data.length;
      this.results = this.getPageData(data, this.pagination.pageIndex, this.pagination.pageSize);
    } else {
      this.results = data2;
      this.pagination.length = data2.length;
      this.results = this.getPageData(data2, this.pagination.pageIndex, this.pagination.pageSize);
    }
  }

  onChange(e: any){
    this.selectedChart = e.target.value;
  }

  onPageChange(e: any){
    // debugger;

    this.pagination.pageIndex = e.page;
    this.pagination.pageSize = e.rows;

    if(environment.dataSource == "dev"){
      this.results = this.getPageData(data, this.pagination.pageIndex, this.pagination.pageSize);
    } else {
      this.results = this.getPageData(data2, this.pagination.pageIndex, this.pagination.pageSize);
    }
  }

  handlePageEvent(e: PageEvent) {
    this.pagination.pageEvent = e;
    // this.pagination.length = e.length;
    this.pagination.pageSize = e.pageSize;
    this.pagination.pageIndex = e.pageIndex;

    if(environment.dataSource == "dev"){
      this.results = this.getPageData(data, this.pagination.pageIndex, this.pagination.pageSize);
    } else {
      this.results = this.getPageData(data2, this.pagination.pageIndex, this.pagination.pageSize);
    }
  }

  getPageData(data: any[], pageIndex: number, pageSize: number){
    let results = [];

    if(pageIndex == 0)
      results = data.slice(0, pageSize);
    else
      results = data.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize);

    return results;
  }
}
