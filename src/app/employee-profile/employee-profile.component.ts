import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent {

  userID:any=""
  data:any=[]
  empCode:any=""
  count:any=[]
  

  constructor(private api:ApiService){
    this.userID=localStorage.getItem("userInfo")
    
    let data:any={"id":this.userID}
    api.employeeProfile(data).subscribe(
      (response:any)=>{
        this.data=response
      }
    )
    let data2={"empId":this.userID}
    api.getLeaveCount(data2).subscribe(
      (response)=>{
        this.count=response
      }
    )
  }

}
