import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { LoginI } from 'src/app/models/login.interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(

    private router:Router, private api:ApiService, private fb:FormBuilder
  ){
    this.loginForm=this.fb.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required]
    })
  }

  onLogin(form:LoginI){
   this.api.loginByEmail(form).subscribe(data =>{
    if(data){
      this.router.navigate(['home'])
      Swal.fire({
        icon: "success",
        title: "Has ingresado",
        showConfirmButton: false,
        timer: 1500
      });
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Usuario o contraseña incorrecto",
        footer: '<a href="">Intenta nuevamente</a>'
      });
    }
   })
  }
}