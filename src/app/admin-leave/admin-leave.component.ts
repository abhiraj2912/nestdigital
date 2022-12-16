import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-leave',
  templateUrl: './admin-leave.component.html',
  styleUrls: ['./admin-leave.component.css']
})
export class AdminLeaveComponent {

  leaveData:any=[]
  constructor(private api:ApiService){
    api.adminPendingLeave().subscribe(
      (response:any)=>{
        this.leaveData=response
      }
    )
  }

  approveBtnClick=(id:any)=>{
    let status:any="Approved"
    let approveData={"id":id,"status":status}
    console.log(approveData)
    this.api.adminLeaveStatus(approveData).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Approved")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

  rejectBtnClick=(id:any)=>{
    let status:any="Rejected"
    let approveData={"id":id,"status":status}
    console.log(approveData)
    this.api.adminLeaveStatus(approveData).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Rejected")
          window.location.reload()
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
