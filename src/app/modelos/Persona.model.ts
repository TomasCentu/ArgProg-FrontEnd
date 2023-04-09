export class Persona {
  id?: number;
  nombre?: String;
  cargo?: String;
  foto?: String;
  sobreMi?: String;
  banner?: String;
  github?: String;
  linkedin?: String;
  cv?: String;

  constructor(nombre?: String, cargo?: String, foto?: String,
    sobreMi?: String, banner?: String, linkedin?: String, github?: String, cv?: String) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.foto = foto;
    this.sobreMi = sobreMi;
    this.banner = banner;
    this.github = github;
    this.linkedin = linkedin;
    this.cv = cv;
  }
}
