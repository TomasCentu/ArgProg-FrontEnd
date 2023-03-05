import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { HeaderDatosComponent } from './componentes/header-datos/header-datos.component';
import { FormPersonaComponent } from './componentes/body-datos/form-persona/form-persona.component';
import { FormExpComponent } from './componentes/body-datos/form-exp/form-exp.component';
import { FormEstComponent } from './componentes/body-datos/form-est/form-est.component';
import { FormHabComponent } from './componentes/body-datos/form-hab/form-hab.component';
import { FormProComponent } from './componentes/body-datos/form-pro/form-pro.component';

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
    BodyDatosComponent,
    HeaderDatosComponent,
    FormPersonaComponent,
    FormExpComponent,
    FormEstComponent,
    FormHabComponent,
    FormProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
