import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee-exit-log',
  templateUrl: './add-employee-exit-log.component.html',
  styleUrls: ['./add-employee-exit-log.component.css']
})
export class AddEmployeeExitLogComponent {

  searchData:any=[]

  constructor(private api:ApiService){}

  empCode="" 
  exitTime=""
  
  readValues=()=>{

    let data ={"empCode":this.empCode}

  this.api.empLogByEmpCode(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("No log Found")
      } else {
        this.searchData=response
      }
    }
  )
  }

  addExitLog=(id:any)=>{
    let data:any={"id":id,"exitTime":this.exitTime}

    this.api.securityEmployeeExit(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Exit Log Added")
          window.location.reload()
        }
        else{
          alert("Something went Wrong")
        }
      }
    )
  }

}
