import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api/api.service';
import { prediccionI } from 'src/app/models/prediccion.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent {
  prediccionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router:Router
  ) {
    this.prediccionForm = this.fb.group({
      edad:['',Validators.required],
      locacion:['',Validators.required],
      tamaño:['',Validators.required],
      descuento:['',Validators.required],
      cod_promocion:['',Validators.required],
      color:['',Validators.required],
      temporada:['',Validators.required],
      compras_previas:['',Validators.required]
    })
  }
  postForm(form:prediccionI){
    this.api.postPrediccion(form).subscribe(data =>{
      if(data){
        Swal.fire({
          icon: "success",
          title: "Registro Exitoso",
          text: "El valor de prediccion para saber si tiene una suscribcion es: "+ data,
          showConfirmButton: false,
          timer: 3000
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
