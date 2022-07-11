import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule  } from 'ngx-bootstrap/accordion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxGraphModule } from '@swimlane/ngx-graph'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { GraphComponent } from './graph/graph.component';
import { AttackPatternComponent } from './attack-pattern/attack-pattern.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    AttackPatternComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGraphModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
