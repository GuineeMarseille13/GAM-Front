import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssoInfoService {

  constructor() { }

  private getInfos(): Observable<any> {
    return of({
      name: "Guinée à Marseille",
      dateCreation: "17/05",
      anneCreation: "2021",
      tel: "+33767133928",
      mail: "guineeamarseille13@gmail.com",
      reseauxSociaux: {
        facebook: "https://www.facebook.com/GUINEEAMARSEILLE",
        tiktok: "",
        instagram: "https://www.instagram.com/guineeamarseille/",
        x: "http://twitter.com/GuineeMarseill1",
        linkedIn: ""
      }
    })
  }

  public getAssoInfos(): Observable<any> {
    return this.getInfos();
  }

}
