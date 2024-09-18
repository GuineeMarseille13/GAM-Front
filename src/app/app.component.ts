import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBarsStaggered, faHandHoldingDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink, RouterOutlet } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  protected isCallapse: boolean = true;

  protected faBarsStaggered = faBarsStaggered;
  protected faUsers = faUsers;
  protected faHandHoldingDollar = faHandHoldingDollar;
  protected faUser = faUser;

  protected showTitles(): void {
    this.isCallapse = false;
  }

  protected selectTitle(): void {
    this.isCallapse = true;
  }
}
