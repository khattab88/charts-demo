import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-primeng-charts',
  templateUrl: './primeng-charts.component.html',
  styleUrl: './primeng-charts.component.scss'
})
export class PrimengChartsComponent {
  @Input('data') data: any[] = [];
  @Input('pageSize') pageSize: number = 0;
  @Input('pageIndex') pageIndex: number = 0;

  basicData: any;
  basicOptions: any;

  ngOnInit() {

    this.basicData = {
      labels: this.data.map((i: any) => i.name),
      datasets: [
        {
          label: '#',
          // backgroundColor: '#8FBDAF',
          data: this.data.map((i: any) => i.value)
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            display: false,
            // color: '#495057'
          }
        }
      },
      layout: {
        autoPadding: false,
        padding: 50
      },
      elements: {
        bar: {
          borderRadius: 5,
          backgroundColor: "#8FBDAF"
        }
      }
    };
  }

  selectData(e: any) {
    const index = e.element.index;
    const item = this.data[index];

    alert(`id: ${item.extra.id}\nname: ${item.name}\nvalue: ${item.value}`)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.basicData == null) return;

    const labels = this.data.map((i: any) => i.name);
    const dataset = this.data.map((i: any) => i.value);

    this.basicData = {
      labels: labels,
      datasets: [
        {
          label: 'عدد الدعاوى',
          data: dataset
        }
      ]
    };
  }
}
