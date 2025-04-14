import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../app/pages/main/main.routes').then((r) => r.routes),
  },
  {
    path: 'evenements-passes/voir-plus-photo',
    loadComponent: () =>
      import('../app/pages/voir-plus-photo/voir-plus-photo.component').then(
        (c) => c.VoirPlusPhotoComponent
      ),
  },
  {
    path: 'evenement',
    loadComponent: () =>
      import('../app/pages/poles/evenementiel/evenementiel.component').then(
        (p) => p.EvenementielComponent
      ),
  },
  {
    path: 'administratif',
    loadComponent: () =>
      import('../app/pages/poles/administratif/administratif.component').then(
        (p) => p.AdministratifComponent
      ),
  },
  {
    path: 'hebergement',
    loadComponent: () =>
      import('../app/pages/poles/hebergement/hebergement.component').then(
        (p) => p.HebergementComponent
      ),
  },
  {
    path: 'nos-valeurs',
    loadComponent: () =>
      import('../app/pages/nos-valeurs/nos-valeurs.component').then(
        (c) => c.NosValeursComponent
      ),
  },
];
