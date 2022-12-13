import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  empCode=""
  name=""
  designation=""
  salary=""
  dob=""
  address=""
  email=""
  phone=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"salary":this.salary,"dob":this.dob,"address":this.address,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password}
    console.log(data)

    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Employee added Successfully")
          this.empCode=""
          this.name=""
          this.designation=""
          this.salary=""
          this.dob=""
          this.address=""
          this.phone=""
          this.email=""
          this.username=""
          this.password=""
      } else {
        alert("Something went wrong")
      }
      }
    )

  }

}
