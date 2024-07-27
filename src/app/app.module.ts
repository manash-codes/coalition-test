import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { DiagnosticHistoryComponent } from './components/diagnostic-history/diagnostic-history.component';
import { PatientsInfoComponent } from './components/patients-info/patients-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsListComponent,
    DiagnosticHistoryComponent,
    PatientsInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
