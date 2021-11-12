import { Injectable } from '@angular/core';

@Injectable()

//Servicio dashboard

export class dashboardService {
//Servicio Ventas
    private ventas:Venta[]=[
        {
            nombre: "Elite admin",
            estado:"SALE",
            fecha:"Abril 18, 2021",
            precio: 24
        },
        {
            nombre: "Marco Medina ",
            estado:"TAX",
            fecha:"Abril 20, 2021",
            precio: -24
        },
        {
            nombre: "Luis Ayaviri",
            estado:"MEMBER",
            fecha:"Abril 23, 2021",
            precio: 64
        }
    ];
    getVentas():Venta[]{
        return this.ventas;
    }

//Servicio Comentarios Recientes
    private comentarios:Comentario[]=[
        {
            nombre: "James Anderson",
            estado: "Pending",
            mensaje:"Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            fecha:"Abril 14, 2021",
            foto:"../../assets/plugins/images/users/varun.jpg"
        },
        {
            nombre: "Marco Medina",
            estado: "Approved",
            mensaje:"Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            fecha:"Abril 15, 2021",
            foto:"../../assets/plugins/images/users/genu.jpg"
        },
        {
            nombre: "Luis Ayaviri",
            estado: "Rejected",
            mensaje:"Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries.",
            fecha:"Abril 16, 2021",
            foto:"../../assets/plugins/images/users/ritesh.jpg"
        }
    ];
    getComentarios():Comentario[]{
        return this.comentarios;
    }

//servicio Charlas
    private charlas:Charla[]=[
        {
        nombre: "Varun Dhavan",
        estado:"online",
        foto:"../../assets/plugins/images/users/varun.jpg"
        },
        {
        nombre: "Genelia Deshmukh",
        estado:"away",
        foto:"../../assets/plugins/images/users/genu.jpg"
        },
        {
        nombre: "Luis Ayaviri",
        estado:"busy",
        foto:"../../assets/plugins/images/users/ritesh.jpg"
        },
        {
        nombre: "Marco Medina",
        estado:"offline",
        foto:"../../assets/plugins/images/users/arijit.jpg"
        },
        {
        nombre: "Govinda Star",
        estado:"online",
        foto:"../../assets/plugins/images/users/govinda.jpg"
        },
        {
        nombre: "John Abraham",
        estado:"online",
        foto:"../../assets/plugins/images/users/hritik.jpg"
        }
    ];
    getCharlas():Charla[]{
        return this.charlas;
    }

    constructor(){
    }

    
}

export interface Venta{
    nombre: string;
    estado: string;
    fecha: string;
    precio: number;
};

export interface Comentario{
    nombre: string;
    estado: string;
    mensaje: string;
    fecha: string;
    foto: string
};
export interface Charla{
    nombre: string;
    estado: string;
    foto: string;
};