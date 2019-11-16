import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AnimalsComponent} from './components/animals/animals.component';
import {KeepersComponent} from './components/keepers/keepers.component';
import {TiendaComponent} from './components/tienda/tienda.component';
import {ContactComponent} from './components/contact/contact.component';

const routes: Routes = [
  {path: 'admin-panel',
    loadChildren: './moduloadmin/admin.module#AdminModule'
  },
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'animales', component: AnimalsComponent},
  {path: 'cuidadores', component: KeepersComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'contacto', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
