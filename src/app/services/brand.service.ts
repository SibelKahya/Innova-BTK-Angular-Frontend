import { ResponseModel } from './../models/responseModel';
import { CreateBrandModel } from './../models/createBrandModel';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandListModel } from '../models/brandListModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string="http://localhost:8081/api/brands/"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall")

  }
  add(brand:CreateBrandModel){
    return this.httpClient.post<ResponseModel>(this.apiUrl+"add",brand)

  }

}
