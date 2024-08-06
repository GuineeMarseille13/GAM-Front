import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCirclePlay, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  protected isDisplayPresentationGuinee: boolean = false;
  protected isDisplayPresentationFrance: boolean = false;
  protected isDisplayHymneGuinee: boolean = false;
  protected isDisplayHymneFrance: boolean = false;

  faCircleXmark = faCircleXmark;
  faCirclePlay = faCirclePlay;

  private isGuinee(pays: 'Guinee' | 'France'): boolean {
    return pays === 'Guinee';
  }

  protected displayVideo(presentation: boolean, pays: 'Guinee' | 'France'): void {
    if (presentation) {
      if (this.isGuinee(pays)) {
        this.isDisplayPresentationGuinee = true;
      } else {
        this.isDisplayPresentationFrance = true;
      }
    } else {
      if (this.isGuinee(pays)) {
        this.isDisplayHymneGuinee = true;
      } else {
        this.isDisplayHymneFrance = true;
      }
    }
  }

  protected hideVideo(presentation: boolean, pays: 'Guinee' | 'France'): void {
    if (presentation) {
      if (this.isGuinee(pays)) {
        this.isDisplayPresentationGuinee = false;
      } else {
        this.isDisplayPresentationFrance = false;
      }
    } else {
      if (this.isGuinee(pays)) {
        this.isDisplayHymneGuinee = false;
      } else {
        this.isDisplayHymneFrance = false;
      }
    }
  }
}
