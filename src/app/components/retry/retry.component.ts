import { Component, OnInit } from '@angular/core';
import { MasterServiceService } from 'src/app/services/master-service.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit{

  constructor(
   private masterSrv: MasterServiceService
  ){}

  post:any;
  fetching: boolean = false;
  status = 'No Data';

  ngOnInit(): void {
  }

  fetchDetails() {
    this.fetching = true;
    this.masterSrv.getPost().subscribe({
      next: (res:any) => {
        // console.log(res);
        this.post = res;
        this.status = 'Data Fetched'
        this.fetching = false;
      },
      error: (err:any) => {
        
        console.log('error:',err);
        this.status = 'Problem Fetching Data'
        this.fetching = false;
      }
    });
  }

  

}
