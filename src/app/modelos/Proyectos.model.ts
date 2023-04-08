export class Proyectos {
  id?: number;
  nombre?: String;
  foto?: String;
  demo?: String;
  repo?: String;
  descripcion?: String;

  constructor(nombre?: String, foto?: String, demo?: String,
    repo?: String, descripcion?: String) {
    this.nombre = nombre;
    this.foto = foto;
    this.demo = demo;
    this.repo = repo;
    this.descripcion = descripcion;
  };
}
