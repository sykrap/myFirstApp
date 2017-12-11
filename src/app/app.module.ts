import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SeoyoungComponent } from './seoyoung/seoyoung.component';


@NgModule({
  declarations: [
    AppComponent,
    SeoyoungComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
