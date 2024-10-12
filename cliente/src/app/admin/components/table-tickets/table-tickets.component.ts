import { Component } from '@angular/core';
import { TicketsService } from 'src/app/tickets.service';
import { Tickets } from 'src/interfaces/tickets.interface';
import { HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-table-tickets',
  templateUrl: './table-tickets.component.html',
  styleUrls: ['./table-tickets.component.css']
})
export class TableTicketsComponent {

  tickets: Tickets[] = []
  token: string | null = null
  userData: any = null

  constructor(private _ticketService : TicketsService, private _authService: AuthService){

  }



  ngOnInit(): void{
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.token = isAuthenticated ? this._authService.getToken() : null;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
    });
    this.getTickets()
    
  }

  getTickets(){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
  });
    this._ticketService.getTickets(headers).subscribe((response)=>{
      if (response.data) {
      this.tickets = response.data
    } else {
      this.tickets = []
    }
    })
  }

}
