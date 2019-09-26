import { Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './componets/home/home.component';
import {HeroesComponent} from './componets/heroes/heroes.component';
import {HeroeComponent} from './componets/heroe/heroe.component';
import { SearchComponent } from './componets/shader/search/search.component';

// tslint:disable-next-line:variable-name
const app_routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Heroes', component: HeroesComponent},
  {path: 'Search/:termino', component: SearchComponent},
  {path: 'Heroes/Heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full' , redirectTo: 'Home'}
];

// tslint:disable-next-line:variable-name
export const app_routing =  RouterModule.forRoot(app_routes);
