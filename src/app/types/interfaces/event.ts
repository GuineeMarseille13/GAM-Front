import { Photo } from "./photo";

export interface EventGam {
  titre: string;
  description: string;
  photo_couverture: Partial<Photo>;
  voir_plus_photos: any[];
}
