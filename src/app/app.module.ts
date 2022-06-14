import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { UserpageComponent } from './userpage/userpage.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    UserpageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
