import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/animations';

interface VideoCategory {
  id: string;
  name: string;
  icon: string;
}

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  embedUrl: string;
  duration: string;
  publishedAt: Date;
  views: number;
  likes: number;
  category: string;
  tags?: string[];
  isFavorite: boolean;
  isLiked?: boolean;
  isPlaying?: boolean;
}

@Component({
  selector: 'app-videos-youtube',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos-youtube.component.html',
  styleUrls: ['./videos-youtube.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('videoAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.9)' }),
        animate('0.5s ease-out', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ])
  ]
})
export class VideosYoutubeComponent implements OnInit, OnDestroy {
  
  categories: VideoCategory[] = [
    { id: 'all', name: 'Toutes', icon: 'fas fa-th' },
    { id: 'events', name: 'Événements', icon: 'fas fa-calendar' },
    { id: 'culture', name: 'Culture', icon: 'fas fa-theater-masks' },
    { id: 'testimonials', name: 'Témoignages', icon: 'fas fa-quote-left' },
    { id: 'news', name: 'Actualités', icon: 'fas fa-newspaper' }
  ];

  allVideos: Video[] = [
    {
      id: '1',
      title: 'Célébration de l\'Indépendance de la Guinée 2024',
      description: 'Revivez les moments forts de notre célébration du 66ème anniversaire de l\'indépendance de la Guinée à Marseille.',
      thumbnail: 'assets/videos/independence-2024.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '15:32',
      publishedAt: new Date('2024-10-05'),
      views: 12500,
      likes: 890,
      category: 'events',
      tags: ['indépendance', 'guinée', 'célébration', 'marseille'],
      isFavorite: false,
      isLiked: false
    },
    {
      id: '2',
      title: 'Atelier de Cuisine Traditionnelle Guinéenne',
      description: 'Découvrez les secrets de la cuisine guinéenne avec nos chefs traditionnels dans cet atelier pratique.',
      thumbnail: 'assets/videos/cuisine-workshop.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '22:15',
      publishedAt: new Date('2024-11-15'),
      views: 8900,
      likes: 567,
      category: 'culture',
      tags: ['cuisine', 'tradition', 'atelier', 'apprentissage'],
      isFavorite: false,
      isLiked: false
    },
    {
      id: '3',
      title: 'Témoignage de Mamadou - Intégration Réussie',
      description: 'Mamadou nous raconte son parcours d\'intégration en France et comment l\'association GAM l\'a aidé.',
      thumbnail: 'assets/videos/testimonial-mamadou.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '8:45',
      publishedAt: new Date('2024-12-01'),
      views: 5600,
      likes: 423,
      category: 'testimonials',
      tags: ['témoignage', 'intégration', 'parcours', 'aide'],
      isFavorite: true,
      isLiked: false
    },
    {
      id: '4',
      title: 'Tournoi de Football Inter-Communautés 2024',
      description: 'Highlights du grand tournoi de football qui a réuni toutes les communautés de Marseille.',
      thumbnail: 'assets/videos/football-tournament.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '18:20',
      publishedAt: new Date('2024-09-20'),
      views: 15200,
      likes: 1100,
      category: 'events',
      tags: ['football', 'sport', 'tournoi', 'communauté'],
      isFavorite: false,
      isLiked: true
    },
    {
      id: '5',
      title: 'Collecte de Fonds pour l\'École de Conakry',
      description: 'Présentation de notre projet de collecte de fonds pour la construction d\'une école en Guinée.',
      thumbnail: 'assets/videos/fundraising-school.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '12:30',
      publishedAt: new Date('2024-12-10'),
      views: 7800,
      likes: 650,
      category: 'news',
      tags: ['solidarité', 'éducation', 'collecte', 'guinée'],
      isFavorite: false,
      isLiked: false
    },
    {
      id: '6',
      title: 'Danse Traditionnelle Guinéenne - Spectacle',
      description: 'Magnifique spectacle de danse traditionnelle présenté par notre groupe culturel.',
      thumbnail: 'assets/videos/traditional-dance.jpg',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '14:55',
      publishedAt: new Date('2024-11-30'),
      views: 9500,
      likes: 780,
      category: 'culture',
      tags: ['danse', 'tradition', 'spectacle', 'culture'],
      isFavorite: false,
      isLiked: false
    }
  ];

  filteredVideos: Video[] = [];
  selectedVideo: Video | null = null;
  featuredVideo: Video | null = null;
  selectedCategory: string = 'all';
  isLoading: boolean = false;
  hasMoreVideos: boolean = true;

  // Statistics
  totalVideos: number = 0;
  totalViews: number = 0;
  totalLikes: number = 0;
  subscribers: string = '2.5K';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.filteredVideos = [...this.allVideos];
    this.featuredVideo = this.allVideos[0]; // Premier vidéo comme featured
    this.calculateStatistics();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  filterByCategory(categoryId: string) {
    this.selectedCategory = categoryId;
    
    if (categoryId === 'all') {
      this.filteredVideos = [...this.allVideos];
    } else {
      this.filteredVideos = this.allVideos.filter(video => video.category === categoryId);
    }
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Autre';
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  selectVideo(video: Video) {
    this.selectedVideo = video;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.selectedVideo = null;
    document.body.style.overflow = 'auto';
  }

  playVideo(video: Video) {
    video.isPlaying = true;
    // In a real implementation, you would handle the video play logic here
  }

  toggleFavorite(video: Video) {
    video.isFavorite = !video.isFavorite;
    console.log('Favori togglé:', video.title);
    // Save to localStorage or send to server
  }

  toggleLike(video: Video) {
    video.isLiked = !video.isLiked;
    if (video.isLiked) {
      video.likes++;
    } else {
      video.likes = Math.max(video.likes - 1, 0);
    }
    console.log('Like togglé:', video.title);
    this.calculateStatistics();
  }

  shareVideo(video: Video) {
    const videoUrl = `https://youtube.com/watch?v=${video.id}`;
    
    if (navigator.share) {
      navigator.share({
        title: video.title,
        text: video.description,
        url: videoUrl
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(videoUrl).then(() => {
        console.log('URL de la vidéo copiée dans le presse-papier');
        // You could show a toast notification here
      });
    }
  }

  addToPlaylist(video: Video) {
    console.log('Vidéo ajoutée à la playlist:', video.title);
    // Implement playlist logic
    // You could show a toast notification here
  }

  loadMoreVideos() {
    this.isLoading = true;
    
    // Simulate API call
    setTimeout(() => {
      // In a real implementation, you would load more videos from an API
      console.log('Chargement de plus de vidéos...');
      this.isLoading = false;
      this.hasMoreVideos = false; // No more videos to load for demo
    }, 1500);
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
  }

  formatViews(views: number): string {
    if (views >= 1000000) {
      return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      return (views / 1000).toFixed(1) + 'K';
    }
    return views.toString();
  }

  private calculateStatistics() {
    this.totalVideos = this.allVideos.length;
    this.totalViews = this.allVideos.reduce((sum, video) => sum + video.views, 0);
    this.totalLikes = this.allVideos.reduce((sum, video) => sum + video.likes, 0);
  }
}