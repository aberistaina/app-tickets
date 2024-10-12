import { Tickets } from "./tickets.interface";

export interface ApiResponse {
    code: number;
    message: string;
    data?: Tickets[]; 
}

export interface ApiResponseSingle {
    code: number;
    message: string;
    data?: Tickets; 
}

export interface UserApiResponse{
    code: number
    message: string
    usuario: {
        id: number
        nombre: string
        apellido: string
        email: string
        rut: string
        admin: boolean
    }
    token: string
}