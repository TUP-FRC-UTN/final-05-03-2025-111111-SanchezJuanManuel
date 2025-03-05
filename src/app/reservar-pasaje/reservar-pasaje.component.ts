import { Component, inject, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { City } from '../models/city';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Service } from '../models/service';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-reservar-pasaje',
  imports: [ReactiveFormsModule],
  templateUrl: './reservar-pasaje.component.html',
  styleUrl: './reservar-pasaje.component.css'
})
export class ReservarPasajeComponent implements OnInit{


cities: City[] = [];
services: Service[] = [];


private readonly citiesService: CitiesService = inject(CitiesService);
private readonly servicesService: ServicesService = inject(ServicesService);


  subscription = new Subscription();

  ngOnInit(): void {
    this.loadCities();
    this.loadServices();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  form: FormGroup = new FormGroup({
    origenId: new FormControl('', [Validators.required]),
    destinoId: new FormControl('', [Validators.required]),
    fechaIda: new FormControl('',[Validators.required]),
    activityId: new FormControl('', [Validators.required]),
    serviceId: new FormControl('', [Validators.required]),
    documento: new FormControl('', [Validators.required, Validators.min(6)]),
    nombre: new FormControl('', [Validators.required, Validators.min(2)]),
    apellido: new FormControl('', [Validators.required, Validators.min(2)]),    
  });

  


  loadCities() {
    const getCities = this.citiesService.getCities().subscribe({
      next: (list: City[]) => {
        this.cities = list;
      },
      error: (err: any) => {
        alert("Error al cargar las ciudades")
      }
    })

    this.subscription.add(getCities);
  }

  loadServices() {
    const getServices = this.servicesService.getServices().subscribe({
      next: (list: Service[]) => {
        this.services = list;
      },
      error: (err: any) => {
        alert("Error al cargar los servicios")
      }
    })

    this.subscription.add(getServices);
  }

  save() {
    
  }
}




