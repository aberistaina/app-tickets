import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Validation } from '../../validations';
import { AuthService } from 'src/app/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formUserRegister:FormGroup = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    email: new FormControl(''),
    telefonoCodigo: new FormControl(''),
    telefono: new FormControl(''),
    rut:new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  })

  submitted = false;

  constructor( private fb: FormBuilder, private router: Router, private _authService: AuthService){

  }
  
  ngOnInit():void{
    this.formUserRegister = this.fb.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telefonoCodigo: ["+56", Validators.required],
      telefono: ["", [Validators.required, Validators.minLength(9),Validators.maxLength(9), Validation.phoneValidation()]],
      rut:["", [Validators.required, Validation.rutValidator()]],
      password:["", Validators.required],
      confirmPassword:["", [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
    },
    {
      validators: [Validation.matchPassword('password', 'confirmPassword')],
    }
  )
    this.formUserRegister.get('telefono')?.valueChanges.subscribe(() => {
      console.log(this.formUserRegister.get('telefono')?.errors);
  });
  }

  get f(): { [key: string]: AbstractControl} {
    return this.formUserRegister.controls;
  }

  onSubmit(): void {
    const telefonoCompleto = `${this.formUserRegister.get('telefonoCodigo')?.value}${this.formUserRegister.get('telefono')?.value}`;
    

    const formData = {
      nombre: this.formUserRegister.get('nombre')?.value,
      apellido: this.formUserRegister.get('apellido')?.value,
      email: this.formUserRegister.get('email')?.value,
      telefono: telefonoCompleto, 
      rut: this.formUserRegister.get('rut')?.value,
      password: this.formUserRegister.get('password')?.value
    };
    
    this._authService.createUser(formData).subscribe((response)=>{

      if(response.code == 201){
        Swal.fire({
          title: response.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(["/login"])
      }else{
        Swal.fire({
          title: response.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }

    })
  }
}
