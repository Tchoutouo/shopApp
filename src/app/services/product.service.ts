import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, interval, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = []

  private urlApi: string = "http://localhost:4200/assets/api/products.json"

  constructor(private http: HttpClient) { }

  // getProducts(): Promise<Product[]>{
  //   return new Promise((resolve, reject)=>{
  //     if(this.products.length){
  //       resolve(this.products)
  //     }else{
  //       reject([])
  //     }
  //   })
  // }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.urlApi)
  }

  getNumber(): Observable<Number>{
    return of(45)
  }

  getSecond(): Observable<Number>{
    return interval(1000)
  }

  addProduct(product: Product){}

  editProduct(_id: string, product: Product){}

  deleteProduct(_id: string){}

}
