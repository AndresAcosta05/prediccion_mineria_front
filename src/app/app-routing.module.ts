import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './plantillas/home/home.component';
import { RegistroComponent } from './plantillas/registro/registro.component';
import { LoginComponent } from './vistas/login/login.component';


const routes:Routes=[
  {path:'registro',component:RegistroComponent},
  {path:'',component:LoginComponent},
  {path:'home',component:HomeComponent}
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
