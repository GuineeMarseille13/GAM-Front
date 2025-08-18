import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/animations';

interface SocialPlatform {
  id: 'facebook' | 'instagram' | 'tiktok' | 'linkedin';
  name: string;
  icon: string;
  color: string;
}

interface SocialStats {
  followers: string;
  posts: number;
}

@Component({
  selector: 'app-social-feeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './social-feeds.component.html',
  styleUrls: ['./social-feeds.component.css'],
  animations: [
    trigger('slideContent', [
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('* => *', [
        style({ transform: 'translateX(20px)', opacity: 0 }),
        animate('0.3s ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('postAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.4s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SocialFeedsComponent implements OnInit {
  
  selectedPlatform: 'facebook' | 'instagram' | 'tiktok' | 'linkedin' = 'facebook';
  
  socialPlatforms: SocialPlatform[] = [
    { id: 'facebook', name: 'Facebook', icon: 'fab fa-facebook', color: '#1877f2' },
    { id: 'instagram', name: 'Instagram', icon: 'fab fa-instagram', color: '#e4405f' },
    { id: 'tiktok', name: 'TikTok', icon: 'fab fa-tiktok', color: '#000000' },
    { id: 'linkedin', name: 'LinkedIn', icon: 'fab fa-linkedin', color: '#0077b5' }
  ];

  // Statistics (données réelles à mettre à jour)
  facebookStats: SocialStats = { followers: '15K+', posts: 200 };
  instagramStats: SocialStats = { followers: '12K+', posts: 400 };
  tiktokStats: SocialStats = { followers: '8K+', posts: 80 };
  linkedinStats: SocialStats = { followers: '3K+', posts: 100 };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    // Initialize component
  }

  selectPlatform(platformId: 'facebook' | 'instagram' | 'tiktok' | 'linkedin') {
    this.selectedPlatform = platformId;
  }

  formatDate(date: Date): string {
    if (date instanceof Date) {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleDateString('fr-FR', options);
    }
    return '';
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  }

  getFacebookEmbedUrl(): SafeResourceUrl {
    // URL officielle du Facebook Page Plugin
    const facebookPageUrl = 'https://www.facebook.com/GUINEEAMARSEILLE';
    const embedUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookPageUrl)}&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`;
    
    return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }
}