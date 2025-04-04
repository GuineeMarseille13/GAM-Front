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
            annee: '2024',
            events: [
              {
                titre: "NOVEMBRE 2024 TROPHEES DE L’ENGAGEMENT CITOYEN",
                description: 
                `
                  <p>
                    Cette année, 6 bénévoles ont reçu un Passeport
                    d’engagement bénévole octroyé par la Mairie de Marseille et
                    2 de nos bénévoles ont été tirés au sort pour recevoir un
                    trophée de l’engagement citoyen. Ces récompenses, remisent
                    par Mr HEDDADI, adjoint au maire en charge de la Vie
                    associative, permettent de valoriser le travail et
                    l’engagement des bénévoles des associations marseillaises.
                  </p>
                  <p>
                    Bravo à Aboubacar SOW, Mamadou Alpha DIALLO, Aïcha KOUROUMA, Aboubacar Sidig DIALLO et Sekou II
                    pour leur engagement !
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/trophees_engagement_citoyen/trophees_engagement_citoyen_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/trophees_engagement_citoyen/trophees_engagement_citoyen_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/trophees_engagement_citoyen/trophees_engagement_citoyen_2.jpg', alt: '' },
                ],
              },
              {
                titre: "OCTOBRE 2024 STAND A L’EVENEMENT DE SOS MEDITERRANEE",
                description: 
                `
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "",
                },
                voir_plus_photos: [],
              },
              {
                titre: "OCTOBRE 2024 CONFERENCE LA’MINE D’OR",
                description: 
                `
                  <p>
                    Dans le cadre de la tournée européenne intitulée LA’MINE D’OR TOUR, menée par Lamine Guirassy et Bademba Barry, auteur
                    du livre LA’MINE D’OR, notre association a eu l’honneur d’organiser pour la première fois une conférence exceptionnelle le 5
                    octobre.
                  </p>

                  <p>
                    Celle-ci portait sur le thème 'Retour à la maison : opportunités et défis pour la diaspora guinéenne et africaine après des
                    études en Europe.
                  </p>

                  <h6 style="background-color: #245936; color: white; width: 100%; padding: 10px; margin: 0;">
                     Journalistes invités : Lamine GUIRASSY, Bademba BARRY et Fresh DD
                  </h6>

                  <p style="text-align: left;">
                    <strong>Lamine GUIRASSY</strong>, PDG de plusieurs médias radio et télévision en Guinée, notamment Espace TV, Espace FM, Kalac TV et Sweet
                    FM, a captivé l’audience avec son parcours inspirant. Aux côtés de <strong>Bademba Barry</strong> et interrogé par <strong>Fresh DD</strong>, il a partagé ses
                    réflexions sur les défis auxquels la diaspora Africaine est confrontée lorsqu’elle envisage un retour au pays après un séjour en
                    Europe, ainsi que sur son parcours de vie.
                  </p>

                  <p style="text-align: left;">
                    Cette première conférence a rassemblé <strong>plus de 100 participants</strong>, créant un espace d’échange interactif. Les discussions ont
                    porté sur les obstacles structurels, les solutions pour intégrer les compétences acquises à l’étranger et les moyens de favoriser un
                    impact positif sur les sociétés locales en Afrique.
                  </p>

                  <p style="text-align: left;">
                    Organisée dans une grande salle de conférence mise à disposition par la Cité des Associations et avec une vraie implication de nos
                    bénévoles, cette conférence a été un véritable succès. Elle a permis de renforcer les liens et la solidarité entre la diaspora ouest
                    africaine tout en favorisant les échanges d’idées et les partages d’expérience.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/conference_lamine_d_or/conference_lamine_d_or_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/conference_lamine_d_or/conference_lamine_d_or_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/conference_lamine_d_or/conference_lamine_d_or_2.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/conference_lamine_d_or/conference_lamine_d_or_3.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/conference_lamine_d_or/conference_lamine_d_or_4.jpg', alt: '' },
                ],
              },
              {
                titre: "29 SEPTEMBRE 2024 FETE DE LA GUINEE",
                description: 
                `
                  <p class="custom-shadow row p-2 m-3" style="box-shadow: 0 0.125rem 0.25rem #245936; padding: 10px; margin: 0; border-radius: 5px; background-color: #f8f9fa;">
                    À l'occasion de la Fête Nationale de la
                    Guinée, célébrée chaque année le 2 octobre,
                    nos bénévoles ont une fois de plus démontré
                    leur engagement et leur passion en
                    organisant, pour la 4ème année consécutive,
                    <strong>une journée de fête, de partage et de
                    convivialité</strong>.
                  </p>

                  <p>
                    Cette année, l'événement s’est tenu à Montredon, dans le
                    8ème arrondissement de Marseille, offrant un cadre en
                    plein air et accueillant pour honorer cette date
                    historique.
                  </p>

                  <p>
                    Avec 330 participants, la Fête de la Guinée 2024 a
                    rassemblé un public diversifié : membres de la
                    communauté guinéenne, amis marseillais et curieux
                    venus découvrir la richesse de la culture guinéenne.
                  </p>

                  <h6 style="background-color: #245936; color: white; width: 100%; padding: 10px; margin: 0;">
                    ARTISTES PRINCIPAUX : BANLIEUZ’ART
                  </h6>

                  <p style="text-align: left;">
                    <strong>Banlieuz’Art</strong> est bien plus qu’un simple groupe musical. Ils sont des porte-voix pour des causes essentielles, notamment
                    la défense des droits des femmes, l’accès à l’éducation pour les jeunes filles, la lutte contre l’excision et la violence faite
                    aux femmes. Leur musique ne se limite pas à sensibiliser sur ces thématiques cruciales : elle invite également à réfléchir
                    sur le vivre-ensemble, en prônant la paix et l’unité entre les différentes ethnies de la Guinée.
                  </p>

                  <p style="text-align: left;">
                    Leur présence lors de cette célébration a été un moment fort et émouvant. Ils ont su captiver le public avec leurs
                    mélodies entraînantes et leurs paroles engagées, transmettant un message de solidarité, de respect et d’harmonie. Ce
                    concert n’a pas seulement mis en lumière la richesse culturelle de la Guinée, mais a également rappelé l’importance de
                    construire une société inclusive et équitable
                  </p>

                  <h6 style="background-color: #245936; color: white; width: 100%; padding: 10px; margin: 0;">
                    5 groupes d’artistes, 7h de spectacle :
                  </h6>
                  <ul style="list-style: none; padding-left: 0; margin-left: 0;">
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span><strong>Muleketu</strong>, un groupe de batucada, musique afro descendante du Brésil, a fait l'ouverture de la fête.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span><strong>Des jeunes talents africains</strong></span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span><strong>Sidiki Koumbassa et sa troupe</strong> ont enflammé la soirée au rythme des djembé, tam-tam et balafon traditionnels de Guinée.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span><strong>DJ Saïd</strong> a animé la soirée avec des musiques qui font le lien entre l'Europe et l'Afrique.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span><strong>Le groupe Banlieuz’Art</strong> ont dévoilé leurs textes en français et en Soussou inspirés de leur exil.</span>
                    </li>
                  </ul>

                  <h6 style="background-color: #245936; color: white; width: 100%; padding: 10px; margin: 0;">
                   Cette rencontre a aussi permis de faire découvrir la culture Guinéenne de différentes manières :
                  </h6>
                  <ul style="list-style: none; padding-left: 0; margin-left: 0;">
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span style="flex: 1; text-align: left;">Un bar qui proposait différentes boissons comme du bissap, du jus de gingembre et des sodas.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span style="flex: 1; text-align: left;">Nous avons organisé <strong>un repas basé sur la cuisine traditionnelle guinéenne</strong> : tiep et mafé étaient au menu.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span style="flex: 1; text-align: left;">Nous avons fait venir des <strong>T-shirts Guinée 66</strong> pour célébrer la 66ème année d’indépendance de la Guinée.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span style="flex: 1; text-align: left;">Une douzaine de membres de Guinée à Marseille a défilé avec leurs tenues faites sur mesure avec des <strong>tissus Forêt sacrée et Lépi, tissus traditionnels de Guinée</strong>.</span>
                    </li>
                    <li style="display: flex; align-items: flex-start; margin-bottom: 0.5rem;">
                      <span style="color: #245936; margin-right: 0.5rem;">•</span>
                      <span style="flex: 1; text-align: left;"><strong>L’exposition “Sauver, protéger, témoigner” de SOS MEDITERRANEE</strong> a permis de sensibiliser le public au drame qui se déroule en Méditerranée.</span>
                    </li>
                  </ul>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_2.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_3.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_4.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_5.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_6.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_7.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_8.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/fete_de_la_guinee/fete_de_la_guinee_9.jpg', alt: '' },
                ],
              },
              {
                titre: "SEPTEMBRE 2024 - ACCUEIL DES NOUVEAUX ÉTUDIANTS, COLLECTE ET DISTRIBUTION DE FOURNITURES SCOLAIRES",
                description: 
                `
                  <p>
                    Afin d’accueillir les étudiants nouvellement arrivés à Marseille, nous avons organisé
                    <strong>un goûter et des jeux à la Friche Belle De mai</strong>.
                  </p>
                  <p>
                    Ce moment convivial a été l’occasion de participer à des <strong>jeux pour faire
                    connaissance :</strong> un bingo et un jeu de mime. Comme  l’année dernière, nous avons
                    terminé l’après-midi par une distribution de fournitures scolaires, collectées grâce à
                    <strong>une collecte organisée quelques jours auparavant à Vitrolles</strong>. Ce moment est
                    aussi l’occasion pour les anciens étudiants de partager leur expérience, donner des
                    conseils et écouter les besoins des nouveaux arrivants afin que chacun se sente
                    moins seul.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_2.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_3.jpg', alt: '' },  
                  { itemImageSrc: 'assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_4.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/distri de fournitures scolaires/distri_fourniture_scolaire_5.jpg', alt: '' },
                ],
              },
              {
                titre: "JUILLET 2024 - RÉUNION D'INFORMATION",
                description: 
                `
                  <p>
                    Nous avons organisé notre première réunion d’information sur
                    les actions de notre association. 
                  </p>
                  <p>
                    Ce rendez-vous a été une belle occasion de présenter en détail
                    nos projets, nos initiatives et nos objectifs à un public curieux
                    et engagé qui a pu poser ses questions.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/reunion d'information/reunion_information_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/reunion d_information/reunion_information_1.jpg', alt: '' },
                ],
              },
              {
                titre: "JUIN 2024 - LES J.O. SANS FRONTIÈRES",
                description: 
                `
                  <p>
                    Petits et grands se sont retrouvés pour les Jeux Olympiques
                    Sans Frontières à Aix-en-Provence organisés par Amnesty
                    International.
                  </p>
                  <p>
                    Des jeux pour tous, du rire, de la musique et de la danse…  
                    l'occasion de se mélanger entre membres de différentes
                    associations locales et de découvrir d'autres cultures. Nous
                    avons terminé l’après-midi en partageant un apéritif en
                    musique et en plein air.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/les J.O. sans frontières/jo_sans_frontiere_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/les J.O. sans frontières/jo_sans_frontiere_1.jpg', alt: '' },
                ],
              },
              {
                titre: "JUIN 2024 - TABLE RONDE “ACCUEILLIR À MARSEILLE”",
                description: 
                `
                  <p>
                    Nous avons participé à une table ronde passionnante sur le
                    thème du logement et de la mise à l'abri à Marseille et sa
                    région. Cet événement a réuni divers acteurs associatifs et
                    institutionnels engagés dans ce secteur, permettant des
                    échanges riches et constructifs.
                  </p>
                  <p>
                    Les échanges ont permis d’informer sur les actions de notre
                    association et faire part du nombre de personnes
                    accompagnées et hébergées.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/table ronde/table-rond_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/table ronde/table-rond_1.jpg', alt: '' },
                ],
              },
              {
                titre: "MAI 2024 - PIQUE NIQUE ET JEUX",
                description: 
                `
                  <p>
                    Un moment de partage, de jeux et de gourmandise 
                  </p>
                  <p>
                    Un dimanche après-midi extraordinaire en plein air au parc
                    Borély. C’était l’occasion idéale pour découvrir et partager
                    des jeux venus des quatre coins du monde, dans une
                    ambiance conviviale et inclusive, le tout accompagné d’un
                    délicieux goûter. Une belle journée placée sous le signe du
                    rire, de l’échange et de la bonne humeur.
                  </p>
                  
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/PIQUE NIQUE et jeux/Pique-nique juin 24_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/PIQUE NIQUE et jeux/Pique-nique juin 24_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/PIQUE NIQUE et jeux/Pique-nique juin 24_2.jpg', alt: '' },
                ],
              },
              {
                titre: "MAI 2024 - ÉCHANGE  EVOCAE",
                description: 
                `
                  <p>
                    Le président de GAM a eu l’honneur de participer à un
                    échange avec les stagiaires du programme Evocae. Il a
                    pu partager son parcours inspirant, suscitant un dialogue
                    enrichissant et interactif. Ce moment d’échange a
                    permis de transmettre des expériences, d’éveiller des
                    réflexions et de renforcer les liens autour de valeurs
                    communes.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/ÉCHANGE  evocae/echange_evoca_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/ÉCHANGE  evocae/echange_evoca_1.jpg', alt: '' },
                ],
              },
              {
                titre: "MAI 2024 - TEMOIGNAGES DANS UN COLLEGE",
                description: 
                `
                  <p>
                    3 jeunes guinéens de notre association ont eu l’opportunité
                    de participer à une après-midi sur le thème des migrations
                    au collège Saint Mauront de Marseille. Ils ont pu témoigner
                    de leur parcours migratoire auprès de collégiens en classe
                    de 4ème qui étudiaient un chapitre d’histoire qui traite du
                    même sujet. 
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/TEMOIGNAGEs DANS UN COLLEGE/temoignage-jeunes-GAM_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/TEMOIGNAGEs DANS UN COLLEGE/temoignage-jeunes-GAM_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/TEMOIGNAGEs DANS UN COLLEGE/temoignage-jeunes-GAM_2.jpg', alt: '' },
                ],
              },
              {
                titre: "MARS 2024 - FETE DE L’AÏD",
                description: 
                `
                  <p>
                    À l'occasion de l'Aïd, nous avons organisé avec l’aide
                    de Khadidja, une cuisinière hors paire, un grand
                    repas festif réunissant les membres et bénévoles de
                    notre association. Ce moment chaleureux a permis
                    de célébrer cette fête dans une ambiance conviviale
                    et fraternelle.
                  </p>
                  <p>
                    Ce repas a été bien plus qu’un simple partage de
                    mets savoureux : il a symbolisé nos valeurs d’unité,
                    de solidarité et de respect mutuel.
                  </p>
                  <p>
                    Cette soirée  a renforcé les liens au sein de notre
                    communauté et témoigne de l’importance de
                    maintenir ces traditions tout en les partageant avec
                    tous, au-delà des croyances et des origines. Un grand
                    merci à tous ceux qui ont organisé ce repas et à ceux
                    qui ont participé et rendu cet événement
                    mémorable. 
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/Fete de Aid/fete_aid_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/Fete de Aid/fete_aid_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/Fete de Aid/fete_aid_2.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/Fete de Aid/fete_aid_3.jpg', alt: '' },
                ],
              },
              {
                titre: "MARS 2024 - VISITE DU CAMP DES MILLES",
                description: 
                `
                  <p>
                    Ce camp d'internement et de déportation, encore intact aujourd'hui, a
                    été témoin de la tragédie de la Shoah et nous rappelle les dangers de la
                    haine et de l'intolérance.
                    La visite était à la fois informative et émouvante, nous avons été
                    profondément touchés par l'histoire de ce lieu.
                  </p>
                  <p> 
                    Après la visite du Camp des Milles, une activité a eu lieu à la Cité des
                    Associations avec un débat interactif et une réflexion commune sur les
                    préjugés. C'était l'occasion de réfléchir aux mécanismes qui mènent au
                    génocide et de discuter des moyens de lutter contre la haine et la
                    discrimination.
                  </p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/visite du camp des milles/Camp des Milles_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/visite du camp des milles/Camp des Milles_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/visite du camp des milles/Camp des Milles_2.jpg', alt: '' },
                ],
              },
              {
                titre: " MARS 2024 - RUPTURE COLLECTIVE DU JEUN",
                description: 
                `
                  Dans le cadre du mois de Ramadan, nous avons organisé une
                  rupture collective du jeûne réunissant un grand nombre de
                  nos bénévoles, croyants et non-croyants. Cet événement a été
                  une belle occasion de partage et de convivialité, où chacun a
                  pu découvrir et célébrer les valeurs d’entraide, de respect et
                  de tolérance qui nous rassemblent.
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/rupture collective du jeun/rupture_collectif_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/rupture collective du jeun/rupture_collectif_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/rupture collective du jeun/rupture_collectif_2.jpg', alt: '' },
                ],
              },
              {
                titre: " MARS 2024 - INITIATION A LA BOXE",
                description: 
                `
                  <p>Les jobs et directs ont résonné dans la salle de boxe du  
                  <strong>Collectif Boxe Massilia !</strong></p>
                  <p>Nous avons été accompagnés par 2 supers coachs qui nous
                  ont initiés à se connecter aux mouvements de notre corps, à
                  découvrir ce sport de combat ce qui a peut-être fait naître
                  des vocations !</p>`,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/initiation a la boxe/initiation_box_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/initiation a la boxe/initiation_box_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/initiation a la boxe/initiation_box_2.jpg', alt: '' },
                ],
              },
              {
                titre: "FÉVRIER 2024 - TOURNOI DE FOOT ANTI RACISTE",
                description: 
                `
                  <p>Guinée à Marseille a pris part à un tournoi de football engagé,
                  axé sur la lutte contre le racisme et la promotion de l'éducation.
                  Cet événement, qui allie sport et valeurs citoyennes, avait pour
                  objectif de sensibiliser les participants et le public à
                  l’importance de la tolérance, de l’inclusion et du respect des
                  différences. En participant à ce tournoi, l’association a affirmé
                  son engagement en faveur de la cohésion sociale, tout en offrant
                  un moment convivial et fédérateur à travers le sport.</p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "assets/event-passes/2024/tournoi de FOOT ANTI RACISTE/tournoi_antiraciste_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [  
                  { itemImageSrc: 'assets/event-passes/2024/tournoi de FOOT ANTI RACISTE/tournoi_antiraciste_1.jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/tournoi de FOOT ANTI RACISTE/tournoi_antiraciste_2.jpg', alt: '' },
                ],
              },
              {
                titre: "FÉVRIER 2024 - SPECTACLE DE THEATRE ET TABLE RONDE",
                description:
                `
                  <p>Guinée à Marseille était présent à Saint-Maximin la Sainte
                  Baume pour assister à Mal de Mer, une pièce bouleversante qui
                  aborde les thèmes de la migration et des politiques européennes.
                  Ce spectacle a été brillamment interprété par les comédiens de
                  la compagnie du Cèdre et une partie des bénéfices a été offert à
                  notre association. Notre président a également participé à une
                  table ronde sur les actions locales solidaires envers les migrants.</p>
                ` ,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "../../assets/event-passes/2024/SPECTACLE de theatre et table ronde/spectacle-theatre_table-rond_1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/SPECTACLE de theatre et table ronde/spectacle-theatre_table-rond_1.jpg', alt: '' },
                ],
              },
              {
                titre: "JANVIER 2024 - LES MATCHS DE LA CAN",
                description: 
                `
                  <p>Notre association a invité les amateurs de football à venir
                  regarder les matchs de l’équipe nationale Guinéenne de foot
                  lors de la Coupe d’Afrique des Nations 2024. Dans une
                  ambiance conviviale, nous avons suivi les rencontres en direct
                  sur grand écran dans des cafés du centre-ville.</p>
                `,                
                photo_couverture: {
                  id: "",
                  titre: "",
                  photoSrc: "../../assets/event-passes/2024/les matchs de la can/image1_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/les matchs de la can/affiche_foot (1).jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/les matchs de la can/affiche_foot (2).jpg', alt: '' },
                  { itemImageSrc: 'assets/event-passes/2024/les matchs de la can/affiche_foot (3).jpg', alt: '' },
                ],
              },
              {
                titre: `JANVIER 2024 - ASSEMBLEE GENERALE`,
                description: 
                `
                  <p>Le vendredi 26 janvier 2024 a eu lieu l'assemblée générale
                  annuelle de notre association, qui a permis à l'ancien bureau
                  de présenter le rapport moral et financier de l'année 2023 et
                  d’élire les nouveaux membres du bureau.</p> 
                  <p>Bienvenue à Guillaume, Aboubacar et Michelle dans le
                  bureau !</p>
                `,                
                photo_couverture: {
                  id: "20241",
                  titre: "",
                  photoSrc: "../../assets/event-passes/2024/AG-2024/ag_2024_4-3_378x284.jpg",
                },
                voir_plus_photos: [
                  { itemImageSrc: 'assets/event-passes/2024/AG-2024/ag_2024.jpg', alt: 'AG 2024' },
                ],
              },
            ],
          },
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
                  photoSrc: '../../assets/event-passes/2023_fete_independance_octobre.webp',
                },
                voir_plus_photos: [
                  { itemImageSrc: '../../assets/event-passes/2023_fete_independance_octobre.webp', alt: 'Fete independance octobre 2023' },

                ],
              },
              {
                titre:
                  'JUILLET 2023 visite au Muséum et pique-nique au Parc Longchamp',
                description:
                  "Retour en images des activités du 23 juillet.Pour l'occasion, nous avons eu à faire une visite au Muséum d'histoire  naturelle de Marseille (à la découverte d'animaux et plantes), suivie d'un pique-nique au Parc Longchamp.",
                photo_couverture: {
                  id: '20232',
                  photoSrc: '../../assets/event-passes/2023_visite_museum_pique_nique_parclongchamp.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'JUILLET 2023 Repas prix-libre',
                description:
                  "Nous tenons à remercier très chaleureusement les plus de soixante personnes qui ont participé à notre repas partagé le vendredi 7 juillet au restaurant Grenade et Pistache. Votre présence était très appréciée. Nous espérons vous revoir nombreux lors de notre prochaine activité Une partie des recettes sera reversée à l'association GUINEE A MARSEILLE",
                photo_couverture: {
                  id: '20233',
                  photoSrc: '../../assets/event-passes/2023_repas_prix_libre.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'JUIN 2023 Tournoi inter-associations',
                description:
                  'Nous remercions chaleureusement notre sponsor EcoClim, la Mairie 2&3 - Marseille pour la mise à disposition du terrain ainsi que tous les participants et les associations partenaires qui ont fait de cet événement un grand succès',
                photo_couverture: {
                  id: '20234',
                  photoSrc: '../../assets/event-passes/2023_tournoi_inter_associations.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'MAI 2023 Repas prix libre',
                description:
                  "Une centaine de personnes sont venus partager notre repas prix libre.Merci beaucoup aux bénévoles et aux participants qui ont œuvré à la réussite de cette soirée ! Une partie des recettes sera reversée à l'association GUINEE A MARSEILLE",
                photo_couverture: {
                  id: '20235',
                  photoSrc: '../../assets/event-passes/2023_mai_repas_prix_libre.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'MAI 2023 Repas solidaire',
                description:
                  'Ce repas à prix libre a était organisé et préparé par les bénévoles et les "minots" non accompagnés des deux associations ! Une partie des recettes sera reversée à l\'association GUINEE A MARSEILLE et l\'autre partie à Coco Velten afin de financer les approvisionnements des prochains repas mercredi.',
                photo_couverture: {
                  id: '20236',
                  photoSrc: '../../assets/event-passes/2023_repas_solidaire.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'AVRIL 2023 Table ronde sur la migration',
                description:
                  "L' Association Guinée A Marseille a participé à une table ronde aux côtés de La Cimade et SOS MEDITERRANEE France sur le Campus Saint Charles de Aix-Marseille Université à l'occasion d'une Journée sur la migration.Notre président Moussa a pris la parole pour échanger sur la thématique \"Migrations : la France, une terre d'accueil ?\"",
                photo_couverture: {
                  id: '20237',
                  photoSrc: '../../assets/event-passes/2023_table_ronde_migration.webp',
                },
                voir_plus_photos: [],
              },
              {
                titre: 'FEVRIER 2023 Cinéma "AVATAR 1"',
                description:
                  'Guinée à Marseille revient avec une projection de film… et pas n’importe lequel !  Il s’agit de personnages bleus, d’aventures, de paysages fantastiques et de combats. Alors, vous avez deviné ?! C’est bien Avatar 1 que nous avons tous et toutes regardé ensembles !',
                photo_couverture: {
                  id: '20238',
                  photoSrc: '../../assets/event-passes/2023_cinema_AVATAR_1.webp',
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
                  photoSrc: '../../assets/event-passes/2022_projection_black_panther.webp',
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
                  photoSrc: '../../assets/event-passes/2022_tournoi_foot.webp',
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
                  photoSrc: '../../assets/event-passes/2022_pique_nique.webp',
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
                  photoSrc: '../../assets/event-passes/2022_fete_independance_guinee.webp',
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
                  photoSrc: '../../assets/event-passes/2021_fete_independance_guinee.webp',
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