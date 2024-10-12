import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TicketsService } from 'src/app/tickets.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent {

  isLogged:boolean = false
  userData: any = null
  formUser: FormGroup

  
  constructor(private _authService: AuthService, private _ticketService: TicketsService, private fb: FormBuilder, private router:Router ){

    this.formUser = this.fb.group({
      "nombre": [{value: "", disabled:true}, Validators.required],
      "apellido":[{value: "", disabled:true}, Validators.required],
      "rut":[{value: "", disabled:true}, Validators.required],
      "asunto":["", Validators.required],
      "descripcion":["", Validators.required],
  
    })
  }

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLogged = isAuthenticated;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
    });
    if (this.userData) {
     
      this.formUser.patchValue({
        nombre: this.userData.nombre,
        apellido: this.userData.apellido,
        rut: this.userData.rut
      })
    }
    
  }

  createTicket(){
    this._ticketService.createTicket(this.formUser.getRawValue() as { nombre: string, apellido: string, rut: string, asunto: string, descripcion:string }).subscribe((response)=>{
      if(response.code == 201){
        Swal.fire({
          title: response.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        this.router.navigate(["/profile"])
        
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
