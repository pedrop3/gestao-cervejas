import {NgModule} from '@angular/core';
import { CervejasComponent } from './cervejas.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
      CervejasComponent
    ],
    imports: [
        BrowserModule 
    ],
    providers: [],
    exports: [CervejasComponent]
  })
  export class CervejaModule {
  }
  