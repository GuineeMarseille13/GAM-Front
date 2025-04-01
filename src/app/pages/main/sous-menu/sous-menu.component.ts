import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { faBullhorn, faQuestionCircle, faBuilding, faLightbulb, faCalendarAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'sous-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './sous-menu.component.html',
  styleUrl: './sous-menu.component.css',
  animations: [
    trigger('fadeIn', [
        state('hidden', style({ opacity: 0, transform: 'translateY(30px)' })),
        state('visible', style({ opacity: 1, transform: 'translateY(0)' })),
        transition('hidden => visible', animate('0.8s ease-out')),
    ]),
]
})
export class SousMenuComponent {
  protected faBullhorn = faBullhorn;
  protected faQuestionCircle = faQuestionCircle;
  protected faBuilding = faBuilding;
  protected faLightbulb = faLightbulb;
  protected faCalendarAlt = faCalendarAlt;
  protected faHandshake = faHandshake;

  sections = [
    { title: 'Le mot du Président', description: 'Découvrez le message du président.', icon: this.faBullhorn, visible: false, animation: 'fadeInRight' },
    { title: 'Qui sommes-nous ?', description: 'Apprenez-en plus sur notre identité.', icon: this.faQuestionCircle, visible: false, animation: 'fadeInLeft' },
    { title: 'Notre bureau', description: 'Présentation de notre bureau et notre équipe.', icon: this.faBuilding, visible: false, animation: 'fadeInTop' },
    { title: 'Nos valeurs', description: 'Découvrez les principes qui nous guident.', icon: this.faLightbulb, visible: false, animation: 'fadeInDown' },
    { title: 'Nos événements 2024', description: 'Les événements marquants de cette année.', icon: this.faCalendarAlt, visible: false, animation: 'fadeInRight' },
    { title: 'Nos partenaires', description: 'Les entreprises et associations qui nous accompagnent.', icon: this.faHandshake, visible: false, animation: 'fadeInLeft' },
  ];

  @HostListener('window:scroll', [])
  onScroll(): void {
      const triggerHeight = window.innerHeight * 0.8;
      this.sections.forEach((section, index) => {
          const element = document.getElementById(`section-${index}`);
          if (element) {
              const position = element.getBoundingClientRect().top;
              if (position < triggerHeight) {
                  section.visible = true;
              }
          }
      });
  }
  
}