import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/pages/main/main.component').then((p) => p.MainComponent),
  },
  {
    path: 'evenements-passes',
    loadComponent: () =>
      import('../app/pages/evenements-passes/evenements-passes.component').then(
        (p) => p.EvenementsPassesComponent
      ),
  },
  {
    path: 'notre-association',
    loadComponent: () =>
      import('../app/pages/notre-association/notre-association.component').then(
        (p) => p.NotreAssociationComponent
      ),
  },
];