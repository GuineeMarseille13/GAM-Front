import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../main/main.component').then((p) => p.MainComponent),
  },
  {
    path: 'evenements-passes',
    loadComponent: () =>
      import('../evenements-passes/evenements-passes.component').then(
        (c) => c.EvenementsPassesComponent
      ),
  },
  {
    path: 'notre-association',
    redirectTo: 'notre-association/President', // Redirige vers l'onglet par défaut
    pathMatch: 'full',
  },
  {
    path: 'notre-association/:tabItem',
    loadComponent: () =>
      import('../notre-association/notre-association.component').then(
        (p) => p.NotreAssociationComponent
      ),
  },
];
