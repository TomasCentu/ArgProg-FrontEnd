import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyDatosComponent } from './componentes/body-datos/body-datos.component';
import { FormEstComponent } from './componentes/body-datos/form-est/form-est.component';
import { FormExpComponent } from './componentes/body-datos/form-exp/form-exp.component';
import { FormHabComponent } from './componentes/body-datos/form-hab/form-hab.component';
import { FormPersonaComponent } from './componentes/body-datos/form-persona/form-persona.component';
import { FormProComponent } from './componentes/body-datos/form-pro/form-pro.component';
import { BodyComponent } from './componentes/body/body.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'login', component:  LoginComponent},
  {path: 'inicio', component:  BodyComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'forms', component: BodyDatosComponent, children : [
    {path : 'persona', component: FormPersonaComponent},
    {path : 'estudio', component: FormEstComponent},
    {path : 'experiencia', component: FormExpComponent},
    {path : 'proyecto', component: FormProComponent},
    {path : 'habilidad', component: FormHabComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
