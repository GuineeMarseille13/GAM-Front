import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'profil-membre-bureau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-membre-bureau.component.html',
  styleUrl: './profil-membre-bureau.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilMembreBureauComponent {
  @Input({ required: true }) prenom: string = 'Moussa';
  @Input({ required: true }) nom: string = 'CAMARA';
  @Input({ required: true }) poste: string = 'Président';
}
