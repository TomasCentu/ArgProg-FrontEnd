export class Persona {
  id?: number;
  nombre: String;
  cargo: String;
  img: String;
  banner: String;
  sobreMi: String;

  estudios: number[];
  experiencias: number[];
  habilidades: number[];
  proyectos: number[];

  constructor(nombre: String, cargo: String, img: String, banner: String, sobreMi: String,
  estudios: number[], experiencias: number[], habilidades: number[], proyectos: number[])
  {
    this.nombre = nombre;
    this.cargo = cargo;
    this.img = img;
    this.banner = banner;
    this.sobreMi = sobreMi;

    this.estudios = estudios;
    this.experiencias = experiencias;
    this.habilidades = habilidades;
    this.proyectos = proyectos;
  }
}
