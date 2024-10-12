import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoggedIn: boolean = false;

  constructor(private _authService : AuthService, private fb: FormBuilder, private router: Router){

  }

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated;
    });
  }

  formUser = this.fb.group({
    "email": ["", [Validators.required, Validators.email]],
    "password":["", Validators.required]
  })

  loginUser() {
    if (this.formUser.valid) {
      this._authService.loginUser(this.formUser.getRawValue() as { email: string, password: string }).subscribe((response) => {
        if(response.code == 200){
          this._authService.saveSession(response.token, response.usuario)

            if(response.usuario.admin){
              this.router.navigate(["/admin"])
            }else{
              this.router.navigate(["/profile"])
            }
          

          Swal.fire({
            title: response.message,
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }else{
          Swal.fire({
            title: response.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
        
      
      });
    }
  }
}
