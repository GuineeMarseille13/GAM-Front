import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MembreBureauInfo } from '../types/interfaces/membre-bureau-info';

@Injectable({
  providedIn: 'root',
})
export class MembreBureauInfoService {
  private getInfos(): Observable<MembreBureauInfo[]> {
    return of([
      {
        prenon: 'Aicha',
        nom: 'KOUROUMA',
        poste: 'Sécretaire adjointe',
        photo_profil:
          'assets/notre-association/photo-profil/secretaireadjointe.jpg',
      },
      {
        prenon: 'Michelle',
        nom: 'DAO',
        poste: 'Sécretaire',
        photo_profil: 'assets/notre-association/photo-profil/secretaire.jpg',
      },
      {
        prenon: 'Mamadou Alpha',
        nom: 'DIALLO',
        poste: 'vice-président',
        photo_profil: 'assets/notre-association/photo-profil/vicepresident.jpg',
      },
      {
        prenon: 'Moussa',
        nom: 'CAMARA',
        poste: 'Président',
        photo_profil: 'assets/notre-association/photo-profil/president.jpg',
      },
      {
        prenon: 'Aboubacar Siddig',
        nom: 'DIALLO',
        poste: 'vice-président',
        photo_profil:
          'assets/notre-association/photo-profil/vicepresident2.jpg',
      },
      {
        prenon: 'Julie',
        nom: 'DELABY',
        poste: 'Trésorière',
        photo_profil: 'assets/notre-association/photo-profil/tresoriere.jpg',
      },
      {
        prenon: 'Aminata',
        nom: 'FOFANA',
        poste: 'Trésorière adjointe',
        photo_profil: 'assets/notre-association/photo-profil/vicetresorier.jpg',
      },
    ]);
  }

  public getMembreBureauInfos(): Observable<MembreBureauInfo[]> {
    return this.getInfos();
  }
}
