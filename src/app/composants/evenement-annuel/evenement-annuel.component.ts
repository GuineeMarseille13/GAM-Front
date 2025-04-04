import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PanelModule } from 'primeng/panel';
import { EventGam } from 'src/app/types/interfaces/event';
import { PoleComponent } from "../pole/pole.component";
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'evenement-annuel',
  standalone: true,
  imports: [CommonModule, PanelModule, FontAwesomeModule, PoleComponent],
  templateUrl: './evenement-annuel.component.html',
  styleUrl: './evenement-annuel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementAnnuelComponent {
  @Input({ required: true }) events!: EventGam[];

  constructor(private sanitizer: DomSanitizer) {}

  getSafeText(text: string) {
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
}
