import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ModalImagenService {

  private ocultarModal: boolean = true;
  tipo: 'usuarios' | 'medicos' | 'hospitales';
  id: string;
  img: string;
  nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  get _ocultarModal() {
    return this.ocultarModal;
  }

  abrirModal(
    tipo: 'usuarios' | 'medicos' | 'hospitales',
    id: string,
    img: string = 'no-img'
  ) {
    this.ocultarModal = false;
    this.tipo = tipo;
    this.id = id;

    if (img.includes('https')) {
      this.img = img;
    } else {
      this.img = `${base_url}/uploads/${tipo}/${img}`;
    }

  }

  cerrarModal() {
    this.ocultarModal = true;
  }

  constructor() { }
}
