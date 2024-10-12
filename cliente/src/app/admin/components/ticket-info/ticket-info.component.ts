import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TicketsService } from 'src/app/tickets.service';
import { Comentario, Tickets } from 'src/interfaces/tickets.interface';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent {

  @ViewChild('comentariosContainer') comentariosContainer!: ElementRef
  ticket: Tickets | null = null;
  ticketId: string = ""
  nuevoComentario : string =""
  userData: any = null
  isLoggedIn: boolean = false;
  token: string | null = null
  private pollingInterval: any;

  constructor(private _ticketService : TicketsService, private _route: ActivatedRoute, private _authService: AuthService, private router: Router ) {
    this._route.params.subscribe(params => {
      this.ticketId = params["id"]
    })

  }

  ngOnInit(): void{
    this._authService.isAuthenticated$.subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated;
      this.token = isAuthenticated ? this._authService.getToken() : null;
      this.userData = isAuthenticated ? this._authService.getUserData() : null;
      this.getTicketId(this.ticketId)
      this.startPolling();
    });

    
  }

  getTicketId(id:string){
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
  });
    this._ticketService.getTicketForId(id, headers).subscribe((response)=>{
      if (response.data) {
      this.ticket = response.data
    } else {
      this.ticket = null
    }
    })  
  }

  enviarComentario(rut:string){

    if (!rut) {
      console.error("El usuario RUT no está definido");
      return; 
    }

    const comentario: Comentario = {
      ticket: Number(this.ticketId),
      comentario: this.nuevoComentario,
      rut
    }
      this._ticketService.createComentary(comentario).subscribe(()=>{
        this.getTicketId(this.ticketId)
      })

      this.nuevoComentario = ""
  }

  cerrarTicket(){
    
    const headers = new HttpHeaders({
      "Authorization": `Bearer ${this.token}`
  });
  const id = this.ticketId
  const estado:string = "Cerrado"
    this._ticketService.updateTicket(id,estado,headers).subscribe(()=>{
      this.getTicketId(id)
    })
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  private scrollToBottom(): void {
    if (this.comentariosContainer) {
      this.comentariosContainer.nativeElement.scrollTop = this.comentariosContainer.nativeElement.scrollHeight;
    }
  }

  startPolling() {
    this.pollingInterval = setInterval(() => {
      this.getTicketId(this.ticketId);
    }, 1000); 
  }
  
  ngOnDestroy() {

    clearInterval(this.pollingInterval);
  }

}
