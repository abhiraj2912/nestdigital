import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-security',
  templateUrl: './add-security.component.html',
  styleUrls: ['./add-security.component.css']
})
export class AddSecurityComponent {

  name=""
  email=""
  phone=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"name":this.name,"email":this.email,"phone":this.phone,"username":this.username,"password":this.password}
    console.log(data)

    this.api.addSecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Security added Successfully")
          this.name=""
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
