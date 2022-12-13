import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-vistor-log',
  templateUrl: './view-vistor-log.component.html',
  styleUrls: ['./view-vistor-log.component.css']
})
export class ViewVistorLogComponent {

  searchData:any=[]

  constructor(private api:ApiService){
    api.viewVistorlog().subscribe(
      (response:any)=>{
        this.searchData=response
      }
    )
  }

  date=""
  
  readValues=()=>{

    let data ={"date":this.date}
  console.log(data)

  this.api.vistorLogByDate(data).subscribe(
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
}
