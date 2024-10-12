import { Component } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { Tickets } from 'src/interfaces/tickets.interface';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent {

  tickets: Tickets[] = []
  rut:string = ""
  token: string | null = null
  userData: any = null

  constructor(private _ticketService : TicketsService, private _authService: AuthService, private router: Router){

  }

  ngOnInit(): void{

    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.token = isAuthenticated ? this._authService.getToken() : null;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
    });
    this.getTickets(this.userData.rut)
    
  }

  getTickets(rut:string){
    if(this.token){
      const headers = new HttpHeaders({
        "Authorization": `Bearer ${this.token}`
    });
    this._ticketService.getTicketsForRut(rut, headers).subscribe((response)=>{
      
      if (response.data) {
        
      this.tickets = response.data
    } else {
      this.tickets = []
    }
    })
    }else{
      this.router.navigate(["/"])
    } 
  }







}
