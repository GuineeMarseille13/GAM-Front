import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PoleHeaderComponent } from '../../../shared/composants/poleHeader/poleHeader.component';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import {
  faHouseUser,
  faP,
  faPeopleRoof,
} from '@fortawesome/free-solid-svg-icons';
import { HebergementStatComponent } from '../../../shared/composants/hebergement-stat/hebergement-stat.component';
import { fromEvent, map, Observable, startWith, Subscription } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'hebergement',
  standalone: true,
  imports: [PoleHeaderComponent, HebergementStatComponent, AsyncPipe],
  templateUrl: './hebergement.component.html',
  styleUrl: './hebergement.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HebergementComponent implements OnInit, OnDestroy {
  protected PAGE_TITLE: string = "L'HEBERGEMENT SOLIDAIRE";

  protected faCircleUser = faCircleUser;
  protected faPeopleRoof = faPeopleRoof;
  protected faHouseUser = faHouseUser;

  isMobile$!: Observable<boolean>;
  private resizeSubscription!: Subscription;

  ngOnInit(): void {
    // Création de l'observable pour détecter les changements de taille
    this.isMobile$ = fromEvent(window, 'resize').pipe(
      map(() => window.innerWidth <= 768), // Vérifie si la largeur est inférieure à 768px
      startWith(window.innerWidth <= 768) // Émet la valeur initiale
    );
  }

  ngOnDestroy(): void {
    // Désabonnement pour éviter les fuites de mémoire
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
  }
}
