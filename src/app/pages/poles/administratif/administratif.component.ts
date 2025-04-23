import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'administratif',
  standalone: true,
  imports: [NgClass, NgFor, AsyncPipe],
  templateUrl: './administratif.component.html',
  styleUrl: './administratif.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministratifComponent implements OnInit, OnDestroy {
  protected PAGE_TITLE = 'ACCOMPAGNEMENT ADMINISTRATIF';

  isMobile$!: Observable<boolean>;
  private resizeSubscription!: Subscription;

  stats = [
    {
      items: [
        {
          title:
            'Accompagnements <br /> administratifs faits par <br /> nos bénévoles',
          value: 122,
        },
        { title: 'Permanences administratives', value: 27 },
      ],
    },
    {
      items: [
        { title: 'Faire venir des <br /> actes de naissance', value: 22 },
        { title: 'Conseil juridique', value: 6 },
        { title: 'Accompagnement visa étudiant', value: 12 },
      ],
    },
    {
      items: [
        { title: 'Cartes consulaires', value: 49 },
        { title: 'Sur-légalisation d’actes de naissance', value: 29 },
        { title: 'Autres (livrets de famille, carte AME,.. )', value: 6 },
      ],
    },
  ];

  ngOnInit(): void {
    // Création de l'observable pour détecter les changements de taille
    this.isMobile$ = fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth < 768), // Vérifie si la largeur est inférieure à 768px
      startWith(window.innerWidth < 768) // Émet la valeur initiale
    );
  }

  ngOnDestroy(): void {
    // Désabonnement pour éviter les fuites de mémoire
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
