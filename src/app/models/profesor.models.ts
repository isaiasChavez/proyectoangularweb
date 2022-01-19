export class Profesor{
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    nivel: number;
    grado: string;
    correoProfesor: string;
    password: string;
    idCarrera:number;
    idTipoProfesor:number;
    constructor() {
    this.nombres='';
    this.apellidoPaterno='';
    this.apellidoMaterno='';
    this.grado='';
    this.nivel=0;
    this.correoProfesor = '';
    this.password = '';
    this.idCarrera=0;
    this.idTipoProfesor=0;
    }
}