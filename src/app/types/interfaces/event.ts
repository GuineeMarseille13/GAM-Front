import { Photo } from "./photo";
import { VoirPlusphotos } from "./VoirPlusphotos";

export interface EventGam {
  titre: string;
  description: string;
  photo_couverture: Partial<Photo>;
  voir_plus_photos: VoirPlusphotos[];
}
