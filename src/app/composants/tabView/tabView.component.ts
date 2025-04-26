import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { TabItems } from 'src/app/types/enums/TabItems.enum';
import { ProfilMembreBureauComponent } from '../profil-membre-bureau/profil-membre-bureau.component';
import { RapportActiviteService } from 'src/app/services/rapport-activite.service';
import { InfoRapportActivite } from 'src/app/types/interfaces/info-rapport-activite';
import { RapportActiviteComponent } from '../rapport-activite/rapport-activite.component';
import { MembreBureauInfo } from 'src/app/types/interfaces/membre-bureau-info';
import { MembreBureauInfoService } from 'src/app/services/membre-bureau-info.service';
import { MotDuPresidentComponent } from './mot-du-president/mot-du-president.component';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'tabView',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ProfilMembreBureauComponent,
    RapportActiviteComponent,
    MotDuPresidentComponent,
  ],
  templateUrl: './tabView.component.html',
  styleUrl: './tabView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabViewComponent implements OnInit {
  protected tabItems = TabItems;
  protected rapportsActivites: InfoRapportActivite[] = [];
  protected membreBureauInfos: MembreBureauInfo[] = [];

  protected isPresidentActive = true;
  protected isQuiSommesNousActive = false;
  protected isRapportActiviteActive = false;
  protected isNotreEquipeActive = false;

  protected faFile = faFile;

  constructor(
    private rapportActiviteService: RapportActiviteService,
    private membreBureauInfoService: MembreBureauInfoService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Là on écoute le paramètre tabItem de l'URL
    this.router.params.subscribe((params) => {
      const tabItemParam = params['tabItem'] as TabItems;

      // Si un paramètre tabItem est présent, on active l'onglet correspondant
      if (tabItemParam && Object.values(this.tabItems).includes(tabItemParam)) {
        this.getActiveTabItem(tabItemParam);
      } else {
        // Sinon, on active l'onglet par défaut (Président)
        this.getActiveTabItem(this.tabItems.President);
      }
    });

    this.rapportActiviteService
      .getRapportsActivites()
      .subscribe((ra) => (this.rapportsActivites = ra));
    this.membreBureauInfoService
      .getMembreBureauInfos()
      .subscribe((mbi) => (this.membreBureauInfos = mbi));
  }

  private desableAllTabItems(): void {
    this.isPresidentActive = false;
    this.isQuiSommesNousActive = false;
    this.isRapportActiviteActive = false;
    this.isNotreEquipeActive = false;
  }

  protected getActiveTabItem(tabItem: TabItems): void {
    this.desableAllTabItems();
    switch (tabItem) {
      case this.tabItems.President:
        this.isPresidentActive = true;
        break;
      case this.tabItems.QuiSommesNous:
        this.isQuiSommesNousActive = true;
        break;
      case this.tabItems.RapportActivite:
        this.isRapportActiviteActive = true;
        break;
      default:
        this.isNotreEquipeActive = true;
    }
  }
}
