export class event {
    Nombre: string;
    Descripcion: string;
    Fecha: Date;
    Estado: string;
    Id: number;


    constructor(Nombre: string, Descripcion: string, Estado: string, Id: number) {
        this.Nombre = Nombre;
        this.Descripcion = Descripcion;
        this.Fecha = new Date();
        this.Estado = Estado;
        this.Id = Id;
    }
}