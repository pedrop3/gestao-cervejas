import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { CervejasComponent } from './components/cervejas/cervejas.component';
import { FormsModule } from '@angular/forms';
import { CervejasService } from './services/cervejas.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { CervejaApi } from './cerveja-api';


@NgModule({
  //Declaração dos Components
  declarations: [
    AppComponent,
    CervejasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CervejaApi)
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
