import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Photo } from 'src/app/types/interfaces/photo';
import { ResponsivePhotoOption } from 'src/app/types/interfaces/responsive-photo-option';
import { GalleriaModule } from 'primeng/galleria';


@Component({
  selector: 'pole',
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  templateUrl: './pole.component.html',
  styleUrl: './pole.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoleComponent {
  @Input({ required: true }) images: Partial<Photo>[] = [];
  @Input({ required: true }) photoSrc: string = '';
  @Input({ required: true }) photoMiniSrc: string = '';
  @Input({ required: true }) descriptions: string[] = [];

  responsivePhotoOption: ResponsivePhotoOption[] = [
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
