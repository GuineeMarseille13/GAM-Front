import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { PanelModule } from 'primeng/panel';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { EventPasse } from 'src/app/types/interfaces/eventPasse';
import { EvenementAnnuelComponent } from "../../composants/evenement-annuel/evenement-annuel.component";
import { EventPasseService } from 'src/app/services/event-passe.service';

@Component({
  selector: 'evenements-passes',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    PanelModule,
    EvenementAnnuelComponent
],
  templateUrl: './evenements-passes.component.html',
  styleUrl: './evenements-passes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementsPassesComponent {

  protected events: EventPasse[] = [];

  faHouse = faHouse;
  faImages = faImages;

  constructor(private photoService: PhotoService, private eventPasseService: EventPasseService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => (this.images = images));
    this.eventPasseService.getEventsPasses().subscribe(eventsPasses => this.events = eventsPasses);
  }

  images: any[] | undefined;

  responsivePhotosOptions: any[] = [
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
