import { Component, OnInit } from '@angular/core';
import { ProductService} from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  loginStudentDetails={studentId:"",studentName:"", studentDob:""};
  constructor(private productService : ProductService, private router:Router ) { }

  loginStudent()
  {
    this.productService.loginStudent(this.loginStudentDetails)
    .subscribe(
      res=>{
      
        alert("Details are Validated. Click Ok to View the Result");
let id=res['item']._id;
        this.router.navigate([`/result/${id}`])
      },
      err=>{console.log(err)
      alert("Invalid Details")
      }
    )
  }
  ngOnInit(): void {
  }

}