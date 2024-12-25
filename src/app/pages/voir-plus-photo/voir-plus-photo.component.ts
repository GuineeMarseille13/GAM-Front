import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoirPlusphotos } from 'src/app/types/interfaces/VoirPlusphotos';
import { GalerieComponent } from "../../composants/galerie/galerie.component";
import { VoirPlusPhotosService } from 'src/app/services/voir-plus-photos.service';

@Component({
  selector: 'voir-plus-photo',
  standalone: true,
  imports: [CommonModule, GalerieComponent],
  templateUrl: './voir-plus-photo.component.html',
  styleUrl: './voir-plus-photo.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VoirPlusPhotoComponent implements OnInit{

  protected galeries: VoirPlusphotos[] = [];

  constructor(private router: Router, private voirPlusPhotosService: VoirPlusPhotosService) {
    const navigation = this.router.getCurrentNavigation();
    let state = navigation?.extras.state;
    if (state) {
      this.galeries = state['galerie'];
    }
  }

  ngOnInit(): void {
    this.voirPlusPhotosService.getPlusPhotos().subscribe(vpp => this.galeries = vpp);
  }
}
