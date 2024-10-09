import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProductsData() {
    return [
      {
        name: 'SOS Méditerranée',
        commentaire: `J’ai le plaisir de rédiger cette lettre de recommandation pour l’association Guinée à Marseille, sous la présidence actuelle de Moussa Camara, jeune rescapé d’un navire de sauvetage de SOS MEDITERRANEE, secouru en mer en 2016. 
                      A l’occasion d’un évènement que tenait SOS MEDITERRANEE à La Criée à Marseille en juin 2017 ce jeune homme s’est présenté sur le stand des bénévoles de SOS MEDITERRANEE, et y a reconnu la photo de l’Aquarius, navire qui lui a porté secours.
                      Depuis son arrivée à Marseille, il a évolué dans son parcours, il s’est stabilisé et a repris ces études et est en cours de terminer son BTS.
                      Il a depuis sa première rencontre à terre avec les équipes de SOS MEDITERRANEE exprimait son envie de s’engager et de témoigner sur son parcours, sa traversée de la Méditerranée. 
                      C’est en 2021 qu’il rejoint officiellement l’association, et intègre l’équipe bénévole de l’antenne marseillaise. Dès lors, il participe aux évènements auxquels sont invités SOS MEDITERRANEE, et apporte son témoignage lorsque cela est possible. Sa présence au sein de l’antenne béné- vole renforce la mission de Témoignage que se donne l’association. Il est convaincu que par la libération de la parole et le témoignage apporté sur son parcours d’exil et sa traversée en mer, il peut contribuer à sensibiliser les citoyennes et citoyens sur les réalités et les drames des naufrages en Méditerranée. 
                      Il a par la suite créé l’association Guinée à Marseille – GAM – association qui a pour objectif de lutter contre toutes formes de discrimination par l’animation d’ateliers de sensibilisation et d’évènements pour prôner sur l’ouverture culture entre le continent européen et africain. 
                      Aujourd’hui SOS MEDITERRANEE participe à certains des évènements organisés par le GAM, les deux associations partageant les mêmes valeurs d’humanité et de solidarité. Moussa Ca- mara, étant que bénévole au sein de l’antenne de Marseille continue d’apporter son soutien bénévole et son témoignage lorsque des évènements s’y prêtent. 
                      Ghislaine BOYER
                      Déléguée à la mobilisation citoyenne`,
        image: '../../../assets/main/partenaires/sos_mediterranee.jpeg',
      },
      {
        name: 'Mairie 6 & 8',
        commentaire: '',
        image: '../../../assets/main/partenaires/mairie_6_8.png',
      },
      {
        name: 'Mairie 1 & 7',
        commentaire: '',
        image: '../../../assets/main/partenaires/mairie_1_7.png',
      },
      {
        name: 'Ramina',
        commentaire: '',
        image: '../../../assets/main/partenaires/ramina.jpeg',
      },
      {
        name: 'Singa',
        commentaire: '',
        image: '../../../assets/main/partenaires/singa.png',
      },
      {
        name: 'Soliha',
        commentaire: '',
        image: '../../../assets/main/partenaires/soliha.png',
      },
      {
        name: 'Imajes',
        commentaire: '',
        image: '../../../assets/main/partenaires/imajes.png',
      },
      {
        name: 'Ecole de danse MAM',
        commentaire: '',
        image: '../../../assets/main/partenaires/ecole_danse_mam.jpeg',
      },
      {
        name: 'Euro Circle',
        commentaire: '',
        image: '../../../assets/main/partenaires/euro_circle.jpeg',
      },
      {
        name: "l'après M",
        commentaire: '',
        image: '../../../assets/main/partenaires/apres_m.png',
      },
    ];
  }

  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
}
