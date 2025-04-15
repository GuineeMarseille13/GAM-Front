import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'evenementiel',
  standalone: true,
  imports: [],
  templateUrl: './evenementiel.component.html',
  styleUrl: './evenementiel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvenementielComponent {}
