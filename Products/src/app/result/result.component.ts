import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
student
id;
imageWidth : number = 100;
imageHeight : number = 100;
  imageMargin : number = 2;
constructor(private _route:ActivatedRoute, private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      this.id = params['student_id'];
      console.log(this.id)
    });
    this.productService.showResult(this.id).subscribe((data)=>{
      this.student=JSON.parse(JSON.stringify(data));

      console.log(this.student)
      //console.log(data);
      // console.log(this.editItem);                 
    });
  }

}
