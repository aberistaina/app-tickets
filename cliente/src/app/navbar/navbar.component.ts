import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menu: boolean = false
  userData: any = null
  isLoggedIn: boolean = false;
  constructor(private router: Router, private _authService: AuthService) {}
  
  ngOnInit(): void {
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
    });
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  logout(){
    this._authService.logout()
    this.router.navigate(["/"])
  }

  toggleMenu(){
    this.menu = !this.menu
    console.log(this.menu)
  }
}
