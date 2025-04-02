import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { MasterServiceService } from 'src/app/services/master-service.service';


@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit {

  searchControl = new FormControl('');
  results: any[] = [];
  currentRole: string = '';

  constructor(private masterSrv: MasterServiceService){
    masterSrv.onRoleChange$.subscribe((role:string)=>{
      this.currentRole = role
      // debugger;
    })    
  }

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap(query => {
          if (!query || query.trim() === '') {
            this.results = []; 
            return []; 
          }
          return this.masterSrv.search(query);
        })
      ).subscribe(data => this.results = data);
  }

}
