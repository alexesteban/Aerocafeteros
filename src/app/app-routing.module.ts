import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: 'intro',
    component: IntroComponent,
    data: { title: 'Intro' }
  },
  { path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'nosotros',
    component: NosotrosComponent,
    data: { title: 'Nosotros' }
  },
  { path: 'servicios',
    component: ServiciosComponent,
    data: { title: 'Servicios' }
  },
  { path: 'contacto',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  },
  { path: '',
    redirectTo: '/intro',
    pathMatch: 'full'
  },
  { path: '**',
    redirectTo: '/intro',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
