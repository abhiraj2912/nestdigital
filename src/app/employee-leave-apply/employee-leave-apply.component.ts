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

  count:any=[]
  constructor(private api:ApiService){
    let data={"empId":this.empId}
    api.getLeaveCount(data).subscribe(
      (response)=>{
        this.count=response
      }
    )
  }

  

  readValues=()=>{

    const date1 = new Date(this.toDate)
    const date2 = new Date(this.fromDate)

    let days:any=((date1.getTime()-date2.getTime())/(1000*3600*24))+1
    console.log(days)

    if(days>0)
    {
      if(this.leaveType=="Casual" && this.count[0].casualLeave<days)
      {
        alert("Casual Leave not available")
      }
      else if(this.leaveType=="Sick" && this.count[0].sickLeave<days)
      {
        alert("Sick Leave not available")
      }
      else if(this.leaveType=="Special" && this.count[0].specialLeave<days)
      {
        alert("Special Leave not available")
      }
      else{

        let data:any={"empId":this.empId,"leaveType":this.leaveType,"fromDate":this.fromDate,"toDate":this.toDate,"remarks":this.remarks,"status":this.status}
        console.log(data)
        this.api.applyLeave(data).subscribe(
          (response:any)=>{
            console.log(response)
            if (response.status=="success") {
              alert("Leave Applied Successfully")
              window.location.reload()
            }
            else {
              alert("Something went wrong")
            }
          }
        )
      }
    }else
    {
      alert("Invalid Date")
    }
  }
}
