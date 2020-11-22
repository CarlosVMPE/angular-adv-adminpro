import { Hospital } from 'src/app/models/hospital.model';

export interface MedicoUser {
    nombre: string;
    _id: string;
    img?: string;
}


export class Medico {
    constructor(
        public usuario?: MedicoUser,
        public hospital?: Hospital,
        public _id?: string,
        public nombre?: string,
        public img?: string,
    ) { }
}
