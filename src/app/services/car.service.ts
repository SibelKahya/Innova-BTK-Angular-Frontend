import { CarModel } from './../models/carModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarListModel } from '../models/carListModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl:string="http://localhost:8081/api/cars/"

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarListModel>>{
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"getall")

  }

  getById(carId:number):Observable<SingleResponseModel<CarModel>>{
    return this.httpClient.get<SingleResponseModel<CarModel>>(this.apiUrl+"getbyid?carId="+carId)

  }
}
