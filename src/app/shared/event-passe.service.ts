import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventPasse } from '../types/interfaces/eventPasse';

@Injectable({
  providedIn: 'root',
})
export class EventPasseService {

    private getEventPassesData(): Observable<EventPasse[]> {
        return of([
          {
            annee: '2023',
            events: [
              {
                titre:
                  "OCTOBRE 2023 fête de l'indépendance de la guinée - 65 ans",
                description:
                  'Dans le cadre de la fête nationale de la Guinée qui est le 02 Octobre, l’association Guinée à Marseille a organisé une journée de fête. Cette rencontre à servi de cadre pour faire découvrir la culture Guinéenne de différentes manières ',
                photo_couverture: {
                  id: '20231',
                  titre: "FETE DE L'INDEPENDANCE DE LA GUINEE - 65 ans",
                  url: '../../assets/event-passes/2023_fete_independance_octobre.webp',
                },
                voir_plus_photos: [
                  {
                    titre: 'Fête de la Guinée 7 oct 2023',
                    photos: [],
                  },
                  {
                    titre: 'Soirée ciné et pizza 24 nov 2023 ',
                    photos: [],
                  },
                  {
                    titre:
                      'Distribution de fournitures scolaires  13 sept 2023',
                    photos: [],
                  },
                ],
              },
              {
                titre:
                  'JUILLET 2023 visite au Muséum et pique-nique au Parc Longchamp',
                description:
                  "Retour en images des activités du 23 juillet.Pour l'occasion, nous avons eu à faire une visite au Muséum d'histoire  naturelle de Marseille (à la découverte d'animaux et plantes), suivie d'un pique-nique au Parc Longchamp.",
                photo_couverture: {
                  id: '20232',
                  url: '../../assets/event-passes/2023_visite_museum_pique_nique_parclongchamp.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'JUILLET 2023 Repas prix-libre',
                description:
                  "Nous tenons à remercier très chaleureusement les plus de soixante personnes qui ont participé à notre repas partagé le vendredi 7 juillet au restaurant Grenade et Pistache. Votre présence était très appréciée. Nous espérons vous revoir nombreux lors de notre prochaine activité Une partie des recettes sera reversée à l'association GUINEE A MARSEILLE",
                photo_couverture: {
                  id: '20233',
                  url: '../../assets/event-passes/2023_repas_prix_libre.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'JUIN 2023 Tournoi inter-associations',
                description:
                  'Nous remercions chaleureusement notre sponsor EcoClim, la Mairie 2&3 - Marseille pour la mise à disposition du terrain ainsi que tous les participants et les associations partenaires qui ont fait de cet événement un grand succès',
                photo_couverture: {
                  id: '20234',
                  url: '../../assets/event-passes/2023_tournoi_inter_associations.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'MAI 2023 Repas prix libre',
                description:
                  "Une centaine de personnes sont venus partager notre repas prix libre.Merci beaucoup aux bénévoles et aux participants qui ont œuvré à la réussite de cette soirée ! Une partie des recettes sera reversée à l'association GUINEE A MARSEILLE",
                photo_couverture: {
                  id: '20235',
                  url: '../../assets/event-passes/2023_mai_repas_prix_libre.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'MAI 2023 Repas solidaire',
                description:
                  'Ce repas à prix libre a était organisé et préparé par les bénévoles et les "minots" non accompagnés des deux associations ! Une partie des recettes sera reversée à l\'association GUINEE A MARSEILLE et l\'autre partie à Coco Velten afin de financer les approvisionnements des prochains repas mercredi.',
                photo_couverture: {
                  id: '20236',
                  url: '../../assets/event-passes/2023_repas_solidaire.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'AVRIL 2023 Table ronde sur la migration',
                description:
                  "L' Association Guinée A Marseille a participé à une table ronde aux côtés de La Cimade et SOS MEDITERRANEE France sur le Campus Saint Charles de Aix-Marseille Université à l'occasion d'une Journée sur la migration.Notre président Moussa a pris la parole pour échanger sur la thématique \"Migrations : la France, une terre d'accueil ?\"",
                photo_couverture: {
                  id: '20237',
                  url: '../../assets/event-passes/2023_table_ronde_migration.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'FEVRIER 2023 Cinéma "AVATAR 1"',
                description:
                  'Guinée à Marseille revient avec une projection de film… et pas n’importe lequel !  Il s’agit de personnages bleus, d’aventures, de paysages fantastiques et de combats. Alors, vous avez deviné ?! C’est bien Avatar 1 que nous avons tous et toutes regardé ensembles !',
                photo_couverture: {
                  id: '20238',
                  url: '../../assets/event-passes/2023_cinema_AVATAR_1.webp',
                },
                voir_plus_photos: [],
              },
            ],
          },
          {
            annee: '2022',
            events: [
              {
                titre: 'JANVIER 2022 PROJECTION BLACK PANTHER',
                description:
                  "La projection de Black Panther a rassemblé un trentaine de personnes de milieux et d'origines très diverses (guinéens, ivoiriens, français, marocains, italiens, maliens, gambiens). Nous voulions mettre à l’honneur un film d’action dans lequel la majorité des acteurs sont noirs. Ensuite nous avons partagé un goûter.",
                photo_couverture: {
                  id: '20221',
                  titre: 'PROJECTION BLACK PANTHER - 2022',
                  url: '../../assets/event-passes/2022_projection_black_panther.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'MAI 2022 TOURNOI DE FOOTBALL',
                description: `Lors de ce tournoi les associations suivantes ont été invitées : Singa, SOS MEDITERRANEE, Ramina, le foyer Chez les cousins de Soliha, le collectif 113, la Dimef et Eurocircle.
                              Le midi nous avons partagé un repas entre tous les participants ce qui a permis d'échanger en dehors du terrain. Les 3 équipes victorieuses du tournoi ont été récompensées avec 1 trophée chacune et des médailles ont été offertes à chaque participant.`,
                photo_couverture: {
                  id: '20222',
                  titre: 'TOURNOI DE FOOTBALL - 2022',
                  url: '../../assets/event-passes/2022_tournoi_foot.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'JUIN 2022 PIQUE-NIQUE',
                description: `Nous avons organisé un pique nique partagé dans le parc Borély où chacun a emmené quelque chose à partager.
                              Ce moment convivial a été l'occasion de faire un jeu Time's up sur des personnages célèbres guinéens et français.`,
                photo_couverture: {
                  id: '20223',
                  titre: 'PIQUE-NIQUE - 2022',
                  url: '../../assets/event-passes/2022_pique_nique.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: "OCTOBRE 2022 FETE DE L'INDEPENDANCE DE LA GUINEE",
                description: `Dans le cadre de la fête nationale de la Guinée qui est le 02 Octobre, l’association Guinée à Marseille a organisé une journée de fête. Cette rencontre à servi de cadre pour faire découvrir la culture Guinéenne de différentes manières :
                              Nous avons organisé un repas partagé basé sur la cuisine traditionnelle guinéenne : tiep et mafé accompagné de bissap, boisson traditionnelle de l'Afrique de l'ouest. Ce repas a été servi de manière gratuite sans discrimination.
                              Une présentation globale de la Guinée a été proposée aux participants à travers un reportage sur la confection des différents tissus guinéens (Lépi, Fôret sacrée, Kandili) et à travers un jeu sur les langues parlées en Guinée.
                              Un groupe de danseurs de danse contemporaine et Afrobeat a fait l'ouverture de la fête.
                              Deux poètes, Falmarès guinéen et Caroline De Freitas française, ont partagé leur poésie avec le public.
                              Nous avons fait venir des T-shirts Guinée 64 pour célébrer la 64ème année de l’indépendance de la Guinée.
                              DJ Saïd a animé la soirée avec des musiques qui font le lien entre l'Europe et l'Afrique.
                              Les membres de Guinée à Marseille ont fait faire des tenues avec des tissus Forêt sacrée par un couturier guinéen installé à Marseille et un défilé a permis de présenter ces tenues. Ainsi une vingtaine de personnes ont défilé avec leurs tenues faites sur mesure.`,
                photo_couverture: {
                  id: '20224',
                  titre: "FETE DE L'INDEPENDANCE DE LA GUINEE - 2022",
                  url: '../../assets/event-passes/2022_fete_independance_guinee.webp',
                },
                voir_plus_photos: [],
              },
            ],
          },
          {
            annee: '2021',
            events: [
              {
                titre: "OCTOBRE 2021 FETE DE L'INDEPENDANCE DE LA GUINEE",
                description: `Dans le cadre de la fête nationale de la Guinée qui est le 02 Octobre, l’association Guinée à Marseille a organisé une journée de fête dans les locaux de l'Après M. Cette rencontre à servi de cadre pour faire découvrir la culture Guinéenne de différentes manières :
                              Nous avons organisé un repas partagé basé sur la cuisine traditionnelle guinéenne : tiep et mafé accompagné de bissap, boisson traditionnelle de l'Afrique de l'ouest. Ce repas a été servi de manière gratuite, sans discrimination.
                              Une présentation globale de la Guinée a été proposée aux participants à travers un reportage.
                              Nous avons fait venir des T-shirts Guinée 63 pour célébrer la 63ème année de l’indépendance de la Guinée.`,
                photo_couverture: {
                  id: '20211',
                  titre: "FETE DE L'INDEPENDANCE DE LA GUINEE - 2021",
                  url: '../../assets/event-passes/2021_fete_independance_guinee.webp',
                },
                voir_plus_photos: [],
              },
            ],
          },
        ]);
    }

    public getEventsPasses(): Observable<EventPasse[]> {
        return this.getEventPassesData();
    }
}