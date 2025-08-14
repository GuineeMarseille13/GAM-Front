import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/animations';

interface Product {
  id: number;
  name: string;
  description: string;
  fullDescription?: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
  isNew: boolean;
  onSale: boolean;
  isLimited: boolean;
  discount?: number;
  isFavorite: boolean;
  rating?: number;
  reviewCount?: number;
  features?: string[];
  dateAdded: Date;
}

@Component({
  selector: 'app-boutique-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './boutique-detail.component.html',
  styleUrls: ['./boutique-detail.component.css'],
  animations: [
    trigger('productAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class BoutiqueDetailComponent implements OnInit {
  
  allProducts: Product[] = [
    {
      id: 1,
      name: 'Boubou Traditionnel Élégant',
      description: 'Boubou authentique fait à la main par nos artisans guinéens',
      fullDescription: 'Ce magnifique boubou traditionnel est confectionné à la main par nos artisans expérimentés en Guinée. Fabriqué avec des tissus de première qualité, il allie tradition et élégance moderne. Parfait pour les occasions spéciales et les célébrations culturelles.',
      price: 89,
      oldPrice: 120,
      image: 'assets/boutique/boubou.jpg',
      category: 'vêtements',
      isNew: true,
      onSale: true,
      isLimited: false,
      discount: 26,
      isFavorite: false,
      rating: 4.5,
      reviewCount: 23,
      features: ['100% coton', 'Fait à la main', 'Taille ajustable', 'Broderies traditionnelles'],
      dateAdded: new Date('2025-01-15')
    },
    {
      id: 2,
      name: 'Collier en Or 18 Carats',
      description: 'Collection de bijoux traditionnels en or 18 carats',
      fullDescription: 'Superbe collier en or 18 carats inspiré des designs traditionnels guinéens. Chaque pièce est unique et reflète le savoir-faire ancestral de nos bijoutiers.',
      price: 250,
      image: 'assets/boutique/bijoux.jpg',
      category: 'bijoux',
      isNew: false,
      onSale: false,
      isLimited: true,
      isFavorite: false,
      rating: 5.0,
      reviewCount: 8,
      features: ['Or 18 carats certifié', 'Design traditionnel', 'Pièce unique', 'Certificat d\'authenticité'],
      dateAdded: new Date('2025-01-10')
    },
    {
      id: 3,
      name: 'Masque Cérémoniel Baga',
      description: 'Masque cérémoniel sculpté dans le bois d\'ébène',
      fullDescription: 'Masque traditionnel Baga sculpté à la main dans du bois d\'ébène authentique. Utilisé lors des cérémonies traditionnelles, ce masque représente l\'art ancestral guinéen.',
      price: 65,
      image: 'assets/boutique/masque.jpg',
      category: 'artisanat',
      isNew: true,
      onSale: false,
      isLimited: false,
      isFavorite: false,
      rating: 4.2,
      reviewCount: 15,
      features: ['Bois d\'ébène authentique', 'Sculpté à la main', 'Art traditionnel Baga', 'Pièce décorative'],
      dateAdded: new Date('2025-01-20')
    },
    {
      id: 4,
      name: 'Tissu Wax Premium Guinée',
      description: 'Tissu wax de haute qualité aux motifs authentiques',
      fullDescription: 'Tissu wax premium importé directement de Guinée. Motifs colorés et authentiques, parfait pour la confection de vêtements traditionnels ou modernes.',
      price: 35,
      oldPrice: 45,
      image: 'assets/boutique/wax.jpg',
      category: 'vêtements',
      isNew: false,
      onSale: true,
      isLimited: false,
      discount: 22,
      isFavorite: true,
      rating: 4.7,
      reviewCount: 31,
      features: ['100% coton wax', 'Motifs authentiques', '6 mètres', 'Résistant aux lavages'],
      dateAdded: new Date('2025-01-05')
    },
    {
      id: 5,
      name: 'Djembé Artisanal Professionnel',
      description: 'Djembé traditionnel fabriqué par nos maîtres artisans',
      fullDescription: 'Djembé professionnel fabriqué selon les techniques traditionnelles. Bois de qualité supérieure et peau de chèvre tendue à la main pour un son authentique.',
      price: 150,
      image: 'assets/boutique/djembe.jpg',
      category: 'musique',
      isNew: true,
      onSale: false,
      isLimited: true,
      isFavorite: false,
      rating: 4.8,
      reviewCount: 12,
      features: ['Bois de qualité supérieure', 'Peau de chèvre authentique', 'Fait à la main', 'Son professionnel'],
      dateAdded: new Date('2025-01-12')
    },
    {
      id: 6,
      name: 'Mélange d\'Épices Guinéennes',
      description: 'Mélange d\'épices traditionnelles importées directement',
      fullDescription: 'Assortiment d\'épices authentiques de Guinée pour préparer les plats traditionnels. Mélange secret transmis de génération en génération.',
      price: 25,
      image: 'assets/boutique/epices.jpg',
      category: 'alimentation',
      isNew: false,
      onSale: false,
      isLimited: false,
      isFavorite: false,
      rating: 4.3,
      reviewCount: 27,
      features: ['Épices naturelles', 'Recette traditionnelle', 'Import direct', 'Conservation optimale'],
      dateAdded: new Date('2024-12-20')
    },
    {
      id: 7,
      name: 'Bracelet Peul en Argent',
      description: 'Bracelet traditionnel Peul en argent massif',
      fullDescription: 'Magnifique bracelet traditionnel Peul confectionné en argent massif. Motifs géométriques gravés à la main selon les traditions ancestrales.',
      price: 120,
      oldPrice: 150,
      image: 'assets/boutique/bracelet.jpg',
      category: 'bijoux',
      isNew: false,
      onSale: true,
      isLimited: true,
      discount: 20,
      isFavorite: false,
      rating: 4.6,
      reviewCount: 19,
      features: ['Argent massif 925', 'Motifs Peul authentiques', 'Gravé à la main', 'Ajustable'],
      dateAdded: new Date('2025-01-08')
    },
    {
      id: 8,
      name: 'Kora Traditionnelle',
      description: 'Instrument de musique traditionnel à 21 cordes',
      fullDescription: 'Kora authentique à 21 cordes, instrument emblématique de l\'Afrique de l\'Ouest. Fabriquée selon les méthodes traditionnelles par un maître luthier.',
      price: 380,
      image: 'assets/boutique/kora.jpg',
      category: 'musique',
      isNew: true,
      onSale: false,
      isLimited: true,
      isFavorite: false,
      rating: 5.0,
      reviewCount: 5,
      features: ['21 cordes authentiques', 'Calebasse naturelle', 'Fait par maître luthier', 'Son professionnel'],
      dateAdded: new Date('2025-01-18')
    }
  ];

  filteredProducts: Product[] = [];
  paginatedProducts: Product[] = [];
  selectedProduct: Product | null = null;
  
  // Filters
  selectedCategory: string = '';
  selectedPriceRange: string = '';
  searchTerm: string = '';
  sortBy: string = 'name';
  
  // View
  viewMode: 'grid' | 'list' = 'grid';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;

  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.filteredProducts = [...this.allProducts];
    this.updatePagination();
  }

  goBack() {
    this.location.back();
  }

  filterProducts() {
    this.filteredProducts = this.allProducts.filter(product => {
      // Category filter
      if (this.selectedCategory && product.category !== this.selectedCategory) {
        return false;
      }

      // Price filter
      if (this.selectedPriceRange) {
        const [min, max] = this.selectedPriceRange.includes('+') 
          ? [200, Infinity] 
          : this.selectedPriceRange.split('-').map(Number);
        
        if (product.price < min || product.price > max) {
          return false;
        }
      }

      return true;
    });

    this.searchProducts();
  }

  searchProducts() {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filteredProducts = this.filteredProducts.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
      );
    }

    this.sortProducts();
  }

  sortProducts() {
    this.filteredProducts.sort((a, b) => {
      switch (this.sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'newest':
          return b.dateAdded.getTime() - a.dateAdded.getTime();
        default:
          return 0;
      }
    });

    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedProducts = this.filteredProducts.slice(startIndex, endIndex);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  openProductModal(product: Product) {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden';
  }

  closeProductModal() {
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }

  addToCart(product: Product) {
    console.log('Produit ajouté au panier:', product);
    // Implement cart logic here
    // You could show a toast notification
  }

  toggleFavorite(product: Product) {
    product.isFavorite = !product.isFavorite;
    console.log('Favori togglé:', product.name);
    // Save to localStorage or send to server
  }

  getStarsArray(rating: number): boolean[] {
    const stars: boolean[] = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}