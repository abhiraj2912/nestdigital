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

  addVistorLog=(vdate:any)=>{
    return this.http.post("http://localhost:8080/addvisitorlog",vdate)
  }
  addEmployeeLog=(edate:any)=>{
    return this.http.post("http://localhost:8080/addemployeelog",edate)
  }

  securityLogin=(slData:any)=>{
    return this.http.post("http://localhost:8080/seclogin",slData)
  }

  securityProfile=(sData:any)=>{
    return this.http.post("http://localhost:8080/secinfo",sData)
  }

  fetchId=(data:any)=>{
    return this.http.post("http://localhost:8080/fetchempid",data)
  }

  employeeLogin=(elData:any)=>{
    return this.http.post("http://localhost:8080/emplogin",elData)
  }

  employeeProfile=(sData:any)=>{
    return this.http.post("http://localhost:8080/empinfo",sData)
  }

  applyLeave=(lData:any)=>{
    return this.http.post("http://localhost:8080/applyleave",lData)
  }

  myLeave=(myData:any)=>{
    return this.http.post("http://localhost:8080/myleave",myData)
  }

  myPendingLeave=(mpData:any)=>{
    return this.http.post("http://localhost:8080/empViewPending",mpData)
  }

  adminPendingLeave=()=>{
    return this.http.get("http://localhost:8080/viewleave")
  }

  adminLeaveStatus=(statusData:any)=>{
    return this.http.post("http://localhost:8080/updatestatus",statusData)
  }
  
  adminViewLeave=()=>{
    return this.http.get("http://localhost:8080/viewallleave")
  }

  securityVisitorExit=(vExitData:any)=>{
    return this.http.post("http://localhost:8080/addvisitorexitlog",vExitData)
  }

  securityEmployeeExit=(eExitData:any)=>{
    return this.http.post("http://localhost:8080/addempexitlog",eExitData)
  }

  empLogByEmpCode=(empCode:any)=>{
    return this.http.post("http://localhost:8080/emplogtoday",empCode)
  }

  visLogByName=(visName:any)=>{
    return this.http.post("http://localhost:8080/visitorbyname",visName)
  }
}
