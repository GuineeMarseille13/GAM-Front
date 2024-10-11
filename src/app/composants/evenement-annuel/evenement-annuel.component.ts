import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { PanelModule } from 'primeng/panel';
import { EventGam } from 'src/app/types/interfaces/event';
import { VoirPlusphotos } from 'src/app/types/interfaces/VoirPlusphotos';


@Component({
  selector: 'evenement-annuel',
  standalone: true,
  imports: [CommonModule, PanelModule, RouterLink, FontAwesomeModule],
  templateUrl: './evenement-annuel.component.html',
  styleUrl: './evenement-annuel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementAnnuelComponent {
  @Input({ required: true }) events!: EventGam[];

  faImages = faImages;

  constructor(private router: Router) {  }

  protected goToGaleries(galeriePhoto: VoirPlusphotos[]) {
    this.router.navigate(['evenements-passes/voir-plus-photo'], {
      state: { galerie: galeriePhoto },
    });
  }
}
