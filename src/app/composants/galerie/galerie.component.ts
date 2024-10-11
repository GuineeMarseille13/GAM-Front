import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { VoirPlusphotos } from 'src/app/types/interfaces/VoirPlusphotos';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'galerie',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalerieComponent {
  @Input({ required: true }) galerie!: VoirPlusphotos;

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
