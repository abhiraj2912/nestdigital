import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent {

  constructor (private api:ApiService){
    api.viewEmployee().subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  empCode=""
  searchData:any=[]
  readValues=()=>{

    let data ={"empCode":this.empCode}
  console.log(data)

  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("invalid employee code")
        
      } else {
        this.searchData=response
      }
    }
  )
  }

  deleteBtnClick=(id:any)=>{
    let deleteData:any={"id":id}
    this.api.deleteEmployee(deleteData).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Deleted")
          this.searchData=[]
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
