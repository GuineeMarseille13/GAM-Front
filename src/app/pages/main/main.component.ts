import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleCheck, faCircleRight } from '@fortawesome/free-regular-svg-icons';
import { PoleItems } from 'src/app/types/enums/poleItems.enum';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { adresseMailGAM, IMAGE_ITEMS_ADMIN, IMAGE_ITEMS_EVEN, IMAGE_ITEMS_HEBERGEMENT, responsivePhotosOptions } from 'src/app/types/constants/constants';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ResponsivePhotoOption } from 'src/app/types/interfaces/responsive-photo-option';
import { Partenaire } from 'src/app/types/interfaces/Partenaire';
import { ReseauxSociauxComponent } from "../../shared/composants/reseaux-sociaux/reseaux-sociaux.component";
import { PoleComponent } from 'src/app/composants/pole/pole.component';


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
    ReseauxSociauxComponent,
    PoleComponent
],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainComponent {
  protected images: any[] | undefined;
  protected responsivePhotosOptions: ResponsivePhotoOption[] = responsivePhotosOptions;
  protected poleItems = PoleItems;
  protected adresseMail = adresseMailGAM;
  protected partnerComment: string = '';

  protected canShowHerbergement: boolean = false;
  protected canShowAccAdmin: boolean = false;
  protected canShowEven: boolean = false;
  protected canShowPartnerComment = false;

  protected faCircleCheck = faCircleCheck;
  protected faCircleRight = faCircleRight;

  carouselResponsiveOptions: any[] | undefined;
  partenaires: Partenaire[] = [];

  protected readonly poleHerbergementItems: any[] = IMAGE_ITEMS_HEBERGEMENT;
  protected readonly poleAdminItems: any[] = IMAGE_ITEMS_ADMIN;
  protected readonly poleEvenItems: any[] = IMAGE_ITEMS_EVEN;

  constructor(
    private photoService: PhotoService,
    private partenaireService: PartenaireService
  ) {}

  ngOnInit() {
    this.photoService.getImages().then((images) => (this.images = images));

    this.partenaireService.getPartners().then((partenaire) => {
      this.partenaires = partenaire;
    });

    this.carouselResponsiveOptions = [
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
}
