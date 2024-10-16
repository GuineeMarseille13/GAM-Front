import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { PoleItems } from 'src/app/types/enums/poleItems.enum';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/app/shared/photo.service';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { adresseMailGAM } from 'src/app/types/constants/constants';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ResponsivePhotoOption } from 'src/app/types/interfaces/responsive-photo-option';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    GalleriaModule,
    RouterLink,
    CarouselModule,
    ButtonModule,
    TagModule,
    PanelModule,
    FormsModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  images: any[] | undefined;
  responsivePhotosOptions: ResponsivePhotoOption[] = [
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
  protected adresseMail = adresseMailGAM;
  protected partnerComment: string = '';

  protected canShowHerbergement: boolean = false;
  protected canShowAccAdmin: boolean = false;
  protected canShowEven: boolean = false;
  protected canShowPartnerComment = false;

  protected faCircleCheck = faCircleCheck;
  protected faCircleRight = faCircleRight;

  responsiveOptions: any[] | undefined;
  partenaires: Partenaire[] = [];

  constructor(
    private photoService: PhotoService,
    private partenaireService: PartenaireService
  ) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));

    this.partenaireService.getPartners().then((partenaire) => {
      this.partenaires = partenaire;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return 'danger';
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

  protected onSubmit(formValue: any) {
    console.log(formValue);
  }

  protected selectCurrentPartner(partner: any): void {
    this.canShowPartnerComment = true;
    this.partnerComment = `Commentaire du partenaire : ${partner.id} ${partner.code} ${partner.name} `;
  }
}

interface City {
  name: string;
  code: string;
}

export interface Partenaire {
  name: string;
  commentaire: string;
  image: string
}
