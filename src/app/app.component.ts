import { Component, ElementRef, inject, Inject, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { APIResponseModel, Customer, Login } from './model/product';
import { FormsModule } from '@angular/forms';
import { MasterService } from './service/master.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProductsComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ecommerce-project';
  registerObj: Customer = new Customer()
  loginObj: Login = new Login()

  loggedUserData: Customer = new Customer()

  @ViewChild('registerModal') registerModal: ElementRef | undefined
  @ViewChild('loginModal') loginModal: ElementRef | undefined

  masterService = inject(MasterService)

  ngOnInit() {
    const isUser = localStorage.getItem('ecom18')
    if (isUser != null) {
      const parseObj = JSON.parse(isUser)
      this.loggedUserData = parseObj
    }
  }

  logout(){
    localStorage.removeItem('ecom18')
    this.loggedUserData = new Customer()
  }

  openRegisterModal(){
    if (this.registerModal) {
      this.registerModal.nativeElement.style.display = "block"
    }
  }
  
  closeRegisterModal(){
    if (this.registerModal) {
      this.registerModal.nativeElement.style.display = "none"
    }
  }

  onRegister(){
    // debugger
    this.masterService.registerNewCustomer(this.registerObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Reistration Success")
        this.closeRegisterModal()
      }
      else{
        alert(res.message)
      }
    })
  }

  // login
  openloginModal(){
    if (this.loginModal) {
      this.loginModal.nativeElement.style.display = "block"
    }
  }
  closeLoginModal(){
    if (this.loginModal) {
      this.loginModal.nativeElement.style.display = "none"
    }
  }

  onLogin(){
    this.masterService.loginCustomer(this.loginObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        this.loggedUserData = res.data
        localStorage.setItem('ecom18', JSON.stringify(res.data))
        this.closeLoginModal()
      }
      else{
        alert(res.message)
      }
    })
  }

}
