import { Component } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css']
})
export class RxjsOperatorsComponent {

  currentRole: string = '';
  admins: any[] = [];
  regularUsers: any[] = [];

  constructor(private masterSrv: MasterServiceService){
    masterSrv.onRoleChange$.subscribe((role:string)=>{
      // debugger;
      this.currentRole = role;
    })    
  }

  ngOnInit() {
    this.masterSrv.getAdmins().subscribe({
      next: (admins) => this.admins = admins,
      error: (error) => console.error('Error fetching admins', error),
      complete: () => console.log('Admins fetched successfully')
    });
    
    this.masterSrv.getRegularUsers().subscribe({
      next: (users) => this.regularUsers = users,
      error: (error) => console.error('Error fetching regular users', error),
      complete: () => console.log('Regular users fetched successfully')
    });
    

  }
}
