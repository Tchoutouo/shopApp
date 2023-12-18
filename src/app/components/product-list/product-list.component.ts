import { Component, OnDestroy, OnInit } from '@angular/core';
import { concatAll } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

  products: Product[] = []

  isDisplayModal: boolean = false

  modalProduct: Product | undefined

  productsSub: Subscription | undefined

  isLoading: boolean = true

  constructor(private productService: ProductService){

  }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe()
  }

  ngOnInit(): void {

  //  this.products = this.productService.getProducts()
    this.productsSub = this.productService.getProducts()
    .subscribe({
      next: (products: Product[])=>{
        this.products = products
        this.isLoading = false
      },
      error: (error: any)=>{
        console.log("error", error)
        this.isLoading = true
      },
      complete: ()=>{
        console.log("complete")
      }
    })
    // //si tous ce passe bien //promesse respecter
    // .then((products: Product[])=>{
    //   this.products = products
    // })
    // //dans le cas contraire
    // .catch(()=>{
    //   this.products = []
    // })
  }

  //suppression d'un element selectionner
  handleDeleteProduct(product: Product){
    this.products = this.products.filter(p => p._id  !== product._id)
    // console.log("handleDeleteProduct", product)
    // delete(product)
  }

  //ouverture du modal et chargement des données du produit selectionné
  handleDisplayProductViewModal(product: Product){
    console.log("-----------------handleDisplayProductViewModal---------------------")
    console.log(product)
    if(product){
      this.isDisplayModal = true
      this.modalProduct = product
    }
  }

  //fermeture du modal
  handleCloseModal(){
    this.isDisplayModal = false
    this.modalProduct = undefined
  }

  getNumber(): number{
    return 3
  }

  hello(): string{
    return ""
  }
}
