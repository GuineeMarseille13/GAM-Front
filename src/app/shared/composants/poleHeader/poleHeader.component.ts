import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'pole-header',
  standalone: true,
  imports: [],
  template: `<h1 class="d-none d-lg-block text-center p-5 pole-title mb-0">
      {{ title }}
    </h1>
    <h2 class="d-none d-md-block d-lg-none text-center p-5 pole-title mb-0">
      {{ title }}
    </h2>
    <h3 class="d-sm-block d-md-none text-center p-5 pole-title mb-0">
      {{ title }}
    </h3>`,
  styleUrl: './poleHeader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PoleHeaderComponent {
  @Input({ required: true }) title: string = '';
}
