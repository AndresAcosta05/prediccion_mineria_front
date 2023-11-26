import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroI } from 'src/app/models/registro.interface';
import { ApiService } from 'src/app/services/api/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  nuevoForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private api:ApiService,
    private router:Router
    ){
    this.nuevoForm=this.fb.group({
      document:['',Validators.required],
      name:['',Validators.required],
      second_name:['',Validators.required],
      lastname:['',Validators.required],
      second_lastname:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      us_user:['',Validators.required],
      us_password:['',Validators.required],
      })
  }

  postForm(form:RegistroI){
    this.api.postUsuarios(form).subscribe(data =>{
      if(data){
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          showConfirmButton: false,
          timer: 1500
        });
      }else{
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Regitro incorrecto",
          footer: '<a href="">Intenta nuevamente</a>'
        });
      }
    })
  }

  salir(){
    this.router.navigate(['home'])
  }
}

