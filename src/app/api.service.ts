import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addEmployee=(empData:any)=>{
    return this.http.post("http://localhost:8080/addemployee",empData)
  }

  viewEmployee=()=>{
    return this.http.get("http://localhost:8080/viewemployee")
  }

  searchEmployee=(empSearch:any)=>{
    return this.http.post("http://localhost:8080/searchemployee",empSearch)
  }

  deleteEmployee=(empDelete:any)=>{
    return this.http.post("http://localhost:8080/deleteemployee",empDelete)
  }
}
