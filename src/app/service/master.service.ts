import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIResponseModel, CartModel, Customer, Login, OrderModel } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = '/api/BigBasket/'
  loggedUserData : Customer = new Customer()

  onCartAdded : Subject<boolean> = new Subject<boolean>
  constructor(private http: HttpClient) {
    const isUser = localStorage.getItem('ecom18')
    if (isUser != null) {
      const parseObj = JSON.parse(isUser)
      this.loggedUserData = parseObj
    }
   }

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

addToCart(obj: CartModel) : Observable<APIResponseModel>{
  // debugger
  // new way for url
  const url = `${this.apiUrl}AddToCart`
  return this.http.post<APIResponseModel>(url, obj)
}
getCartProductsByCustomerId(loggedUserId: number) : Observable<APIResponseModel>{
  const url = `${this.apiUrl}GetCartProductsByCustomerId?id=${loggedUserId}`
  return this.http.get<APIResponseModel>(url)
}

deleteProductFromCartById(productId: number) : Observable<APIResponseModel>{
  const url = `${this.apiUrl}DeleteProductFromCartById?id=${productId}`
  return this.http.get<APIResponseModel>(url)
}

placeOrder(obj: OrderModel) : Observable<APIResponseModel>{
  // debugger
  // new way for url
  const url = `${this.apiUrl}PlaceOrder`
  return this.http.post<APIResponseModel>(url, obj)
}
}
