
export interface HospitalUser {
    nombre?: string;
    _id?: string;
    img?: string;
}

export class Hospital {
    constructor(
        public usuario?: HospitalUser,
        public _id?: string,
        public nombre?: string,
        public img?: string,
    ) { }
}
