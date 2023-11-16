import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined

  @Output() deleteProductItem : EventEmitter<Product> =  new EventEmitter<Product>()

  ngOnInit(): void {
    // console.log("----------------- PRODUCT ITEM--------------------")
    // console.log(this.product);
  }

  //Afficher le produit au clic
  handleClickProduct(product: Product | undefined){
    console.log(product)
  }

  deleteProduct(product: Product | undefined){
    // console.log(product)
    this.deleteProductItem.emit(product)
  }
}
