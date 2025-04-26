import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import {
  faBarsStaggered,
  faHandHoldingDollar,
  faPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  Event,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected IsAccueilClicked: boolean = false;
  protected IsContactClicked: boolean = false;
  protected IsAssociationClicked: boolean = false;
  protected IsAdhesionClicked: boolean = false;
  protected IsBoutiqueClicked: boolean = false;
  protected IsDonClicked: boolean = false;

  isAccueilHidden = false;

  protected faBarsStaggered = faBarsStaggered;
  protected faUsers = faUsers;
  protected faHandHoldingDollar = faHandHoldingDollar;
  protected faUser = faUser;
  protected faPlus = faPlus;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Surveiller les changements d'URL
    this.router.events.subscribe((event: Event) => {
      this.isAccueilHidden =
        this.router.url === '/' || this.router.url === '/#contacts'; // Cacher si l'URL est "/"

      if (event instanceof NavigationEnd && this.router.url !== '/#contacts') {
        // Forcer le défilement en haut de la page
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }

  protected selectTitle(): void {
    let collapseButton = this.el.nativeElement.querySelector(
      'button.navbar-toggler'
    );
    let collapseContent = this.el.nativeElement.querySelector(
      'div.navbar-collapse'
    );

    this.renderer.addClass(collapseButton, 'collapsed');
    this.renderer.removeClass(collapseContent, 'show');
  }

  protected navigateToContact(): void {
    if (this.router.url !== '/') {
      // Naviguer vers la page d'accueil
      this.router.navigate(['/']).then(() => {
        // Une fois sur la page d'accueil, scroller jusqu'à la section "contacts"
        this.viewportScroller.scrollToAnchor('contacts');
      });
    } else {
      // Si déjà sur la page d'accueil, scroller directement jusqu'à la section "contacts"
      this.viewportScroller.scrollToAnchor('contacts');
    }
  }

  //   protected handleButtonClick(buttonName: string): void {
  //   // Mettre à jour le bouton actif
  //   this.activeButton = buttonName;
  // }

  // // Méthode pour vérifier si un bouton est actif
  // protected isButtonActive(buttonName: string): boolean {
  //   return this.activeButton === buttonName;
  // }
}
