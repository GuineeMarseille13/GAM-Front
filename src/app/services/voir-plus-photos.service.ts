import { Injectable } from '@angular/core';
import { VoirPlusphotos } from '../types/interfaces/VoirPlusphotos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoirPlusPhotosService {

  constructor() { }

   private getPhotos(): Observable<VoirPlusphotos[]> {
      return of([
        {
          titre: 'Fête de la Guinée 7 oct 2023',
          photos: [
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-1.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-2.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-3.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-4.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-5.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-6.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-7.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-8.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-9.jpg"
            }
          ]
        },
        {
          titre: 'Soirée ciné et pizza 24 nov 2023 ',
          photos: [
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-1.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-2.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-3.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-4.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-5.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-6.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-7.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-8.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-9.jpg"
            }
          ]
        },
        {
          titre: 'Distribution de fournitures scolaires 13 sept 2023',
          photos: [
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-1.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-2.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-3.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-4.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-5.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-6.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-7.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-8.jpg"
            },
            {
              photoSrc: "https://swiperjs.com/demos/images/nature-9.jpg"
            }
          ]
        },
      ]);
    }
  
    public getPlusPhotos(): Observable<VoirPlusphotos[]> {
      return this.getPhotos();
    }
}