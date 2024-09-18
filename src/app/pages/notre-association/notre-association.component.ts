import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabViewModule } from 'primeng/tabview';
import { faHouse, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { TabViewComponent } from "../../composants/tabView/tabView.component";


@Component({
  selector: 'notre-association',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    TabViewModule,
    RouterLink,
    TabViewComponent
],
  templateUrl: './notre-association.component.html',
  styleUrl: './notre-association.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotreAssociationComponent {
  faHouse = faHouse;
  faFile = faFile;
  faUserTie = faUserTie;
}
