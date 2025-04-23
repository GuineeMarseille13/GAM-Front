import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'hebergement-stat',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hebergement-stat.component.html',
  styleUrl: './hebergement-stat.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HebergementStatComponent {
  @Input({ required: true }) iconUrl: IconDefinition = {} as IconDefinition;
  @Input({ required: true }) stat: number = 0;
  @Input({ required: true }) title: string = '';
}
