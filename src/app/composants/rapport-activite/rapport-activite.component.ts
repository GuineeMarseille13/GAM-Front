import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { InfoRapportActivite } from 'src/app/types/interfaces/info-rapport-activite';

@Component({
  selector: 'rapport-activite',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rapport-activite.component.html',
  styleUrl: './rapport-activite.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RapportActiviteComponent {
  @Input({required: true}) info!: InfoRapportActivite;

  protected faFile = faFile;
}
