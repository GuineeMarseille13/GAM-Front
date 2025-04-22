import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'administratif',
  standalone: true,
  imports: [],
  templateUrl: './administratif.component.html',
  styleUrl: './administratif.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministratifComponent {
  protected PAGE_TITLE = 'ACCOMPAGNEMENT ADMINISTRATIF';
}
