import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ReservarPasajeComponent } from './reservar-pasaje/reservar-pasaje.component';
import { ListarReservasComponent } from './listar-reservas/listar-reservas.component';

export const routes: Routes = [
    {path: 'reservar', component: ReservarPasajeComponent},
    {path: 'listar', component: ListarReservasComponent}
];
