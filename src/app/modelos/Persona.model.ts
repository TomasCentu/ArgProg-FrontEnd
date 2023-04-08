export class Persona {
  id?: number;
  nombre?: String;
  cargo?: String;
  foto?: String;
  sobreMi?: String;
  banner?: String;

  constructor(nombre?: String, cargo?: String, foto?: String,
    sobreMi?: String, banner?: String) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.foto = foto;
    this.sobreMi = sobreMi;
    this.banner = banner;
  }
}
