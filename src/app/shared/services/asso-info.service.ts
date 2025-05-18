import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssoInfoService {
  constructor() {}

  private getInfos(): Observable<any> {
    return of({
      name: 'Guinée à Marseille',
      dateCreation: '17/05',
      anneCreation: '2021',
      tel: '+33767133928',
      mail: 'guineeamarseille13@gmail.com',
      reseauxSociaux: {
        facebook: 'https://www.facebook.com/GUINEEAMARSEILLE',
        tiktok: 'https://www.tiktok.com/@guineeamarseille',
        instagram: 'https://www.instagram.com/guineeamarseille/',
        x: 'http://twitter.com/GuineeMarseill1',
        linkedIn:
          'https://fr.linkedin.com/posts/guin%C3%A9e-%C3%A0-marseille_solidarit%C3%A9-association-migrations-activity-7300156349592621058-UHjb',
      },
    });
  }

  public getAssoInfos(): Observable<any> {
    return this.getInfos();
  }
}
