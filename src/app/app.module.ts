import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './plantillas/footer/footer.component';
import { HomeComponent } from './plantillas/home/home.component';
import { NgIconsModule } from '@ng-icons/core';

import { heroUsers } from '@ng-icons/heroicons/outline';
import { RegistroComponent } from './plantillas/registro/registro.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { LoginComponent } from './vistas/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './plantillas/dashboard/dashboard.component';
import { PrediccionComponent } from './plantillas/prediccion/prediccion.component';
import { AnalisisComponent } from './plantillas/analisis/analisis.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    DashboardComponent,
    PrediccionComponent,
    AnalisisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ heroUsers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
