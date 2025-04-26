import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { faBullhorn, faQuestionCircle, faBuilding, faLightbulb, faCalendarAlt, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';


@Component({
  selector: 'sous-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
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
  protected router = inject(Router)
  protected faBullhorn = faBullhorn;
  protected faQuestionCircle = faQuestionCircle;
  protected faBuilding = faBuilding;
  protected faLightbulb = faLightbulb;
  protected faCalendarAlt = faCalendarAlt;
  protected faHandshake = faHandshake;

  sections = [
    { title: 'Le mot du Président', description: 'Découvrez le message du président.', icon: this.faBullhorn, visible: true, animation: 'fadeInRight', url: "/notre-association"},
    { title: 'Qui sommes-nous ?', description: 'Apprenez-en plus sur notre identité.', icon: this.faQuestionCircle, visible: true, animation: 'fadeInLeft', url: "/notre-association" },
    { title: 'Notre bureau', description: 'Présentation de notre bureau et notre équipe.', icon: this.faBuilding, visible: true, animation: 'fadeInTop', url: "/notre-association" },
    { title: 'Nos valeurs', description: 'Découvrez les principes qui nous guident.', icon: this.faLightbulb, visible: true, animation: 'fadeInDown', url: "/nos-valeurs" },
    { title: 'Nos événements 2024', description: 'Les événements marquants de cette année.', icon: this.faCalendarAlt, visible: true, animation: 'fadeInRight', url: "/evenements-passes" },
    { title: 'Nos partenaires', description: 'Les entreprises et associations qui nous accompagnent.', icon: this.faHandshake, visible: true, animation: 'fadeInLeft', url: "#" },
  ];

  // @HostListener('window:scroll', [])
  // onScroll(): void {
  //     const triggerHeight = window.innerHeight * 0.1;
  //     this.sections.forEach((section, index) => {
  //         const element = document.getElementById(`section-${index}`);
  //         if (element) {
  //             const position = element.getBoundingClientRect().bottom;
  //             if (position < triggerHeight) {
  //                 section.visible = true;
  //             }
  //         }
  //     });
  // }

  redirectByUrl(section: any): void {
    if (section?.url) {
      this.router.navigateByUrl(section.url);
    } else {
      console.warn('URL manquante pour la redirection', section);
    }
  }
  
}