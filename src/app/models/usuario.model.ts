import { environment } from 'src/environments/environment';

const base_url = environment.base_url;
export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password?: string,
        public google?: string,
        public img?: string,
        public role?: string,
        public uid?: string) {

    }

    get imagenUrl() {
        if (this.img && this.img.includes('https')) {
            return this.img;
        }
        // /uploads/medicos/f05e9f85-a102-4caa-8e46-4a5ccd899726.jpg
        if (this.img) {
            return `${base_url}/uploads/usuarios/${this.img}`;
        } else {
            return `${base_url}/uploads/usuarios/no-image}`;
        }
    }
}
