import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { ContactoComponent } from './blog/pages/contacto/contacto.component';
import { BlogesComponent } from './blog/pages/bloges/bloges.component';
import { BlogComponent } from './blog/components/blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    BlogesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
