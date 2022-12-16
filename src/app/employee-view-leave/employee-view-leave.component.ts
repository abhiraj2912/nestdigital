import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-view-leave',
  templateUrl: './employee-view-leave.component.html',
  styleUrls: ['./employee-view-leave.component.css']
})
export class EmployeeViewLeaveComponent {

  searchData:any=[]
  userInfo:any=localStorage.getItem("userInfo")
  constructor(private api:ApiService){
    let data:any={"empId":this.userInfo}
    
    api.myLeave(data).subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

}
