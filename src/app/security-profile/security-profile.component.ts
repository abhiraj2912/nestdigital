import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-profile',
  templateUrl: './security-profile.component.html',
  styleUrls: ['./security-profile.component.css']
})
export class SecurityProfileComponent {

  userID:any=""
   data:any=[]
  constructor(private api:ApiService){
    this.userID=localStorage.getItem("userInfo")
    let data:any={"id":this.userID}
    api.securityProfile(data).subscribe(
      (response:any)=>{
        this.data=response
      }
    )
  }

}
