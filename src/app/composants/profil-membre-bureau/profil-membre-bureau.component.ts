import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MembreBureauInfo } from 'src/app/types/interfaces/membre-bureau-info';

@Component({
  selector: 'profil-membre-bureau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil-membre-bureau.component.html',
  styleUrl: './profil-membre-bureau.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilMembreBureauComponent {
  @Input({ required: true }) membreBureauInfo!: MembreBureauInfo;
}
