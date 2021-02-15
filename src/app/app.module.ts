import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactoComponent } from './blog/pages/contacto/contacto.component';
import { BlogesComponent } from './blog/pages/bloges/bloges.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './blog/pages/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    BlogesComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
