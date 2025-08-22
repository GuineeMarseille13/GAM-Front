import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate,
  query,
  stagger
} from '@angular/animations';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew: boolean;
  hovered: boolean;
  payementUrl: string;
  viewUrl: string;
}

@Component({
  selector: 'app-boutique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('hoverEffect', [
      state('normal', style({ transform: 'scale(1)' })),
      state('hovered', style({ transform: 'scale(1.02)' })),
      transition('normal <=> hovered', animate('0.3s ease-in-out'))
    ])
  ]
})
export class BoutiqueComponent implements OnInit, OnDestroy {
  
  products: Product[] = [
    {
      id: 1,
      name: 'Tee-shirt Guinée 67',
      description: "À l'occasion la 67ᵉ fête de la Guinée, l’association Guinée à Marseille propose des T-shirts hommes et femmes aux couleurs rouge, jaune, vert et noir, disponibles en tailles S, M, L, XL et XXL.",
      price: 20,
      image: 'assets/boutiques/tee-shirt-guinee-67.png',
      isNew: true,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-67",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-67"
    },
    {
      id: 2,
      name: 'Tee-shirt Guinée 66',
      description: "À l'occasion la 66ᵉ fête de la Guinée, l’association Guinée à Marseille propose des T-shirts hommes et femmes aux couleurs rouge, jaune, vert et noir, disponibles en tailles S, M, L, XL et XXL.",
      price: 10,
      oldPrice: 25,
      image: 'assets/boutiques/tee-shirt-guinee-66.png',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-66",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-66"
    },
    {
      id: 3,
      name: 'T-shirt Guinée 65, 64',
      description: "À l'occasion de la fête de la Guinée — profitez d'une offre exceptionnelle bien en dessous du prix habituel ! Nous proposons des T-shirts hommes et femmes, disponibles en tailles S, M, L, XL et XXL.",
      price: 5,
      oldPrice: 25,
      image: 'assets/boutiques/tee-shirt-guinee-65.webp',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-66",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tee-shirt-guinee-66"
    },
    {
      id: 4,
      name: 'Un Tissu Lépi',
      description: "Les tissus Lépi que nous proposons sont produits à la main en moyenne Guinée, dans le Fouta pour les Lépi et en Guinée forestière pour les Forêt sacrées. Chaque pagne en wax mesure 2m x 1,5m et 1,5m x 1m pour ceux en coton.",
      price: 20,
      oldPrice: 25,
      image: 'assets/boutiques/tissu-lepi.png',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi"
    },
    {
      id: 5,
      name: 'Un sac Tote bag doublé',
      description: "Les tissus Lépi que nous proposons sont produits à la main en moyenne Guinée, dans le Fouta pour les Lépi et en Guinée forestière pour les Forêt sacrées. Chaque pagne en wax mesure 2m x 1,5m et 1,5m x 1m pour ceux en coton.",
      price: 20,
      image: 'assets/boutiques/sac-tote-bag-double.png',
      isNew: true,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi"
    },
    {
      id: 6,
      name: 'Lot 2 sacs tote bags',
      description: "Les tissus Lépi que nous proposons sont produits à la main en moyenne Guinée, dans le Fouta pour les Lépi et en Guinée forestière pour les Forêt sacrées. Chaque pagne en wax mesure 2m x 1,5m et 1,5m x 1m pour ceux en coton.",
      price: 20,
      image: 'assets/boutiques/lot-2-sacs-tote-bags.png',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi"
    },
    {
      id: 6,
      name: 'Un tissu Forêt sacrée',
      description: "Les tissus Lépi que nous proposons sont produits à la main en moyenne Guinée, dans le Fouta pour les Lépi et en Guinée forestière pour les Forêt sacrées. Chaque pagne en wax mesure 2m x 1,5m et 1,5m x 1m pour ceux en coton.",
      price: 20,
      image: 'assets/boutiques/tissu-foret-sacree.png',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi"
    },
    {
      id: 7,
      name: 'Un tissu Forêt sacrée',
      description: "Les tissus Lépi que nous proposons sont produits à la main en moyenne Guinée, dans le Fouta pour les Lépi et en Guinée forestière pour les Forêt sacrées. Chaque pagne en wax mesure 2m x 1,5m et 1,5m x 1m pour ceux en coton.",
      price: 20,
      image: 'assets/boutiques/sac-tote-bag.png',
      isNew: false,
      hovered: false,
      payementUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi",
      viewUrl: "https://www.helloasso.com/associations/association-guinee-a-marseille/boutiques/tissus-lepi"
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.initParticles();
  }

  ngOnDestroy() {
    // Cleanup particles if needed
  }

  quickView(product: Product) {
    window.open(product.viewUrl, '_blank');
  }

  addToCart(product: Product) {
    window.open(product.payementUrl, '_blank');
  }

  voirPlus() {
    this.router.navigate(['/boutique-detail']);
  }

  private initParticles() {
    // Simple particle effect using CSS animations
    // You could integrate with a particles library like particles.js or tsparticles
    const container = document.getElementById('particles-boutique');
    if (container) {
      // Create floating particles
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
        `;
        container.appendChild(particle);
      }

      // Add floating animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
      `;
      document.head.appendChild(style);
    }
  }
}