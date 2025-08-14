import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCircleCheck,
  faCircleRight,
} from '@fortawesome/free-regular-svg-icons';
import { PoleItems } from 'src/app/types/enums/poleItems.enum';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import {
  adresseMailGAM,
  IMAGE_AFICHHE_ADMIN,
  IMAGE_AFICHHE_EVEN,
  IMAGE_AFICHHE_HEBERGEMENT,
  IMAGE_ITEMS_ACCUEIl,
  IMAGE_ITEMS_ADMIN,
  IMAGE_ITEMS_EVEN,
  IMAGE_ITEMS_HEBERGEMENT,
  IMAGE_ITEMS_POLE,
  responsivePhotosOptions,
} from 'src/app/types/constants/constants';
import { PartenaireService } from 'src/app/services/partenaire.service';
import { ResponsivePhotoOption } from 'src/app/types/interfaces/responsive-photo-option';
import { Partenaire } from 'src/app/types/interfaces/Partenaire';
import { ReseauxSociauxComponent } from '../../shared/composants/reseaux-sociaux/reseaux-sociaux.component';
import { PoleComponent } from 'src/app/composants/pole/pole.component';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { SousMenuComponent } from './sous-menu/sous-menu.component';
import { BoutiqueComponent } from '../../composants/boutique/boutique.component';
import { AnnoncesComponent } from '../../composants/annonces/annonces.component';
import { FeteGuineeComponent } from '../../composants/fete-guinee/fete-guinee.component';
import { Container, Engine, ISourceOptions } from '@tsparticles/engine';
import { tsParticles } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    PanelModule,
    FormsModule,
    ReseauxSociauxComponent,
    SousMenuComponent,
    BoutiqueComponent,
    AnnoncesComponent,
    FeteGuineeComponent,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('zoomAnimation', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
          boxShadow: '0px 8px 20px rgba(46, 91, 45, 0.8)',
        })
      ),
      state(
        'zoomed',
        style({
          transform: 'scale(1.2)',
          boxShadow: '0px 8px 20px rgba(46, 91, 45, 0.8)', // Ombre vert
        })
      ),
      transition('normal <=> zoomed', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class MainComponent {
  protected images: any[] | undefined;
  protected responsivePhotosOptions: ResponsivePhotoOption[] =
    responsivePhotosOptions;
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
  protected readonly imagesAccueilItem: any[] = IMAGE_ITEMS_ACCUEIl;
  protected readonly imagesPolesItem: any[] = IMAGE_ITEMS_POLE;

  protected readonly poleHerbergementAffiche: string =
    IMAGE_AFICHHE_HEBERGEMENT;
  protected readonly poleAdminAffiche: string = IMAGE_AFICHHE_ADMIN;
  protected readonly poleEvenAffiche: string = IMAGE_AFICHHE_EVEN;

  constructor(
    private photoService: PhotoService,
    private partenaireService: PartenaireService,
    private router: Router
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
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  toggleZoom(pole: any) {
    pole.state = pole.state === 'normal' ? 'zoomed' : 'normal';
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

  protected onSubmit(form: any): void {
    loadFull(tsParticles);
    form.resetForm();
    this.triggerParticles();
  }

  protected handlePole(pole: string) {
    switch (pole) {
      case 'PÔLE ÉVÉNEMENTS':
        this.router.navigate(['/evenement']);
        break;
      case 'PÔLE ACCOMPAGNEMENT ADMINISTRATIF':
        this.router.navigate(['/administratif']);
        break;

      default:
        this.router.navigate(['/hebergement']);
        break;
    }
  }

  protected async triggerParticles(): Promise<void> {
    const options: ISourceOptions = {
      particles: {
        number: { value: 0 }, // Pas de particules initiales
        color: {
          value: ['#FF0000', '#FFFF00', '#00FF00'],
        }, // Couleurs vives
        shape: { type: ['polygon'] }, // Formes adaptées pour un feu d'artifice
        opacity: { value: { min: 0.3, max: 1 } }, // Opacité variable
        size: { value: { min: 1, max: 3 } }, // Taille variable des particules
        move: {
          enable: true,
          speed: { min: 5, max: 15 }, // Vitesse variable
          direction: 'none', // Mouvement aléatoire
          random: true,
          straight: false,
          outModes: { default: 'destroy' }, // Les particules disparaissent après explosion
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onClick: { enable: false }, // Pas d'interaction utilisateur
          onHover: { enable: false },
        },
      },
      emitters: [
        {
          direction: 'top',
          life: {
            count: 2, // Une seule explosion par émetteur
            duration: 0.1, // Explosion instantanée
            delay: 0,
          },
          rate: {
            delay: 0,
            quantity: 100, // Nombre de particules par explosion
          },
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 10, // Position à 10% de la largeur de l'écran
            y: 100, // Position en bas de l'écran
          },
        },
        {
          direction: 'top',
          life: {
            count: 1,
            duration: 0.1,
            delay: 0,
          },
          rate: {
            delay: 0,
            quantity: 100,
          },
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 50, // Position à 50% de la largeur de l'écran
            y: 100,
          },
        },
        {
          direction: 'top',
          life: {
            count: 2,
            duration: 0.1,
            delay: 0,
          },
          rate: {
            delay: 0,
            quantity: 100,
          },
          size: {
            width: 100,
            height: 100,
          },
          position: {
            x: 90, // Position à 90% de la largeur de l'écran
            y: 100,
          },
        },
      ],
      detectRetina: true,
    };
    await tsParticles.load({
      id: 'tsparticles',
      options: options,
    });
  }
}
