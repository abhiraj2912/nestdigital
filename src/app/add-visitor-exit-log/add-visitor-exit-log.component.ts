import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-visitor-exit-log',
  templateUrl: './add-visitor-exit-log.component.html',
  styleUrls: ['./add-visitor-exit-log.component.css']
})
export class AddVisitorExitLogComponent {

  searchData:any=[]

  constructor(private api:ApiService){}

  name="" 
  exitTime=""
  
  readValues=()=>{

    let data ={"name":this.name}

  this.api.visLogByName(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("No log Found")
      } else {
        this.searchData=response
      }
    }
  )
  }

  addExitLog=(id:any)=>{
    let data:any={"id":id,"exitTime":this.exitTime}

    this.api.securityVisitorExit(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Exit Log Added")
          window.location.reload()
        }
        else{
          alert("Something went Wrong")
        }
      }
    )
  }


}
