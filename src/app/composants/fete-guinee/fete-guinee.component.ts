import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  trigger, 
  state, 
  style, 
  transition, 
  animate 
} from '@angular/animations';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-fete-guinee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fete-guinee.component.html',
  styleUrls: ['./fete-guinee.component.css'],
  animations: [
    trigger('countAnimation', [
      transition('* => *', [
        style({ transform: 'scale(1.2)', color: '#f1c40f' }),
        animate('0.3s ease-out', style({ transform: 'scale(1)', color: '#fff' }))
      ])
    ])
  ]
})
export class FeteGuineeComponent implements OnInit, OnDestroy {
  
  targetDate: Date = new Date('2025-10-04T00:00:00'); // 4 octobre 2025
  targetYear: number = 67; // 67ème anniversaire (1958-2025)
  timeLeft: TimeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };
  
  isEventDay: boolean = false;
  private countdownInterval: any;

  constructor() {}

  ngOnInit() {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private updateCountdown() {
    const now = new Date().getTime();
    const targetTime = this.targetDate.getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
      this.isEventDay = false;
    } else {
      // Event day or past
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.isEventDay = this.isToday(this.targetDate);
    }
  }

  private isToday(date: Date): boolean {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  }

  formatNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  // Progress bars for visual appeal
  getDayProgress(): number {
    const totalDaysInYear = 365;
    const remainingDays = this.timeLeft.days;
    return ((totalDaysInYear - remainingDays) / totalDaysInYear) * 100;
  }

  getHourProgress(): number {
    return (this.timeLeft.hours / 24) * 100;
  }

  getMinuteProgress(): number {
    return (this.timeLeft.minutes / 60) * 100;
  }

  getSecondProgress(): number {
    return (this.timeLeft.seconds / 60) * 100;
  }

  celebrate() {
    this.createFireworks();
    // You could also trigger confetti, play music, etc.
  }

  private createFireworks() {
    const container = document.getElementById('fireworks-container');
    if (!container) return;

    // Clear previous fireworks
    container.innerHTML = '';

    // Create multiple firework bursts
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        this.createFireworkBurst(container, i);
      }, i * 300);
    }
  }

  private createFireworkBurst(container: HTMLElement, index: number) {
    const colors = ['#e74c3c', '#f1c40f', '#27ae60', '#3498db', '#9b59b6'];
    const burst = document.createElement('div');
    
    // Random position
    const x = 20 + (index * 15) + Math.random() * 20; // Spread across the width
    const y = 20 + Math.random() * 30; // Random height
    
    burst.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      pointer-events: none;
    `;

    // Create particles for this burst
    for (let j = 0; j < 12; j++) {
      const particle = document.createElement('div');
      const angle = (j * 30) * (Math.PI / 180); // 30 degrees apart
      const distance = 50 + Math.random() * 50;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 6px ${color};
        animation: firework-particle 1.5s ease-out forwards;
        --end-x: ${Math.cos(angle) * distance}px;
        --end-y: ${Math.sin(angle) * distance}px;
      `;
      
      burst.appendChild(particle);
    }

    container.appendChild(burst);

    // Add the firework particle animation
    if (!document.getElementById('firework-styles')) {
      const style = document.createElement('style');
      style.id = 'firework-styles';
      style.textContent = `
        @keyframes firework-particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Remove the burst after animation
    setTimeout(() => {
      if (container.contains(burst)) {
        container.removeChild(burst);
      }
    }, 2000);
  }
}