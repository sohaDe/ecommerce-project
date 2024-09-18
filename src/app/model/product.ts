export interface APIResponseModel{
  message: string,
  result: boolean,
  data: any
}

export interface Category{
  categoryId: number,
  categoryName: string,
  parentCategoryId: number,
  userId: number
}
export interface CartData {
  cartId: number
  custId: number
  productId: number
  quantity: number
  productShortName: string
  addedDate: string
  productName: string
  categoryName: string
  productImageUrl: string
  productPrice: number
}
// for register
export class Customer{
  custId: number
  name: string
  mobileNo: string
  password: string

  constructor(){
    this.custId = 0
    this.name= ''
    this.mobileNo = ''
    this.password = ''
  }
}

export class OrderModel{
  SaleId: number
  CustId: number
  SaleDate: Date
  TotalInvoiceAmount: number
  Discount: number
  PaymentNaration: string
  DeliveryAddress1: string
  DeliveryAddress2: string
  DeliveryCity: string
  DeliveryPinCode: string
  DeliveryLandMark: string
  IsCanceled: boolean

  constructor(){
    this.SaleId= 0
    this.CustId= 0
    this.SaleDate= new Date()
    this.TotalInvoiceAmount= 0
    this.Discount= 0
    this.PaymentNaration= ''
    this.DeliveryAddress1= ''
    this.DeliveryAddress2= ''
    this.DeliveryCity= ''
    this.DeliveryPinCode= ''
    this.DeliveryLandMark= ''
    this.IsCanceled= false
  }
}



export class Login{
  userName: string
  userPassword: string

  constructor(){
    this.userName= ''
    this.userPassword = ''
  }
}

export interface ProductList {
  productId: number
  productSku: string
  productName: string
  productPrice: number
  productShortName: string
  productDescription: string
  createdDate: string
  deliveryTimeSpan: string
  categoryId: number
  productImageUrl: string
  categoryName: string
}

export class CartModel {
  CartId: number
  CustId: number
  ProductId: number
  Quantity: number
  AddedDate: Date

  constructor(){
    this.CartId= 0
    this.CustId= 0
    this.ProductId= 0
    this.Quantity= 0
    this.AddedDate= new Date()

  }
}
