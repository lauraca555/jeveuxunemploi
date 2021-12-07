import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { VariableComponent } from './variable/variable.component'
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes : Routes = [
  { path : 'var', component : VariableComponent },
  { path : '', component : MainComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    VariableComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
