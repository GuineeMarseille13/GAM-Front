import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { VoirPlusphotos } from 'src/app/types/interfaces/VoirPlusphotos';

@Component({
  selector: 'galerie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalerieComponent {
   @Input({ required: true }) galerie!: VoirPlusphotos;
}
