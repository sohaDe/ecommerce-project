import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = '/api/BigBasket/'
  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<APIResponseModel>{
    // we add return bs we will return response that we will get
    console.log(this.http.get<APIResponseModel>(this.apiUrl + 'GetAllProducts'))
    return this.http.get<APIResponseModel>(this.apiUrl + 'GetAllProducts',)
  }

  getAllCategory() : Observable<APIResponseModel>{
    // we add return bs we will return response that we will get
    console.log(this.http.get<APIResponseModel>(this.apiUrl + 'GetAllCategory'))
    return this.http.get<APIResponseModel>(this.apiUrl + 'GetAllCategory',)
  }
}
