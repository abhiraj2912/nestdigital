import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee-log',
  templateUrl: './add-employee-log.component.html',
  styleUrls: ['./add-employee-log.component.css']
})
export class AddEmployeeLogComponent {

  empCode=""
  date=""
  entryTime=""
  exitTime=""

  constructor(private api:ApiService){}

  readValues=()=>{

    let iddata:any={"empCode":this.empCode}
    this.api.fetchId(iddata).subscribe(
      (response:any)=>{
        if (response.status=="success") {
          let empId=response.id
          console.log(empId)
          let data:any={"empId":empId,"date":this.date,"entryTime":this.entryTime,"exitTime":this.exitTime}
            console.log(data)

          this.api.addEmployeeLog(data).subscribe(
          (response:any)=>{
          console.log(response)
          if (response.status=="success") {
          alert("Employee log Added Successfully")
          this.empCode=""
          this.date=""
          this.entryTime=""
          this.exitTime=""
          } else {
            alert("Something went wrong")
          }
      }
    )
        } else {
          alert("Invalid EMPCOde")
        }
      }
    )


  }

}
