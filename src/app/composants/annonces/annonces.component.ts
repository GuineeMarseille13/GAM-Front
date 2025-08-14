import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
}

interface Annonce {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  image: string;
  category: string;
  date: Date;
  author: Author;
  views: number;
  comments: number;
  isBookmarked: boolean;
  isUrgent: boolean;
}

@Component({
  selector: 'app-annonces',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css'],
  animations: [
    trigger('slideInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AnnoncesComponent implements OnInit {
  
  annonces: Annonce[] = [
    {
      id: 1,
      title: 'Célébration de l\'Indépendance de la Guinée 2025',
      excerpt: 'Rejoignez-nous pour célébrer le 67ème anniversaire de l\'indépendance de la Guinée avec des spectacles, de la musique traditionnelle et des plats authentiques.',
      image: 'assets/annonces/independence.jpg',
      category: 'Événement',
      date: new Date('2025-02-15'),
      author: {
        name: 'Mamadou Diallo',
        avatar: 'assets/authors/mamadou.jpg'
      },
      views: 1250,
      comments: 45,
      isBookmarked: false,
      isUrgent: true
    },
    {
      id: 2,
      title: 'Atelier de Cuisine Guinéenne',
      excerpt: 'Apprenez à préparer les plats traditionnels guinéens avec nos chefs expérimentés. Places limitées, inscription obligatoire.',
      image: 'assets/annonces/cuisine.jpg',
      category: 'Culture',
      date: new Date('2025-02-20'),
      author: {
        name: 'Fatoumata Camara',
        avatar: 'assets/authors/fatoumata.jpg'
      },
      views: 890,
      comments: 23,
      isBookmarked: false,
      isUrgent: false
    },
    {
      id: 3,
      title: 'Tournoi de Football Inter-Communautés',
      excerpt: 'Grand tournoi de football réunissant toutes les communautés de Marseille. Inscriptions ouvertes pour les équipes.',
      image: 'assets/annonces/football.jpg',
      category: 'Sport',
      date: new Date('2025-03-05'),
      author: {
        name: 'Ibrahima Sow',
        avatar: 'assets/authors/ibrahima.jpg'
      },
      views: 2100,
      comments: 67,
      isBookmarked: true,
      isUrgent: false
    },
    {
      id: 4,
      title: 'Collecte de Fonds pour l\'École de Conakry',
      excerpt: 'Participez à notre campagne de collecte pour la construction d\'une nouvelle école dans la région de Conakry.',
      image: 'assets/annonces/ecole.jpg',
      category: 'Communauté',
      date: new Date('2025-02-10'),
      author: {
        name: 'Aminata Touré',
        avatar: 'assets/authors/aminata.jpg'
      },
      views: 1580,
      comments: 89,
      isBookmarked: false,
      isUrgent: true
    },
    {
      id: 5,
      title: 'Exposition d\'Art Contemporain Africain',
      excerpt: 'Découvrez les œuvres d\'artistes africains contemporains dans notre nouvelle exposition au centre culturel.',
      image: 'assets/annonces/art.jpg',
      category: 'Culture',
      date: new Date('2025-02-25'),
      author: {
        name: 'Sekou Condé',
        avatar: 'assets/authors/sekou.jpg'
      },
      views: 750,
      comments: 12,
      isBookmarked: false,
      isUrgent: false
    },
    {
      id: 6,
      title: 'Formation aux Démarches Administratives',
      excerpt: 'Sessions de formation gratuite pour vous aider dans vos démarches administratives en France.',
      image: 'assets/annonces/formation.jpg',
      category: 'Communauté',
      date: new Date('2025-03-01'),
      author: {
        name: 'Mariama Bah',
        avatar: 'assets/authors/mariama.jpg'
      },
      views: 1200,
      comments: 34,
      isBookmarked: false,
      isUrgent: false
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    // Sort annonces by date (most recent first)
    this.annonces.sort((a, b) => b.date.getTime() - a.date.getTime());
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

  readMore(annonce: Annonce) {
    this.router.navigate(['/annonces-detail', annonce.id]);
  }

  share(annonce: Annonce) {
    if (navigator.share) {
      navigator.share({
        title: annonce.title,
        text: annonce.excerpt,
        url: window.location.origin + '/annonces-detail/' + annonce.id
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = window.location.origin + '/annonces-detail/' + annonce.id;
      navigator.clipboard.writeText(url).then(() => {
        console.log('URL copiée dans le presse-papier');
        // You could show a toast notification here
      });
    }
  }

  toggleBookmark(annonce: Annonce) {
    annonce.isBookmarked = !annonce.isBookmarked;
    console.log('Bookmark togglé:', annonce.title);
    // You could save this to local storage or send to server
  }

  voirPlusAnnonces() {
    this.router.navigate(['/annonces-detail']);
  }
}