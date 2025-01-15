import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AssoInfoService } from '../../services/asso-info.service';

@Component({
  selector: 'reseaux-sociaux',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reseaux-sociaux.component.html',
  styleUrl: './reseaux-sociaux.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReseauxSociauxComponent implements OnInit{
  protected assoInfos: any;

  constructor(private assoInfosService: AssoInfoService) {}
  
  ngOnInit(): void {
    this.assoInfosService.getAssoInfos().subscribe(ai => this.assoInfos = ai);
  }


}
