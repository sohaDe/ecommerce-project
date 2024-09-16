import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, Customer, Login } from '../model/product';

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
    // old way for url this.apiUrl + 'GetAllCategory'
    return this.http.get<APIResponseModel>(this.apiUrl + 'GetAllCategory',)
  }

  getAllProductsByCategoryId(categoryId: number) : Observable<APIResponseModel>{
    // new way for url
    const url = `${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`
    return this.http.get<APIResponseModel>(url)
}

registerNewCustomer(obj: Customer) : Observable<APIResponseModel>{
  // debugger
  // new way for url
  const url = `${this.apiUrl}RegisterCustomer`
  return this.http.post<APIResponseModel>(url, obj)
}

loginCustomer(obj: Login) : Observable<APIResponseModel>{
  // debugger
  // new way for url
  const url = `${this.apiUrl}Login`
  return this.http.post<APIResponseModel>(url, obj)
}
}
