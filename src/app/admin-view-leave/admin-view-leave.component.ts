import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-view-leave',
  templateUrl: './admin-view-leave.component.html',
  styleUrls: ['./admin-view-leave.component.css']
})
export class AdminViewLeaveComponent {

  leaveData:any=[]
  constructor(private api:ApiService){
    api.adminViewLeave().subscribe(
      (response:any)=>{
        this.leaveData=response
      }
    )
  }

}
