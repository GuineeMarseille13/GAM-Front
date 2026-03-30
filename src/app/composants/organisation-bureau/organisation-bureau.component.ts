import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MembreBureauInfo } from 'src/app/types/interfaces/membre-bureau-info';

interface PoleOrganisation {
  titre: string;
  lignes: PoleLigne[];
}

interface PoleLigne {
  texte: string;
  sousLignes?: string[];
}

interface TacheBureau {
  contenu: string;
  variant: 'left' | 'center' | 'right' | 'full';
}

@Component({
  selector: 'organisation-bureau',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './organisation-bureau.component.html',
  styleUrl: './organisation-bureau.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationBureauComponent {
  @Input({ required: true }) membresBureau: MembreBureauInfo[] = [];

  protected readonly tachesBureau: TacheBureau[] = [
    { contenu: 'Repondre aux mails et au telephone de GAM', variant: 'full' },
    { contenu: 'Compte rendus des reunions', variant: 'left' },
    {
      contenu: 'Rencontres de partenaires associatifs et institutionnels',
      variant: 'center',
    },
    {
      contenu:
        'Comptabilite courante :\n• Suivis des recettes et depenses\n• Attestations fiscales\n• Remboursements de frais',
      variant: 'right',
    },
  ];

  protected readonly poles: PoleOrganisation[] = [
    {
      titre: 'Evenements culturels & sportifs',
      lignes: [
        {
          texte: 'Evenements tout au long de l\'année',
          sousLignes: ['Referent : -' , 'Supervision : Aicha, Michelle, Julie'],
        },
        {
          texte: 'Fête de la Guinee',
          sousLignes: ['Referent : -' , 'Supervision : Moussa, Michelle'],
        },
        {
          texte: 'Stands',
          sousLignes: ['Referent : -' , 'Supervision : Julie'],
        },
      ],
    },
    {
      titre: 'Accompagnement des étudiants',
      lignes: [
        { texte: 'Referent : -' },
        { texte: 'Supervision : Alpha, Aminata, Aboubacar S.' },
      ],
    },
    {
      titre: 'Accompagnement administratif',
      lignes: [
        { texte: 'Referent : Hady BARRY' },
        { texte: 'Supervision : Aboubacar S.' },
      ],
    },
    {
      titre: 'Mise en relation',
      lignes: [
        {
          texte: 'Hébergement solidaire',
          sousLignes: ['Referent : -', 'Supervision : Aminata, Moussa'],
        },
        {
          texte: 'Accompagnement santé, scolarisation',
          sousLignes: ['Referent : -', 'Supervision : Julie, Michelle'],
        }
      ],
    },
    {
      titre: 'Communication',
      lignes: [
        {
          texte: 'Site internet',
          sousLignes: ['Referent : -', 'Supervision : Alpha, Aminata'],
        },
        { 
          texte: 'Reseaux sociaux et creation visuelle',
          sousLignes: ['Referent : -', 'Supervision : -'],
        }
      ],
    },
  ];

  protected get membresOrdonnes(): MembreBureauInfo[] {
    const ordreNoms = [
      'KOUROUMA',
      'DAO',
      'DIALLO',
      'CAMARA',
      'DIALLO',
      'DELABY',
      'FOFANA',
    ];
    const ordrePrenoms = [
      'Aicha',
      'Michelle',
      'Mamadou Alpha',
      'Moussa',
      'Aboubacar',
      'Julie',
      'Aminata',
    ];

    const membres = [...this.membresBureau];
    membres.sort((a, b) => {
      const indexA = ordreNoms.findIndex(
        (nom, i) => nom === a.nom && ordrePrenoms[i] === a.prenon
      );
      const indexB = ordreNoms.findIndex(
        (nom, i) => nom === b.nom && ordrePrenoms[i] === b.prenon
      );
      const safeA = indexA === -1 ? Number.MAX_SAFE_INTEGER : indexA;
      const safeB = indexB === -1 ? Number.MAX_SAFE_INTEGER : indexB;
      return safeA - safeB;
    });

    return membres;
  }
}
