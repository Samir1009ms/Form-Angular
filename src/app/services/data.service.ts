import { Injectable } from '@angular/core';
import { IData } from '../models/data.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  private data: IData[] = [];
  private mainUrl = 'https://form-backend-ten.vercel.app/api'

  // api olmadan kecici olaraq isdiyirdi seyfe yenilendiyinde datalar silinirdi  bunun ucun api yaradib ona post edtim
  // setData(data: IData) {
  //   this.data.push(data);
  //   console.log(this.data);
  // }

  // getData() {
  //   return this.data;
  // }

  setData(data: IData) {
    console.log(data);
    return this.http.post(`${this.mainUrl}/addProfile`, data);
  }

  getData() {
    return this.http.get<IData[]>(`${this.mainUrl}/getProfile`);
  }
}
