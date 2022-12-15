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

  name=""
  searchData:any=[]
  readValues=()=>{

    let data ={"name":this.name}
  console.log(data)

  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("Not Found")
        
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
