import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { TabItems } from 'src/app/types/enums/TabItems.enum';
import { ProfilMembreBureauComponent } from "../profil-membre-bureau/profil-membre-bureau.component";

@Component({
  selector: 'tabView',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ProfilMembreBureauComponent],
  templateUrl: './tabView.component.html',
  styleUrl: './tabView.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabViewComponent {
  protected tabItems = TabItems;

  protected isPresidentActive = true;
  protected isQuiSommesNousActive = false;
  protected isRapportActiviteActive = false;
  protected isNotreEquipeActive = false;

  protected faFile = faFile;

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
