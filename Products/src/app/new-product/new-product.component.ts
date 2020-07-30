import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ProductModel} from  '../product-list/product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  title:String = "Add Student";
  constructor(private productService:ProductService, private router:Router) { }
  productItem = new ProductModel(null,null,null,null,null,null,null);
  
  ngOnInit(){
  }
  AddProduct()
  {
    this.productService.newProduct(this.productItem);
    console.log("Called");
    alert("New Student Added");
    this.router.navigate(['/students']);
  }

}
