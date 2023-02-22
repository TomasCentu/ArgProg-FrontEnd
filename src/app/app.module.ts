import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BodyComponent } from './componentes/body/body.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { NavbarComponent } from './componentes/header/navbar/navbar.component';
import { PersonaComponent } from './componentes/header/persona/persona.component';
import { ExperienciasComponent } from './componentes/body/experiencias/experiencias.component';
import { ProyectosComponent } from './componentes/body/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/body/habilidades/habilidades.component';
import { BodyDatosComponent } from './componentes/body-datos/body-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    PersonaComponent,
    ExperienciasComponent,
    ProyectosComponent,
    HabilidadesComponent,
    BodyDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
