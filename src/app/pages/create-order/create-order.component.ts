import { Component, inject, Inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, CartData, OrderModel } from '../../model/product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent implements OnInit{
  masterService= inject(MasterService)
  cartData: CartData[] = []

  totalAmount: number = 0

  orderObj :OrderModel = new OrderModel()
  ngOnInit() {
    this.getCartItems()
  }

  getCartItems(){
    this.masterService.getCartProductsByCustomerId(this.masterService.loggedUserData.custId).subscribe((res: APIResponseModel)=>{
      this.cartData = res.data
      this.cartData.forEach(element => {
        this.totalAmount = this.totalAmount + element.productPrice
      });
    })
  }

  onPlaceOrder(){
    this.orderObj.CustId = this.masterService.loggedUserData.custId
    this.orderObj.TotalInvoiceAmount = this.totalAmount
    this.masterService.placeOrder(this.orderObj).subscribe((res: APIResponseModel)=>{
      if (res.result) {
        alert("Order Place Succesfully")
        this.getCartItems()
        this.orderObj = new OrderModel()
      }else{
        alert(res.message)
      }
    })
  }
}
