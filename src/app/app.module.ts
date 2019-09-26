import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


/* Rutas */
import { app_routing } from './app.routes';


/* Servicios */
import { HeroesService } from './service/HeroesService';


/* Componentes */
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/shader/navbar/navbar.component';
import { HomeComponent } from './componets/home/home.component';
import { HeroesComponent } from './componets/heroes/heroes.component';
import { FolderComponent } from './componets/folder/folder.component';
import { HeroeComponent } from './componets/heroe/heroe.component';
import { SearchComponent } from './componets/shader/search/search.component';
import { TarjetaComponent } from './componets/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    FolderComponent,
    HeroeComponent,
    SearchComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
