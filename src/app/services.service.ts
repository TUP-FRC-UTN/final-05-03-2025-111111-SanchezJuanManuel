import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from './models/service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private readonly http: HttpClient = inject(HttpClient)
  private readonly url: string = "https://679b8dc433d31684632448c9.mockapi.io/services";

  getServices(): Observable<Service[]> {
      return this.http.get<Service[]>(this.url);
    }
}
