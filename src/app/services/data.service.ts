import { Injectable } from '@angular/core';
import { IData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: IData[] = [];
  constructor() { }

  setData(data: IData) {
    this.data.push(data);
    console.log(this.data);
  }

  getData() {
    return this.data;
  }
}
