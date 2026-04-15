import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PoleHeaderComponent } from '../../../shared/composants/poleHeader/poleHeader.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'accompagnement-futurs-etudiants',
  standalone: true,
  imports: [PoleHeaderComponent, CommonModule],
  templateUrl: './accompagnement-futurs-etudiants.component.html',
  styleUrl: './accompagnement-futurs-etudiants.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccompagnementFutursEtudiantsComponent {
  protected PAGE_TITLE: string = 'Accompagnement des futurs étudiants – Aix-Marseille Université 2026–2027';
}
