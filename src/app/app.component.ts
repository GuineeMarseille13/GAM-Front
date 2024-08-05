import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faBarsStaggered, faHandHoldingDollar, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  faBarsStaggered = faBarsStaggered;
  faUsers = faUsers;
  faHandHoldingDollar = faHandHoldingDollar;
}
