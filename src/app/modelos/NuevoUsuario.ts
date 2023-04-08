export class NuevoUsuario {
  id ?:number;
  nombre ?:string;
  pass ?:string;
  modo :string[] = [];
  authorities !: string[];

  constructor(nombre :string, pass :string) {
    this.nombre = nombre;
    this.pass = pass;
  }
}
