import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, ApiResponseSingle } from 'src/interfaces/apiData.interfaces';
import { bodyTicket, Comentario } from 'src/interfaces/tickets.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private myAppUrl : string
  private myApiUrl: string

  constructor( private http : HttpClient) {
    this.myAppUrl = "http://localhost:3000/"
    this.myApiUrl = "api/v1/tickets/"
  }

  getTickets(headers?: HttpHeaders): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.myAppUrl}${this.myApiUrl}`, { headers })
  }

  getTicketForId(id: string, headers?: HttpHeaders): Observable<ApiResponseSingle> {
    return this.http.get<ApiResponseSingle>(`${this.myAppUrl}${this.myApiUrl}${id}`, { headers })
  }

  getTicketsForRut(rut: string, headers?: HttpHeaders): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.myAppUrl}${this.myApiUrl}/rut/${rut}`, { headers })
  }

  createComentary(comentario: Comentario, headers?: HttpHeaders): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}/comentary`, comentario, {headers})
  }


createTicket(bodyTicket: bodyTicket, headers?: HttpHeaders, ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.myAppUrl}${this.myApiUrl}`, bodyTicket, {headers})
  } 

  updateTicket(id: string, estado: string, headers?: HttpHeaders): Observable<ApiResponse> {
    const body = { estado }
    return this.http.put<ApiResponse>(`${this.myAppUrl}${this.myApiUrl}${id}`, body, { headers })
  } 

  deleteTicket(): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.myAppUrl}${this.myApiUrl}`)
  }
}
