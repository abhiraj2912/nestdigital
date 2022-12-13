import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee-log',
  templateUrl: './view-employee-log.component.html',
  styleUrls: ['./view-employee-log.component.css']
})
export class ViewEmployeeLogComponent {

  searchData:any=[]

  constructor(private api:ApiService){
    api.viewemployeeLog().subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  date=""
  
  readValues=()=>{

    let data ={"date":this.date}
  console.log(data)

  this.api.employeeLogByDate(data).subscribe(
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

}
