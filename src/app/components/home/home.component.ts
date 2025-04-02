import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  selectedRole: string ='';

  constructor( private masterSrv : MasterServiceService){}

  onRoleChange(role: string){
    debugger;
    this.masterSrv.onRoleChange$.next(role)
    // this.masterSrv.role$.next(role)
  }

}
