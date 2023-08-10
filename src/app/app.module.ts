
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { whoisService } from './whois.service';
import { AnalyseComponent } from './analyse/analyse.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AnalyseComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule ,
    FormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [whoisService],
  bootstrap: [AppComponent]
})
export class AppModule { }