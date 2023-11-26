import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './plantillas/home/home.component';
import { RegistroComponent } from './plantillas/registro/registro.component';
import { LoginComponent } from './vistas/login/login.component';
import { DashboardComponent } from './plantillas/dashboard/dashboard.component';
import { PrediccionComponent } from './plantillas/prediccion/prediccion.component';
import { AnalisisComponent } from './plantillas/analisis/analisis.component';


const routes:Routes=[
  {path:'',component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'home', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'prediccion', component:PrediccionComponent},
  {path:'analisis', component:AnalisisComponent}
]
@NgModule({
 
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,]
