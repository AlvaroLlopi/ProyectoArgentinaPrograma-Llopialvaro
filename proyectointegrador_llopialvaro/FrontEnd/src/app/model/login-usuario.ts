import { distanceAndSkiddingToXY } from "@popperjs/core/lib/modifiers/offset";

export class LoginUsuario {
    nombreUsuario:string;
    password:string;

    constructor(nombreUsuario: string, password: string){
        this.nombreUsuario=nombreUsuario;
        this.password=password;
    }
}
