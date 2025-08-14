import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/animations';

interface Author {
  name: string;
  avatar: string;
  role?: string;
}

interface Annonce {
  id: number;
  title: string;
  excerpt: string;
  fullContent?: string;
  image: string;
  category: string;
  date: Date;
  author: Author;
  views: number;
  comments: number;
  likes?: number;
  isBookmarked: boolean;
  isUrgent: boolean;
  isLiked?: boolean;
  tags?: string[];
}

@Component({
  selector: 'annonces-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './annonces-detail.component.html',
  styleUrls: ['./annonces-detail.component.css'],
  animations: [
    trigger('annonceAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AnnoncesDetailComponent implements OnInit {
  
  allAnnonces: Annonce[] = [
    {
      id: 1,
      title: 'Célébration de l\'Indépendance de la Guinée 2025',
      excerpt: 'Rejoignez-nous pour célébrer le 67ème anniversaire de l\'indépendance de la Guinée avec des spectacles, de la musique traditionnelle et des plats authentiques.',
      image: 'assets/annonces/independence.jpg',
      category: 'événement',
      date: new Date('2025-02-15'),
      author: {
        name: 'Mamadou Diallo',
        avatar: 'assets/authors/mamadou.jpg',
        role: 'Président GAM'
      },
      views: 1250,
      comments: 45,
      likes: 89,
      isBookmarked: false,
      isUrgent: true,
      isLiked: false,
      tags: ['indépendance', 'célébration', 'culture', 'communauté']
    },
    {
      id: 2,
      title: 'Atelier de Cuisine Guinéenne',
      excerpt: 'Apprenez à préparer les plats traditionnels guinéens avec nos chefs expérimentés. Places limitées, inscription obligatoire.',
      image: 'assets/annonces/cuisine.jpg',
      category: 'culture',
      date: new Date('2025-02-20'),
      author: {
        name: 'Fatoumata Camara',
        avatar: 'assets/authors/fatoumata.jpg',
        role: 'Chef cuisinière'
      },
      views: 890,
      comments: 23,
      likes: 67,
      isBookmarked: false,
      isUrgent: false,
      isLiked: false,
      tags: ['cuisine', 'atelier', 'tradition', 'apprentissage']
    },
    {
      id: 3,
      title: 'Tournoi de Football Inter-Communautés',
      excerpt: 'Grand tournoi de football réunissant toutes les communautés de Marseille. Inscriptions ouvertes pour les équipes.',
      image: 'assets/annonces/football.jpg',
      category: 'sport',
      date: new Date('2025-03-05'),
      author: {
        name: 'Ibrahima Sow',
        avatar: 'assets/authors/ibrahima.jpg',
        role: 'Coordinateur sportif'
      },
      views: 2100,
      comments: 67,
      likes: 156,
      isBookmarked: true,
      isUrgent: false,
      isLiked: false,
      tags: ['football', 'sport', 'tournoi', 'inter-communautés']
    }
  ];

  filteredAnnonces: Annonce[] = [];
  paginatedAnnonces: Annonce[] = [];
  selectedAnnonce: Annonce | null = null;
  
  // Filters
  selectedCategory: string = '';
  selectedDateRange: string = '';
  searchTerm: string = '';
  sortBy: string = 'date-desc';
  
  // View
  viewMode: 'card' | 'list' = 'card';
  
  // Pagination
  currentPage: number = 1;
  itemsPerPage: number = 6;
  totalPages: number = 1;
  
  // Comments
  newComment: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.filteredAnnonces = [...this.allAnnonces];
    this.sortAnnonces();
  }

  goBack() {
    this.location.back();
  }

  filterAnnonces() {
    this.filteredAnnonces = this.allAnnonces.filter(annonce => {
      // Category filter
      if (this.selectedCategory && annonce.category !== this.selectedCategory) {
        return false;
      }

      // Date filter
      if (this.selectedDateRange) {
        const now = new Date();
        const annonceDate = annonce.date;
        
        switch (this.selectedDateRange) {
          case 'today':
            if (annonceDate.toDateString() !== now.toDateString()) {
              return false;
            }
            break;
          case 'week':
            const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            if (annonceDate < weekAgo) {
              return false;
            }
            break;
          case 'month':
            const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            if (annonceDate < monthAgo) {
              return false;
            }
            break;
          case 'older':
            const threeMonthsAgo = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
            if (annonceDate > threeMonthsAgo) {
              return false;
            }
            break;
        }
      }

      return true;
    });

    this.searchAnnonces();
  }

  searchAnnonces() {
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      this.filteredAnnonces = this.filteredAnnonces.filter(annonce =>
        annonce.title.toLowerCase().includes(term) ||
        annonce.excerpt.toLowerCase().includes(term) ||
        annonce.category.toLowerCase().includes(term) ||
        annonce.author.name.toLowerCase().includes(term) ||
        (annonce.tags && annonce.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    this.sortAnnonces();
  }

  sortAnnonces() {
    this.currentPage = 1;
    this.updatePagination();
  }

  updatePagination() {
    this.totalPages = Math.ceil(this.filteredAnnonces.length / this.itemsPerPage);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedAnnonces = this.filteredAnnonces.slice(startIndex, endIndex);
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

  openAnnonceDetail(annonce: Annonce) {
    this.selectedAnnonce = annonce;
    annonce.views++;
    document.body.style.overflow = 'hidden';
  }

  closeAnnonceDetail() {
    this.selectedAnnonce = null;
    document.body.style.overflow = 'auto';
  }

  formatDate(date: Date): { day: string, month: string } {
    const months = [
      'JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUN',
      'JUL', 'AOU', 'SEP', 'OCT', 'NOV', 'DÉC'
    ];
    
    return {
      day: date.getDate().toString().padStart(2, '0'),
      month: months[date.getMonth()]
    };
  }

  formatFullDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  share(annonce: Annonce) {
    console.log('Partager:', annonce.title);
  }

  toggleBookmark(annonce: Annonce) {
    annonce.isBookmarked = !annonce.isBookmarked;
  }

  toggleLike(annonce: Annonce) {
    annonce.isLiked = !annonce.isLiked;
    if (annonce.isLiked) {
      annonce.likes = (annonce.likes || 0) + 1;
    } else {
      annonce.likes = Math.max((annonce.likes || 1) - 1, 0);
    }
  }

  addComment(annonce: Annonce) {
    if (this.newComment.trim()) {
      annonce.comments++;
      this.newComment = '';
    }
  }

  searchByTag(tag: string) {
    this.searchTerm = tag;
    this.filterAnnonces();
  }

  getDefaultContent(annonce: Annonce): string {
    return `
      <p>${annonce.excerpt}</p>
      <p>Cet article fait partie de nos actualités communautaires. Pour plus d'informations, n'hésitez pas à nous contacter.</p>
    `;
  }
}
