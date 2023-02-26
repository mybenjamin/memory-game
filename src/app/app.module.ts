// Angular Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import {MatCardModule} from '@angular/material/card';

// App Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './presentational/card/card.component';
import { LandingComponent } from './container/landing/landing.component';
import { SignUpComponent } from './container/sign-up/sign-up.component';
import { CheckboxComponent } from './presentational/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LandingComponent,
    SignUpComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
