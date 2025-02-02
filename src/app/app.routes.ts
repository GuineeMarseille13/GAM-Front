import { Routes } from "@angular/router";

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
];