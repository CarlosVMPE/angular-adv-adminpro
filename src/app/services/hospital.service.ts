import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Hospital } from '../models/hospital.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(
    private http: HttpClient
  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    return {
      headers: {
        'x-token': this.token
      }
    };
  }

  cargarHospitales(desde: number = 0) {
    const url = `${base_url}/hospitales?desde=${desde}`;
    return this.http.get(url, this.headers)
      .pipe(
        delay(200),
        map(
          (res: { ok: boolean, hospitales: Hospital[], total: number }) => {
            return {
              hospitales: res.hospitales,
              total: res.total
            };
          })
      );
  }

  crearHospital(nombre: string) {
    const url = `${base_url}/hospitales`;
    return this.http.post(url, { nombre }, this.headers);
  }

  actualizarHospital(id: string, nombre: string) {
    const url = `${base_url}/hospitales/${id}`;
    return this.http.put(url, { nombre }, this.headers);
  }

  eliminarHospital(id: string) {
    const url = `${base_url}/hospitales/${id}`;
    return this.http.delete(url, this.headers);
  }


}
