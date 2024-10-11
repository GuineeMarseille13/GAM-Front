import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { InfoRapportActivite } from '../types/interfaces/info-rapport-activite';

@Injectable({
  providedIn: 'root'
})
export class RapportActiviteService {

  private getInfos(): Observable<InfoRapportActivite[]> {
    return of([
      {
        annee: '2022',
        url: '../../../assets/rapport-activite/rapport_activites_2022.pdf',
      },
      {
        annee: '2021',
        url: '../../../assets/rapport-activite/rapport_activites_2021.pdf',
      },
    ]);
  }

  public getRapportsActivites(): Observable<InfoRapportActivite[]> {
    return this.getInfos();
  }
}
