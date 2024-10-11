import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { TabItems } from 'src/app/types/enums/TabItems.enum';
import { ProfilMembreBureauComponent } from "../profil-membre-bureau/profil-membre-bureau.component";
import { RapportActiviteService } from 'src/app/services/rapport-activite.service';
import { InfoRapportActivite } from 'src/app/types/interfaces/info-rapport-activite';
import { RapportActiviteComponent } from "../rapport-activite/rapport-activite.component";
import { MembreBureauInfo } from 'src/app/types/interfaces/membre-bureau-info';
import { MembreBureauInfoService } from 'src/app/services/membre-bureau-info.service';

@Component({
  selector: 'tabView',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ProfilMembreBureauComponent, RapportActiviteComponent],
  templateUrl: './tabView.component.html',
  styleUrl: './tabView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabViewComponent implements OnInit{
  protected tabItems = TabItems;
  protected rapportsActivites: InfoRapportActivite[] = [];
  protected membreBureauInfos: MembreBureauInfo[] = [];

  protected isPresidentActive = true;
  protected isQuiSommesNousActive = false;
  protected isRapportActiviteActive = false;
  protected isNotreEquipeActive = false;

  protected faFile = faFile;

  constructor(private rapportActiviteService: RapportActiviteService, private membreBureauInfoService: MembreBureauInfoService) {}

  ngOnInit(): void {
    this.rapportActiviteService.getRapportsActivites().subscribe(ra => this.rapportsActivites = ra);
    this.membreBureauInfoService.getMembreBureauInfos().subscribe(mbi => this.membreBureauInfos = mbi);
  }

  private desableAllTabItems(): void {
    this.isPresidentActive = false;
    this.isQuiSommesNousActive = false;
    this.isRapportActiviteActive = false;
    this.isNotreEquipeActive = false;
  }

  protected activeTabItem(tabItem: TabItems): void {
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
