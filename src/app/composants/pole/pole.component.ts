import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'pole',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ImageModule, FontAwesomeModule],
  templateUrl: './pole.component.html',
  styleUrl: './pole.component.css',
})
export class PoleComponent {

  displayCustom: boolean = false;

  activeIndex: number = 0;

  @Input() images: any[] | undefined = [];
  @Input() imagesAffiche: string | undefined = '';

  responsiveOptions: any[] = [
      {
          breakpoint: '1500px',
          numVisible: 5
      },
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  imageClick(index: number) {
      this.activeIndex = index;
      this.displayCustom = true;
  }

  isImageLoaded(): boolean {
    return this.images !== undefined && this.images.length > 0;
  }

}
