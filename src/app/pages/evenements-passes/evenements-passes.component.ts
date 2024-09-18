import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { PanelModule } from 'primeng/panel';
import { GalleriaModule } from 'primeng/galleria';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import { PhotoService } from 'src/app/shared/photo.service';

@Component({
  selector: 'evenements-passes',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    PanelModule,
    GalleriaModule,
    RouterLink,
  ],
  templateUrl: './evenements-passes.component.html',
  styleUrl: './evenements-passes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementsPassesComponent {
  faHouse = faHouse;
  faImages = faImages;

  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.photoService.getImages().then((images) => (this.images = images));
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
