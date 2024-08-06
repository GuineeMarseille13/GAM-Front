import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../app/pages/main/main.component').then(p => p.MainComponent)
    }
]