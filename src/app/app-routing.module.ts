import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';


import { BlogesComponent } from './blog/pages/bloges/bloges.component';
import { ContactoComponent } from './blog/pages/contacto/contacto.component';




const app_routes: Routes = [
    { path: '', component: BlogesComponent},
    { path: 'contacto', component: ContactoComponent},


];

@NgModule({

})
export class AppRoutingModule {

}