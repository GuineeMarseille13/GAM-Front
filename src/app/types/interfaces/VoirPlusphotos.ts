import { Photo } from "./photo";

export interface VoirPlusphotos { 
    titre: string,
    photos: Partial<Photo>[]
 }
