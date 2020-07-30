import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private _registerUrl = "http://localhost:3000/register";
  private _loginUrl = "http://localhost:3000/login";
  private _loginStudent = "http://localhost:3000/studentform";
  private _resultStudent = "http://localhost:3000/result";
  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("http://localhost:3000/students");
  }
  newProduct(item)
  {
    return this.http.post("http://localhost:3000/insert",{"student" : item})
    .subscribe(data =>{
      console.log(data)
    })
  }
  //DELETE
  deleteProduct(id:string){
    return this.http.delete(`http://localhost:3000/delete/${id}`)
    
  }

  //edit
  editProduct(id){
    return this.http.get(`http://localhost:3000/edit/${id}`);
  }

  //update

  updateProduct(item){
    return this.http.post("http://localhost:3000/update", {"student":item})
    .subscribe(data=>{console.log("updateservice" + data)})
  }

  //SIGNUP AND LOGIN 
  registerUser(user){
    return this.http.post(this._registerUrl , user)
  }
  loginUser(user){
    return this.http.post(this._loginUrl , user)
  }
  loginStudent(item){
    console.log("servc"+item)
    return this.http.post(this._loginStudent , {"item":item})
  }
  showResult(id:string){
  
    return this.http.post(this._resultStudent , {"id":id})
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  }
}