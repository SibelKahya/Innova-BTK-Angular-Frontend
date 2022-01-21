import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CityListModel } from '../models/cityListModel';
import { CityModel } from '../models/cityModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl: string = `${environment.apiUrl}cities`
  constructor(private httpClient:HttpClient) { }
   
  getCities():Observable<ListResponseModel<CityListModel>>{
  return this.httpClient.get<ListResponseModel<CityListModel>>(`${this.apiUrl}/getall`);
  }
}
