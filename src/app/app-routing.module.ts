import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { RetryComponent } from './components/retry/retry.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"home",
    pathMatch:"full"
  },

  {
    path:"home",
    component:HomeComponent
  },
  
  {
    path:"home",
    component:HomeComponent,
    children:[
      {
        path:"debounce-time",
        component:DebounceTimeComponent
      },
      {
        path:"rxjs-operators",
        component:RxjsOperatorsComponent
      },
      {
        path:"combine-latest",
        component:CombineLatestComponent
      },
      {
        path:"retry",
        component:RetryComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
