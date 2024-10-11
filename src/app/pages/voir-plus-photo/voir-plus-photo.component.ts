import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { VoirPlusphotos } from 'src/app/types/interfaces/VoirPlusphotos';
import { GalerieComponent } from "../../composants/galerie/galerie.component";

@Component({
  selector: 'voir-plus-photo',
  standalone: true,
  imports: [CommonModule, GalerieComponent],
  templateUrl: './voir-plus-photo.component.html',
  styleUrl: './voir-plus-photo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoirPlusPhotoComponent {

  protected galeries: VoirPlusphotos[] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    let state = navigation?.extras.state;
    if (state) {
      this.galeries = state['galerie'];
    }
  }
}
