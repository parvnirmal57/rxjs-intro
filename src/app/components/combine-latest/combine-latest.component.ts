import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements AfterViewInit {

  names = ['Angular','Ado Dot Net MVC','SQL'];
  colors = ['red','purple','orange'];

  selectedName: string = '';
  selectedColor: string = '';

  @ViewChild('name')
  name!: ElementRef;
  @ViewChild('color')
  color!: ElementRef;

  


  ngAfterViewInit(): void {

     const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(map(event => event.target.value))

    // fromEvent<any>(this.name.nativeElement,'change').pipe(
    //   map(event => event.target.value)
    // ).subscribe(res=>{
    //   console.log(res)
    // })

    
    const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(map(event => event.target.value))
    
    // fromEvent<any>(this.color.nativeElement,'change').pipe(
    //   map(event => event.target.value)
    // ).subscribe(res=>{
    //   console.log(res)
    // })

   
    combineLatest([nameObs,colorObs]).subscribe(([name,color])=>{
      console.log(name,color)
      this.selectedName = name;
      this.selectedColor = color;
    })

    // combineLatest([nameObs, colorObs]).pipe(map((name, color)=>{
    //   console.log(name,color)
    //   }));
  }
} 
