import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PoleHeaderComponent } from '../../../shared/composants/poleHeader/poleHeader.component';

@Component({
  selector: 'evenementiel',
  standalone: true,
  imports: [PoleHeaderComponent],
  templateUrl: './evenementiel.component.html',
  styleUrl: './evenementiel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementielComponent {
  protected PAGE_TITLE: string = 'ÉVÉNEMENTS';
}
