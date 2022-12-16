import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-vistor-log',
  templateUrl: './add-vistor-log.component.html',
  styleUrls: ['./add-vistor-log.component.css']
})
export class AddVistorLogComponent {

  name=""
  purpose=""
  whomToMeet=""
  date=""
  entryTime=""
  exitTime="Not Available"

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"name":this.name,"purpose":this.purpose,"whomToMeet":this.whomToMeet,"date":this.date,"entryTime":this.entryTime,"exitTime":this.exitTime}
    console.log(data)

    this.api.addVistorLog(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Vistor Log Added Successfully")
          this.name=""
          this.purpose=""
          this.whomToMeet=""
          this.date=""
          this.entryTime=""
      } else {
        alert("Something went wrong")
      }
      }
    )

  }

}
