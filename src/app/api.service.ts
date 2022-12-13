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

  addSecurity=(secData:any)=>{
    return this.http.post("http://localhost:8080/addsecurity",secData)
  }

  viewSecurity=()=>{
    return this.http.get("http://localhost:8080/viewsecurity")
  }

  viewVistorlog=()=>{
    return this.http.get("http://localhost:8080/visitorlog")
  }

  vistorLogByDate=(visitorData:any)=>{
    return this.http.post("http://localhost:8080/visitorbydate",visitorData)
  }

  viewemployeeLog=()=>{
    return this.http.get("http://localhost:8080/emplogview")
  }

  employeeLogByDate=(empDate:any)=>{
    return this.http.post("http://localhost:8080/emplogdate",empDate)
  }
}
