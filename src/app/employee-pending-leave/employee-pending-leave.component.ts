import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-pending-leave',
  templateUrl: './employee-pending-leave.component.html',
  styleUrls: ['./employee-pending-leave.component.css']
})
export class EmployeePendingLeaveComponent {

  searchData:any=[]
  empID:any=localStorage.getItem("userInfo")
  constructor(private api:ApiService){
    let data:any={"empId":this.empID}
    
    api.myPendingLeave(data).subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  cancelBtnClick=()=>{
    
  }

}
