import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports: [ 
  	BrowserModule
],
  declarations: [ 
  	AppComponent
],
  bootstrap: [ AppComponent ]
})
export class AppModule {}