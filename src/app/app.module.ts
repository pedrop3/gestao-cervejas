import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CervejasComponent } from './components/cervejas/cervejas.component';
import { FormsModule } from '@angular/forms';
import { CervejasService } from './services/cervejas.service';


@NgModule({
  //Declaração dos Components
  declarations: [
    AppComponent,
    CervejasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  //Declação dos Services
  providers: [CervejasService],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
