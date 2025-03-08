import { Component, OnInit } from '@angular/core';
import { VagasService } from '../../service/vagas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graduado-list',
  imports: [CommonModule],
  templateUrl: './graduado-list.component.html',
  styleUrl: './graduado-list.component.css'
})
export class GraduadoListComponent {
  listaVagas: any[] = [];
  linkHome = "/"; //caminho padrao inicial

  constructor(private vagasTiService: VagasService) { }

  ngOnInit(): void {
    this.listaVagas = VagasService.getVagasGraduados();
  }
}
