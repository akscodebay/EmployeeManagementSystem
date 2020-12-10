import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './data.service';
import { FilterPipe } from './filter.pipe';

import { Globals } from './globals';




@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, InMemoryWebApiModule.forRoot(DataService), HttpClientModule],
  declarations: [AppComponent, routingComponents, FilterPipe],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
