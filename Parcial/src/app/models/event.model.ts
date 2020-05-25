export class event{
    Nombre:string;
    Descripcion:string;
    Fecha:Date;
    Estado:string;


    constructor(Nombre:string, Descripcion:string, Estado:string){
        this.Nombre=Nombre;
        this.Descripcion=Descripcion;
        this.Fecha= new Date();        
        this.Estado=Estado;
    }
}