import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MembreBureauInfo } from '../types/interfaces/membre-bureau-info';

@Injectable({
  providedIn: 'root'
})
export class MembreBureauInfoService {

  private getInfos(): Observable<MembreBureauInfo[]> {
    return of([
      {
        prenon: 'Moussa',
        nom: 'CAMARA',
        poste: 'Président',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Aboubacar Sidig',
        nom: 'DIALLO',
        poste: '1er vice-président',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Guillaume',
        nom: 'MADEC',
        poste: '2e vice-président',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Michelle',
        nom: 'DAO',
        poste: 'Sécretaire',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Manon',
        nom: 'BELAGI',
        poste: 'Sécretaire adjointe',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Julie',
        nom: 'DELABY',
        poste: 'Trésorière',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
      {
        prenon: 'Mody Hady',
        nom: 'BARRY',
        poste: 'Trésorier adjoint',
        photo_profil: 'assets/notre-association/photo-profil/aboubacar_sidig.JPG',
      },
    ]);
  }

  public getMembreBureauInfos(): Observable<MembreBureauInfo[]> {
    return this.getInfos();
  }
}
