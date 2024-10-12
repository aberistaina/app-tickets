import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {

  isLogged:boolean = false
  userData: any = null

  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLogged = isAuthenticated;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
    });
  }

  constructor(private _authService: AuthService){}

}
