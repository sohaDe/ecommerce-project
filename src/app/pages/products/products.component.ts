import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { APIResponseModel, Category, ProductList } from '../../model/product';
import { map, Observable, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy{
  // old way
  // productList: ProductList[] = []

  // new way signal<from any type>([initalize as empty])
  productList = signal<ProductList[]>([])

  categoryList$: Observable<Category[]> = new Observable<Category[]>()

  subscribtionList: Subscription[] = []

  // masterService = Inject(MasterService)
  constructor(private masterService: MasterService) {}

  ngOnInit() {
    this.loadAllProducts()
    this.categoryList$ = this.masterService.getAllCategory().pipe(
      map(item => item.data)
    )
  }

  loadAllProducts(){
    this.subscribtionList.push(this.masterService.getAllProducts().subscribe((res: APIResponseModel) => {
      // this.productList = res.data
      // console.log(res.data)
      console.log(res)

      this.productList.set(res.data)
    }))
  }


  ngOnDestroy() {
    this.subscribtionList.forEach(element => {
      element.unsubscribe()
    });
  }
}
