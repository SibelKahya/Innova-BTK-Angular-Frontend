import { ResponseModel } from './../models/responseModel';
import { CreateRentalModel } from './../models/createRentalModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl: string = `${environment.apiUrl}rentals`

  constructor(private httpClient:HttpClient) { }
  rentForIndividualCustomer(rental:CreateRentalModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/rentforindividualcustomer`,rental);
  }
  rentForCorporateCustomer(rental:CreateRentalModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(`${this.apiUrl}/rentforcorporatecustomer`,rental);
  }
}
