import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DebounceTimeComponent } from './components/debounce-time/debounce-time.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxjsOperatorsComponent } from './components/rxjs-operators/rxjs-operators.component';
import { CombineLatestComponent } from './components/combine-latest/combine-latest.component';
import { RetryComponent } from './components/retry/retry.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DebounceTimeComponent,
    RxjsOperatorsComponent,
    CombineLatestComponent,
    RetryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
