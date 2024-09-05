import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { PoleItems } from 'src/app/types/poleItems.enum';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/app/shared/photo.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, GalleriaModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  images: any[] | undefined;
  responsivePhotosOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  protected poleItems = PoleItems;

  protected canShowHerbergement: boolean = false;
  protected canShowAccAdmin: boolean = false;
  protected canShowEven: boolean = false;

  protected faCircleCheck = faCircleCheck;

  constructor(private photoService: PhotoService) {  }

    ngOnInit() {
      this.photoService.getImages().then((images) => (this.images = images));
    }


  private hidePoleItems() {
    this.canShowHerbergement = false;
    this.canShowAccAdmin = false;
    this.canShowEven = false;
  }

  protected showPoleItem(poleItem: PoleItems): void {
    this.hidePoleItems();
    if (poleItem === this.poleItems.Hebergement) {
      this.canShowHerbergement = true;
    }

    if (poleItem === this.poleItems.AccompagnementAdmin) {
      this.canShowAccAdmin = true;
    }

    if (poleItem === this.poleItems.Evenementiel) {
      this.canShowEven = true;
    }
  }
}

interface City {
  name: string;
  code: string;
}
