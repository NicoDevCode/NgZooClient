import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Nuevo modulo de admin


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { ParquesComponent } from './components/parques/parques.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { GuardarEmailComponent } from './moduloemail/components/guardar-email/guardar-email.component';
import { MostrarEmailComponent } from './moduloemail/components/mostrar-email/mostrar-email.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    ParquesComponent,
    TiendaComponent,
    GuardarEmailComponent,
    MostrarEmailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
