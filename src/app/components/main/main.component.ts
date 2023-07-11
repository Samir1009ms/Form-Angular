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
  ngOnInit(): void {
    console.log('MainComponent');
    this.getData();
  }

  constructor(private DataService: DataService) { }

  getData() {
    this.data = this.DataService.getData();
    console.log(this.data);
  }
}
