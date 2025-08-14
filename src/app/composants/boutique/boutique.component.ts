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
  isFavorite: boolean;
  hovered: boolean;
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
      name: 'Boubou Traditionnel',
      description: 'Boubou authentique fait à la main par nos artisans guinéens',
      price: 89,
      oldPrice: 120,
      image: 'assets/boutique/boubou.jpg',
      isNew: true,
      isFavorite: false,
      hovered: false
    },
    {
      id: 2,
      name: 'Bijoux en Or',
      description: 'Collection de bijoux traditionnels en or 18 carats',
      price: 250,
      image: 'assets/boutique/bijoux.jpg',
      isNew: false,
      isFavorite: false,
      hovered: false
    },
    {
      id: 3,
      name: 'Masque Traditionnel',
      description: 'Masque cérémoniel sculpté dans le bois d\'ébène',
      price: 65,
      image: 'assets/boutique/masque.jpg',
      isNew: true,
      isFavorite: false,
      hovered: false
    },
    {
      id: 4,
      name: 'Tissu Wax Premium',
      description: 'Tissu wax de haute qualité aux motifs authentiques',
      price: 35,
      oldPrice: 45,
      image: 'assets/boutique/wax.jpg',
      isNew: false,
      isFavorite: false,
      hovered: false
    },
    {
      id: 5,
      name: 'Djembé Artisanal',
      description: 'Djembé traditionnel fabriqué par nos maîtres artisans',
      price: 150,
      image: 'assets/boutique/djembe.jpg',
      isNew: true,
      isFavorite: false,
      hovered: false
    },
    {
      id: 6,
      name: 'Épices de Guinée',
      description: 'Mélange d\'épices traditionnelles importées directement',
      price: 25,
      image: 'assets/boutique/epices.jpg',
      isNew: false,
      isFavorite: false,
      hovered: false
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
    console.log('Aperçu rapide:', product);
    // Implement quick view modal logic
  }

  addToCart(product: Product) {
    console.log('Ajouté au panier:', product);
    // Implement add to cart logic
    // You could show a toast notification here
  }

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    console.log('Favori togglé:', product);
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