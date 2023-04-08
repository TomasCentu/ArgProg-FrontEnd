export class Estudios {
  id? :number;
  nombre? :String;
  descripcion? :String;
  foto? :String;

  constructor (nombre? :String, descripcion? :String, foto? :String) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.foto = foto;
  }
}
