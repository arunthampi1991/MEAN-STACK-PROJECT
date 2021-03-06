import { Component, OnInit } from '@angular/core';
import { ProductModel } from "./product.model";
import { ProductService } from "../product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  title : String = "Students List";
  //Product is the model class for a product item
  students : ProductModel[];
  //image properties
  imageWidth : number = 100;
  imageHeight : number = 100;
  imageMargin : number = 2;
  showImage : boolean = false;
 
 
  //creating service object for calling getProducts()
  constructor(private productService : ProductService , private router:Router) { }
  toggleImage() : void{
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    //calling getProducts() and loading the products to products array
    this.productService.getProducts()
    .subscribe((data)=>{
      this.students=JSON.parse(JSON.stringify(data));
    })
  }

  loggedIn()
  {
    return !! localStorage.getItem('token')
  }
    //DELETE
    Delete(id:string)
    {
       let makeSure:boolean=confirm('Confirm student delete?');
    if(makeSure){
      this.productService.deleteProduct(id)
      .subscribe((response:{id})=>{
        console.log(`product with id ${response.id} deleted successfully`);
        this.productService.getProducts()
        .subscribe((data)=>{
          this.students= JSON.parse(JSON.stringify(data))
        })
      })
     
    
  }
}
}