import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from './models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly http: HttpClient = inject(HttpClient)
  private readonly url: string = "https://671fe287e7a5792f052fdf93.mockapi.io/reservations";

  getReservations(): Observable<Reservation[]> {
      return this.http.get<Reservation[]>(this.url);
    }

    postBooking(reservation: Reservation): Observable<Reservation> {
      return this.http.post<Reservation>(this.url, reservation);
    }
  }
