import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonComponent } from './people/person/person.component';
import { FormComponent } from './people/form/form.component';
import { LoggingService } from './LoggingService.service';
import { PeopleService } from './people.service';
import { AppRoutingModule } from './app-routing.module';
import { PeopleComponent } from './people/people.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    FormComponent,
    PeopleComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  //Al registrar el servicio aqui todos los componentes comparten la misma instancia.
  providers: [LoggingService, PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
