import { IData } from 'src/app/models/data.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data!: IData[];
  pageSize: number = 7;
  page: number = 1;

  ngOnInit(): void {
    console.log('MainComponent');
    this.getData();
  }

  constructor(private DataService: DataService) { }
  getData() {
    // @ts-ignore
    this.DataService.getData().subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }

  get totalPage(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  get Page(): any[] {
    const startIndex = (this.page - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.data.slice(startIndex, endIndex);
  }

  isPrev() {
    if (this.page > 1) {
      this.page--;
    }
  }

  isNext() {
    if (this.page < this.totalPage) {
      this.page++;
    }
  }
}
