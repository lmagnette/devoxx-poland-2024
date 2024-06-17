import { Routes } from '@angular/router';
import {DinoListComponent} from "./features/dino/components/dino-list/dino-list.component";
import {dinoResolver} from "./features/dino/resolvers/dino.resolver";
import {DinoDetailsComponent} from "./features/dino/components/dino-details/dino-details.component";

export const routes: Routes = [
  {
    path:'dinos',
    loadComponent: () => DinoListComponent
  },
  {
    path:'dinos/:id',
    loadComponent: () => DinoDetailsComponent,
    resolve:{
      dino: dinoResolver
    }
  },
  {
    path:'**',
    redirectTo:'dinos'
  }
];
