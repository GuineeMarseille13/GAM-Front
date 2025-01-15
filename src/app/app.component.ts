import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBarsStaggered, faHandHoldingDollar, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterOutlet } from '@angular/router';
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

  protected faBarsStaggered = faBarsStaggered;
  protected faUsers = faUsers;
  protected faHandHoldingDollar = faHandHoldingDollar;
  protected faUser = faUser;
  protected faPlus = faPlus;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  protected selectTitle(): void {
    let collapseButton = this.el.nativeElement.querySelector('button.navbar-toggler');
    let collapseContent = this.el.nativeElement.querySelector('div.navbar-collapse');
    
    this.renderer.addClass(collapseButton, 'collapsed');
    this.renderer.removeClass(collapseContent, 'show');
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
