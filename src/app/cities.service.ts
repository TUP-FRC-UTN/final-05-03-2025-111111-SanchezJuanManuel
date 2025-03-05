import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './models/city';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private readonly http: HttpClient = inject(HttpClient)
  private readonly url: string = "https://679b8dc433d31684632448c9.mockapi.io/cities";

  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.url);
  }
}