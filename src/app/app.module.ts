import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

//rutas
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContactoComponent } from './blog/pages/contacto/contacto.component';
import { BlogesComponent } from './blog/pages/bloges/bloges.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './blog/pages/home/home.component';
import { ItemComponent } from './blog/pages/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    BlogesComponent,
    BlogComponent,
    HomeComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
