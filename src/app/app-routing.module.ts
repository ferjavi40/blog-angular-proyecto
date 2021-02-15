import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { ContactoComponent } from './blog/pages/contacto/contacto.component';
import { HomeComponent } from './blog/pages/home/home.component';
import { ItemComponent } from './blog/pages/item/item.component';
import { BlogesComponent } from './blog/pages/bloges/bloges.component';




const app_routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: 'blog', component: BlogesComponent},
    { path: 'item' , component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}