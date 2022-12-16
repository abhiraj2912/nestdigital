import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employee-leave-apply',
  templateUrl: './employee-leave-apply.component.html',
  styleUrls: ['./employee-leave-apply.component.css']
})
export class EmployeeLeaveApplyComponent {

  leaveType=""
  fromDate=""
  toDate=""
  remarks=""
  status="Pending"
  empId=localStorage.getItem("userInfo")


  constructor(private api:ApiService){}

  readValues=()=>{

    let data:any={"empId":this.empId,"leaveType":this.leaveType,"fromDate":this.fromDate,"toDate":this.toDate,"remarks":this.remarks,"status":this.status}
    console.log(data)

    this.api.applyLeave(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Leave Applied Successfully")
          
      } else {
        alert("Something went wrong")
      }
      }
    )

  }

}
