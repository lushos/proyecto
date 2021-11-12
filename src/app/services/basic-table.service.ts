import { Injectable } from '@angular/core';

@Injectable()

//Servicios para basic-table

export class tableService {

    //Servicio para la tabla
    private users:User[]=[
        {
            id:1,
            nombre:"Deshmukh",
            apellido:"Prohaska",
            usuario:"@Genelia",
            cargo:"admin"
        },
        {
            id:1,
            nombre:"Luis",
            apellido:"Gaylord",
            usuario:"@Luis",
            cargo:"member"
        },
        {
            id:1,
            nombre:"Sanghani",
            apellido:"Gusikowski",
            usuario:"@Govinda",
            cargo:"developer"
        },
        {
            id:1,
            nombre:"Marco",
            apellido:"Medina",
            usuario:"@Marco",
            cargo:"supporter"
        },
        {
            id:1,
            nombre:"Joshi",
            apellido:"Hickle",
            usuario:"@Maruti",
            cargo:"member"
        },
        {
            id:1,
            nombre:"Nigam",
            apellido:"Eichmann",
            usuario:"@Sonu",
            cargo:"supporter"
        },
    ];

    getUsers():User[]{
        return this.users;
    }

    constructor(){

    }
}

export interface User{
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    cargo: string;
}